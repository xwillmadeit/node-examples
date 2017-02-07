const fs = require('fs');

// 默认传输 buffer ，如果指定编码，则传输内容
const readStream = fs.createReadStream('player.txt', 'utf8');

// 如果 hello.txt 文件很大，chunk received... 可能会执行多次
readStream.on('data', (chunk) => {
	console.log('chunk received...');
	console.log(chunk);
});

readStream.on('end', (chunk) => {
	console.log('chunk totally received...');
});