import ratings from '../database/ratings.ts';

class RatingController {
  index({ response }: { response: any }) {
    response.body = {
      success: true,
      data: ratings
    };
  }
}

export default new RatingController();
