module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia','Notícia é obrigatório').notEmpty();

		var erros = req.validationErros();
		if (erros){
			res.render("admin/form_add_noticia");
			return;
		}
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