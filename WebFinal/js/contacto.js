// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBd2QXd4Xw3ssVhgQ9SBDrD1krb27s8DyA',
  authDomain: 'banco-del-tiempo.firebaseapp.com',
  databaseURL: 'https://banco-del-tiempo.firebaseio.com',
  projectId: 'banco-del-tiempo',
  storageBucket: 'banco-del-tiempo.appspot.com',
  messagingSenderId: '610592270298',
  appId: '1:610592270298:web:1ef8065f918d94ab2242e3',
  measurementId: 'G-B82FMW2MR6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var docRef = db.collection('contacto');

function publicar() {
  let titulo = document.querySelector('.titulopost').value;
  let email = document.querySelector('#emailfield').value;
  let contenido = document.querySelector('.contenidopost').value;

  let d = new Date();
  let fecha = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

  if (titulo && email && contenido) {
    db.collection('contacto')
      .add({
        contenido: contenido,
        titulo: titulo,
        email: email,
        fecha: fecha,
      })
      .then(function () {
        document.querySelector('.titulopost').value = '';
        document.querySelector('#emailfield').value = '';
        document.querySelector('.contenidopost').value = '';
        let el = document.querySelector('#registrocorrecto')
        el.innerHTML = "Mensaje enviado correctamente"
      });
  }
}

document.querySelector('.login-buttom').addEventListener('click', publicar);
