const fs = require('fs')
const net = require('net')
const filename = process.argv[2] || 'target.txt'

if (!filename) throw Error('Error: No filename specified.')

net
  .createServer(connection => {
    console.log('Klijent povezan.')

    connection.write('Veza sa serverom uspostavljena.\n')
    const watcher = fs.watch(filename, () => connection.write(`Fajl promenjen: ${new Date()}\n`))

    connection.on('close', () => {
      console.log('Klijent odjavljen.')
      watcher.close()
    })
  })
  .listen(60300, () => console.log('Soket server pokrenut.'))
