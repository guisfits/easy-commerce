import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import CheckoutCartCommand from './checkout-cart.command';
import Cart from 'src/core/domain/carts/cart.entity';

@CommandHandler(CheckoutCartCommand)
export default class CheckoutCartCommandHandler implements ICommandHandler<CheckoutCartCommand> {

  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    private publisher: EventPublisher
  ) { }

  async execute(command: CheckoutCartCommand): Promise<void> {
    const cart = this.publisher.mergeObjectContext(await this.cartRepository.findOne(command.cartId));
    if (!cart) throw new Error('cart not found');

    cart.checkout();
    cart.commit();
  }
}
