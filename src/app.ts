import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import routes from './routes';

const app = express();
app.set('json spaces', 2);

helmet();
logger('dev');

routes(app);

export default app;
