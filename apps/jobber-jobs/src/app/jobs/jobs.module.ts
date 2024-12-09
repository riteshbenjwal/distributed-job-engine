import { FibonacciJob } from './fibonacci.job';
import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from 'types/auth';

@Module({
  imports: [
    DiscoveryModule,
    ClientsModule.register([
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/auth.proto'),
        },
      },
    ]),
  ],
  providers: [FibonacciJob, JobsService, JobsResolver],
})
export class JobsModule {}
