const Customer = require('../../models/customer');

function buildFilters({OR = [], name_contains, surname_contains}) {
  const filter = (name_contains || surname_contains) ? {} : null;

  if (name_contains) {
    filter.name = {$regex: `.*${name_contains}.*`};
  }

  if (surname_contains) {
    filter.surname = {$regex: `.*${surname_contains}.*`};
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(buildFilters(OR[i]));
  }

  return filters;
}

const resolvers = {
  Query: {
    // TODO: Add a filter to the graphQL query
    customerList: (root, input, context, info) => {
      // resolver logic
      // call to a different microservice
      return Customer.find()
    },

    customersFiltered: async (root, {filter}) => {
      let query = filter ? {$or: buildFilters(filter)} : {};
      return await Customer.find(query);
    },
  }
}

module.exports = resolvers;