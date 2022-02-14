import { Empty } from "./empty";
import { Fuelsource0 } from "./fuelsource.0";
import { Lifesupport0 } from "./lifesupport.0";
import { render } from "./render.mock";
import { Rocket0 } from "./rocket.0";
import { Spaceship } from "./spaceship";
import { Weapon } from "./weapon";
import { Wing1 } from "./wing.1";

export class Spaceship0 extends Spaceship {
    constructor({}){
        super({
            frame: {
                "name":"???",
                "0": {
                    "class":Fuelsource0,
                    "invoke": ()=>new Fuelsource0({option:0}),
                    "instance":{render},
                    "args":{
                        "option":0
                    },
                },
                "1": {
                    "class":Empty,
                    "invoke": ()=>new Empty({}),
                    "instance":{render},
                    "args":{},
                },
                "2": {
                    "class":Wing1,
                    "invoke": ()=>new Wing1({}),
                    "instance":{render},
                    "args":{},
                },
                "3": {
                    "class":Rocket0,
                    "invoke": ()=>new Rocket0({option:1}),
                    "instance":{render},
                    "args":{
                        "option": 1
                    }
                },
                "4": {
                    "class":Weapon,
                    "invoke": ()=>new Weapon({firerate:3,damage:1}),
                    "instance":{render},
                    "args":{firerate:3,damage:1},
                },
                "5": {
                    "class":Lifesupport0,
                    "invoke": ()=>new Lifesupport0({shieldregen:2,healthregen:1}),
                    "instance":{render},
                    "args": {shieldregen:2,healthregen:1},
                },
                "6": {
                    "class":Empty,
                    "invoke": ()=>new Empty({}),
                    "instance":{render},
                    "args":{}
                },
            }});
    }
}