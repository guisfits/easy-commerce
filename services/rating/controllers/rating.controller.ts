import { Repository } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts";
import { connection } from '../database/connection.ts';
import Rating from '../database/entities/Rating.ts';

class RatingController {

  private _repository: Repository<Rating> | undefined;

  constructor() {
    this._repository = connection?.getRepository(Rating)
  }

  async index({ response }: { response: any }) {
    const ratings = await this._repository?.find();
    response.body = { success: true, data: ratings };
  }
}

export default new RatingController();
