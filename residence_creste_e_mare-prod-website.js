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
                botId: "bb868f6b-2d2f-4035-a949-ca02053c8176",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "Creste e Mare ★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/04/03/15/20260403150013-M6BKJ2AO.png",
                    botDescription: "La résidence de tourisme CRESTE e MARE à Ajaccio, est idéalement située au calme, entre le centre-ville et la route des plages.",
                    fabImage: "https://files.bpcontent.cloud/2026/04/03/15/20260403150035-6MVMN1OY.jpeg",
                    website: { title: "Site Web", link: "https://crestemare.com/" },
                    email: { title: "crestemare@orange.fr", link: "crestemare@orange.fr" },
                    phone: { title: "+33495504200", link: "+33495504200" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#F7B231",
                    variant: "solid",
                    additionalStylesheetUrl: "https://kenobi-project.github.io/assistant/residence_creste_e_mare-website_style.css",
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
                clientId: "f6146b57-3281-47bd-a2cc-fe8aec1cc4f3",
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
