import supertest, { SuperTest, Test } from 'supertest';
import app from '../../app';

describe('Index Route', () => {
  let request: SuperTest<Test>;
  beforeAll(() => {
    request = supertest(app);
  });
  it('should return a welcome message to the client', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual('Welcome to BucketList API');
  });
});
