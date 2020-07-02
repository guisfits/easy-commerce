import * as dotenv from 'dotenv';

interface AppConfiguration {
  environment: string;
  port: number;
}

interface SQLDatabaseConfiguration {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string
}

class ShoppingCartConfiguration {

  constructor() {
    dotenv.config();
  }

  app: AppConfiguration = {
    environment: process.env.NODE_ENV,
    port: Number(process.env.NODE_PORT)
  }

  db: SQLDatabaseConfiguration = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
}

const Configuration = new ShoppingCartConfiguration();
console.log(Configuration);

export default Configuration;
