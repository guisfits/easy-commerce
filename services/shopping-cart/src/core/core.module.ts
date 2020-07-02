import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Configuration from './infra/configuration';
import InventoryGateway from './gateways/inventory.gateway';
import PromoGateway from './gateways/promo.gateway';
import ShippingGateway from './gateways/shipping.gateway';
import CartsService from './domain/carts/carts.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: Configuration.db.host,
      port: Configuration.db.port,
      username: Configuration.db.username,
      password: Configuration.db.password,
      database: Configuration.db.database,
      autoLoadEntities: true
    })
  ],
  providers: [
    CartsService,
    {
      provide: 'Inventory',
      useClass: InventoryGateway
    },
    {
      provide: 'Promo',
      useClass: PromoGateway
    },
    {
      provide: 'Shipping',
      useClass: ShippingGateway
    }
  ]
})
export class CoreModule { }

