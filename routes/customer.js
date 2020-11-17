module.exports = (app) => {
  const customers = require('../controllers/customer.js');

  /**
   * Create a new Customer
   *
   * @swagger
   * /customers:
   *  post:
   *    description: Use to create a customer
   *    tags:
   *      - customers
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: body
   *        name: customer
   *        description: The customer to create
   *        schema:
   *          type: object
   *          required:
   *            - name
   *            - surname
   *          properties:
   *            name:
   *              type: string
   *            surname:
   *              type: string
   *    responses:
   *      '400':
   *        description: Invalid or missing body data
   *      '201':
   *        description: Customer successfully created
   *      '500':
   *        description: Server error
   */
  app.post('/customers', customers.create);

  /**
   * Retrieve all Customers
   *
   * @swagger
   * /customers:
   *  get:
   *    description: Use to retrieve all customers
   *    tags:
   *      - customers
   *    responses:
   *      '200':
   *        description: A successful response with a list of all customers
   */
  app.get('/customers', customers.findAll);

  /**
   * Retrieve a single Customer with id
   *
   * @swagger
   * /customers/{id}:
   *  get:
   *    description: Use to retrieve a customer by id
   *    tags:
   *      - customers
   *    parameters:
   *      - in: path
   *        name: id
   *        type: string
   *        required: true
   *        description: Alphanumeric ID of the customer to get.
   *    responses:
   *      '200':
   *        description: A successful response with the updated customer
   *      '404':
   *        description: Customer ID not found
   *      '500':
   *        description: Server error
   */
  app.get('/customers/:id', customers.findOne);

  /**
   * Update a Customer with id
   *
   * @swagger
   * /customers/{id}:
   *  put:
   *    description: Use to update a customer by id
   *    tags:
   *      - customers
   *    parameters:
   *      - in: path
   *        name: id
   *        type: string
   *        required: true
   *        description: Alphanumeric ID of the customer to update.
   *      - in: body
   *        name: customer
   *        description: The customer to update
   *        schema:
   *          type: object
   *          properties:
   *            name:
   *              type: string
   *            surname:
   *              type: string
   *    responses:
   *      '200':
   *        description: A successful response
   *      '404':
   *        description: Customer ID not found
   *      '500':
   *        description: Server error
   */
  app.put('/customers/:id', customers.update);

  /**
   * Delete a Customer with id
   *
   * @swagger
   * /customers/{id}:
   *  delete:
   *    description: Use to delete a customer
   *    tags:
   *      - customers
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: path
   *        name: id
   *        type: string
   *        required: true
   *        description: Alphanumeric ID of the customer to delete.
   *    responses:
   *      '404':
   *        description: Customer ID not found
   *      '200':
   *        description: Customer successfully deleted
   *      '500':
   *        description: Server error
   */
  app.delete('/customers/:id', customers.delete);
}