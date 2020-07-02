import { InjectRepository } from '@nestjs/typeorm';
import CreateShoppingCartCommand from "./create-shopping-cart.command";

import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from "typeorm";
import Cart from "src/core/domain/carts/cart.entity";
import CartItem from 'src/core/domain/carts/cart-item.entity';
import ProductCatalog from 'src/core/domain/catalogs/product-catalog.entity';
import Shipping from 'src/core/domain/carts/shipping.interface';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateShoppingCartCommand)
export default class CreateShoppingCartCommandHandler implements ICommandHandler<CreateShoppingCartCommand> {

  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(CartItem)
    private cartItemReposiory: Repository<CartItem>,

    @InjectRepository(ProductCatalog)
    private productCatalogRepository: Repository<ProductCatalog>,

    @Inject('Shipping')
    private shipping: Shipping
  ) { }

  async execute(command: CreateShoppingCartCommand): Promise<Cart> {
    const productCatalog = await this.productCatalogRepository.findOne(command.productCatalogId);
    if (!productCatalog) throw new Error('product catalog not found');

    const cart = Cart.create(command.userId);
    await this.cartRepository.save(cart);

    const cartItem = CartItem.create(productCatalog, 1, cart, 0);
    await this.cartItemReposiory.save(cartItem);

    cart.items.push(cartItem);
    cart.calculateCart(this.shipping);

    return cart;
  }
}
