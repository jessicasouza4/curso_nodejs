module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		//conexão
		var connection = application.config.dbConnection();
		//model
		var noticiasModel = application.app.models.noticiasModel;
		//salvarNoticia
		noticiasModel.salvarNoticia(noticia, connection, function(error, result){
			res.redirect('/noticias');

		});
	});
};