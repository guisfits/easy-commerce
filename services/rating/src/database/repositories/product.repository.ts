import { Repository } from '../../deps.ts';
import Product from '../entities/product.entity.ts';
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
