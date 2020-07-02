import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Cart from "./cart.entity";
import { Repository } from "typeorm";
import CartItem from "./cart-item.entity";
import ProductCatalog from "../catalogs/product-catalog.entity";
import Shipping from './shipping.interface';
import ShoppingCartCheckedOut from 'src/core/events/shopping-cart-checked-out.event';

@Injectable()
export default class CartsService {

  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>,

    @InjectRepository(ProductCatalog)
    private productCatalogRepository: Repository<ProductCatalog>,

    @Inject('Shipping')
    private shippingGateway: Shipping
  ) { }

  async findCartItem(cartId: string, productId: string): Promise<CartItem> {
    return await this.cartItemsRepository
      .createQueryBuilder('item')
      .innerJoin('item.cart', 'cart')
      .innerJoin('item.product', 'product')
      .where('cart.id = :cartId', { cartId })
      .orWhere('product.id = :productId', { productId })
      .select('item.*')
      .getOne();
  }

  async findCartItemById(itemId: string): Promise<CartItem> {
    return await this.cartItemsRepository.findOne(itemId);
  }

  async insertItemToCart(cartId: string, productId: string, quantity: number, promoSavings = 0): Promise<void> {
    const product = await this.productCatalogRepository.findOne({ productId });
    const cart = await this.cartRepository.findOne({ id: cartId });

    const item = CartItem.create(product, quantity, cart, promoSavings);

    await this.cartItemsRepository.save(item);
  }

  async removeCartItem(itemId: string): Promise<void> {
    const item = await this.findCartItemById(itemId)
    this.cartItemsRepository.softRemove(item);
  }

  async accumulateCartItemQuantity(itemId: string, quantity: number): Promise<void> {
    this.cartItemsRepository.increment({ id: itemId }, 'quantity', quantity);
  }

  async calculateCart(cartId: string): Promise<Cart> {
    const cart = await this.cartRepository.findOne(cartId);
    if (!cart.items) return;

    cart.cartItemTotal = 0;
    cart.items.forEach(item => {
      cart.cartItemPromoSavings += item.promoSavings * item.quantity;
      cart.cartItemTotal += item.product.price * item.quantity;
    });

    cart.shippingTotal = await this.shippingGateway.calculateShipping(cart);
    cart.cartTotal = cart.cartItemTotal + cart.shippingTotal;

    return cart;
  }

  checkout(cart: Cart): void {
    cart.isCheckout = true;
    const event = new ShoppingCartCheckedOut(cart.id);
  }
}
