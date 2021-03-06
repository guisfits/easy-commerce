import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from 'src/sys-admin/controllers/shopping-cart-controller';

describe('ShoppingCart Controller', () => {
  let controller: ShoppingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartController],
    }).compile();

    controller = module.get<ShoppingCartController>(ShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
