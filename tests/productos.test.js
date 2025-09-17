const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/backend/server');

describe('Productos API', () => {
  beforeAll(async () => {
    // Connect to a test database if needed
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/productos')
      .send({ code: 'T001', name: 'Test Product', category: 'Test', price: 10, stock: 5 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Test Product');
  });

  it('should list products', async () => {
    const res = await request(app).get('/api/productos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
