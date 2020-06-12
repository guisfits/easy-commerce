import { createConnection, Connection } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts";

import Buyer from "./entities/Buyer.ts";
import Product from "./entities/Product.ts";
import Rating from "./entities/Rating.ts";

class RatingConnection {

  connection!: Connection;

  async connect() {
    try {
      this.connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5401,
        username: "easy_commerce",
        password: "password",
        database: "rating",
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
