require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphiql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Node server running at http://localhost:${PORT}/`);
});
