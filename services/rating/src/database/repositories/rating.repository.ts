import { Repository } from '../../deps.ts';
import Rating from '../entities/rating.entity.ts';
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
