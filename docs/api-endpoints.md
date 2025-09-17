# Endpoints API - Sistema de Inventario

## Productos
- POST /api/productos
  - Body: { code, name, category, price, stock }
- GET /api/productos

## Ventas
- POST /api/ventas
  - Body: { items: [ { productId, quantity } ] }
  - Respuestas:
    - 201: Venta creada
    - 409: Stock insuficiente
- GET /api/ventas
