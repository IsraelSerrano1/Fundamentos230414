

export class Bicicleta{

    private _color: string;    
    private _marca: string;    
    private _velocidad: number;    
    private _piniones: number;    
    private _platos: number;   
    private _electrica: boolean;
    
    constructor(color: string, marca: string, velocidad: number, piniones: number, platos: number, electrica: boolean){
        this._color = color;
        this._marca = marca;
        this._velocidad = velocidad;
        this._piniones = piniones;
        this._platos = platos;
        this._electrica = electrica;
    }

    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }
    
    public get velocidad(): number {
        return this._velocidad;
    }
    public set velocidad(value: number) {
        this._velocidad = value;
    }
    public get piniones(): number {
        return this._piniones;
    }
    public set piniones(value: number) {
        this._piniones = value;
    }
    public get platos(): number {
        return this._platos;
    }
    public set platos(value: number) {
        this._platos = value;
    }
    public get electrica(): boolean {
        return this._electrica;
    }
    public set electrica(value: boolean) {
        this._electrica = value;
    }

    acelerar(velocidad:number) {
        
       this.velocidad += velocidad;
    }

    frenar(velocidad:number){
       
       this.velocidad -= velocidad;
    }
    toString(): string{
        return "Color: "+this._color + " Marca: "+this._marca +" Velocidad: "+
        this._velocidad+" Piñones: "+this._piniones+" Platos: "+this._platos+
        " Es Electrica: "+ (this._electrica?"Sí":"No")
    }
    

}