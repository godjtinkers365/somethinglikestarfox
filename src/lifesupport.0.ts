import { MeshBuilder } from "@babylonjs/core";
import { Lifesupport } from "./lifesupport";

export class Lifesupport0 extends Lifesupport {
    shieldregen=2; // 2 shield regenerations per second
    healthregen=1; // 1 shield regenerations per second
    disk0;
    disk1;
    beam;
    constructor({shieldregen,healthregen}) {
        super({shieldregen,healthregen})
    }
    public render(scene){
        this.disk0 = MeshBuilder.CreateTorus("disk0",{
            diameter:        1,
            thickness:       0.1,
            tessellation:   6,
            // updateable:     false,
            // sideOrientation:
            // frontUVs,
            // backUVs,
        },scene);
        this.disk1 = MeshBuilder.CreateTorus("disk1",{
            diameter:        0.8,
            thickness:       0.1,
            tessellation:   3,
            // updateable:     false,
            // sideOrientation:
            // frontUVs,
            // backUVs,
        },scene);
        this.beam = MeshBuilder.CreateCylinder("beam",{
            height:             0.2, //(number) height of the cylinder	2
            diameterTop:        0.4, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.4, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           0.2,//(number) diameter of both caps	1
            tessellation:	    3,//(number) number of radial sides	24
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