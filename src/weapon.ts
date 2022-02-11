import { MeshBuilder } from "@babylonjs/core";

export class Weapon {
    fuelconsumeperfire=1;
    damage=1;
    firerate=3; // 3 lasers per second;
    constructor(firerate,damage){
        this.firerate = firerate;
        this.damage = damage;
    }
    public shoot(){}
    public render(scene){


        for (let cnt=0; cnt < 1; cnt++) {

            MeshBuilder.CreateCylinder("weapon"+cnt,{
                height:             3+cnt, //(number) height of the cylinder	2
                diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
                diameterBottom: 	1+cnt, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
                diameter:           1+cnt,//(number) diameter of both caps	1
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
        
        }
    }
}