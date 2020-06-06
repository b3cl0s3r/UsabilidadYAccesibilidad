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
var docRef = db.collection('ofertas');

let main = document.querySelector('#all-ofertas');
let pagina = document.querySelector('#num-pagina');
let pagetitle = document.querySelector("h4")

let data = [];
var pages = [];

function createOferta(info) {
  let el = document.createElement('div');
  el.className = 'oferta';

  let titulo = document.createElement('p');
  titulo.className = 'titulo';
  titulo.tabIndex = '0';
  titulo.innerText = info.titulo;

  let contenido = document.createElement('p');
  contenido.className = 'descripcion';
  contenido.tabIndex = '0';
  contenido.innerText = info.contenido;

  let contacto = document.createElement('div');
  contacto.className = 'contacto';
  let child = document.createElement('span');
  child.tabIndex = '0';
  child.innerText =
    'Publicado por ' +
    info.usuario +
    ' (' +
    info.fecha +
    ') - Precio: ' +
    info.precio +
    ' horas';
  contacto.appendChild(child);

  el.appendChild(titulo);
  el.appendChild(contenido);
  el.appendChild(contacto);

  main.appendChild(el);
}

function changePage(ev) {
  let posts = (ev.target.innerText - 1) * 4
  main.innerHTML = "" 
  pagetitle.innerText = "Ofertas: Página "+ev.target.innerText
  for (let i=posts; i<posts+4; i++) {
    createOferta(data[i]);
  }
}

db.collection('ofertas')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let info = doc.data();
      data.push(info);

      if (data.length < 5) {
        createOferta(info);
      }
    });
  })
  .then(() => {
    let pages = data.length / 4;

    if (!Number.isInteger(pages)) {
      pages = Math.floor(pages + 1);
    }

    for (let i = 0; i < pages; i++) {
      let el = document.createElement('a');
      el.href = '#page-' + (i + 1);
      el.id = 'page-'+(i + 1);
      el.innerText = i + 1;
      el.addEventListener('click', changePage);

      pagina.appendChild(el);
      if (i != pages - 1) {
        pagina.innerHTML += ' - ';
      }

      let domel = document.querySelector('#page-' + (i + 1));
      domel.addEventListener('click', changePage);
    }
  });
