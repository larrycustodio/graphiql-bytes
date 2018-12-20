require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Node server running at http://localhost:${PORT}/`);
});
