import { Router } from 'express';
import BucketlistController from '../../controllers/BucketlistController';

const bucketlistRouter = Router();

bucketlistRouter.get('/bucketlists', BucketlistController.fetchAll);
bucketlistRouter.get('/bucketlists/:id', BucketlistController.fetchABucketlist);

export default bucketlistRouter;
