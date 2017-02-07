const fs = require('fs');

const readable = fs.createReadStream('player.txt', 'utf8');
const writable = fs.createWriteStream('pipe.txt');

readable.pipe(writable);

// 注意，http 的 response 也是 writable stream
// express server
// app.get('/', (req, res) => {
// 	readable.pipe(res);
// });