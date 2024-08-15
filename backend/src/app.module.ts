import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TokenBlacklistModule } from './token-blacklist/token-blacklist.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, TokenBlacklistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
