import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Configuration from './infra/configuration';

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
  ]
})
export class CoreModule { }

