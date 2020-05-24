import 'materialize';

// Acordeon

const btn1 = document.querySelector('#button-1');
btn1.onclick = () => {
  const body1 = document.querySelector('#body-1').getAttribute('hidden');
  if (body1 === 'false' || body1 === '') {
    document.querySelector('#body-1').setAttribute('hidden', 'true');
  } else {
    document.querySelector('#body-1').setAttribute('hidden', 'false');
  }
};

const btn2 = document.querySelector('#button-2');
btn2.onclick = () => {
  const body2 = document.querySelector('#body-1').getAttribute('hidden');
  if (body2 === 'false' || body2 === '') {
    document.querySelector('#body-2').setAttribute('hidden', 'true');
  } else {
    document.querySelector('#body-2').setAttribute('hidden', 'false');
  }
};

const btn3 = document.querySelector('#button-3');
btn3.onclick = () => {
  const body3 = document.querySelector('#body-1').getAttribute('hidden');
  if (body3 === 'false' || body3 === '') {
    document.querySelector('#body-3').setAttribute('hidden', 'true');
  } else {
    document.querySelector('#body-3').setAttribute('hidden', 'false');
  }
};

// CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, { autofocus: true });

    var currentEl = document.querySelector('#carruselcontrol');
    currentEl.addEventListener('keyup', function (e) {
      if (e.key == 'ArrowRight') {
        let current = instances[0].el.querySelector('.active');
        current.setAttribute('tabindex', '-1');
        current.setAttribute('aria-hidden', 'true');
        current.blur();
        instances[0].next();
        let newEl = instances[0].el.querySelector('.active');
        newEl.setAttribute('tabindex', '0');
        newEl.setAttribute('aria-hidden', 'true');
          newEl.focus();

      } else if (e.key == 'ArrowLeft') {
        let current = instances[0].el.querySelector('.active');
        current.setAttribute('tabindex', '-1');
        current.setAttribute('aria-hidden', 'true');
        current.blur();
        instances[0].prev();
        var newEl = instances[0].el.querySelector('.active');
        newEl.setAttribute('tabindex', '0');
        newEl.setAttribute('aria-hidden', 'true');
          newEl.focus();
      }
      console.log(instances[0].el.querySelector('.active'));
    });
  });
});
