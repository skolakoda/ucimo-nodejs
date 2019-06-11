const mongoose = require('mongoose')

// potrebno je imati lokalno instaliran mongodb
// ako nema baze proba stvara je
mongoose.connect('mongodb://localhost/proba')
  .then(() => console.log('jeee'))
  .catch(err => console.error(err))
