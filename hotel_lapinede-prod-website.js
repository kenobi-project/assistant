// Configuration Muvia
window.MUVIA_CONFIG = {
  clientId: "2ab7bb36-825b-4442-8de8-44ef9f9ec228"
};

// Chargement du widget Muvia
(function () {
  var s = document.createElement("script");
  s.src = "https://app.muvia-solutions.fr/widget.js";
  s.async = true;
  document.head.appendChild(s);
})();
