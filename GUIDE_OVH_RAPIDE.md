# ⚡ Déploiement OVH - Guide Rapide

## 🚀 En 3 Étapes

### 1️⃣ Construire le projet pour OVH

Double-cliquez sur **`build-for-ovh.bat`**

Ce script va :
- ✅ Construire le projet avec base path `/` (racine du domaine)
- ✅ Créer un dossier `deploy-ovh` avec tous les fichiers

### 2️⃣ Uploader sur OVH

**Via FileZilla ou FTP :**

1. Connectez-vous à votre hébergement OVH
2. Allez dans le dossier `www` ou `public_html`
3. Uploadez **tout le contenu** du dossier `deploy-ovh`

### 3️⃣ Vérifier

1. Allez sur votre domaine : `https://votredomaine.com`
2. Testez le formulaire de contact
3. ✅ C'est fait !

---

## 📁 Fichiers à Uploader

Tout le contenu du dossier **`deploy-ovh`** :

- ✅ `index.html`
- ✅ `assets/` (CSS, JS)
- ✅ `send-email.php`
- ✅ `PHPMailer-master/`
- ✅ `.htaccess`
- ✅ Images (`workora_logo.png`, `pdp.png`, etc.)
- ✅ `robots.txt`, `sitemap.xml`

---

## ⚙️ Configuration Importante

### Modifier SMTP dans `send-email.php`

Après l'upload, modifiez les identifiants SMTP sur le serveur :

```php
$smtp_username = "votre-email@gmail.com";
$smtp_password = "votre-mot-de-passe-app";
$to_email = "email-de-reception@example.com";
```

---

## 🐛 Problèmes Courants

### Le site ne s'affiche pas
→ Vérifiez que les fichiers sont dans `www` ou `public_html`

### Le formulaire ne fonctionne pas
→ Vérifiez que PHP est activé sur votre hébergement OVH

### Erreur 404
→ Vérifiez que `.htaccess` est présent

---

📖 Pour plus de détails, voir `DEPLOIEMENT_OVH.md`

