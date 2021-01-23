var fs = require('fs')
var lineReader1 = require('readline').createInterface({
    input: require('fs').createReadStream('test.txt')
});
var count = 0;
lineReader1.on('line', function(donor){
    
    count = donor;
    const num = parseInt(count)
    console.log(num)
    var count2 = num + 1;
    console.log(count2)
    var data = count2.toString();
    fs.writeFileSync('test.txt', data, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});