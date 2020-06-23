# Rating

With Rating, Buyer can rate any product that she thinks is good (1 -> 5 stars).

## Event-Storming

- Buyer create rating for product
  - ProductRated

## User Stories

- As a **Buyer**, I want to **rate for each product** that I think is good (1 -> 5 stars).
- As a **Buyer**, I want to **see ratings from products** to help me choose a better product

## API

- **GET**: `/ratings?productsId=1,2,3`
  - Buyer see ratings from products
- **POST**: `/ratings`
  - Buyer rate for each product 

## Technologies

- Deno: 1.0.5
- Denon
- oak
- TypeORM
- Postgres
- Docker
