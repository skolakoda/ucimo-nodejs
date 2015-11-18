var http = require('http');
var urls = process.argv;
var urls = urls.slice(2, urls.length);
var svipodaci = [];
var cekanje = 0;

urls.map(provrtIpodatke);

function provrtIpodatke(url,index){
    http.get(url, function obradiOdgovor(res){
        cekanje++;
        var ceopodatak = "";
        res.setEncoding('utf8');
        res.on('data',function (data){
          ceopodatak += data
        });
        res.on('end', function(){
            svipodaci[index] = ceopodatak;
            cekanje--;
            if (!cekanje) {
                svipodaci.map(function(podatak){
                  console.log(podatak)
                });
            }
        });
    });
}