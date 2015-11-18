var babel = require("babel-core")

// prevodi blok koda
var kod = "x => x + 2"
var prevedeno = babel.transform(kod)
console.log(prevedeno.code)

// prevodi fajl
babel.transformFile("filtered.js", function (err, result) {
  result; // => { code, map, ast }
  console.log(result.code)
});
