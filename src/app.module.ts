import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { ActionController } from './action/action.controller';
@Module({
  imports: [UsersModule, WorkersModule, AuthModule],
  controllers: [ActionController],
  providers: [],
})
export class AppModule {}
