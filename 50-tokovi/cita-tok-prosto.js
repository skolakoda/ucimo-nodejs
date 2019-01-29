#!/usr/bin/env node
// oznacen kao izvrsni fajl

require('fs')
  .createReadStream('lorem.txt')
  .pipe(process.stdout)