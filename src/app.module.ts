import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { WorkerModule } from './worker/worker.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, WorkerModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
