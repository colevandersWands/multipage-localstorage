import { initializeUi } from '../handlers/initialize-ui.js';

export const loadListener = () => {
  window.addEventListener('load', initializeUi);
};
