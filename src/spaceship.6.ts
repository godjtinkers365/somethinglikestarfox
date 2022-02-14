import { Fuelsource4 } from "./fuelsource.4";
import { render } from "./render.mock";
import { Rocket3 } from "./rocket.3";
import { Spaceship } from "./spaceship";
import { Wingnose2 } from "./wingnose.2";
import { WWeaponL1 } from "./wweaponl.1";
import { WWeaponR1 } from "./wweaponr.1";
import { XWingL } from "./xwingl";
import { XWingR } from "./xwingr";

export class Spaceship6 extends Spaceship {
    constructor(){
        super({
            frame: {
                "name": "star wars x wing",
                "0": {
                    "class":Fuelsource4,
                    "invoke": ()=>new Fuelsource4({option:1}),
                    "instance":{render},
                    "args":{option:1}
                },
                "1": {
                    "class":Wingnose2,
                    "invoke":()=>new Wingnose2({}),
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
                    "class":Rocket3,
                    "invoke":()=>new Rocket3({option:1}),
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
                    "class":WWeaponL1,
                    "invoke":()=>new WWeaponL1({firerate:3,damage:1}),
                    "instance":{render},
                    "args":{}
                },
                "6": {
                    "class":WWeaponR1,
                    "invoke":()=>new WWeaponR1({firerate:3,damage:1}),
                    "instance":{render},
                    "args":{}
                }
            }});
    }
}