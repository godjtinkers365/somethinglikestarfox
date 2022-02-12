import { MeshBuilder } from "@babylonjs/core"

export class Hillymap {
    gridmap;        // used for initial generation
    coordsmap;      // used to save mem and render only at coords

    /**
     * Any level that uses a hillymap is because
     * the player needs to evade the mothership
     * from blasting em to pieces.
     */


    constructor({}){}

    makegridmap({
        maxmtnheight,
        minmtnheight,
        minmtnradius,
        maxmtnradius,
        minmtndistfrommtn,
        maxmtndistfrommtn,
        minangle,
        maxangle,
        minmtnchain,
        maxmtnchain,
    }){
    
    }

    public render(scene){

    }
}