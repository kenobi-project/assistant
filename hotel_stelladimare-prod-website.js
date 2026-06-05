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
                botId: "78810737-52c0-4932-9edb-4d54b5bb457f",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "Stella di Mare ★★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/05/11/09/20260511094723-ZFG2VXTQ.png",
                    botDescription: "Situé au bord de la mer, dans le décor enchanteur du golfe d’Ajaccio face aux îles Sanguinaires, notre hôtel STELLA DI MARE vous accueille. Nos 60 chambres, lumineuses et confortables, offrent pour la plupart une vue imprenable sur les eaux turquoise de la Méditerranée.",
					fabImage: "https://files.bpcontent.cloud/2026/05/11/09/20260511094703-MJVEC7AY.jpg",
                    website: { title: "Site Web", link: "https://www.hotel-stelladimare.com/" },
                    email: { title: "hotel-stelladimare@wanadoo.fr", link: "hotel-stelladimare@wanadoo.fr" },
                    phone: { title: "+33495520107", link: "+33495520107" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#072b47",
                    variant: "solid",
                    additionalStylesheetUrl: "https://kenobi-project.github.io/assistant/hotel_stelladimare-website_style.css",
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
                clientId: "3ff5461e-060f-43d7-b5ef-9a73c40c4628",
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
