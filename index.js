process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');
const cheerio = require('cheerio');

function uniarticles () {}

uniarticles.prototype.getArticles = async function (articulos, callback) {
	var count = 0;
	var art = articulos;
	const counter = 10;
	
	const uni_URL = 'https://archivodenoticias.uni.edu.ni/Articulo/Pagina/';

	let responses = [];
	let results = [];
	let urllist = [];

	for (let index = 2; art > counter; index++){
		if (!urllist.includes(uni_URL + "1")){
			urllist.unshift(uni_URL + "1")
		}
		var uni_URL_mod = uni_URL + index;
		var art = art - counter;
		urllist.push(uni_URL_mod);
	}
	if(urllist.length <= 0){
		urllist.unshift(uni_URL + "1")
	}
	try {
		for (var i = 0; i < urllist.length; i++){
			const res = await axios.get(urllist[i]);
			responses.push(res.data)
			}
		for (var x = 0; x < responses.length; x++){
			const $ = cheerio.load(responses[x])
			const articles = $('article div.col-lg-13');
	
			articles.each(function () {
				const title = $(this).find('a h2').text();
				const date = $(this).find('span.text-muted').text();
				const preview = $(this).find('p').text();
				const redirect = $(this).find('a').attr('href').replace('../../Articulo/',uni_URL.replace('/Pagina',''));
	
				results.push({title, date, preview, redirect});
				});}
	} catch (err) {
		console.error(err);
	}
	for(e of results){
		count++            
		if (count <= articulos){
            var Articles = {};
            Articles.title = e['title']
            Articles.date = e['date']
            Articles.preview = e['preview']
            Articles.redirect = e['redirect']
            callback(null, Articles)
		}
	}
}

module.exports = new uniarticles