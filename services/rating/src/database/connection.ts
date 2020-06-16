import { createConnection, Connection } from "../deps.ts";

import Buyer from "./entities/buyer.entity.ts";
import Product from "./entities/product.entity.ts";
import Rating from "./entities/rating.entity.ts";
import * as env from "../env.ts";

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

      await this.seed();

      return this.connection;

    } catch (err) {
      console.error(err);
    }
  }

  private async seed() {
    if (this.connection?.isConnected === false) {
      return;
    }

    const hasData = await this.connection?.manager.count(Buyer);
    if (hasData && hasData > 0) {
      return;
    }

    const buyer = new Buyer();
    buyer.firstName = "Bruce Wayne";
    await this.connection?.manager.save(buyer);

    const product = new Product();
    product.name = "playstation 4";
    await this.connection?.manager.save(product);

    const rating1 = new Rating()
    rating1.comment = "best console";
    rating1.rate = 4;
    rating1.product = product;
    rating1.buyer = buyer;
    await this.connection?.manager.save(rating1);

    const rating2 = new Rating();
    rating2.comment = "xbox one is better";
    rating2.rate = 2;
    rating2.product = product;
    rating2.buyer = buyer;
    await this.connection?.manager.save(rating2)
  }
}

export default new RatingConnection();
