import { Bucketlist } from '../db/models/index.js';

class BucketlistService {
  static getAllBucketlists() {
    return Bucketlist.findAll();
  }
}

export default BucketlistService;
