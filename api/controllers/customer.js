const Customer = require('../models/customer');

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if(!req.body) {
    return res.status(400).send({
      message: "Customer body can not be empty"
    });
  }

  // Create a Customer
  const customer = new Customer({
    name: req.body.name,
    surname: req.body.surname
  });

  // Save Customer in the database
  customer.save()
    .then(customer => {
      res.status(201).json({
        createdCustomer: customer
      });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Customer."
      });
  });
};

// Retrieve and return all customers from the database.
exports.findAll = (req, res) => {
  Customer.find()
    .then(customers => {
      res.send(customers);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving customers."
    });
  });
};

// Find a single customer with an id
exports.findOne = (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      if (!customer) {
        return res.status(404).send({
          message: "Customer not found with id " + req.params.id
        });
      }
      res.send(customer);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Customer not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving customer with id " + req.params.id
      });
  });
};

// Update a customer identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.body) {
    return res.status(400).send({
      message: "Customer body can not be empty"
    });
  }

  // Find note and update it with the request body
  Customer.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    surname: req.body.surname
  }, {new: true})
    .then(customer => {
      if(!customer) {
        return res.status(404).send({
          message: "Customer not found with id " + req.params.id
        });
      }
      res.send(customer);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Customer not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Error updating customer with id " + req.params.id
    });
  });
};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
  Customer.findByIdAndRemove(req.params.id)
    .then(customer => {
      if(!customer) {
        return res.status(404).send({
          message: "Customer not found with id " + req.params.id
        });
      }
      res.send({message: "Customer deleted successfully!"});
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Customer not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Could not delete customer with id " + req.params.id
    });
  });
};
