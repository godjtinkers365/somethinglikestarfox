export class Lifesupport {
    shieldregen=2; // 2 shield regenerations per second
    healthregen=1; // 1 shield regenerations per second
    disk0;
    disk1;
    beam;
    constructor({shieldregen,healthregen}) {
        this.shieldregen=shieldregen;
        this.healthregen=healthregen;
    }
    public monitor(){}
    public regen(){

    }
}