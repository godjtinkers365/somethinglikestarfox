import { MeshBuilder } from "@babylonjs/core";

export class Fuelsource {
    quantity = 60;
    sshipc;
    constructor({option}){
        
        option >= 0 && option <= 6 || (()=>{ throw new Error() })()
        this.quantity = (option + 1) * 60;

    }
    // public render(){}
}