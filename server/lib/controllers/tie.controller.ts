import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { TieModel } from '../models/tie.model';

const Tie = mongoose.model('Tie', TieModel);

export class TieController {
    post(request: Request, response: Response) {
        new Tie(request.body).save().then(
            (tie: mongoose.Document) => response.json(tie),
            err => response.send(err)
        );
    }

    get(request: Request, response: Response) {
        const tieId = request.params.id;

        if (tieId) {
            Tie.findById(tieId).then(
                (tie: mongoose.Document) => response.json(tie),
                err => response.send(err)
            );
        } else {
            Tie.find({}).then(
                (ties: mongoose.Document[]) => response.json(ties),
                err => response.send(err)
            );
        }
    }

    put(request: Request, response: Response) {
        const tieId = request.params.id;
        let query;

        if (tieId === 'new') {
            // TODO: should this throw?
            console.log(`creating new via put - shouldn't happen!`);
            query = Tie.create(request.body);
        } else {
            const conditions = { _id: tieId };
            const options = { new: true };
            query = Tie.findOneAndUpdate(conditions, request.body, options);
        }

        query.then(
            (tie: mongoose.Document) => response.json(tie),
            err => response.send(err)
        );
    }

    delete(request: Request, response: Response) {
        Tie.deleteOne({ _id: request.params.id }).then(
            _ => response.json({ message: 'Tie deleted' }),
            err => response.send(err)
        );
    }
}
