module.exports = function(app) {

	var ToDo = require('../models/todo.js');
  
	findAllToDos = function(req, res) {
		ToDo.find(function(err, todos) {
			if(!err) {
		  console.log('GET /todos')
				res.send(todos);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};
  
	findById = function(req, res) {
		ToDo.findById(req.params.id, function(err, todo) {
			if(!err) {
		  console.log('GET /todo/' + req.params.id);
				res.send(todo);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};
  
	addToDo = function(req, res) {
		console.log('POST');
		console.log(req.body);
  
		var todo = new ToDo({
			titulo:    req.body.titulo,
        	detalle:  req.body.detalle,
        	categ: req.body.categ 
		});
  
		todo.save(function(err) {
			if(!err) {
				console.log('Created');
			} else {
				console.log('ERROR: ' + err);
			}
		});
  
		res.send(todo);
	};
  
	updateToDo = function(req, res) {
		ToDo.findById(req.params.id, function(err, todo) {
			titulo =   req.body.titulo;
        	detalle =  req.body.detalle;
        	categ =    req.body.categ;
  
			todo.save(function(err) {
				if(!err) {
					console.log('Updated');
				} else {
					console.log('ERROR: ' + err);
				}
				res.send(todo);
			});
		});
	}
  
	deleteToDo = function(req, res) {
		ToDo.findById(req.params.id, function(err, todo) {
			todo.remove(function(err) {
				if(!err) {
					console.log('Removed');
				} else {
					console.log('ERROR: ' + err);
				}
			})
		});
	}
  
	app.get('/todos', findAllToDos);
	app.get('/todo/:id', findById);
	app.post('/todo', addToDo);
	app.put('/todo/:id', updateToDo);
	app.delete('/todo/:id', deleteToDo);
  
  }