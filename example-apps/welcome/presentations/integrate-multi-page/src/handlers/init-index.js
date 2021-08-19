import { beWelcoming } from '../../../../business-logic/be-welcoming.js';

export const initIndex = () => {
  document.getElementById('words').innerHTML = beWelcoming();
};
