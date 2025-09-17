const request = require('supertest');
const express = require('express');
const productosRoutes = require('../routes/productos');

const app = express();
app.use(express.json());
app.use('/api/productos', productosRoutes);

describe("API Productos", () => {
  it("debería devolver una lista vacía al inicio", async () => {
    const res = await request(app).get('/api/productos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
