const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  id: String,
  nombre: String,
  telefono: String,
  direccion: String,
  localidad: String,
  estado: String,
  comentarios: String,
  usuario: String
  
  
});

module.exports = mongoose.model("Cliente", ClienteSchema);
