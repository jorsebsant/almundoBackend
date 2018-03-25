import * as express from "express";
import { Config } from './config';

// Routes
import { Hotel } from './routes/hotel.route';

export class Server {
  public app:any;
  public port: number;

  constructor(port=8008) {
    this.app = express();
    this.port = port;

    this.appConfig();

    this.setEndPoints();
  }

  appConfig() {
    Config.set(this.app);
  }

  setEndPoints() {
    const router: express.Router = express.Router();

    this.app.use(router);
    Hotel.endPoint(router);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`API running on port ${this.port}`)
    });
  }
}
