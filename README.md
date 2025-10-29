# ServiceOps - Solution de Digitalisation pour Techniciens

## 📋 Description

ServiceOps est une plateforme web professionnelle développée par **Aghiles CHAOUCHE** (auto-entrepreneur) pour digitaliser et automatiser la gestion des interventions terrain. Cette solution remplace les bons de travail papier par un système numérique complet avec signatures électroniques et envoi automatique.

## 🎯 Fonctionnalités Principales

- ✅ **Bons de travail numériques** avec signature électronique
- 📧 **Envoi automatique** des rapports en temps réel
- 🗄️ **Base de données** des équipements centralisée
- 📅 **Calendrier intelligent** pour la planification
- 📊 **Historique complet** des interventions
- 🔒 **Sécurité renforcée** et conformité RGPD

## 🚀 Installation Rapide

### Prérequis

- Node.js 16.0.0 ou supérieur
- NPM 8.0.0 ou supérieur

### Option 1 : Avec Vite (Recommandé)

```bash
# Cloner ou télécharger les fichiers dans un dossier
cd serviceops

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:3000
```

### Option 2 : Build pour production

```bash
# Construire le projet pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

### Option 3 : Sans Tailwind CSS

Si vous préférez utiliser uniquement le CSS vanilla (déjà inclus dans `index.css`) :

1. Commentez ou supprimez l'import Tailwind dans `index.css`
2. Le CSS personnalisé est déjà complet et fonctionnel

## 📁 Structure du Projet

```
serviceops/
│
├── index.html          # Point d'entrée HTML avec SEO complet
├── main.jsx           # Bootstrap React
├── App.jsx            # Application principale avec toutes les pages
├── index.css          # Styles CSS complets (peut fonctionner sans Tailwind)
├── package.json       # Dépendances et scripts
├── vite.config.js     # Configuration Vite
├── tailwind.config.js # Configuration Tailwind (optionnel)
├── postcss.config.js  # Configuration PostCSS (optionnel)
└── README.md          # Documentation
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs sont définies en CSS variables dans `index.css` :

```css
:root {
  --primary: #2563eb;        /* Bleu principal */
  --primary-dark: #1d4ed8;   /* Bleu foncé */
  --secondary: #10b981;      /* Vert secondaire */
}
```

### Modifier les textes

Tous les textes sont directement dans `App.jsx`. Recherchez et modifiez selon vos besoins.

### Ajouter votre logo

Remplacez le texte "ServiceOps" dans le composant `Navigation` par votre logo :

```jsx
<img src="/votre-logo.png" alt="Logo" className="logo" />
```

### Configurer le formulaire de contact

Le formulaire utilise actuellement une fonction factice. Pour l'activer :

1. Remplacez la fonction `handleSubmit` dans `ContactPage`
2. Connectez à votre backend (API REST, EmailJS, Netlify Forms, etc.)

Exemple avec fetch vers votre API :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://votre-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    // Succès
  }
};
```

## 🔧 Configuration Avancée

### Variables d'environnement

Créez un fichier `.env` à la racine :

```env
VITE_API_URL=https://votre-api.com
VITE_CONTACT_EMAIL=contact@serviceops.fr
```

### SEO et Meta Tags

Modifiez les balises meta dans `index.html` :
- Titre et description
- Open Graph pour les réseaux sociaux
- Structured Data (JSON-LD)
- URL canonique

### PWA (Progressive Web App)

Pour activer le mode PWA :

1. Créez un fichier `manifest.json` dans le dossier public
2. Ajoutez un Service Worker (`sw.js`)
3. Décommentez le code PWA dans `main.jsx`

## 📦 Dépendances Utilisées

- **React 18** : Framework UI
- **React Router 6** : Navigation
- **Lucide React** : Icônes modernes
- **Vite** : Build tool ultra-rapide
- **Tailwind CSS** : Styles utilitaires (optionnel)

## 🔐 Sécurité et RGPD

Le site est conçu avec :
- ✅ Validation côté client des formulaires
- ✅ Protection CSRF ready (à implémenter côté serveur)
- ✅ Mentions RGPD claires
- ✅ Consentement explicite pour le contact
- ✅ HTTPS ready

## 🚢 Déploiement

### Netlify (Recommandé)

```bash
# Build
npm run build

# Glissez le dossier 'dist' sur Netlify
```

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Serveur classique

1. Build : `npm run build`
2. Uploadez le contenu du dossier `dist`
3. Configurez votre serveur pour servir `index.html` sur toutes les routes

## 📝 Mentions Légales

Ce site appartient à **Aghiles CHAOUCHE**, auto-entrepreneur.
Tous droits réservés.

## 🤝 Support

Pour toute question ou assistance :
- Email : contact@serviceops.fr
- Site : https://serviceops.fr

## ✅ Checklist de Lancement

- [ ] Personnaliser les couleurs et le logo
- [ ] Modifier les textes selon votre activité
- [ ] Configurer l'envoi du formulaire de contact
- [ ] Ajouter votre email réel dans le footer
- [ ] Créer et connecter une base de données
- [ ] Configurer l'hébergement et le domaine
- [ ] Installer un certificat SSL
- [ ] Tester sur mobile et tablette
- [ ] Vérifier le SEO avec Google Search Console
- [ ] Ajouter Google Analytics (optionnel)

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run preview  # Preview du build
npm run lint     # Vérification du code
```

## 📄 Licence

Propriété exclusive de Aghiles CHAOUCHE. Tous droits réservés.

---

**Développé avec ❤️ pour digitaliser les interventions terrain**