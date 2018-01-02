import { Data } from "@angular/router/src/config";

export class Break {
    private _id: string;
    private _aantalpunten: number;
    private _datum: Date;
    private _user: string;    

    static fromJSON(json): Break {
        console.log(json);
        const rec = new Break(json.aantalpunten, json.datum, json.user);
        rec._id = json._id;
        return rec;
    }

    constructor(aantalpunten: number, datum: Date, user?: string) {
        this._aantalpunten = aantalpunten;
        this._datum = datum;
        this._user = user || "";
                
    }

    get id(): string {
        return this._id;
    }
    get aantalpunten(): number {
        return this._aantalpunten;
    }
    set aantalpunten(aantalpunten: number) {
        this._aantalpunten = aantalpunten;
    }

    get datum(): Date {
        return this.datum;
    }
    set datum(datum: Date) {
        this._datum = datum;
    }

    get user(): string {
        return this._user;
    }
    set user(user: string) {
        this._user = user;
    } 

    toJSON() {
        return {
            _id: this._id,
            aantalpunten: this._aantalpunten,
            datum: this._datum,
            user: this._user
        };
    }

}
