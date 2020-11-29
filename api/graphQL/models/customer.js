const Customer = `
  extend type Query {
    customerList: [Customer]
    customersFiltered(filter: CustomerFilter): [Customer!]!
  }
  
  type Customer {
    name: String
    surname: String
  }
  
  input CustomerFilter {
    OR: [CustomerFilter!]
    name_contains: String
    surname_contains: String
  }
`;

module.exports = Customer;