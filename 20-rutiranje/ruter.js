function rutiraj(zahtev, odgovor) {
  odgovor.writeHead(200, {'Content-Type': 'text/plain'})
  if (zahtev.url == '/') {
    odgovor.end('Zdravo Svete\n')
  } else {
    const ime = zahtev.url.substring(1).toUpperCase()
    odgovor.end('Zdravo ' + ime + '\n')
  }
}

module.exports = {rutiraj}
