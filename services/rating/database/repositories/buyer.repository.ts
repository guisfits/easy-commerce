
import { Repository } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts';
import RatingConnection from '../connection.ts';
import Buyer from '../entities/Buyer.ts';

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
