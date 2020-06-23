# Rating

With Rating, Buyer can rate any product that she thinks is good (1 -> 5 stars).

## Event-Storming

- Buyer create rating for product
  - ProductRated

## User Stories

- As a **Buyer**, I want to **rate for each product** that I think is good (1 -> 5 stars).
- As a **Buyer**, I want to **see ratings from a product** to help me choose a better product

## API

- **GET**: /products/:productId/ratings
  - Buyer see ratings from a product
- **POST**: /products/:productId/ratings
  - Buyer rate for each product 

## Technologies

- Deno: 1.0.5
- Denon
- oak
- TypeORM
- Postgres
- Docker
