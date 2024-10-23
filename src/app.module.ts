import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './app/health/api/health.controller';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
