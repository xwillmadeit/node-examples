const fs = require('fs');

const readable = fs.createReadStream('player.txt', 'utf8');
const writable = fs.createWriteStream('write.txt');

readable.on('data', (chunk) => {
	writable.write(chunk);
});

readable.on('end', (chunk) => {
	console.log('end');
});