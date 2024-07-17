import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  // const mockTodosService = {
  //   findAll() {
  //     return {
  //       test: "ok"
  //     }
  //   }
  // }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      // .overrideProvider(TodosService)
      // .useValue(mockTodosService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/ (GET)', async () => {
  //   const result = await request(app.getHttpServer()).get('/todos')
  //   expect(result.statusCode).toBe(200)
  //   expect(JSON.parse(result.text)).toEqual({
  //     test: "ok"
  //   })
  // });
  it('/todos (POST)', async () => {

    const user = {
      title: "ts config",
      description: " pls pla",
      done: false
    }

    const result = await request(app.getHttpServer()).post('/todos').send(user)

    expect(result.statusCode).toBe(201)
    expect(result.body).toEqual({
      id: expect.any(Number),
      ...user
    })
  });
});
