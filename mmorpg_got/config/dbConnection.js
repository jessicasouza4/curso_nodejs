/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	
	console.log('Entrou na função de conecxão');
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endreço do servidor
			27017, //porta de conecxão
			{}
		),
		{}
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
	
}