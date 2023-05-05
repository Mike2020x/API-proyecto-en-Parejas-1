const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const {
  handleGetAllData,
  handleGetByIdData,
  handleDeleteData,
  handleCreateData,
  handleUpdateData,
} = require("./controller");

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/members", handleGetAllData);

app.get("/api/members/:id", handleGetByIdData);

app.post("/api/members", handleCreateData);

app.patch("/api/members/:id", handleUpdateData);

app.delete("/api/users/:id", handleDeleteData);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
