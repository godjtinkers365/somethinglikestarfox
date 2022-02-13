import { MeshBuilder } from "@babylonjs/core";

export class Weapon {
    fuelconsumeperfire=1;
    damage=1;
    firerate=3; // 3 lasers per second;
    barrel0;
    barrel1;
    barrel2;
    constructor({firerate,damage}){
        this.firerate = firerate;
        this.damage = damage;
    }
    public shoot(){}
}