import {MeshBuilder} from "@babylonjs/core"
import { Wing } from "./wing";
export class Wing1 extends Wing {
    constructor({}){
        super({});
    }
    wing;
    wingtip0;
    wingtip1;
    wingtip2;
    wingtip3;
    wingpod0;
    wingpod1;
    public render(scene){
        /**
         * The wing contains a rectangle wing shape
         * and a cyclinder pod at the end of the wing.
         */

        this.wing = MeshBuilder.CreateBox("wing",{
            size: 1,
            height: 2,
            width: 5,
            depth: 0.25,
            // faceColors: 
            // faceUV: Vector4(),
            // wrap:false,
            // topBaseAt: 1,
            // bottomBaiseAt 0,
            // updateable: false,
            // sideOrientation: 
            // frontUVs:Vector4(0,0, 1,1)
            // backUVs: Vector4(0,0, 1,1)
        },scene)
        this.wingtip0 = MeshBuilder.CreateBox("wingtip0",{
            size: 1,
            height: 2,
            width: 2,
            depth: 0.125,
            // faceColors: 
            // faceUV: Vector4(),
            // wrap:false,
            // topBaseAt: 1,
            // bottomBaiseAt 0,
            // updateable: false,
            // sideOrientation: 
            // frontUVs:Vector4(0,0, 1,1)
            // backUVs: Vector4(0,0, 1,1)
        },scene)

        this.wingtip1 = MeshBuilder.CreateBox("wingtip1",{
            size: 1,
            height: 2,
            width: 2,
            depth: 0.125,
            // faceColors: 
            // faceUV: Vector4(),
            // wrap:false,
            // topBaseAt: 1,
            // bottomBaiseAt 0,
            // updateable: false,
            // sideOrientation: 
            // frontUVs:Vector4(0,0, 1,1)
            // backUVs: Vector4(0,0, 1,1)
        },scene)


        this.wingpod0 = MeshBuilder.CreateCylinder("wingpod0",{
            height:             3, //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
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


        this.wingtip2 = MeshBuilder.CreateBox("wingtip2",{
            size: 1,
            height: 2,
            width: 2,
            depth: 0.125,
            // faceColors: 
            // faceUV: Vector4(),
            // wrap:false,
            // topBaseAt: 1,
            // bottomBaiseAt 0,
            // updateable: false,
            // sideOrientation: 
            // frontUVs:Vector4(0,0, 1,1)
            // backUVs: Vector4(0,0, 1,1)
        },scene)

        this.wingtip3 = MeshBuilder.CreateBox("wingtip3",{
            size: 1,
            height: 2,
            width: 2,
            depth: 0.125,
            // faceColors: 
            // faceUV: Vector4(),
            // wrap:false,
            // topBaseAt: 1,
            // bottomBaiseAt 0,
            // updateable: false,
            // sideOrientation: 
            // frontUVs:Vector4(0,0, 1,1)
            // backUVs: Vector4(0,0, 1,1)
        },scene)


        this.wingpod1 = MeshBuilder.CreateCylinder("wingpod1",{
            height:             3, //(number) height of the cylinder	2
            diameterTop:        0, //(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option	1
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










        this.wingpod0.position.x = 2.6;

        this.wingtip0.position.x = 2;
        this.wingtip0.position.y = 0;
        this.wingtip0.position.z = 1;
        this.wingtip0.rotation.y = (Math.PI / 4)


        this.wingtip1.position.x = 2;
        this.wingtip1.position.y = 0;
        this.wingtip1.position.z = -1;
        this.wingtip1.rotation.y = (Math.PI / 4) * 3



        this.wingpod1.position.x = -2.6;

        this.wingtip2.position.x = -2;
        this.wingtip2.position.y = 0;
        this.wingtip2.position.z = 1;
        this.wingtip2.rotation.y = (Math.PI / 4) * 3


        this.wingtip3.position.x = -2;
        this.wingtip3.position.y = 0;
        this.wingtip3.position.z = -1;
        this.wingtip3.rotation.y = (Math.PI / 4) * 1


    }
}