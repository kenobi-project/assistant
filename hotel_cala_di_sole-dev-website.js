(function() {
    // Fonction principale
    function initBotpress() {
        
        // --- 🔒 SÉCURITÉ : ALLOW ORIGIN ---
        const currentDomain = window.location.hostname;
        const allowedDomains = ["www.muvia-solutions.fr", "muvia-solutions.fr"];

        // Si le domaine n'est pas dans la liste, on arrête tout.
        if (!allowedDomains.includes(currentDomain)) {
            console.warn("⛔ MUVIA Assitant : Licence non valide pour ce domaine (" + currentDomain + ").");
            return; // Arrêt immédiat du script
        }
        // ------------------------------------

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
                botId: "02ea6562-c04a-45cc-85ef-094dcec2df0a",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "Cala di Sole ★★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/03/10/23/20260310231453-BTSHJLLB.jpeg",
                    botDescription: "Situé dans une des plus belles criques du Golfe d'Ajaccio, l'hôtel Cala di Sole vous accueillera pour votre séjour en Corse dans une de ses nombreuses chambres, toute vue direct sur la mer.",
                    fabImage: "https://files.bpcontent.cloud/2026/03/10/23/20260310231520-Y3HKT3UZ.jpeg",
                    website: { title: "Site Web", link: "https://www.caladisole.fr/" },
                    email: { title: "hotelcaladisole@gmail.com", link: "hotelcaladisole@gmail.com" },
                    phone: { title: "+33495520136", link: "+33495520136" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#02a5ad",
                    variant: "solid",
                    additionalStylesheetUrl: "https://kenobi-project.github.io/assistant/hotel_cala_di_sole-webapp_style.css",
                    headerVariant: "glass",
                    themeMode: "light",
                    fontFamily: "Inter",
                    radius: 1.1,
                    feedbackEnabled: false,
                    footer: "[Développé par MUVIA. 🚀](https://muvia-solutions.fr/)",
                    storageLocation: "localStorage",
                    soundEnabled: true,
                    proactiveMessageEnabled: true,
                    proactiveBubbleMessage: "Besoin d'aide ?👋",
                    proactiveBubbleTriggerType: "afterDelay",
                    proactiveBubbleDelayTime: 5
                },
                clientId: "00579df0-b1b2-4170-b270-2de908c18248",
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
