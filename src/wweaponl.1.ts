import { MeshBuilder } from "@babylonjs/core";

export class WWeaponL1 {
    fuelconsumeperfire=1;
    damage=1;
    firerate=3; // 3 lasers per second;
    barrel0;
    barrel1;
    barrel2;
    lasertip0;

    barrel3;
    barrel4;
    barrel5;
    lasertip1;
    constructor({firerate,damage}){
        this.firerate = firerate;
        this.damage = damage;
    }
    public shoot(){}
    public render(scene){
        let height = 2;
        let diameterTop = 0.4;
        let diameterBottom = 0.4;
        this.barrel0 = MeshBuilder.CreateCylinder("barrel0",{
            height,//:             0.3, //(number) height of the cylinder	2
            diameterTop, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
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
            height,//:             0.3, //(number) height of the cylinder	2
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
        this.barrel2 = MeshBuilder.CreateCylinder("barrel2",{
            height,//:             0.3, //(number) height of the cylinder	2
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
        this.lasertip0 = MeshBuilder.CreateCylinder("lasertip0",{
            height:0.05,//:             0.3, //(number) height of the cylinder	2
            diameterTop:        0.4, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.4, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           0.4,//(number) diameter of both caps	1
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







        this.barrel3 = MeshBuilder.CreateCylinder("barrel3",{
            height,//:             0.3, //(number) height of the cylinder	2
            diameterTop, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
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
        this.barrel4 = MeshBuilder.CreateCylinder("barrel4",{
            height,//:             0.3, //(number) height of the cylinder	2
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
        this.barrel5 = MeshBuilder.CreateCylinder("barrel5",{
            height,//:             0.3, //(number) height of the cylinder	2
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
        this.lasertip1 = MeshBuilder.CreateCylinder("lasertip1",{
            height:0.05,//:             0.3, //(number) height of the cylinder	2
            diameterTop:        0.4, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.4, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           0.4,//(number) diameter of both caps	1
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


        let positionY = 0;
        let positionZ = 2.2;

        this.barrel0.position.x = 5;
        this.barrel1.position.x = 5;
        this.barrel2.position.x = 5;

        this.barrel0.position.y = positionY;
        this.barrel1.position.y = (positionY || 1) * 2;
        this.barrel2.position.y = (positionY || 1) * 3;

        this.barrel0.position.z = positionZ;
        this.barrel1.position.z = positionZ;
        this.barrel2.position.z = positionZ;

        this.lasertip0.position.x = 5;
        this.lasertip0.position.y = (positionY || 1) * 3
        this.lasertip0.position.z = positionZ;


        this.barrel3.position.x = 5;
        this.barrel4.position.x = 5;
        this.barrel5.position.x = 5;

        this.barrel3.position.y = positionY;
        this.barrel4.position.y = (positionY || 1) * 2;
        this.barrel5.position.y = (positionY || 1) * 3;

        this.barrel3.position.z = -positionZ;
        this.barrel4.position.z = -positionZ;
        this.barrel5.position.z = -positionZ;

        this.lasertip1.position.x = 5;
        this.lasertip1.position.y = (positionY || 1) * 3
        this.lasertip1.position.z = -positionZ;
    }
}