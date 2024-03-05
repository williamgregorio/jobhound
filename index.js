const server = require("./api/server");

const PORT = process.env.PORT || 9393;

server.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});
