const router = require("express").Router();
const data = require("../data");

const { v4: uuidv4 } = require("uuid");

router.post("/create-user", (req, res) => {
  data.push({ ...req.body, id: uuidv4() });

  res.status(201).json({ message: "post created with success!", data });
});

router.get("/read", (req, res) => {
  res.status(200).json({ data });
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentElement) => {
    return currentElement.id === id;
  });

  res.status(200).json(document[0]);
});

router.put("/edit/:id", (req, res) => {
  const { id } = req.params;

  data.forEach((currentElement, i) => {
    if (currentElement.id === id) {
      data[i] = { ...req.body, id: currentElement.id };
    }
  });

  const newDocument = data.filter((currentElement) => {
    return currentElement.id === id;
  });

  res.status(200).json(newDocument[0]);
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentElement) => {
    currentElement.id === id;
  });

  const index = data.indexOf(document[0]);

  data.splice(index, 1);

  res.status(200).json({ message: "post deleted with success!", data });
});

module.exports = router;
