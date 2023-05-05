const table = require("@makeitrealcamp/db-mock");

const r1 = table.insert({
  name: "Michael",
  cargo: "Frontend Developer",
  telefono: 3222322232,
  email: "mgt@gmail.com",
  link: "https://github.com/Mike2020x",
  id: 1,
});
const r2 = table.insert({
  name: "Juan",
  cargo: "Frontend Developer",
  telefono: 516165161,
  email: "jc@gmail.com",
  link: "https://github.com/juanxavier357",
  id: 2,
});

function getAllData() {
  const records = table.findAll();

  return records;
}

function getDataById(id) {
  const record = table.findById(id);

  return record;
}

function createData(data) {
  const record = table.insert(data);

  return record;
}

function updateData(id, data) {
  const dataToUpdate = {
    id,
    ...data,
  };

  const record = table.update(dataToUpdate);

  return record;
}

function deleteData(id) {
  const record = table.remove(id);

  return record;
}

function getLength() {
  const records = table.findAll();
  return records.length;
}

module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
  getLength,
};
