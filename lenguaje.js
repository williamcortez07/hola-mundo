const preguntas = document.getElementsByClassName('preguntas');
const whatsapplink = document.getElementsByClassName('whatsapplink');
preguntas.addEventlistener('click', () =>
{
    const descripcionFoto = "hola, esta es la informacion de esta foto" + preguntas.alt;

    const numeroContacto = "84532072";
    const mensaje = encodeURIComponent(descripcionFoto);
    const urlwhatsApp = 'https://api.whatsapp.com/send?phone=${numeroContacto}&text=${mensaje}';
    whatsappLink.href = urlwhatsApp;
});
