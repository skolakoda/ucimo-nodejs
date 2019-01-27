const fs = require('fs');
fs.watch('target.txt', () => console.log('Promenjeno'));
console.log('Cekamo da se fajl promeni');
