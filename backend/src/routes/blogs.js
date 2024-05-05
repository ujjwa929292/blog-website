const express = require("express");
const router = express.Router();
const connection = require("../db/db.config");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../../frontend/src/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  connection.query("SELECT * FROM blogs", (error, results) => {
    if (error) {
      console.error("Error" + error);
      res.status(500).json({ error: "Server Error" });
      return;
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
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

router.post("/", upload.single("image"), (req, res) => {
  const { title, content } = req.body;
  const imagePath = req.file.path.replace("backend", "frontend/public");

  connection.query(
    "INSERT INTO blogs (title, content, image) VALUES (?, ?, ?)",
    [title, content, imagePath],
    (error, results) => {
      if (error) {
        console.error("Error inserting blog:", error);
        res.status(500).json({ error: "Server Error" });
        return;
      }
      res.status(201).json({ message: "Blog created successfully" });
    }
  );
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  connection.query(
    "UPDATE blogs SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    (error, results) => {
      if (error) {
        console.error("Error updating blog:", error.stack);
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

// Delete a blog post
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM blogs WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error("Error deleting blog:", error.stack);
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
