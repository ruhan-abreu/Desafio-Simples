const express = require("express");
const app = express();
const port = 3000;
const faker = require("faker");

const cors = require('cors');
app.use(cors());

const generateSubTask = (length) => {
  const arr = [];
  for (let index = 0; index < length; index++) {
    arr.push({
      id: index + 1,
      title: faker.company.catchPhrase(),
    });
  }
  return arr;
};

const generateTask = (id) => ({
  id: id + 1,
  title: `${faker.company.bsAdjective()} ${faker.hacker.verb()}`,
  description: faker.hacker.phrase(),
  tasks: generateSubTask(Math.floor(Math.random() * 100)),
});

const tasks = [];

for (let index = 0; index < Math.floor(Math.random() * 100); index++) {
  tasks.push(generateTask(index));
}
app.get("/tasks", (req, res) => {
  res.json(
    tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
    }))
  );
});

app.get("/task/:id", (req, res) => {
  const id = req.params.id;
  const task = tasks.find((task) => task.id == id);
  if (!task) {
    res.status(404).send("task not found");
  } else {
    res.json(task);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
