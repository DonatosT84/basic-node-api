const request = require('supertest');
const mongoose = require('mongoose');
const MockMongoose = require('mock-mongoose').MockMongoose;
const mockMongoose = new MockMongoose(mongoose);

const createApp = require('../../../api/app');

let config;

beforeAll(async () => {

  config = {
    db: {
      dbUrl: 'mongodb://test',
      mongoose: mockMongoose
    }
  };

  await mockMongoose.prepareStorage()
    .then(() => {
      mongoose.connect('mongodb://test');
      mongoose.connection.on('connected', () => {
        console.log('db connection is now open');
      });
    })
    .catch((err) => {
      console.log('Mock Error : ', err );
    });

  // replace with test
  // TODO: Replace this with a mock instance,
  // 1. mock - mongoose : https://www.npmjs.com/package/mock-mongoose
  // 2. testcontainers: https://www.npmjs.com/package/testcontainers
});

afterAll(() => {
  mongoose.connection.close();
});

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
console.log(config);
    const app = await createApp(config);
    const response = await request(app).get('/customers');

    expect(response.status).toEqual(200);
    done();
  });
});
