import supertest from 'supertest';
import app from '../../app';

describe('Bucketlists API test', () => {
  let request;
  beforeAll(() => {
    request = supertest(app);
  })
  describe('Fetch all bucketlists', () => {
    it('should return all bucketlists', async () => {
      const response = await request.get('/api/v1/bucketlists');
      expect(Array.isArray(response.body.data)).toEqual(true);
      expect(response.body.status).toEqual(200);
    })
  })
})
