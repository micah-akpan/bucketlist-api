import { Express } from 'express';
import HomeController from '../controllers/HomeController';

export default (app: Express) => {
  app.use('/', HomeController.greetAPIClient);
};
