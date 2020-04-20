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

function getEntries() {
  let el = document.getElementById('bdinfo');

  db.collection('usuarios')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        el.innerHTML += `<b>Id:</b> ${doc.id} </br><b>Nombre:</b> ${data.nombre} </br><b>Apellidos:</b> ${data.apellidos} <br><b>Username:</b> ${data.username}</br></br>`
      });
    });
}

function addEntry() {
  let nombre = document.querySelector('#name').value;
  let apellidos = document.querySelector('#surname').value;
  let username = document.querySelector('#username').value;
  document.querySelector('#name').value = "";
  document.querySelector('#surname').value = "";
  document.querySelector('#username').value = "";
  
  if (nombre != '' && apellidos != '' && username != '') {
    db.collection('usuarios')
      .add({
        nombre: nombre,
        apellidos: apellidos,
        username: username,
      })
      .then(function (docRef) {
        document.querySelector('#sendData').innerHTML += "Registro añadido correctamente"
      })
      .catch(function (error) {
        document.querySelector('#sendData').innerHTML += "Error al añadir el registro"
      });
  } else {
    console.log('Input vacío');
  }
}

function removeEntry() {
  let id = document.getElementById('entryId').value;
  document.getElementById('entryId').value = "";

  db.collection('usuarios')
    .doc(id)
    .delete()
    .then(function () {
      document.querySelector('#removeData').innerHTML += "Registro borrado correctamente"
    })
    .catch(function (error) {
      document.querySelector('#removeData').innerHTML += "Error al borrar el registro"
    });
}

var insertDOM = document.querySelector('#bdinfo');
var sendData = document
  .getElementById('enviarDatos')
  .addEventListener('click', addEntry);
var removeData = document
  .getElementById('borrarDatos')
  .addEventListener('click', removeEntry);

getEntries();
