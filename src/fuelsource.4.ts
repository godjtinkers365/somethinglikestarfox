import { MeshBuilder } from "@babylonjs/core";
import { Fuelsource } from "./fuelsource";

export class Fuelsource4 extends Fuelsource {
    fueltank0;
    constructor({option}){
        super({option});
        // option >= 0 && option <= 6 || (()=>{ throw new Error() })()
        // this.quantity = (option + 1) * 60;

    }
    public render(scene){
        let height = 2.4;
        let diameter = 2;
        let diameterTop = 1.6;
        let diameterBottom = 1.6;
        let tessellation = 6;
        // this.fueltank0 = MeshBuilder.CreateBox("fueltank0",{
        //     size: 1,
        //     height:2.4,
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
        this.fueltank0 = MeshBuilder.CreateCylinder("fueltank0",{
            height, //(number) height of the cylinder	2
            diameterTop, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter,//(number) diameter of both caps	1
            tessellation,//(number) number of radial sides	24
            subdivisions:       1,//(number) number of rings	1
            // faceColors	(Color4[]) array of 3 Color4, 0 : bottom cap, 1 : cylinder tube, 2 : top cap	Color4(1, 1, 1, 1) for each face
            // faceUV	(Vector4[]) array of 3 Vector4, 0 : bottom cap, 1 : cylinder tube, 2 : top cap	UVs(0, 0, 1, 1) for each face
            arc:                1,//(number) ratio of the circumference between 0 and 1	1
            hasRings:           false,//(boolean) makes the subdivisions independent from each other, so they become different faces	false
            enclose:            false,//(boolean) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis	false
            updatable:	        false,//(boolean) true if the mesh is updatable	false
            // sideOrientation:	(number) side orientation	DEFAULTSIDE
            // frontUVs	(Vector4) ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set	Vector4(0,0, 1,1)
            // backUVs	(Vector4) ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set
        },scene)
    }
}