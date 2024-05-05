const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const blogsRouter = require("./routes/blogs");
app.use("/blogs", blogsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
