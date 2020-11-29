const { gql } = require('apollo-server-express');

const Customer = require('./models/customer');

const Query = gql`
  type Query {
    _empty: String
  }`;

const typeDefs = [ Query, Customer ];

module.exports = typeDefs;