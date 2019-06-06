const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.post('/upload', function(req, res) {
  const { slika } = req.files;
  if (!slika) return res.status(400).send('Niste poslali sliku.');

  // slika je Buffer formatu, koji sluzi za tokove binarnih podataka
  console.log(slika)

  // prevodimo je u string, koji mozemo cuvati u bazi
  const slikaString = slika.data.toString('base64')
  console.log(slikaString)
  // TODO: smanjiti sliku pre cuvanja

  res.send('Slika je uspesno sacuvana.')
});

app.listen(8080, () => console.log(`Server sluzi...`))
