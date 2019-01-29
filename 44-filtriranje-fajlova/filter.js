const {readdir} = require('fs')
const {extname} = require('path')

function filter(putanja, ext, callback) {
  readdir(putanja, (err, data) => {
    if (err) return callback(err)
    const filtrirano = data.filter(x => extname(x) == ext)
    callback(null, filtrirano)
  })
}

module.exports = filter
