import { Fuelsource2 } from "./fuelsource.2";
import { render } from "./render.mock";
import { Rocket1 } from "./rocket.1";
import { Spaceship } from "./spaceship";
import { Wingnose1 } from "./wingnose.1";
import { WWeaponL } from "./wweaponl";
import { WWeaponR } from "./wweaponr";
import { XWingL } from "./xwingl";
import { XWingR } from "./xwingr";

export class Spaceship4 extends Spaceship {
    constructor(){
        super({});
        this.frame = {
            "name":"xwing 1",
            "0": {
                "class":Fuelsource2,
                "invoke": ()=>new Fuelsource2({option:1}),
                "instance":{render},
                "args":{}
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
                "class":Rocket1,
                "invoke":()=>new Rocket1({option:1}),
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