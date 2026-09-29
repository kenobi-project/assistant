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
                botId: "9ae2dfe0-f4cc-4d52-b298-fbacedd04f11",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "Maria Die ★★★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/09/29/12/20260929121223-R7805AYL.png",
                    botDescription: "L’hôtel 4 étoiles Maria Die est situé à Calvi, au cœur de la belle cité Génoise, à 300m de la citadelle, à 3 mn à pieds du port, 7 minutes de la plage du Roncu, 800m de la grande plage.",
					fabImage: "https://files.bpcontent.cloud/2026/09/29/12/20260929121125-8RECTXYM.jpg",
                    website: { title: "Site Web", link: "https://hotelmariadie.com/" },
                    email: { title: "contact@hotelmariadie.com", link: "contact@hotelmariadie.com" },
                    phone: { title: "+330972553789", link: "+330972553789" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#277E93 ",
                    variant: "solid",
                    additionalStylesheetUrl: "https://kenobi-project.github.io/assistant/hotel_mariadie-webapp_style.css",
                    headerVariant: "glass",
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
                clientId: "0d5f5a18-2852-4e7c-894b-5fa00bfa2046",
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
