import { MeshBuilder } from "@babylonjs/core";
import { Fuelsource } from "./fuelsource";
export class Fuelsource1 extends Fuelsource {
    sshipc;
    constructor({option}){
        super({option});
    }
    public render(scene){
        // this.sshipc = MeshBuilder.CreateBox("sshipc",{
        //     size: 1,
        //     height:1,
        //     width: 1,
        //     depth: 1,
        //     // faceColors: 
        //     // faceUV: Vector4(),
        //     // wrap:false,
        //     // topBaseAt: 1,
        //     // bottomBaiseAt 0,
        //     // updateable: false,
        //     // sideOrientation: 
        //     // frontUVs:Vector4(0,0, 1,1)
        //     // backUVs: Vector4(0,0, 1,1)
        // },scene)
    }
}