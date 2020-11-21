const request = require('supertest');
const mongoose = require("mongoose");

const createApp = require('../../../api/app');


let config; 
beforeAll(() => { 

  // replace with test
  // TODO: Replace this with a mock instance,
  // 1. mock - mongoose : https://www.npmjs.com/package/mock-mongoose
  // 2. testcontainers: https://www.npmjs.com/package/testcontainers
  require('dotenv').config();
     config = {
      db: {
        dbName: process.env.DB_NAME,
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD
      }
    }

})

afterAll(() => { 
  mongoose.connection.close()
})

describe("Customer Routes", () => { 
    it('should get all customers', async (done) => {
    // const customersSpy = jest.spyOn(customers, 'findAll');
      /*
    customersSpy.mockReturnValue([
      {
        "_id": "5fb3eb2115183126a02941e3",
        "name": "test1",
        "surname": "test1",
        "createdAt": "2020-11-17T15:24:17.987Z",
        "updatedAt": "2020-11-17T15:24:17.987Z",
        "__v": 0
      },
      {
        "_id": "5fb40f1ce7fec434adcbabd8",
        "name": "test2",
        "surname": "test2",
        "createdAt": "2020-11-17T17:57:48.230Z",
        "updatedAt": "2020-11-17T17:57:48.230Z",
        "__v": 0
      },
    ]);
    */
   
    // 1. Create Customer
    // 2. Check that it can get it
    // 3. Update / Delete The customer
      
    const app = await createApp(config);
    const response = await request(app).get('/customers');

    expect(response.status).toEqual(200);
    done();
  });
})
