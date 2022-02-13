import { Fuelsource3 } from "./fuelsource.3";
import { render } from "./render.mock";
import { Rocket2 } from "./rocket.2";
import { Spaceship } from "./spaceship";
import { Wingnose1 } from "./wingnose.1";
import { WWeaponL } from "./wweaponl";
import { WWeaponR } from "./wweaponr";
import { XWingL } from "./xwingl";
import { XWingR } from "./xwingr";

export class Spaceship5 extends Spaceship {
    constructor(){
        super({});
        this.frame = {
            "name": "x wing 2",
            "0": {
                "class":Fuelsource3,
                "invoke": ()=>new Fuelsource3({option:1}),
                "instance":{render},
                "args":{option:1}
            },
            "1": {
                "class":Wingnose1,
                "invoke":()=>new Wingnose1({}),
                "instance":{render},
                "args":{}
            },
            "2": {
                "class":XWingL,
                "invoke": ()=>new XWingL({}),
                "instance":{render},
                "args":{},
            },
            "3": {
                "class":Rocket2,
                "invoke":()=>new Rocket2({option:1}),
                "instance":{render},
                "args":{option:1}
            },
            "4": {
                "class":XWingR,
                "invoke":()=>new XWingR({}),
                "instance":{render},
                "args":{}
            },
            "5": {
                "class":WWeaponL,
                "invoke":()=>new WWeaponL({firerate:3,damage:1}),
                "instance":{render},
                "args":{}
            },
            "6": {
                "class":WWeaponR,
                "invoke":()=>new WWeaponR({firerate:3,damage:1}),
                "instance":{render},
                "args":{}
            }
        }
    }
}