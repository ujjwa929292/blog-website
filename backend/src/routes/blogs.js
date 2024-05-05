const express = require("express");
const router = express.Router();
const connection = require("../db/db.config");

router.get("/blogs", (req, res) => {
  connection.query("SELECT * FROM blogs", (error, results) => {
    if (error) {
      console.error("Error" + error.stack);
      res.status(500).json({ error: "Server Error" });
      return;
    }
    res.json(results);
  });
});

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM blogs WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error" + error.stack);
        res.status(500).json({ error: "Server Error" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Blog not found" });
      } else {
        res.json(results[0]);
      }
    }
  );
});


router.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  connection.query(
    "INSERT INTO blogs (title, content) VALUES (?, ?)",
    [title, content],
    (error, results) => {
      if (error) {
        console.error("Error" + error.stack);
        res.status(500).json({ error: "Server Error" });
        return;
      }
      res
        .status(201)
        .json({ message: "Blog created successfully", id: results.insertId });
    }
  );
});

router.put("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  connection.query(
    "UPDATE blogs SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    (error, results) => {
      if (error) {
        console.error("Error" + error.stack);
        res.status(500).json({ error: "Server Error" });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Blog not found" });
      } else {
        res.json({ message: "Blog updated successfully", id: id });
      }
    }
  );
});

router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM blogs WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error("Error" + error.stack);
      res.status(500).json({ error: "Server Error" });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Blog not found" });
    } else {
      res.json({ message: "Blog deleted successfully", id: id });
    }
  });
});

module.exports = router;
