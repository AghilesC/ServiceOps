<?php
/**
 * Script PHP pour envoyer les emails du formulaire de contact
 * Utilise PHPMailer avec SMTP pour une meilleure fiabilité
 */

// Headers CORS pour permettre les requêtes depuis le frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Répondre aux requêtes OPTIONS (preflight)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}

// ============================================
// CONFIGURATION SMTP - MODIFIEZ ICI
// ============================================

// Configuration SMTP
$smtp_host = "smtp.gmail.com"; // Exemples: smtp.gmail.com, smtp.outlook.com, smtp.yourdomain.com
$smtp_port = 587; // 587 pour TLS, 465 pour SSL
$smtp_secure = "tls"; // "tls" ou "ssl"
$smtp_auth = true; // true pour activer l'authentification

// Identifiants SMTP
$smtp_username = "aghilesaction@gmail.com"; // Votre adresse email
$smtp_password = "ohbp lhml mrwa bcqu"; // Votre mot de passe ou mot de passe d'application

// Email de réception (où recevoir les emails du formulaire)
$to_email = "chaouche.aghiles@gmail.com"; // Votre adresse email de réception

// Email expéditeur (apparaîtra comme expéditeur)
$from_email = "aghilesaction@gmail.com"; // Généralement le même que smtp_username
$from_name = "Workora Contact Form"; // Nom affiché

// ============================================
// FIN DE LA CONFIGURATION
// ============================================

// Fonction pour nettoyer les données
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Vérifier que la requête est en POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false, 
        "message" => "Method not allowed. Only POST requests are accepted.",
        "method" => $_SERVER["REQUEST_METHOD"]
    ]);
    exit;
}

// Récupérer et nettoyer les données
$name = isset($_POST['name']) ? clean_input($_POST['name']) : '';
$company = isset($_POST['company']) ? clean_input($_POST['company']) : '';
$email = isset($_POST['email']) ? clean_input($_POST['email']) : '';
$phone = isset($_POST['phone']) ? clean_input($_POST['phone']) : '';
$sector = isset($_POST['sector']) ? clean_input($_POST['sector']) : '';
$message = isset($_POST['message']) ? clean_input($_POST['message']) : '';
$requestDemo = isset($_POST['requestDemo']) && $_POST['requestDemo'] === 'true' ? 'Oui' : 'Non';

// Validation basique
if (empty($name) || empty($company) || empty($email) || empty($phone) || empty($sector)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Tous les champs requis doivent être remplis"]);
    exit;
}

// Validation de l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Adresse email invalide"]);
    exit;
}

// Charger PHPMailer (version standalone)
require_once __DIR__ . '/PHPMailer-master/src/Exception.php';
require_once __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer-master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = $smtp_auth;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = $smtp_secure; // tls ou ssl
    $mail->Port = $smtp_port;
    
    // Options supplémentaires pour certains serveurs
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    
    // Expéditeur
    $mail->setFrom($from_email, $from_name);
    $mail->addReplyTo($email, $name); // L'email du formulaire en reply-to
    
    // Destinataire
    $mail->addAddress($to_email);
    
    // Contenu de l'email
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "Nouveau contact Workora - " . $name . " (" . $company . ")";
    
    // Corps de l'email en HTML
    $email_body = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { background: #f9fafb; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2563eb; }
            .value { margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 15px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Nouveau Contact Workora</h1>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Nom complet:</div>
                    <div class='value'>{$name}</div>
                </div>
                <div class='field'>
                    <div class='label'>Entreprise:</div>
                    <div class='value'>{$company}</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
                </div>
                <div class='field'>
                    <div class='label'>Téléphone:</div>
                    <div class='value'><a href='tel:{$phone}'>{$phone}</a></div>
                </div>
                <div class='field'>
                    <div class='label'>Secteur:</div>
                    <div class='value'>{$sector}</div>
                </div>
                <div class='field'>
                    <div class='label'>Demande de démonstration:</div>
                    <div class='value'>{$requestDemo}</div>
                </div>
                " . (!empty($message) ? "
                <div class='message-box'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
                " : "") . "
            </div>
            <div class='footer'>
                <p>Cet email a été envoyé depuis le formulaire de contact Workora</p>
                <p>Date: " . date('d/m/Y à H:i:s') . "</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $mail->Body = $email_body;
    
    // Version texte simple (pour les clients email qui ne supportent pas HTML)
    $mail->AltBody = "
Nouveau Contact Workora

Nom complet: {$name}
Entreprise: {$company}
Email: {$email}
Téléphone: {$phone}
Secteur: {$sector}
Demande de démonstration: {$requestDemo}
" . (!empty($message) ? "\nMessage:\n{$message}" : "") . "

Date: " . date('d/m/Y à H:i:s') . "
    ";
    
    // Envoyer l'email
    $mail->send();
    
    // Succès
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Email envoyé avec succès"
    ]);
    
} catch (Exception $e) {
    // Erreur
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Erreur lors de l'envoi de l'email: " . $mail->ErrorInfo,
        "error_details" => $mail->ErrorInfo
    ]);
}
?>
