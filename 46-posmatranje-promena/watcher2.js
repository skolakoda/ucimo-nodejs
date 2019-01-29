const fs = require('fs')
const { spawn } = require('child_process')

const filename = process.argv[2] || 'lorem.txt'

fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename])
  let output = ''
  ls.stdout.on('data', chunk => output += chunk)
  ls.on('close', () => {
    const parts = output.split(/\s+/)
    console.log([parts[0], parts[4], parts[8]])
  })
})

console.log(`Vrebam izmene na fajlu ${filename}...`)