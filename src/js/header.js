import { gsap } from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';

// gsap.registerPlugin(TextPlugin);

// gsap.to('.title', {
//   duration: 2,
//   text: {
//     value: 'BAZALEVSKIY',
//     delimiter: '',
//   },
// });

let letters = ['B', 'A', 'Z', 'A', 'L', 'E', 'V', 'S', 'K', 'I', 'Y'];
let title = document.querySelector('.title');
let animation = gsap.timeline({ repeat: 5, repeatDelay: 0.1 });

function createLayers() {
  letters.forEach(value => {
    let layer = document.createElement('div');
    layer.innerHTML = value;
    title.appendChild(layer);
  });
}

function animateText() {
  let layers = document.querySelectorAll('.title div');
  layers.forEach(function (element, index) {
    animation.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        repeat: 1,
        yoyo: true,
        yoyoEase: true,
        // repeatDelay: 0.6,
      }
    );
  });
  gsap.set('.title', {
    visibility: 'visible',
  });
}

createLayers();
animateText();
