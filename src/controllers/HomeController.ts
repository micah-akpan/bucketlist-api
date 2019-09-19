import { Request, Response } from 'express';

class HomeController {
  static greetAPIClient(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Welcome to BucketList API',
      status: 200,
    });
  }
}

export default HomeController;
