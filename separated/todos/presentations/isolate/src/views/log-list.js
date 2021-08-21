import { logItem } from './log-item.js';

export const logList = (title, listToRender) => {
  console.log(`%c${title}`, 'font-weight: bold;');
  console.log('- - - - - - - - - - - - - -');
  if (listToRender.length > 0) {
    listToRender.forEach(logItem);
  } else {
    console.log('nothing here!');
  }
};
