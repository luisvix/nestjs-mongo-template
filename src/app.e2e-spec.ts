import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { loadTestConfig } from './config/helpers/load-config.helper';
import { version } from '../package.json';

describe('App (e2e)', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    loadTestConfig();

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET', () => {
    describe('/health', () => {
      it('should response 200', async () => {
        const { statusCode, payload } = await app.inject({ method: 'GET', url: '/health' });

        expect(statusCode).toEqual(200);
        expect(payload).toEqual('OK');
      });
    });

    describe('/version', () => {
      it('should response 200', async () => {
        const { statusCode, payload } = await app.inject({ method: 'GET', url: '/version' });

        expect(statusCode).toEqual(200);
        expect(payload).toEqual(version);
      });
    });
  });
});
