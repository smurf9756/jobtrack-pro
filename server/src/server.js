require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
=====================================
🚀 JobTrack Pro Server Started
🌍 Environment : ${process.env.NODE_ENV || "development"}
📡 URL         : http://localhost:${PORT}
=====================================
`);
});
