export class Tie implements ShibariNotes.Tie {

    _id: string;
    name: string;
    description: string;
    teacher: String;
    style: String;
    learningContext: String;
    tags: string[];
    created: string;

    constructor(tie: ShibariNotes.Tie) {
        Object.assign(this, tie);
    }

    isDirty: boolean;

    get id() {
        return this._id;
    }

}
