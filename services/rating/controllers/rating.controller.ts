import repository from '../database/repositories/rating.repository.ts';

class RatingController {

  async index({ response }: { response: any }) {

    const ratings = await repository.instance
      .createQueryBuilder('ratings')
      .select(['ratings', 'product.name', 'buyer.firstName'])
      .leftJoin('ratings.product', 'product')
      .leftJoin('ratings.buyer', 'buyer')
      .getMany();

    response.body = {
      success: true,
      data: ratings.map(rating => {
        return {
          id: rating.id,
          comment: rating.comment,
          rate: rating.rate,
          buyer: rating.buyer.firstName,
          product: rating.product.name
        }
      })
    };
  }
}

export default new RatingController();
