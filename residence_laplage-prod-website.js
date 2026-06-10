(function() {
    // Fonction principale
     function initBotpress() {
        /*
        // --- 🔒 SÉCURITÉ : ALLOW ORIGIN ---
        const currentDomain = window.location.hostname;
        const allowedDomains = ["www.caladisole.fr", "caladisole.fr"];

        // Si le domaine n'est pas dans la liste, on arrête tout.
        if (!allowedDomains.includes(currentDomain)) {
            console.warn("⛔ MUVIA Assitant : Licence non valide pour ce domaine (" + currentDomain + ").");
            return; // Arrêt immédiat du script
        }
        // ------------------------------------
*/
        // 1. Ajouter le script Botpress
        const botpressScript = document.createElement('script');
        botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
        document.head.appendChild(botpressScript);

        // 2. Ajouter le style
        const style = document.createElement('style');
        style.textContent = `
          #webchat .bpWebchat {
            position: unset;
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
          }
          #webchat .bpFab {
            display: none;
          }
        `;
        document.head.appendChild(style);

        // 3. Créer le conteneur du webchat
        if (!document.getElementById('webchat') && document.body) {
            const webchatDiv = document.createElement('div');
            webchatDiv.id = 'webchat';
            webchatDiv.style.width = '500px';
            webchatDiv.style.height = '500px';
            // Z-index très élevé pour être sûr qu'il passe devant tout le reste du site
            webchatDiv.style.zIndex = '2147483647'; 
            document.body.appendChild(webchatDiv);
        }

        // 4. Initialiser Botpress
        botpressScript.onload = () => {
            window.botpress.on("webchat:ready", () => {
                window.botpress.open();
            });

 window.botpress.init({
                botId: "68dc3f83-a69d-47ca-ab10-1f76c7ac9da9",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "La Plage ★★★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/06/10/21/20260610213814-5CJZGRH7.png",
                    botDescription: "La Résidence La Plage ★★★★ est une résidence de tourisme 4 étoiles composée de 15 villas indépendantes avec vue panoramique sur la mer, située sur la rive nord du golfe du Valinco, à flanc de colline, sur la commune d'Olmeto Plage en Corse-du-Sud. La résidence domine les lieux entre les plages de Scodi Neri et Tenutella, à proximité immédiate de la station balnéaire d'Abbartello, à seulement 250 mètres des plus belles plages sauvages de la région.",
					fabImage: "https://files.bpcontent.cloud/2026/06/10/21/20260610214007-3PME1E8L.jpg",
                    website: { title: "Site Web", link: "https://www.laplage-propriano.com/" },
                    email: { title: "contact@laplage-propriano.com", link: "contact@laplage-propriano.com" },
                    phone: { title: "+33612581102", link: "+33612581102" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#333333",
                    variant: "solid",
                    additionalStylesheetUrl: "https://kenobi-project.github.io/assistant/residence_laplage-website_style.css",
                    headerVariant: "solid",
                    themeMode: "light",
                    fontFamily: "Inter",
                    radius: 2,
                    feedbackEnabled: false,
                    footer: "[Développé par MUVIA. 🚀](https://muvia-solutions.fr/)",
                    storageLocation: "localStorage",
                    soundEnabled: true,
                    proactiveMessageEnabled: true,
                    proactiveBubbleMessage: "Besoin d'aide ?👋",
                    proactiveBubbleTriggerType: "afterDelay",
                    proactiveBubbleDelayTime: 5
                },
                clientId: "e06e296b-a823-4e00-a342-ff4368e7e1e9",
                selector: "#webchat"
            });

             window.botpress.on("webchat:ready", () => {
    // On vérifie dans le stockage local si le bot a déjà été déclenché
    const hasTriggeredBefore = localStorage.getItem("botpress_permanent_trigger");
    if (!hasTriggeredBefore) {
      window.botpress.sendEvent({type:"siteweb"});
      // On enregistre l'information de manière permanente
      localStorage.setItem("botpress_permanent_trigger", "true");
    }
  });
            
        };
    }

    // Lancement intelligent (Dès que possible)
    if (document.readyState === "complete" || document.readyState === "interactive") {
        initBotpress();
    } else {
        document.addEventListener("DOMContentLoaded", initBotpress);
    }
})();
