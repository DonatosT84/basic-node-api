const app = require('../../../api/app');
const request = require('supertest');
const customers = require('../../../api/controllers/customer');

const testCustomerRoutes = () => {
  it('should get all customers', async (done) => {
    const customersSpy = jest.spyOn(customers, 'findAll');
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

    const response = await request(app).get('/customers');

    expect(response.status).toEqual(200);
    done();
  });
};

module.exports = testCustomerRoutes