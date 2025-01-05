// ? (Entry point)

const app = require("./src/app");
const PORT = 3000;

//Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
