import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, WorkersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
