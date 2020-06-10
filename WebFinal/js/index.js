document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
});

var url_base = '/UsabilidadYAccesibilidad/WebFinal/';

function desconectar() {
  if (window.localStorage.getItem('userlog')) {
    window.localStorage.removeItem('userlog');
  }
  console.log('desconectarse');
  window.location.assign('/UsabilidadYAccesibilidad/WebFinal/');
}

function createMenuEl(obj) {
  let el = document.createElement('li');
  let child = document.createElement('a');
  let text = document.createTextNode(obj.title);

  if (obj.id) {
    child.className = obj.id;
    child.href = '#';
  } else {
    child.href = obj.page;
  }

  child.tabIndex = '0';
  child.appendChild(text);
  el.appendChild(child);

  if (window.location.pathname == url_base + obj.page) {
    el.className = 'active';
  }

  let desktop = document.querySelectorAll('.hide-on-med-and-down');
  let mobile = document.querySelector('#mobile-demo');

  desktop[1].appendChild(el);
  let clon = el.cloneNode(true);
  mobile.appendChild(clon);

  if (obj.id) {
    let desc = document.querySelectorAll('.desconectarse');
    desc[0].addEventListener('click', desconectar);
    desc[1].addEventListener('click', desconectar);
  }
}

let menu = [
  {
    title: 'Principal',
    page: 'index.html',
  },
  {
    title: 'Ofertas',
    page: 'ofertas.html',
  },
  {
    title: 'Contacto',
    page: 'contacto.html',
  },
  {
    title: 'Únete',
    page: 'unete.html',
  },
];

let menuLogged = [
  {
    title: 'Principal',
    page: 'index.html',
  },
  {
    title: 'Ofertas',
    page: 'ofertas.html',
  },
  {
    title: 'Publicar',
    page: 'publicar.html',
  },
  {
    title: 'Contacto',
    page: 'contacto.html',
  },
  {
    title: 'Desconectarse',
    page: 'index.html',
    id: 'desconectarse',
  },
];

if (window.localStorage.getItem('userlog')) {
  for (let i of menuLogged) {
    createMenuEl(i);
  }
} else {
  for (let i of menu) {
    createMenuEl(i);
  }
}
