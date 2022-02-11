import {MeshBuilder} from "@babylonjs/core"

export class Rocket {
    fuelconsume = 7; // 1 per second
    power = 1;       // propulsion force
    option = 0;

    rocketflame;
    rocketshaft0;
    rocketshaft1;

    constructor(option){
        this.option = option;
        this.fuelconsume = 7 - option;
        this.power = 1 + (option / 3)
    }
    public propel(){}
    public render(scene){
        this.rocketshaft0 = MeshBuilder.CreateCylinder("rocketshaft0",{
            height:             0.5, //(number) height of the cylinder	2
            diameterTop:        0.4, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	1, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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
        this.rocketshaft1 = MeshBuilder.CreateCylinder("rocketshaft1",{
            height:             0.5, //(number) height of the cylinder	2
            diameterTop:        0.4, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	1, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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
        this.rocketflame = MeshBuilder.CreateCylinder("rocketflame",{
            height:             1.5 + (this.option * 0.2), //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.8, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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

        this.rocketflame.rotation.x = (Math.PI / 4) * 4;
        this.rocketflame.position.y = -1;
        this.rocketshaft1.position.y = 0.5;
        this.rocketshaft1.rotation.x = (Math.PI / 4) * 4;
    }
}