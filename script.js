
  document.getElementById('contactForm').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === '' || !email.match(emailPattern)) {
            event.preventDefault();
            alert("Veuillez entrer un nom valide et une adresse email correcte.");
        } else {
            alert("Formulaire soumis avec succès !");
        }
    });