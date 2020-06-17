import { createConnection, Connection } from "../deps.ts";

import Buyer from "./entities/buyer.entity.ts";
import Product from "./entities/product.entity.ts";
import Rating from "./entities/rating.entity.ts";
import env from "../env.ts";

class RatingConnection {

  connection!: Connection;

  async connect() {
    try {
      this.connection = await createConnection({
        type: "postgres",
        host: env.DB_HOST,
        port: env.DB_PORT,
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        entities: [
          Rating,
          Product,
          Buyer,
        ],
        synchronize: true,
        logging: true,
      });

      return this.connection;

    } catch (err) {
      console.error(err);
    }
  }
}

export default new RatingConnection();
