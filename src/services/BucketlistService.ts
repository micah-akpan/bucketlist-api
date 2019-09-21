import { Bucketlist } from '../db/models/index.js';

class BucketlistService {
  static getAllBucketlists() {
    return Bucketlist.findAll();
  }

  static getABucketlist(id: string) {
    return Bucketlist.findByPk(id);
  }
}

export default BucketlistService;
