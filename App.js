function iniciarApp() {
  console.log("Mercado José iniciado");

  const mensaje =
    "Hola, quiero consultar por productos de Mercado José.";

  const whatsapp = "https://wa.me/541168467628?text=" +
    encodeURIComponent(mensaje);

  window.location.href = whatsapp;
}

console.log("Mercado José - aplicación funcionando");
