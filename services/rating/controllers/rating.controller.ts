import repository from '../database/repositories/rating.repository.ts';

class RatingController {

  async index({ response }: { response: any }) {

    const ratings = await repository.instance.find();

    response.body = { 
      success: true, 
      data: ratings 
    };
  }
}

export default new RatingController();
