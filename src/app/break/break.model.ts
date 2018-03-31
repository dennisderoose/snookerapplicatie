export class Break {
    private _id: string;
    private _aantalpunten: number;
    private _datum: string;
    private _user: string;  
    private _typeGemaakt: string;  
    private _tegenstander: string;

    static fromJSON(json): Break {
        console.log(json);
        const rec = new Break(json.aantalpunten, json.datum, json.user, json.typeGemaakt, json.tegenstander);
        rec._id = json._id;
        return rec;
    }

    constructor(aantalpunten: number, datum: string, user?: string, typeGemaakt?: string, tegenstander?: string) {
        this._aantalpunten = aantalpunten;
        this._datum = datum || "";    
        this._user = user || "";
        this._typeGemaakt = typeGemaakt || "Niet ingevuld";                        
        this._tegenstander = tegenstander || "/";
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

    get datum(): string {        
        return this._datum;
    }

    set datum(datum: string) {
        this._datum = datum;
    }

    get user(): string {
        return this._user;
    }

    set user(user: string) {
        this._user = user;
    } 

    get typeGemaakt(): string {
        return this._typeGemaakt;
    }
    set typeGemaakt(typeGemaakt: string) {
        this._typeGemaakt = typeGemaakt;
    } 

    get tegenstander(): string {
        return this._tegenstander;
    }
    set tegenstander(tegenstander: string) {
        this._tegenstander = tegenstander;
    }     

    toJSON() {
        return {
            _id: this._id,
            aantalpunten: this._aantalpunten,
            datum: this._datum,
            user: this._user,
            typeGemaakt: this._typeGemaakt,
            tegenstander: this._tegenstander
        };
    }
}