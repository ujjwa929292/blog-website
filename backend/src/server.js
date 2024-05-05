const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const blogsRouter = require("./routes/blogs");
app.use("/blogs", blogsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
