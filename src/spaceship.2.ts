import { Empty } from "./empty";
import { Fuelsource2 } from "./fuelsource.2";
import { render } from "./render.mock";
import { Rocket1 } from "./rocket.1";
import { Spaceship } from "./spaceship";
import { Wing1 } from "./wing.1";
import { Wingnose0 } from "./wingnnose.0";

export class Spaceship2 extends Spaceship {
    constructor(){
        super({
            frame: {
                "name": "coolerdesign",
                "0": {
                    "class":Fuelsource2,
                    "invoke": ()=>new Fuelsource2({option:1}),
                    "instance":{render},
                    "args":{}
                },
                "1": {
                    "class":Wingnose0,
                    "invoke":()=>new Wingnose0({}),
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
            }})
    }
}