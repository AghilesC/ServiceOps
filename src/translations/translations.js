// translations.js — Toutes les traductions FR/EN
export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      whyNow: "Why Now?",
      pricing: "Pricing",
      contact: "Contact",
      skipToContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
      switchToFrench: "Switch to French",
      switchToEnglish: "Switch to English",
      sections: {
        features: "Features",
        benefits: "Benefits",
      },
    },

    // Hero Section
    hero: {
      title: "Say Goodbye to",
      titleHighlight: "Paperwork",
      description:
        "Transform paper work orders into digital reports with electronic signatures, sent automatically. Automated inventory management included. Complete solution for field technicians: HVAC, plumbing, electrical.",
      requestDemo: "Request Demo",
      talkToUs: "Talk to Us",
      stats: {
        privacy: "Privacy Compliant",
        available: "Available",
        tracked: "Tracked",
        productivity: "Productivity",
      },
      mockupAlt: "Mobile application mockup",
    },

    // Features Section
    features: {
      title: "Key Features",
      subtitle: "Everything you need to manage field operations",
      items: [
        {
          title: "Digital Work Orders",
          desc: "Create and sign work orders electronically. No more lost papers.",
        },
        {
          title: "Real-Time Delivery",
          desc: "Instant report delivery as soon as technician completes job.",
        },
        {
          title: "Equipment Database",
          desc: "Unified history tracking with photos and serial numbers.",
        },
        {
          title: "Smart Scheduling",
          desc: "Plan and sync your team's operations effortlessly.",
        },
        {
          title: "Analytics Dashboard",
          desc: "Real-time insights and performance tracking.",
        },
        {
          title: "Enterprise Security",
          desc: "End-to-end encryption and compliance guaranteed.",
        },
      ],
    },

    // Process Section
    process: {
      title: "How It Works",
      subtitle: "Simple 4-step process",
      steps: [
        {
          title: "Fill Out",
          desc: "Complete digital work order on mobile device",
        },
        {
          title: "Sign",
          desc: "Electronic signature from client",
        },
        {
          title: "Send",
          desc: "Automatic report delivery",
        },
        {
          title: "Invoice",
          desc: "Automated billing and tracking",
        },
      ],
    },

    // Benefits Section
    benefits: {
      title: "Business Benefits",
      subtitle: "Transform your operations",
      items: [
        { label: "Productivity" },
        { label: "Accuracy" },
        { label: "Tracked" },
        { label: "Available" },
      ],
    },

    // ROI Calculator Section
    roiCalculator: {
      title: "Calculate Your ROI (Return on Investment)",
      subtitle: "Discover how much time and money Workora can save your business",
      fields: {
        technicians: "Number of technicians",
        monthlyErrorCostPerTech: "Average monthly error costs per technician ($)",
        workOrdersPerMonth: "Number of work orders per month",
        timeWorkOrderCreation: "Time to create work order (minutes)",
        timeWorkOrderDelivery: "Time to deliver/transmit work order (minutes)",
        timeInventoryManagement: "Time for inventory management per work order (minutes)",
        timeBillingAccounting: "Time for billing/accounting per work order (minutes)",
        hourlyRate: "Average hourly rate ($)",
        hourlyRateHint: "Used to calculate value of time saved",
        selectedPlan: "Select a plan",
      },
      timeSection: {
        title: "Manual Time Per Work Order",
        subtitle: "Enter the time you currently spend on each task",
        manualTime: "Current manual process",
        automatedTime: "With Workora",
        timeSaved: "Time saved",
        perWorkOrder: "per work order",
      },
      plans: {
        essentials: "Essentials",
        pro: "Pro",
        enterprise: "Enterprise",
      },
      results: {
        monthlySavings: "Monthly Savings",
        annualSavings: "Annual Savings",
        annualPlanCost: "Annual Plan Cost",
        netSavings: "Net Annual Savings",
        errorsAvoided: "Errors avoided",
        timeSaved: "Time saved",
        explanation: "These savings are calculated based on the errors you avoid and the time you save by automating your work orders. The ROI shows your return on investment after deducting the plan cost.",
        recommendationTitle: "Recommended Plan",
        notRecommendedTitle: "Important Notice",
        notRecommendedMessage: "Based on your current data, we cannot recommend a Workora plan at this time. The projected savings do not justify the investment. We recommend reviewing your inputs or contacting us to discuss your specific needs.",
        recommendationReason: {
          essentials: "With {technicians} technician(s), the Essentials plan is perfect for your team size.",
          pro: "With {technicians} technician(s), the Pro plan offers the best value for your team.",
          enterprise: "With {technicians} technician(s), the Enterprise plan provides advanced features and unlimited scalability for your growing business.",
        },
      },
      calculateButton: "Calculate My ROI",
      cta: "See Pricing Plans",
    },

    // Why Now Section
    whyNow: {
      title: "Why Now?",
      subtitle: "The problems you face every day",
      problems: {
        title: "Current Challenges",
        items: [
          "Paper work orders that get lost", // 1. MAXIMUM PRIORITY - Foundation of everything
          "Impossible to know where each technician is", // 2. Critical operational management
          "Clients calling to ask 'when will they arrive?'", // 3. Urgent customer service
          "Truck or storage inventory impossible to track", // 4. Important operations
          "Manual data entry causing errors", // 5. Quality and accuracy
          "Technicians constantly asking how to do procedures", // 6. Training and processes
          "No visibility on team performance", // 7. Management and analytics
          "Delayed invoicing and payment tracking", // 8. Financial
          "Limited mobility and accessibility of management tools", // 9. Accessibility
          "Complete solution expensive from other services", // 10. Pricing
          "Lack of equipment history and documentation", // 11. Traceability
          "Difficulty managing emergencies and priorities", // 12. Priority management
        ],
      },
      solutions: {
        title: "With Workora",
        items: [
          "Digital work orders saved in database", // 1
          "Real-time scheduling with better technician tracking", // 2
          "Integration with ticketing system to update ETAs and updates automatically in tickets", // 3
          "Real-time inventory updated with daily reports", // 4
          "Work orders with automatic calculation to eliminate any possibility of error", // 5
          "Procedures integrated directly in the site, instantly accessible by technicians", // 6
          "Real-time dashboards and analytics", // 7
          "Automated invoicing and payment tracking", // 8
          "Mobile-first solution accessible from anywhere", // 9
          "Workora offers pricing solutions tailored to your team size", // 10
          "Complete equipment history with photos and centralized documentation on the web app", // 11
          "Smart priority management integrated into planning", // 12
        ],
      },
    },

    // CTA Section
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Join companies revolutionizing their field operations",
      button: "Schedule Free Demo",
    },

    // About Page
    about: {
      title: "About Workora",
      subtitle: "Building the future of field operations",
      creator: "Software Engineer & Entrepreneur",
      intro: "I'm Aghiles CHAOUCHE, software engineer and entrepreneur.",
      paragraph1: "Over the years, I've digitized the operations of service companies with millions of dollars in revenue here in Canada.",
      paragraph2: "By working directly with field teams, I realized how much time is lost with paperwork, missing data, and back-and-forth between the office and job sites.",
      builtFrom: "Workora was built from real-world needs:",
      needs: [
        "More jobs per day",
        "Less admin chaos",
        "Better customer experience"
      ],
      conclusion: "Today, I help HVAC, plumbing and technical service companies across Canada take control of their operations and boost their revenue with technology.",
      vision: {
        title: "Our Vision",
        content:
          "Fully digitize field operations so technicians can focus on serving clients with excellence.",
      },
      mission: {
        title: "Our Mission",
        content:
          "Provide technical service companies with a simple, reliable, secure platform for real-time field operations management.",
      },
      values: [
        {
          title: "Reliability",
          desc: "24/7 system you can trust",
        },
        {
          title: "Simplicity",
          desc: "Intuitive for everyone",
        },
        {
          title: "Security",
          desc: "Data protection first",
        },
        {
          title: "Real-Time",
          desc: "Instant updates",
        },
      ],
    },

    // Contact Page
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your project",
      info: {
        title: "Contact Information",
        description: "Reach out for a personalized demo of Workora.",
        email: "Email",
        phone: "Phone",
        location: "Location",
        locationValue: "Canada - Nationwide",
      },
      form: {
        name: "Full Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        sector: "Industry",
        message: "Message",
        requestDemo: "I want a free demonstration",
        acceptContact: "I accept to be contacted",
        sendButton: "Send Message",
        resetButton: "Reset",
        sending: "Sending...",
        success: "Thank you! We'll contact you within 24 hours.",
        error: "Please fix the errors above.",
        sendError: "An error occurred while sending. Please try again or contact us directly.",
        acceptError: "Please accept to be contacted.",
        yes: "Yes",
        no: "No",
        noMessage: "No message",
        namePlaceholder: "John Doe",
        companyPlaceholder: "Your Company",
        emailPlaceholder: "john@company.ca",
        phonePlaceholder: "(514) 123-4567",
        messagePlaceholder: "Tell us about your needs...",
        selectIndustry: "Select Industry",
        industries: {
          hvac: "HVAC",
          plumbing: "Plumbing",
          electrical: "Electrical",
          multi: "Multi-technical",
          other: "Other",
        },
        validation: {
          emailInvalid: "Invalid email format",
          phoneInvalid: "Invalid phone format",
          tooShort: "Must be at least 2 characters",
        },
      },
    },

    // 404 Page
    notFound: {
      title: "404",
      subtitle: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      button: "Back to Home",
    },

    // Error Boundary
    error: {
      title: "Oops! Something went wrong",
      description: "We apologize for the inconvenience. Please refresh the page.",
      button: "Refresh Page",
    },

    // Footer
    footer: {
      description: "Digital solution for field technicians across Canada.",
      copyright: "Canada",
      navigation: "Navigation",
      contactTitle: "Contact",
      compliance: "Compliance",
      badges: {
        privacy: "Privacy",
        ssl: "SSL",
      },
      rights: "All rights reserved - Workora",
      email: "Email",
      phone: "Phone",
      hosting: "Hosting: Canada",
    },

    // Required fields
    required: "*",

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Workora",
      items: [
        {
          question: "How does Workora work?",
          answer: "Workora digitizes your field work orders. Technicians fill out digital forms on mobile devices, clients sign electronically, and reports are sent automatically. No more paperwork!",
        },
        {
          question: "What industries does Workora support?",
          answer: "Workora is designed for HVAC, plumbing, electrical, and multi-technical services. Our solution adapts to your specific industry needs.",
        },
        {
          question: "How quickly can I get started?",
          answer: "You can start in minutes! We offer a free demonstration to show you how it works. Contact us to schedule your demo today.",
        },
        {
          question: "Do I need special equipment?",
          answer: "No! Workora works on any smartphone or tablet. No additional hardware required. Your technicians can start using it immediately.",
        },
        {
          question: "Is my data secure?",
          answer: "Yes! We use end-to-end encryption and comply with privacy regulations. Your data is stored securely in Canada and never shared with third parties.",
        },
        {
          question: "Does Workora offer inventory management services?",
          answer: "Yes! Workora offers complete real-time inventory management. You can track your stock in trucks or warehouses, receive automatic alerts when levels are low, and generate daily reports. Inventory is automatically updated with each intervention, eliminating manual tracking errors.",
        },
        {
          question: "Can Workora integrate with my existing systems?",
          answer: "Yes! Workora offers integration capabilities with ticketing systems, ERPs, accounting software, and other business tools through our open API. Integration possibilities are available, especially for Enterprise plans. Contact us to discuss your specific integration needs.",
        },
        {
          question: "Where will the site be hosted?",
          answer: "We take care of all hosting! You don't need to pay for a domain name or server. We provide everything turnkey: hosting, domain, security, and maintenance. You just use the platform, we handle all the technical aspects.",
        },
      ],
    },
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      whyNow: "Pourquoi maintenant ?",
      pricing: "Tarifs",
      contact: "Contact",
      skipToContent: "Aller au contenu principal",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      switchToDark: "Passer en mode sombre",
      switchToLight: "Passer en mode clair",
      switchToFrench: "Passer en français",
      switchToEnglish: "Passer en anglais",
      sections: {
        features: "Fonctionnalités",
        benefits: "Avantages",
      },
    },

    // Hero Section
    hero: {
      title: "Dites Adieu à la",
      titleHighlight: "Paperasse",
      description:
        "Transformez vos bons de travail papier en rapports numériques avec signatures électroniques, envoyés automatiquement. Gestion d'inventaire automatisée incluse. Solution complète pour techniciens terrain : CVC, plomberie, électricité.",
      requestDemo: "Demander une Démo",
      talkToUs: "Nous Contacter",
      stats: {
        privacy: "Conforme RGPD",
        available: "Disponible",
        tracked: "Suivi",
        productivity: "Productivité",
      },
      mockupAlt: "Maquette de l'application mobile",
    },

    // Features Section
    features: {
      title: "Fonctionnalités Clés",
      subtitle: "Tout ce dont vous avez besoin pour gérer vos opérations terrain",
      items: [
        {
          title: "Bons de Travail Numériques",
          desc: "Créez et signez les bons électroniquement. Fini les papiers perdus.",
        },
        {
          title: "Livraison en Temps Réel",
          desc: "Envoi instantané du rapport dès que le technicien termine.",
        },
        {
          title: "Base de Données Équipements",
          desc: "Historique unifié avec photos et numéros de série.",
        },
        {
          title: "Planification Intelligente",
          desc: "Planifiez et synchronisez les opérations de votre équipe.",
        },
        {
          title: "Tableau de Bord Analytique",
          desc: "Insights en temps réel et suivi des performances.",
        },
        {
          title: "Sécurité Entreprise",
          desc: "Chiffrement bout en bout et conformité garantie.",
        },
      ],
    },

    // Process Section
    process: {
      title: "Comment Ça Marche",
      subtitle: "Processus simple en 4 étapes",
      steps: [
        {
          title: "Remplir",
          desc: "Complétez le bon de travail numérique sur mobile",
        },
        {
          title: "Signer",
          desc: "Signature électronique du client",
        },
        {
          title: "Envoyer",
          desc: "Livraison automatique du rapport",
        },
        {
          title: "Facturer",
          desc: "Facturation et suivi automatisés",
        },
      ],
    },

    // Benefits Section
    benefits: {
      title: "Avantages Business",
      subtitle: "Transformez vos opérations",
      items: [
        { label: "Productivité" },
        { label: "Précision" },
        { label: "Suivi" },
        { label: "Disponible" },
      ],
    },

    // ROI Calculator Section
    roiCalculator: {
      title: "Calculez Votre ROI (Retour sur Investissement)",
      subtitle: "Découvrez combien de temps et d'argent Workora peut économiser à votre entreprise",
      fields: {
        technicians: "Nombre de techniciens",
        monthlyErrorCostPerTech: "Moyenne des coûts mensuels des erreurs par technicien ($)",
        workOrdersPerMonth: "Nombre de bons de travail par mois",
        timeWorkOrderCreation: "Temps pour créer le bon de travail (minutes)",
        timeWorkOrderDelivery: "Temps pour remettre/transmettre le bon (minutes)",
        timeInventoryManagement: "Temps pour gérer l'inventaire par bon (minutes)",
        timeBillingAccounting: "Temps pour facturation/comptabilité par bon (minutes)",
        hourlyRate: "Taux horaire moyen ($)",
        hourlyRateHint: "Utilisé pour calculer la valeur du temps gagné",
        selectedPlan: "Sélectionner un plan",
      },
      timeSection: {
        title: "Temps Manuel Par Bon de Travail",
        subtitle: "Entrez le temps que vous passez actuellement sur chaque tâche",
        manualTime: "Processus manuel actuel",
        automatedTime: "Avec Workora",
        timeSaved: "Temps gagné",
        perWorkOrder: "par bon de travail",
      },
      plans: {
        essentials: "Essentials",
        pro: "Pro",
        enterprise: "Enterprise",
      },
      results: {
        monthlySavings: "Économies Mensuelles",
        annualSavings: "Économies Annuelles",
        annualPlanCost: "Coût Annuel du Plan",
        netSavings: "Économies Nettes Annuelles",
        errorsAvoided: "Erreurs évitées",
        timeSaved: "Temps gagné",
        explanation: "Ces économies sont calculées en fonction des erreurs que vous évitez et du temps que vous gagnez en automatisant vos bons de travail. Le ROI montre votre retour sur investissement après déduction du coût du plan.",
        recommendationTitle: "Plan Recommandé",
        notRecommendedTitle: "Avis Important",
        notRecommendedMessage: "Selon vos données actuelles, nous ne pouvons pas vous recommander un plan Workora pour le moment. Les économies projetées ne justifient pas l'investissement. Nous vous recommandons de revoir vos saisies ou de nous contacter pour discuter de vos besoins spécifiques.",
        recommendationReason: {
          essentials: "Avec {technicians} technicien(s), le plan Essentials est parfait pour la taille de votre équipe.",
          pro: "Avec {technicians} technicien(s), le plan Pro offre le meilleur rapport qualité-prix pour votre équipe.",
          enterprise: "Avec {technicians} technicien(s), le plan Enterprise offre des fonctionnalités avancées et une scalabilité illimitée pour votre entreprise en croissance.",
        },
      },
      calculateButton: "Calculer Mon ROI",
      cta: "Voir les Plans Tarifaires",
    },

    // Why Now Section
    whyNow: {
      title: "Pourquoi maintenant ?",
      subtitle: "Les problèmes que vous vivez chaque jour",
      problems: {
        title: "Défis Actuels",
        items: [
          "Bons de travail papier qui se perdent", // 1. PRIORITÉ MAXIMALE - Base de tout
          "Impossible de savoir où est chaque technicien", // 2. Gestion opérationnelle critique
          "Clients qui appellent pour demander 'il arrive quand ?'", // 3. Service client urgent
          "Inventaire en camion ou en storage impossible à suivre", // 4. Opérations importantes
          "Saisie manuelle générant des erreurs", // 5. Qualité et précision
          "Les techniciens demandent à chaque fois comment faire les procédures", // 6. Formation et processus
          "Aucune visibilité sur la performance de l'équipe", // 7. Management et analytics
          "Facturation retardée et suivi des paiements", // 8. Financier
          "Mobilité et accessibilité limitées des outils de gestion", // 9. Accessibilité
          "Solution complète chère chez d'autres services", // 10. Tarification
          "Manque d'historique et de documentation des équipements", // 11. Traçabilité
          "Difficultés à gérer les urgences et les priorités", // 12. Gestion des priorités
        ],
      },
      solutions: {
        title: "Avec Workora",
        items: [
          "Bon de travail digitalisé et sauvegardé dans la base de données", // 1
          "Planification en temps réel avec un meilleur suivi des techniciens", // 2
          "Possibilité d'intégration avec le système de ticketing pour updater les ETA et les updates automatiquement dans les billets", // 3
          "Inventaire mis à jour en temps réel avec rapport quotidien", // 4
          "Bon de travail avec calcul automatique pour supprimer toute possibilité d'erreur", // 5
          "Procédures intégrées directement dans le site, accessibles instantanément par les techniciens", // 6
          "Tableaux de bord et analytiques en temps réel", // 7
          "Facturation automatique et suivi des paiements", // 8
          "Solution mobile-first accessible de partout", // 9
          "Workora propose des solutions tarifaires adéquates à la taille de votre équipe", // 10
          "Historique complet des équipements avec photos et documentation centralisée sur la web app", // 11
          "Gestion intelligente des priorités dans le planning intégrée", // 12
        ],
      },
    },

    // CTA Section
    cta: {
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Rejoignez les entreprises qui révolutionnent leurs opérations terrain",
      button: "Planifier une Démo Gratuite",
    },

    // About Page
    about: {
      title: "À Propos de Workora",
      subtitle: "Construire l'avenir des opérations terrain",
      creator: "Ingénieur Logiciel & Entrepreneur",
      intro: "Je suis Aghiles CHAOUCHE, ingénieur logiciel et entrepreneur.",
      paragraph1: "Au fil des années, j'ai digitalisé les opérations d'entreprises de services avec des millions de dollars de chiffre d'affaires ici au Canada.",
      paragraph2: "En travaillant directement avec les équipes terrain, j'ai réalisé à quel point le temps est perdu avec la paperasse, les données manquantes et les allers-retours entre le bureau et les chantiers.",
      builtFrom: "Workora a été construit à partir de besoins réels :",
      needs: [
        "Plus de travaux par jour",
        "Moins de chaos administratif",
        "Meilleure expérience client"
      ],
      conclusion: "Aujourd'hui, j'aide les entreprises CVC, plomberie et services techniques partout au Canada à prendre le contrôle de leurs opérations et à augmenter leurs revenus grâce à la technologie.",
      vision: {
        title: "Notre Vision",
        content:
          "Digitaliser complètement les opérations terrain pour que les techniciens puissent se concentrer sur l'excellence du service client.",
      },
      mission: {
        title: "Notre Mission",
        content:
          "Fournir aux entreprises de services techniques une plateforme simple, fiable et sécurisée pour gérer leurs opérations terrain en temps réel.",
      },
      values: [
        {
          title: "Fiabilité",
          desc: "Système 24/7 en qui vous pouvez avoir confiance",
        },
        {
          title: "Simplicité",
          desc: "Intuitif pour tous",
        },
        {
          title: "Sécurité",
          desc: "Protection des données en priorité",
        },
        {
          title: "Temps Réel",
          desc: "Mises à jour instantanées",
        },
      ],
    },

    // Contact Page
    contact: {
      title: "Contactez-Nous",
      subtitle: "Discutons de votre projet",
      info: {
        title: "Informations de Contact",
        description: "Contactez-nous pour une démo personnalisée de Workora.",
        email: "Courriel",
        phone: "Téléphone",
        location: "Emplacement",
        locationValue: "Canada - Partout au pays",
      },
      form: {
        name: "Nom Complet",
        company: "Entreprise",
        email: "Courriel",
        phone: "Téléphone",
        sector: "Secteur",
        message: "Message",
        requestDemo: "Je souhaite une démonstration gratuite",
        acceptContact: "J'accepte d'être contacté",
        sendButton: "Envoyer le Message",
        resetButton: "Réinitialiser",
        sending: "Envoi en cours...",
        success: "Merci ! Nous vous contacterons sous 24 heures.",
        error: "Veuillez corriger les erreurs ci-dessus.",
        sendError: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
        acceptError: "Veuillez accepter d'être contacté.",
        yes: "Oui",
        no: "Non",
        noMessage: "Aucun message",
        namePlaceholder: "Jean Dupont",
        companyPlaceholder: "Votre Entreprise",
        emailPlaceholder: "jean@entreprise.ca",
        phonePlaceholder: "(514) 123-4567",
        messagePlaceholder: "Parlez-nous de vos besoins...",
        selectIndustry: "Sélectionner le secteur",
        industries: {
          hvac: "CVC",
          plumbing: "Plomberie",
          electrical: "Électricité",
          multi: "Multi-technique",
          other: "Autre",
        },
        validation: {
          emailInvalid: "Format de courriel invalide",
          phoneInvalid: "Format de téléphone invalide",
          tooShort: "Doit contenir au moins 2 caractères",
        },
      },
    },

    // 404 Page
    notFound: {
      title: "404",
      subtitle: "Page Non Trouvée",
      description:
        "La page que vous recherchez n'existe pas ou a été déplacée.",
      button: "Retour à l'Accueil",
    },

    // Error Boundary
    error: {
      title: "Oups ! Quelque chose s'est mal passé",
      description: "Nous nous excusons pour le désagrément. Veuillez rafraîchir la page.",
      button: "Rafraîchir la Page",
    },

    // Footer
    footer: {
      description: "Solution numérique pour techniciens terrain partout au Canada.",
      copyright: "Canada",
      navigation: "Navigation",
      contactTitle: "Contact",
      compliance: "Conformité",
      badges: {
        privacy: "Confidentialité",
        ssl: "SSL",
      },
      rights: "Tous droits réservés - Workora",
      email: "Courriel",
      phone: "Téléphone",
      hosting: "Hébergement : Canada",
    },

    // Required fields
    required: "*",

    // FAQ
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur Workora",
      items: [
        {
          question: "Comment fonctionne Workora ?",
          answer: "Workora digitalise vos bons de travail terrain. Les techniciens remplissent des formulaires numériques sur mobile, les clients signent électroniquement, et les rapports sont envoyés automatiquement. Fini la paperasse !",
        },
        {
          question: "Quels secteurs Workora prend-il en charge ?",
          answer: "Workora est conçu pour le CVC, la plomberie, l'électricité et les services multi-techniques. Notre solution s'adapte aux besoins spécifiques de votre secteur.",
        },
        {
          question: "En combien de temps puis-je commencer ?",
          answer: "Vous pouvez commencer en quelques minutes ! Nous offrons une démonstration gratuite pour vous montrer comment ça fonctionne. Contactez-nous pour planifier votre démo aujourd'hui.",
        },
        {
          question: "Ai-je besoin d'équipement spécial ?",
          answer: "Non ! Workora fonctionne sur n'importe quel smartphone ou tablette. Aucun matériel supplémentaire requis. Vos techniciens peuvent commencer à l'utiliser immédiatement.",
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Oui ! Nous utilisons un chiffrement de bout en bout et respectons les réglementations sur la confidentialité. Vos données sont stockées en toute sécurité au Canada et jamais partagées avec des tiers.",
        },
        {
          question: "Est-ce que Workora propose des services de gestion d'inventaire ?",
          answer: "Oui ! Workora offre une gestion d'inventaire complète et en temps réel. Vous pouvez suivre vos stocks en camion ou en entrepôt, recevoir des alertes automatiques quand les niveaux sont bas, et générer des rapports quotidiens. L'inventaire est mis à jour automatiquement à chaque intervention, éliminant les erreurs de suivi manuel.",
        },
        {
          question: "Workora peut-il s'intégrer avec mes systèmes existants ?",
          answer: "Oui ! Workora offre des possibilités d'intégration avec les systèmes de ticketing, ERP, logiciels comptables et autres outils métier via notre API ouverte. Les intégrations sont possibles, notamment pour les plans Enterprise. Contactez-nous pour discuter de vos besoins d'intégration spécifiques.",
        },
        {
          question: "Où sera hébergé le site ?",
          answer: "C'est nous qui nous occupons de tout l'hébergement ! Vous n'avez pas à payer de nom de domaine ou de serveur. Nous fournissons tout clé en main : hébergement, domaine, sécurité et maintenance. Vous utilisez simplement la plateforme, nous gérons tous les aspects techniques.",
        },
      ],
    },
  },
};

// Hook pour utiliser les traductions
export const useTranslation = (language) => {
  const t = (key, variables = {}) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    if (typeof value !== "string") {
      return value || key;
    }

    // Remplacer les variables dans le texte {variableName}
    let result = value;
    Object.keys(variables).forEach((varName) => {
      const regex = new RegExp(`\\{${varName}\\}`, "g");
      result = result.replace(regex, variables[varName]);
    });

    return result || key;
  };

  return { t };
};