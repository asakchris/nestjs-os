import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpensearchModule } from '@app/opensearch';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    OpensearchModule.forRootAsync({
      clientName: 'os1',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        node: configService.get<string>('opensearch.node'),
        auth: {
          username: configService.get<string>('opensearch.username'),
          password: configService.get<string>('opensearch.password'),
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
