import { Opmerking } from './opmerking/opmerking.model';
export class Topic {
    private _id: string;
    private _name: string;
    private _opmerkingen: Opmerking[];    

    static fromJSON(json): Topic {
        const rec = new Topic(json.name, json.opmerkingen);
        rec._id = json._id;
        return rec;
    }

    constructor(name: string, opmerkingen?: Opmerking[]) {
        this._name = name;
        this._opmerkingen = opmerkingen || new Array<Opmerking>();        
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    set opmerkingen(opmerking: Opmerking[]) {
        this._opmerkingen = opmerking;
    }

    get opmerkingen(): Opmerking[] {
        return this._opmerkingen;
    }

    addIngredient(opmerk: Opmerking) {
        this._opmerkingen.push(opmerk);
    }    

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            opmerkingen: this._opmerkingen
        };
    }

}
