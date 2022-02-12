import {MeshBuilder} from "@babylonjs/core"

export class Tower0 {
    towerbase;
    towerblock0;
    towerblock1;
    towerblock2;
    constructor({}){}
    public render(scene){
        this.towerbase = MeshBuilder.CreateBox("towerbase",{
            size: 1,
            height:1,
            width: 1,
            depth: 1,
            // faceColors: 
            // faceUV: Vector4(),
            // wrap:false,
            // topBaseAt: 1,
            // bottomBaiseAt 0,
            // updateable: false,
            // sideOrientation: 
            // frontUVs:Vector4(0,0, 1,1)
            // backUVs: Vector4(0,0, 1,1)
        },scene);
        this.towerblock0 = MeshBuilder.CreateBox("towerblock0",{
            size: 0.8,
            height: 0.8,
            width: 0.8,
            depth: 0.8,
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
        this.towerblock1 = MeshBuilder.CreateBox("towerblock1",{
            size: 0.6,
            height: 0.6,
            width: 0.6,
            depth: 0.6,
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
        this.towerblock2 = MeshBuilder.CreateBox("towerblock2",{
            size: 0.4,
            height: 0.4,
            width: 0.4,
            depth: 0.4,
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
        this.towerblock0.position.y = .8;
        this.towerblock1.position.y = 1.4;
        this.towerblock2.position.y = 1.8;

    }
}