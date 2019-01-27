const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

request('https://www.babble.com/pregnancy/1000-most-popular-girl-names/', (err, res) => {
	if (err) console.error(err)

	let imena = fs.readFileSync('imena2.txt', 'utf8')

	const $ = cheerio.load(res.body)
	const lista = $('ol li')

	lista.map(function() {
		imena += $(this).text() + '\n'
    })
    console.log(imena)

	fs.writeFile('imena3.txt', imena, function(err) {
		if(!err) console.log('upisivanje je uspelo')
	})
})
