const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Brooh! Cinebook CI/CD with GitHub Actions, ECR and EKS is Working! 🚀");
});

app.listen(PORT, () => {
  console.log(`Cinebook running on port ${PORT}`);
});
