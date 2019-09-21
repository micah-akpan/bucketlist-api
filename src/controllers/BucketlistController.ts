import { Response, Request } from 'express';
import BucketlistService from '../services/BucketlistService';

class BucketlistController {
  static async fetchAll(req, res) {
    try {
      const bucketlists = await BucketlistService.getAllBucketlists();
      return res.json({ status: 200, data: bucketlists });
    } catch (e) {
      return res.json({ status: 500, message: 'Something went wrong' });
    }
  }
}

export default BucketlistController;
