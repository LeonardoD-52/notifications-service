import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['apt-sheepdog-7179-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YXB0LXNoZWVwZG9nLTcxNzkkk9St27fLr8Dl4rfME-6iHJjVS6c1SqCz0VSCdRc',
          password:
            'ZZVeGfwAnXPAQ4uedlnWT3f4XyOvkARXqhMIx4FmrDx4pkJf0wh-wtJka4MGu26qWklLiQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
