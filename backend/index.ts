import express from "express";
import cors from "cors";
import * as LocalController from "./src/controller/LocalController";

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", LocalController.store);
app.get("/locals", LocalController.findAll);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
