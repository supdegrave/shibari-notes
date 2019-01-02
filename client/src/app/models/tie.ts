export class Tie implements ShibariNotes.Tie {

    private _tie: ShibariNotes.Tie;

    _id: string;
    name: string;
    description: string;
    teacher: String;
    style: String;
    learningContext: String;
    tags: string[];
    created: string;

    constructor(tie: ShibariNotes.Tie) {
        // store incoming object, for isDirty comparison / discard
        this._tie = tie;
        Object.assign(this, tie);
    }

    get id(): string {
        return this._id;
    }

    get isDirty(): boolean {
        const originalTieProps = Object.getOwnPropertyNames(this._tie);
        return originalTieProps.some((prop: string) => this[prop] !== this._tie[prop]);
    }

    discardChanges(): void {
        Object.assign(this, this._tie);
    }

}
