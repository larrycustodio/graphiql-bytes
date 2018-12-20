const graphql = require("graphql");
const { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  // required props (name + field)
  name: "User",
  fields: {
    // field types
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});
