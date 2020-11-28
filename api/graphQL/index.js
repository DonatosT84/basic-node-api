// TODO: check this out: https://www.npmjs.com/package/apollo-server-express
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const Customer = require('../models/customer');

// Construct a schema, using GraphQL schema language
// TODO: move this to the schema file
const typeDefs = gql`
  type Customer {
      name: String
      surname: String
  }
  type Query {
    hello: String
    customerList: [Customer]
  }
`;
 

// Provide resolver functions for your schema fields
// TODO: move this to the resolver
const resolvers = {
  Query: {
        hello: () => 'Hello world!',
        // TODO: Add a filter to the graphQL query 
        customerList: (root, input, context, info) => {

            // resolver logic
            // call to a different microservice
            return Customer.find()
        }
  },
};
 
// TODO: Check put GraphQL Queries
// https://www.apollographql.com/docs/react/data/queries/

function addGraphQLServer(app) { 
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

}


 
module.exports = addGraphQLServer;