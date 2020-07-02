import { createQueryBuilder } from 'typeorm';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import GetProductFromCartQuery from "./get-products-from-cart.query";
import GetProductsFromCartVM from './get-products.from-cart.interface';

@QueryHandler(GetProductFromCartQuery)
export default class GetProductFromCartQueryHandler implements IQueryHandler<GetProductFromCartQuery>{

  async execute(query: GetProductFromCartQuery): Promise<GetProductsFromCartVM[]> {
    return await createQueryBuilder('cart')
      .innerJoinAndSelect('cart.items', 'item')
      .innerJoinAndSelect('item.product', 'product')
      .where('cart.id = :cartId', { cartId: query.cartId })
      .select([
        'product.productId',
        'product.name',
        'product.price',
        'product.imagePath',
        'item.quantity'
      ])
      .getRawMany<GetProductsFromCartVM>();
  }
}
