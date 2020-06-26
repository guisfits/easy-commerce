import { Module } from '@nestjs/common';
import { BuyerModule } from './buyer/buyer.module';
import { SysAdminModule } from './sys-admin/sys-admin.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [BuyerModule, SysAdminModule, CoreModule],
})
export class AppModule {}
