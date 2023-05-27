const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 3000;

require("./db/connectDB");
app.use(express.json());

app.use(require("./routes/mood"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
