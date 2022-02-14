import {MeshBuilder} from "@babylonjs/core"
import { Rocket } from "./rocket";
export class Rocket3 extends Rocket {
    fuelconsume = 7; // 1 per second
    power = 1;       // propulsion force
    option = 0;

    rocketflame0;
    rocketshaft0;
    rocketshaft1;

    rocketflame1;
    rocketshaft2;
    rocketshaft3;

    rocketflame2;
    rocketshaft4;
    rocketshaft5;

    rocketflame3;
    rocketshaft6;
    rocketshaft7;

    constructor({option}){
        super({option});
    }
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
        this.rocketflame0 = MeshBuilder.CreateCylinder("rocketflame0",{
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





        this.rocketshaft2 = MeshBuilder.CreateCylinder("rocketshaft2",{
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
        this.rocketshaft3 = MeshBuilder.CreateCylinder("rocketshaft3",{
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
        this.rocketflame1 = MeshBuilder.CreateCylinder("rocketflame1",{
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






        this.rocketshaft4 = MeshBuilder.CreateCylinder("rocketshaft4",{
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
        this.rocketshaft5 = MeshBuilder.CreateCylinder("rocketshaft5",{
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
        this.rocketflame2 = MeshBuilder.CreateCylinder("rocketflame2",{
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



        this.rocketshaft6 = MeshBuilder.CreateCylinder("rocketshaft6",{
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
        this.rocketshaft7 = MeshBuilder.CreateCylinder("rocketshaft7",{
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
        this.rocketflame3 = MeshBuilder.CreateCylinder("rocketflame3",{
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








        let transitionX = .48;
        let transitionY = 2;
        
        this.rocketflame0.rotation.x = (Math.PI / 4) * 4;
        this.rocketflame0.position.x = 0-transitionX;
        this.rocketshaft0.position.x = 0-transitionX;
        this.rocketshaft1.position.x = 0-transitionX;
        this.rocketflame0.position.y = -1-transitionY;
        this.rocketshaft1.position.y = 0.5-transitionY;
        this.rocketshaft0.position.y = 0 - transitionY;
        this.rocketshaft1.rotation.x = (Math.PI / 4) * 4;
        // offset for entire ship positioning
        this.rocketshaft0.position.z = 0.5;
        this.rocketshaft1.position.z = 0.5;
        this.rocketflame0.position.z = 0.5;


        this.rocketflame1.rotation.x = (Math.PI / 4) * 4;
        this.rocketflame1.position.x = -(0-transitionX);
        this.rocketshaft2.position.x = -(0-transitionX);
        this.rocketshaft3.position.x = -(0-transitionX);
        this.rocketflame1.position.y = -1-transitionY;
        this.rocketshaft2.position.y = 0 - transitionY;
        this.rocketshaft3.position.y = 0.5-transitionY;
        this.rocketshaft3.rotation.x = (Math.PI / 4) * 4;
        // offset for entire ship positioning
        this.rocketshaft2.position.z = 0.5;
        this.rocketshaft3.position.z = 0.5;
        this.rocketflame1.position.z = 0.5;


        this.rocketflame2.rotation.x = (Math.PI / 4) * 4;
        this.rocketflame2.position.x = (0-transitionX);
        this.rocketshaft4.position.x = (0-transitionX);
        this.rocketshaft5.position.x = (0-transitionX);
        this.rocketflame2.position.y = (-1-transitionY);
        this.rocketshaft4.position.y = 0 - transitionY;
        this.rocketshaft5.position.y = 0.5-transitionY;
        this.rocketshaft5.rotation.x = (Math.PI / 4) * 4;
        // offset for entire ship positioning
        this.rocketshaft4.position.z = -(0.5);
        this.rocketshaft5.position.z = -(0.5);
        this.rocketflame2.position.z = -(0.5);



        this.rocketflame3.rotation.x = (Math.PI / 4) * 4;
        this.rocketflame3.position.x = -(0-transitionX);
        this.rocketshaft6.position.x = -(0-transitionX);
        this.rocketshaft7.position.x = -(0-transitionX);
        this.rocketflame3.position.y = (-1-transitionY);
        this.rocketshaft6.position.y = 0 - transitionY;
        this.rocketshaft7.position.y = 0.5-transitionY;
        this.rocketshaft7.rotation.x = (Math.PI / 4) * 4;
        // offset for entire ship positioning
        this.rocketshaft6.position.z = -(0.5);
        this.rocketshaft7.position.z = -(0.5);
        this.rocketflame3.position.z = -(0.5);


    }
}