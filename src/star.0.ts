import { MeshBuilder } from "@babylonjs/core";
import { Star } from "./star";

export class Star0 extends Star {
    center;
    ray0;
    ray1;
    ray2;
    ray3;
    constructor({}){
        super({})
    }
    public render(scene){
        this.center = MeshBuilder.CreateSphere("center", { diameter: 1 }, scene);
        this.ray0 = MeshBuilder.CreateCylinder("ray0",{
            height:             3, //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.5, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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
        this.ray1 = MeshBuilder.CreateCylinder("ray1",{
            height:             3, //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.5, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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
        this.ray2 = MeshBuilder.CreateCylinder("ray2",{
            height:             3, //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.5, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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
        this.ray3 = MeshBuilder.CreateCylinder("ray3",{
            height:             3, //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
            diameterBottom: 	0.5, //(number) diameter of the bottom cap, can't be zero, overwrites the diameter option	1
            diameter:           1,//(number) diameter of both caps	1
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
        this.ray0.position.y = 2;

        this.ray1.rotation.x = (Math.PI / 3) * 2;
        this.ray1.rotation.y = (Math.PI / 3);
        this.ray2.rotation.x = (Math.PI / 3) * 1;
        this.ray2.rotation.y = (Math.PI / 3);
        this.ray3.position.y = -2;
        this.ray3.rotation.x = (Math.PI / 4 ) * 4;
    }
}