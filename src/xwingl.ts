import {MeshBuilder} from "@babylonjs/core"
export class XWingL {
    xwinglt;
    xwinglb;
    constructor({}){}
    public render(scene){
        this.xwinglb = MeshBuilder.CreateBox("xwinglt",{
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
        this.xwinglb.rotation.y = (Math.PI / 4) / 2
        this.xwinglb.position.x = 2.5;

    }
}