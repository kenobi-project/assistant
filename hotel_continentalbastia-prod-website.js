(function() {
    function initBotpress() {

        // 1. Ajouter le script Botpress
        const botpressScript = document.createElement('script');
        botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
        document.head.appendChild(botpressScript);

        // 2. Ajouter le style global
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
            webchatDiv.style.zIndex = '2147483647';
            document.body.appendChild(webchatDiv);
        }

        // ✅ Injection CSS dans le Shadow DOM
        function injectShadowCSS() {
            const container = document.querySelector('.bpChatContainer');
            if (!container) return false;

            const shadowHost = container.querySelector('div');
            if (!shadowHost || !shadowHost.shadowRoot) return false;

            const sr = shadowHost.shadowRoot;

            if (sr.querySelector('#muvia-fab-style')) return true;

            const shadowStyle = document.createElement('style');
            shadowStyle.id = 'muvia-fab-style';
            shadowStyle.textContent = `
                .bpFabWrapper {
                    right: 80px !important;
                }
                .bpFABMessagePreview {
                    right: 80px !important;
                }
                .bpFABWebchat {
                    right: 80px !important;
                }
            `;
            sr.appendChild(shadowStyle);
            return true;
        }

        // 4. Initialiser Botpress
        botpressScript.onload = () => {

            window.botpress.on("webchat:ready", () => {
                window.botpress.open();
            });

            window.botpress.init({
                botId: "542f493d-38d0-4d94-9f59-efeef31d8aaa",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "Continental Bastia ★★★",
                    botAvatar: "https://files.bpcontent.cloud/2026/06/08/14/20260608145651-X0MRWYC7.png",
                    botDescription: "L'Hôtel Continental est situé en plein cœur de Bastia, capitale économique de la Haute-Corse, à deux pas de la Place Saint-Nicolas et du Vieux-Port. L'établissement, rénové en 2022, se distingue par sa façade jaune tendre sur l'Avenue Maréchal Sebastiani, dans une rue commerçante du centre historique, à proximité immédiate des commerces, restaurants et transports.",
                    fabImage: "https://files.bpcontent.cloud/2026/06/08/14/20260608145958-W9XI8XYD.jpg",
                    website: { title: "Site Web", link: "https://www.hotelcontinentalbastia.com/" },
                    email: { title: "contact@hotelcontinental.com", link: "contact@hotelcontinental.com" },
                    phone: { title: "+33495110290", link: "+33495110290" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#212121",
                    variant: "solid",
                    additionalStylesheetUrl: "https://kenobi-project.github.io/assistant/hotel_continentalbastia-website_style.css",
                    headerVariant: "glass",
                    themeMode: "light",
                    fontFamily: "Inter",
                    radius: 0.6,
                    feedbackEnabled: false,
                    footer: "[Développé par MUVIA. 🚀](https://muvia-solutions.fr/)",
                    storageLocation: "localStorage",
                    soundEnabled: true,
                    proactiveMessageEnabled: true,
                    proactiveBubbleMessage: "Besoin d'aide ?👋",
                    proactiveBubbleTriggerType: "afterDelay",
                    proactiveBubbleDelayTime: 5
                },
                clientId: "36c7df0e-6dda-469d-9342-0b31c8feb559",
                selector: "#webchat"
            });

            window.botpress.on("webchat:ready", () => {
                // Déclenchement événement unique
                const hasTriggeredBefore = localStorage.getItem("botpress_permanent_trigger");
                if (!hasTriggeredBefore) {
                    window.botpress.sendEvent({ type: "siteweb" });
                    localStorage.setItem("botpress_permanent_trigger", "true");
                }

                // Retry toutes les 500ms jusqu'à ce que le Shadow DOM soit prêt
                const interval = setInterval(() => {
                    if (injectShadowCSS()) {
                        clearInterval(interval);
                    }
                }, 500);

                // Sécurité : arrêt après 30 secondes
                setTimeout(() => clearInterval(interval), 30000);
            });
        };
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        initBotpress();
    } else {
        document.addEventListener("DOMContentLoaded", initBotpress);
    }
})();
