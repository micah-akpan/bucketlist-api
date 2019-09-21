import { Express } from 'express';
import HomeRouter from './root/root';
import bucketlistRouter from './bucketlist/bucketlist';

export default (app: Express) => {
  app.use('/api/v1/', bucketlistRouter);
  app.use('/', HomeRouter);
}
