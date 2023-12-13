const app = require("./api/server.ts");

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
