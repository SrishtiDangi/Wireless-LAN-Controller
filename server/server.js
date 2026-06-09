import express from "express";
import cors from "cors";
import fs from "fs";
import ecosystem from "./data/ecosystem.json" with { type: "json" };
const app = express();

app.use(cors());

const overview = JSON.parse(
  fs.readFileSync("./data/overview.json", "utf8")
);

app.get("/api/overview", (req, res) => {
  res.json(overview);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/api/ecosystem", (req, res) => {
  res.json(ecosystem);
});