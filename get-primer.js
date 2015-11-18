var getModul = require("./get-modul");

var url = 'http://pozorista.net/php/funkcije.php?repertoar=1';
var url2 = "http://pozorista.net/php/funkcije.php?sve_predstave=1";

getModul.dajPodatke(url)
getModul.dajPodatke(url2)
