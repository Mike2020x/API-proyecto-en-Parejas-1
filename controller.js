const {
  getAllData,
  getDataById,
  createData,
  deleteData,
  updateData,
} = require("./model");

function handleGetAllData(req, res) {
  console.log("Middleware Controller");
  const records = getAllData();

  return res.json(records);
}

function handleGetByIdData(req, res) {
  const { id } = req.params;

  const record = getDataById(id);

  if (Object.keys(record).length === 0) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  return res.json(record);
}

function handleDeleteData(req, res) {
  const { id } = req.params;

  deleteData(id);

  return res.json({ message: "Record deleted" });
}

function handleCreateData(req, res) {
  const data = req.body;

  if (
    !data.name ||
    !data.cargo ||
    !data.telefono ||
    !data.email ||
    !data.link
  ) {
    return res.status(400).json({
      error: "Debes completar todos los campos",
    });
  }

  const records = getAllData();
  const existingRecord = records.find(
    (record) => record.name === data.name || record.link === data.link
  );

  if (existingRecord) {
    return res.status(400).json({
      error: "El perfil del miembro ya existe",
    });
  }

  const record = createData(data);
  return res.status(201).json(record);
}

function handleUpdateData(req, res) {
  const { id } = req.params;
  const data = req.body;

  const record = updateData(id, data);

  if (Object.keys(record).length === 0) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  return res.json(record);
}

module.exports = {
  handleGetAllData,
  handleGetByIdData,
  handleDeleteData,
  handleCreateData,
  handleUpdateData,
};
