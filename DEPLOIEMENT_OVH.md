# 🚀 Guide de Déploiement sur OVH

## 📋 Préparation

### Étape 1 : Construire le projet pour OVH

Double-cliquez sur **`build-for-ovh.bat`**

Ce script va :
- ✅ Construire le projet React avec le bon base path (`/`)
- ✅ Créer un dossier `deploy-ovh` avec tous les fichiers nécessaires
- ✅ Copier les fichiers PHP et PHPMailer

### Étape 2 : Vérifier le dossier de déploiement

Le dossier `deploy-ovh` doit contenir :
- ✅ `index.html`
- ✅ `assets/` (CSS, JS)
- ✅ `send-email.php`
- ✅ `PHPMailer-master/`
- ✅ Les images (`workora_logo.png`, `pdp.png`, etc.)
- ✅ `.htaccess`
- ✅ `robots.txt`, `sitemap.xml`

---

## 📤 Upload sur OVH

### Méthode 1 : Via FileZilla (Recommandé)

1. **Téléchargez FileZilla** : https://filezilla-project.org/
2. **Connectez-vous à votre hébergement OVH :**
   - **Hôte (FTP)** : `ftp.votredomaine.com` ou l'adresse fournie par OVH
   - **Nom d'utilisateur** : Votre identifiant FTP OVH
   - **Mot de passe** : Votre mot de passe FTP
   - **Port** : 21 (ou 22 pour SFTP)

3. **Naviguez vers le dossier de votre site :**
   - Généralement : `www` ou `public_html`
   - Ou le dossier spécifique à votre domaine

4. **Uploadez tout le contenu de `deploy-ovh` :**
   - Sélectionnez tous les fichiers dans `deploy-ovh`
   - Glissez-les dans le dossier distant
   - Attendez la fin du transfert

### Méthode 2 : Via le Gestionnaire de Fichiers OVH

1. Connectez-vous à votre **Espace Client OVH**
2. Allez dans **Hébergements** → **FTP - SSH**
3. Cliquez sur **Gestionnaire de fichiers**
4. Naviguez vers `www` ou `public_html`
5. **Uploadez** tous les fichiers du dossier `deploy-ovh`

### Méthode 3 : Via SSH (Avancé)

```bash
# Se connecter en SSH
ssh votre-utilisateur@ftp.votredomaine.com

# Aller dans le dossier www
cd www

# Uploader les fichiers (depuis votre ordinateur)
scp -r deploy-ovh/* votre-utilisateur@ftp.votredomaine.com:/www/
```

---

## ⚙️ Configuration OVH

### Vérifier que PHP est activé

1. Dans l'**Espace Client OVH**
2. Allez dans **Hébergements** → **Informations générales**
3. Vérifiez la **Version PHP** (PHP 7.4 ou supérieur recommandé)

### Configurer le .htaccess

Le fichier `.htaccess` sera automatiquement créé dans `deploy-ovh`. Il doit contenir :
- Activation de PHP
- Configuration du routage React
- Headers CORS

**Important :** Assurez-vous que `mod_rewrite` est activé sur votre hébergement OVH.

---

## 📧 Configuration SMTP

Après l'upload, modifiez le fichier `send-email.php` directement sur le serveur :

1. **Connectez-vous en FTP**
2. Ouvrez `send-email.php`
3. Modifiez les lignes 24-38 :
   ```php
   $smtp_host = "smtp.gmail.com";
   $smtp_port = 587;
   $smtp_username = "votre-email@gmail.com";
   $smtp_password = "votre-mot-de-passe-app";
   $to_email = "email-de-reception@example.com";
   ```

Ou modifiez-le localement puis re-uploadez-le.

---

## ✅ Vérification Post-Déploiement

### 1. Tester le site

Allez sur : `https://votredomaine.com`

Le site devrait s'afficher correctement.

### 2. Tester le formulaire

1. Allez sur : `https://votredomaine.com/contact`
2. Remplissez le formulaire
3. Envoyez-le
4. Vérifiez que l'email est bien reçu

### 3. Vérifier les fichiers

Vérifiez que ces fichiers sont bien présents :
- ✅ `send-email.php` existe
- ✅ `PHPMailer-master/` existe
- ✅ `.htaccess` existe

---

## 🔧 Dépannage

### ❌ Le site ne s'affiche pas

**Vérifications :**
1. Les fichiers sont bien dans `www` ou `public_html`
2. `index.html` est présent
3. Les permissions des fichiers sont correctes (644 pour fichiers, 755 pour dossiers)

### ❌ Le formulaire ne fonctionne pas

**Vérifications :**
1. PHP est activé sur l'hébergement
2. `send-email.php` existe sur le serveur
3. `PHPMailer-master/` est présent
4. La configuration SMTP est correcte

### ❌ Erreur 404 sur les routes React

**Solution :**
1. Vérifiez que `.htaccess` est présent
2. Vérifiez que `mod_rewrite` est activé (contactez OVH si besoin)

### ❌ Les images ne se chargent pas

**Vérifications :**
1. Les images sont bien uploadées (`workora_logo.png`, `pdp.png`)
2. Les permissions sont correctes (644)

---

## 📁 Structure des Fichiers sur OVH

```
www/ (ou public_html/)
├── index.html          ← Point d'entrée
├── assets/             ← CSS et JS compilés
│   ├── css/
│   └── js/
├── send-email.php      ← Script PHP
├── PHPMailer-master/   ← Bibliothèque email
├── .htaccess           ← Configuration Apache
├── workora_logo.png    ← Images
├── pdp.png
├── robots.txt
└── sitemap.xml
```

---

## 🔄 Mises à Jour Futures

Pour mettre à jour le site :

1. **Modifiez votre code**
2. **Lancez `build-for-ovh.bat`**
3. **Uploadez uniquement les fichiers modifiés** (ou tout le dossier `deploy-ovh`)

---

## 📝 Checklist de Déploiement

- [ ] Build créé avec `build-for-ovh.bat`
- [ ] Fichiers uploadés sur OVH
- [ ] PHP activé sur l'hébergement
- [ ] Configuration SMTP modifiée
- [ ] Site accessible sur le domaine
- [ ] Formulaire de contact fonctionne
- [ ] Images se chargent correctement

---

**Besoin d'aide ?** Contactez le support OVH si vous avez des problèmes techniques.

