var fs = require('fs')
var count = 1
var data = count.toString()
fs.writeFileSync('test.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


