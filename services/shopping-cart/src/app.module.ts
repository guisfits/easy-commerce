import { Module } from '@nestjs/common';
import { BuyerModule } from './buyer/buyer.module';
import { SysAdminModule } from './sys-admin/sys-admin.module';

@Module({
  imports: [BuyerModule, SysAdminModule],
})
export class AppModule {}
