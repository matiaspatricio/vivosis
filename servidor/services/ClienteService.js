const ClienteModel = require("../models/cliente");

exports.getAllClientes = async () => {
  return await ClienteModel.find();
};

exports.createCliente = async (cliente) => {
  return await ClienteModel.create(cliente);
};
exports.getClienteById = async (id) => {
  return await ClienteModel.find({localidad: id});
};

exports.updateCliente = async (id, cliente) => {
  return await ClienteModel.findByIdAndUpdate(id, cliente);
};

exports.deleteCliente = async (id) => {
  return await ClienteModel.deleteOne({id: id});


// Faltaria un servicio para obtener  por otro criterio ej localidad , nombre
};
