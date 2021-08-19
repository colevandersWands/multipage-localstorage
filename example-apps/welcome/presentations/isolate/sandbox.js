import { app } from './src/app.js';

app.welcome();

app.editGreeting('dag');

app.welcome();

app.editMessage('nice to meet you');

app.welcome();

// --- invalid arguments

app.editGreeting(true);

app.editMessage(12);
