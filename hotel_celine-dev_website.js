(function() {
    // Fonction principale
    function initBotpress() {
        
        // --- 🔒 SÉCURITÉ : ALLOW ORIGIN ---
        const currentDomain = window.location.hostname;
        const allowedDomains = ["www.hotelcelinecorse.fr", "hotelcelinecorse.fr", "https://perfect-tone-332603.framer.app", "perfect-tone-332603.framer.app"];

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
                botId: "68dc3f83-a69d-47ca-ab10-1f76c7ac9da9",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "Hôtel Celine ★★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/02/05/22/20260205225304-DI876500.jpeg",
                    botDescription: "L'hôtel Céline, niché au cœur du maquis corse et surplombant le Golfe d’Ajaccio, vous invite à vivre une parenthèse de détente et de sérénité.",
                    fabImage: "https://files.bpcontent.cloud/2026/02/11/15/20260211150604-KHJYO8WW.jpeg",
                    website: { title: "Site Web", link: "https://www.hotelcelinecorse.fr/" },
                    email: { title: "hotelcelinecorse@orange.fr", link: "hotelcelinecorse@orange.fr" },
                    phone: { title: "+33495254105", link: "+33495254105" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#188cd7",
                    variant: "solid",
                    additionalStylesheetUrl: "https://files.bpcontent.cloud/2026/02/04/15/20260204155623-KNCI30BF.css",
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
