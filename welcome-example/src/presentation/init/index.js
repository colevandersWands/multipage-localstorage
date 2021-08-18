import './state.js';
import './nav-footer.js';

import { beWelcoming } from '../../business-logic/be-welcoming.js';

document.getElementById('words').innerHTML = beWelcoming();
