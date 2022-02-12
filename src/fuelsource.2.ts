import { MeshBuilder } from "@babylonjs/core";
export class Fuelsource2 {
    fueltank0;
    fueltank1;
    fueltank2;
    fueltank3;
    constructor({}){}
    public render(scene){

        let height          = 1;
        let diameterTop     = 1;
        let diameterBottom  = 1;
        let diameter        = 1;
        let tessellation    = 8;


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
        this.fueltank1 = MeshBuilder.CreateCylinder("fueltank1",{
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
        this.fueltank2 = MeshBuilder.CreateCylinder("fueltank2",{
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
        this.fueltank3 = MeshBuilder.CreateCylinder("fueltank3",{
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
        // this.fueltank0.position.x = 0.3/4;
        // this.fueltank0.position.z = 0.3/4;
        // this.fueltank1.position.x = -(0.3/4);
        // this.fueltank1.position.z = 0.3/4;

        // this.fueltank2.position.x = 0.3/4;
        // this.fueltank2.position.z = -(0.3/4);
        // this.fueltank3.position.x = -(0.3/4);
        // this.fueltank3.position.z = -(0.3/4);

        let denominator = 2;

        this.fueltank0.position.x = diameter/denominator;
        this.fueltank0.position.z = diameter/denominator;
        this.fueltank1.position.x = -(diameter/denominator);
        this.fueltank1.position.z = diameter/denominator;

        this.fueltank2.position.x = diameter/denominator;
        this.fueltank2.position.z = -(diameter/denominator);
        this.fueltank3.position.x = -(diameter/denominator);
        this.fueltank3.position.z = -(diameter/denominator);
    }
}