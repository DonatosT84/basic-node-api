const { merge } = require('lodash');

const customerResolvers = require('./resolvers/customer');

const resolvers = merge({}, customerResolvers);

module.exports = resolvers;