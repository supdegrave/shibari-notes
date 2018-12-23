import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';

import { Routes } from './routes';
import { mongoUrl } from '../mongo-url';

class App {

    app: express.Application;
    routes: Routes;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routes = new Routes(this.app);
    }

    private config(): void {
        this.app.use(cors());
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(mongoUrl)
            .then((result: typeof mongoose) => console.log(`connected to mongodb atlas: `, result.connection['host']))
            .catch((reason) => console.warn('catch', reason));
    }

}

export default new App().app;
