module.exports.rutiraj = function(zahtev, odgovor) {
  odgovor.writeHead(200, {'Content-Type': 'text/plain'})
  if (zahtev.url == '/') {
    odgovor.end('Zdravo Svete\n')
  } else {
    odgovor.end('Zdravo ' + zahtev.url.substring(1))
  }
}
