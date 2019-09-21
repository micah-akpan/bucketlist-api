import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import routes from './routes';

const app = express();
app.set('json spaces', 2);

app.use(logger('dev'));
app.use(helmet());

routes(app);

export default app;
