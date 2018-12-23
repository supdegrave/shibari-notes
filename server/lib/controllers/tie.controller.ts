import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { TieModel } from '../models/tie.model';

const Tie = mongoose.model('Tie', TieModel);

export class TieController {
    post(request: Request, response: Response) {
        new Tie(request.body).save((err, tie) => {
            if (err) {
                response.send(err);
            }
            response.json(tie);
        });
    }

    get(request: Request, response: Response) {
        const tieId = request.params.id;
        const getHandler = (err, tie) => {
            if (err) {
                response.send(err);
            }
            response.json(tie);
        }

        if (tieId) {
            Tie.findById(tieId, getHandler);
        } else {
            Tie.find({}, getHandler);
        }
    }

    put(request: Request, response: Response) {
        Tie.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true },
            (err, tie) => {
                if (err) {
                    response.send(err);
                }
                response.json(tie);
            });
    }

    delete(request: Request, response: Response) {
        Tie.deleteOne({ _id: request.params.id }, (err) => {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Tie deleted' });
        });
    }
}
