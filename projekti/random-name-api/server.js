const http = require('http')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const server = http.createServer(app)

app.get('/', (req, res) => res.send('Welcome to Random Name API'))

app.get('/imena', (req, res) => {
	const imena = fs.readFileSync('imena.txt', 'utf8')
	res.send(imena)
})

app.get('/random', (req, res) => {
	const imena = fs.readFileSync('imena.txt', 'utf8')
	const niz = imena.split('\n')
	const ime = niz[Math.floor(Math.random() * niz.length)]
	res.send(ime)
})

app.post('/dodaj-ime', (req, res) => {
	const ime = req.body.ime
	let imena = fs.readFileSync('imena.txt', 'utf8')
	if (imena.split('\n').includes(ime)) 
		return res.send('Ime vec postoji u bazi.')

	imena = imena + ime + '\n'
	fs.writeFile('imena.txt', imena, (err) => {
		if (err) res.send('Doslo je do greske.')
		else res.send('Uspesno ste poslali ime.')
	})
})

server.listen(port, () => console.log('Server trci na http://localhost:'+port))
