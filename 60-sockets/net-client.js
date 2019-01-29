const net = require('net')

const client = net.connect({ port: 60300 })

client.on('data', data => console.log(data.toString()))
