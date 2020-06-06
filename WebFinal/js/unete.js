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
var docRef = db.collection('usuarios');

function conectarse() {
  document.querySelector('#errorloginmsg').innerHTML = '';
  let name = document.querySelector('#userlogin').value;
  let pass = document.querySelector('#passlogin').value;

  if (name && pass) {
    db.collection('usuarios')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          if (data.name == name && data.pass == pass) {
            window.localStorage.setItem('userlog', data.email);
            window.localStorage.setItem('username', data.name);
            window.location.assign("/");
          }
        });
      })
      .then(() => {
        if (!window.localStorage.getItem('userlog')) {
          document.querySelector('#errorloginmsg').innerHTML =
          'La información es incorrecta. ¿Estás registrado?';
        }
      });
  }
}

function registro() {
  let name = document.querySelector('#userregister').value;
  let email = document.querySelector('#emailregister').value;
  let pass = document.querySelector('#passregister').value;
  let tel = document.querySelector('#telregister').value;
  let errmsg = document.querySelector('#errormsg');

  if (!Number.isInteger(parseInt(tel))) {
    errmsg.innerHTML = 'El número de teléfono deben ser números';
  } else {
    errmsg.innerHTML = '';
    if (name != '' && email != '' && pass != '') {
      db.collection('usuarios')
        .add({
          name: name,
          email: email,
          pass: pass,
          tel: tel,
        })
        .then(function (docRef) {
          document.querySelector('#registrocorrecto').innerHTML +=
            'Te has registrado correctamente';
          document.querySelector('#userregister').value = '';
          document.querySelector('#emailregister').value = '';
          document.querySelector('#passregister').value = '';
          document.querySelector('#telregister').value = '';
        })
        .catch(function (error) {
          document.querySelector('#sendData').innerHTML +=
            'Error al registrarse';
        });
    }
  }
}

let login = document
  .querySelector('#conectarse')
  .addEventListener('click', conectarse);
let registrarse = document
  .querySelector('#registro')
  .addEventListener('click', registro);
