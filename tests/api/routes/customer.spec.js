const request = require("supertest");
const mongoose = require("mongoose");
const MockMongoose = require("mock-mongoose").MockMongoose;
const mockMongoose = new MockMongoose(mongoose);

const createApp = require("../../../api/app");

let config;

let app;

beforeAll(async (done) => {
  config = {
    db: {
      dbUrl: "mongodb://test",
      mongoose: mockMongoose,
    },
  };

  await mockMongoose.prepareStorage();

  await mongoose.connect("mongodb://test");

  app = await createApp(config);
  // replace with test
  // TODO: Replace this with a mock instance,
  // 1. mock - mongoose : https://www.npmjs.com/package/mock-mongoose
  // 2. testcontainers: https://www.npmjs.com/package/testcontainers
  done();
});

afterAll(async (done) => {
  await mongoose.connection.close();
  done();
});

describe("Customer Routes", () => {
  it("should get all customers", function (done) {
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
    request(app)
      .post("/customers")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ name: "donatos", surname: "tasis" })
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        console.log(res.body);
        done();
      });
  });
});
