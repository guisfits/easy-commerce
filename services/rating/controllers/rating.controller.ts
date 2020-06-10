import Rating from '../database/entities/Rating.ts';

class RatingController {
  async index({ response }: { response: any }) {
    const ratings = await Rating.all();
    response.body = { success: true, data: ratings };
  }
}

export default new RatingController();
