import { Context } from "../deps.ts";
import RatingRepository from '../database/repositories/rating.repository.ts';
import BuyerRepository from '../database/repositories/buyer.repository.ts';
import ProductRepository from '../database/repositories/product.repository.ts';
import Rating from '../database/entities/rating.entity.ts';

class RatingController {

  async index({ response }: Context) {

    const ratings = await RatingRepository.instance
      .createQueryBuilder('ratings')
      .select(['ratings', 'product.name', 'buyer.fullName'])
      .leftJoin('ratings.product', 'product')
      .leftJoin('ratings.buyer', 'buyer')
      .getMany();

    response.body = {
      success: true,
      data: ratings.map((rating: Rating) => {
        return {
          id: rating.id,
          comment: rating.comment,
          rate: rating.rate,
          buyer: rating.buyer.fullName,
          product: rating.product.name
        }
      })
    };
  }

  async create({ response, request }: Context) {
    const body = await request.body();
    const { comment, rate, buyerId, productId } = body.value;

    if (rate < 0 || rate > 5) {
      response.status = 400;
      response.body = {
        success: false,
        message: 'invalid rate'
      }

      return;
    }

    const product = await ProductRepository.instance.findOne(productId)
    const buyer = await BuyerRepository.instance.findOne(buyerId);

    if (!product || !buyer) {
      response.status = 404;
      response.body = {
        success: false,
      }

      return;
    }

    const rating = new Rating();
    rating.buyer = buyer;
    rating.product = product;
    rating.comment = comment;
    rating.rate = rate;
    await RatingRepository.instance.save(rating);

    response.status = 201;
    response.body = {
      success: true,
      data: rating
    }
  }
}

export default new RatingController();
