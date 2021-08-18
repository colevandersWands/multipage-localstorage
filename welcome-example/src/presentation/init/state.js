import { friendly } from '../../../data/friendly.js';

for (const key in friendly) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(friendly[key]));
  }
}
