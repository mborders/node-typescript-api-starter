import * as bodyParser from "body-parser";
import * as express from "express";
import * as helmet from "helmet";
import * as RootController from "./controllers/RootController";

class App {
  public express: express.Express;
  private router: express.Router;

  constructor () {
    this.express = express();
    this.router = express.Router();

    this.configureRouter();
    this.mountRoutes();
  }

  /**
   * Configure server behavior
   */
  private configureRouter(): void {
    /* Secure with Helmet */
    this.router.use(helmet());

    /* Parse request bodies as JSON */
    this.router.use(bodyParser.urlencoded({ extended: false }));
    this.router.use(bodyParser.json());
  }

  /**
   * Mount REST API routes
   */
  private mountRoutes(): void {
    /* REST routes */
    this.router.get("/", RootController.getRoot);

    this.express.use("/api", this.router);
  }
}

export default new App().express;
