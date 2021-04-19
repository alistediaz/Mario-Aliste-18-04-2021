var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var todoSchema = new Schema({
	titulo:    { type: String },
    detalle:  { type: String },
    categ:    { type: String, enum:
                ['Semanal', 'Mensual', 'Anual']
            } 
});


module.exports = mongoose.model('ToDo', todoSchema);