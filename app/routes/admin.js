module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		//conexão
		var connection = application.config.dbConnection();
		//model
		var NoticiasDAO = new application.app.models.NoticiasDAO(connection);
		//salvarNoticia
		NoticiasDAO.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');

		});
	});
};