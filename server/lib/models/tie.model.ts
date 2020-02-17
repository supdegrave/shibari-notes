import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TieModel = new Schema({
    name: {
        type: String,
        required: 'Tie name',
    },
    description: {
        type: String,
        required: 'Description',
    },
    teacher: {
        type: String,
        required: 'Teacher',
    },
    style: {
        type: String,
    },
    learningContext: {
        type: String,
    },
    tags: {
        type: Array,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});
