// -------------- emailJS --------------

let Button = document.getElementById('button');
let Form = document.getElementById('form');

function sendMail(){

  document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();
    Button.value = "Message Sent!";

    emailjs.sendForm('jp_email', 'elodie_template', '#form')
    .then(
      
      function() {

        // console.log('SUCCESS!');
        // setInterval(() => Form.reset(), 2000);
        // setInterval(() => Button.value = "Envoyer Message", 2000);
        setInterval(() => window.location.reload(true), 2000);

      }, 

      function(error) {

        console.log('FAILED...', error);
          
      }

    );

  });
}