/* eslint-disable no-console */
import express, {
  Request, Response,
} from 'express';
import next from 'next';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();

const isDev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: isDev,
});

const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(helmet.hidePoweredBy());
    // server.use(helmet());
    server.use(cors());

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log('> Blast Off Ready On:');
      console.log(`> URL: http://localhost:${port}`);
      console.log(`> ENV: ${process.env.NODE_ENV || 'development'}`);
      console.log(`> PORT: ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
