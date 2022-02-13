import { Empty } from "./empty";
import { Fuelsource1 } from "./fuelsource.1";
import { render } from "./render.mock";
import { Rocket1 } from "./rocket.1";
import { Spaceship } from "./spaceship";
import { Wing1 } from "./wing.1";
import { Wingnose } from "./wingnnose";

export class Spaceship1 extends Spaceship {
    constructor(){
        super({});
        this.frame = {
                "name":"fng",
                "0": {
                    "class":Fuelsource1,
                    "invoke": ()=>new Fuelsource1({}),
                    "instance":{render},
                    "args":{}
                },
                "1": {
                    "class":Wingnose,
                    "invoke":()=>new Wingnose({}),
                    "instance":{render},
                    "args":{}
                },
                "2": {
                    "class":Wing1,
                    "invoke": ()=>new Wing1({}),
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
                    "class":Empty,
                    "invoke":()=>new Empty({}),
                    "instance":{render},
                    "args":{}
                },
                "5": {
                    "class":Empty,
                    "invoke":()=>new Empty({}),
                    "instance":{render},
                    "args":{}
                },
                "6": {
                    "class":Empty,
                    "invoke":()=>new Empty({}),
                    "instance":{render},
                    "args":{}
                }
        };
    }
}