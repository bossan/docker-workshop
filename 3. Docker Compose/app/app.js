const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { Dog } = require("./models");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(
    Buffer.from(
      '<html><body><a href="/api-docs">Go to API Docs</a></body></html>'
    )
  );
  return res.status(200);
});

app.get("/dogs", async (req, res) => {
  const allDogs = await Dog.find();
  return res.status(200).json(allDogs);
});

app.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const dog = await Dog.findById(id);
  return res.status(200).json(dog);
});

app.post("/dogs", async (req, res) => {
  const newDog = new Dog({ ...req.body });
  const insertedDog = await newDog.save();
  return res.status(201).json(insertedDog);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
