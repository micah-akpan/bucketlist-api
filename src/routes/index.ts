import { Express } from 'express';

export default (app: Express) => {
  app.use('/', (req, res) => res.status(200).json({
    message: 'Welcome to my page!',
    status: 200,
  }));
};
