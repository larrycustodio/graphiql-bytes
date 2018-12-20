const mockData = require("./mockData");
const graphql = require("graphql");
const {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;
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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return (
          mockData.users.length &&
          mockData.users.find(user => user.id === args.id)
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
