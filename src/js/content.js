import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline();

// tl.fromTo(
//   '.item',
//   {
//     y: 50,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 3,
//     // stagger: 2,
//   }
// );

// onScroll
gsap.from('.item', {
  scrollTrigger: {
    trigger: '.content',
    start: 'top center',
    end: 'bottom bottm',
    scrub: true,
    markers: true,
  },
  scale: 0.5,
  transformOrigin: 'bottom center',
  stagger: 1,
  duration: 2,
});
