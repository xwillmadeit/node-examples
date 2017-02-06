const fs = require('fs');

const readable = fs.createReadStream('player.txt');
const writable = fs.createWriteStream('final.txt');

// const readable = fs.createReadStream('player.txt');
// const writable = fs.createWriteStream('final.txt');
// readable.pipe(writable);

let writeData;

readable.on('data', (chunk) => {
	const players = JSON.parse(chunk.toString()).players;
	const championsMoreThenFive = players.filter(player => player.champions > 3);

	writeData = {
		players: [...championsMoreThenFive]
	}
});

readable.on('end', () => {
	writable.write(JSON.stringify(writeData));
});