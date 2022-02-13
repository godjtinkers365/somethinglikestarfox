import {MeshBuilder} from "@babylonjs/core"

export class Rocket {
    fuelconsume = 7; // 1 per second
    power = 1;       // propulsion force
    option = 0;

    rocketflame;
    rocketshaft0;
    rocketshaft1;

    constructor({option}){
        this.option = option;
        this.fuelconsume = 7 - option;
        this.power = 1 + (option / 3)
    }
    public propel(){}
}