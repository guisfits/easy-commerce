import { Repository } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts';
import Product from '../entities/Product.ts';
import RatingConnection from '../connection.ts';

class ProductRepository {

  private _instance: Repository<Product> | undefined;

  get instance() {
    if (!this._instance) {
      this._instance = RatingConnection.connection?.getRepository(Product);
    }

    return this._instance;
  }
}

export default new ProductRepository();
