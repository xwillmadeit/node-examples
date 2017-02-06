const fs = require('fs');
const request = require('request');
const $ = require('cheerio');

const url = 'https://tuchong.com/275223/';

request(url, (error, response, body) => {
  if (!error && response.statusCode == 200) {
  	const hrefs = $('.post-collage .theatre-view', body);
	Array.from(hrefs).forEach(href => {
		download(href.attribs.href);
	});
  }
});

function download(href) {
	request(href, (error, response, body) => {
	  if (!error && response.statusCode == 200) {
	  	const imgs = $('.copyright-contextmenu', body);
		Array.from(imgs).forEach(img => {
			request(img.attribs.src).pipe(fs.createWriteStream(`${Math.random()}.png`));
		});
	  }
	});
}