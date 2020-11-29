const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// TODO: Check put GraphQL Queries
// https://www.apollographql.com/docs/react/data/queries/

function addGraphQLServer(app) {
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });

    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app });

}


 
module.exports = addGraphQLServer;