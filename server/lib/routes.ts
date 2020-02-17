import { Request, Response } from 'express';
import { TieController } from './controllers/tie.controller';

export class Routes {
    public tieController: TieController = new TieController();

    constructor(app) {
        app.route('/').get((request: Request, response: Response) => {
            response.status(200).send({
                message: 'GET success',
            });
        });

        app.route('/api/ties')
            // Create a new tie
            .post(this.tieController.post)
            // Get all ties
            .get(this.tieController.get);

        app.route('/api/ties/:id')
            // get a specific tie by id
            .get(this.tieController.get)
            // update a specific tie
            .post(this.tieController.post)
            // update a specific tie
            .put(this.tieController.put)
            // /lib/routes/crmRoutes.ts
            .delete(this.tieController.delete);
    }
}
