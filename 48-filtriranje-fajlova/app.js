const filter = require('./filter.js')
// prima dva argumenta, npr: node app.js ./ .js
const putanja = process.argv[2]
const ekstenzija = process.argv[3]

function stampaj(err, data) {
  if (err) return console.log(err)
  data.map(x => console.log(x))
}

filter(putanja, ekstenzija, stampaj)
