import { createConnection, Connection } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts";

import Buyer from "./entities/Buyer.ts";
import Product from "./entities/Product.ts";
import Rating from "./entities/Rating.ts";

let connection: Connection | null;

async function initializeDb() { 
  try {

    if (connection?.isConnected) {
      return;
    }

    console.log("creating new db-connection...")

    connection = await createConnection({
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

  } catch (err) {
    console.error(err);
    connection = null;
  }
}

export { connection, initializeDb }
