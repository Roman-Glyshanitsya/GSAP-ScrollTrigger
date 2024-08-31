import { gsap } from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

gsap.to('.title', {
  duration: 2,
  text: {
    value: 'BAZALEVSKIY',
    delimiter: '',
  },
});
