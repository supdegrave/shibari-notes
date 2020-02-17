import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { serverEnvironment } from './environment';
import { Routes } from './routes';

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
        const mongoUrl: string =
            process.env.MONGODB_URI || serverEnvironment.localDatabase;
        const options = { useNewUrlParser: true };

        mongoose
            .connect(mongoUrl, options)
            .then(this.mongoose_onConnectSuccess)
            .catch(this.mongoose_onConnectError);
    }

    private mongoose_onConnectSuccess(result: typeof mongoose) {
        console.log(`connected to mongodb: `, result.connection['host']);
    }

    private mongoose_onConnectError(reason: any) {
        console.warn('unable to connect to mongodb', reason);
    }
}

export default new App().app;
