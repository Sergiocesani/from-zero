const messages = [
    "Eres mi razón de sonreír 💖",
    "Contigo todo es mejor 🌈",
    "Mi lugar favorito es a tu lado 🥰",
    "Te elijo todos los días 💘",
    "Gracias por existir ❤️",
    "Eres mi persona favorita 🌟",
    "xexito sin vos no es xexito 🌟💘"
  ];
  
  function showMessage() {
    const random = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[random];
  }
  