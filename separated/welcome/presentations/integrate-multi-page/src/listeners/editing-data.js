import { updateState } from '../handlers/update-state.js';

document.getElementById('data-input').addEventListener('keyup', updateState);
