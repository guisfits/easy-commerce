import { Database } from 'https://deno.land/x/denodb/mod.ts';
import Buyer from './entities/Buyer.ts';
import Product from './entities/Product.ts';
import Rating from './entities/Rating.ts';

const db = new Database('postgres', {
  database: 'rating',
  host: 'localhost',
  port: 5401,
  username: 'easy_commerce',
  password: 'password',
});

db.link([Buyer, Rating, Product]);
db.sync({ drop: true });

export default db;

