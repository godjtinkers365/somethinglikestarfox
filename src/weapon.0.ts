import { MeshBuilder } from "@babylonjs/core";
import { Weapon } from "./weapon";

export class Weapon0 extends Weapon {
    fuelconsumeperfire=1;
    damage=1;
    firerate=3; // 3 lasers per second;
    barrel0;
    barrel1;
    barrel2;
    constructor({firerate,damage}){
        super({firerate,damage});
    }
    public render(scene){
        this.barrel0 = MeshBuilder.CreateCylinder("barrel0",{
            height:             0.3, //(number) height of the cylinder	2
            diameterTop:        0.2, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.2, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           0.2,//(number) diameter of both caps	1
            tessellation:	    24,//(number) number of radial sides	24
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
        this.barrel1 = MeshBuilder.CreateCylinder("barrel1",{
            height:             0.3, //(number) height of the cylinder	2
            diameterTop:        0.1, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.1, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           0.1,//(number) diameter of both caps	1
            tessellation:	    24,//(number) number of radial sides	24
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
        this.barrel2 = MeshBuilder.CreateCylinder("barrel2",{
            height:             0.3, //(number) height of the cylinder	2
            diameterTop:        0.05, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.05, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           0.1,//(number) diameter of both caps	1
            tessellation:	    24,//(number) number of radial sides	24
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
        this.barrel1.position.y = 0.3;
        this.barrel2.position.y = 0.6;
    }
}