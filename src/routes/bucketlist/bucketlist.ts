import { Router } from 'express';
import BucketlistController from '../../controllers/BucketlistController';

const bucketlistRouter = Router();

bucketlistRouter.get('/bucketlists', BucketlistController.fetchAll);

export default bucketlistRouter;
