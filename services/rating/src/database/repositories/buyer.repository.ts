import { Repository } from '../../deps.ts';
import RatingConnection from '../connection.ts';
import Buyer from '../entities/buyer.entity.ts';

class BuyerRepository {

  private _instance: Repository<Buyer> | undefined;

  get instance() {
    if (!this._instance) {
      this._instance = RatingConnection.connection?.getRepository(Buyer);
    }

    return this._instance;
  }
}

export default new BuyerRepository();
