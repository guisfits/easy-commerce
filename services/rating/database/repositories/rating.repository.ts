import { Repository } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts';
import Rating from '../entities/Rating.ts';
import RatingConnection from '../connection.ts';

class RatingRepository {

  private _instance: Repository<Rating> | undefined;

  get instance() {
    if (!this._instance) {
      this._instance = RatingConnection.connection?.getRepository(Rating);
    }

    return this._instance;
  }
}

export default new RatingRepository();
