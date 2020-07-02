import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Cart from "./cart.entity";
import { Repository } from "typeorm";
import CartItem from "./cart-item.entity";
import ProductCatalog from "../catalogs/product-catalog.entity";

@Injectable()
export default class CartsService {

  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>,

    @InjectRepository(ProductCatalog)
    private productCatalogRepository: Repository<ProductCatalog>,
  ) { }

  async insertItemToCart(cartId: string, productId: string, quantity: number, promoSavings = 0): Promise<void> {
    const product = await this.productCatalogRepository.findOne({ productId });
    const cart = await this.cartRepository.findOne({ id: cartId });

    const item = CartItem.create(product, quantity, cart, promoSavings);

    await this.cartItemsRepository.save(item);
  }

  async removeCartItem(itemId: string): Promise<void> {
    const item = await this.cartItemsRepository.findOne(itemId);
    this.cartItemsRepository.softRemove(item);
  }

  async accumulateCartItemQuantity(itemId: string, quantity: number): Promise<void> {
    this.cartItemsRepository.increment({ id: itemId }, 'quantity', quantity);
  }
}
