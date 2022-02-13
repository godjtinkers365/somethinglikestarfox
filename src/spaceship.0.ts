import { Empty } from './empty';
import { Fuelsource } from './fuelsource';
import { Lifesupport } from './lifesupport';
import { render } from './render.mock';
import { Rocket } from './rocket';
import {Spaceship} from './spaceship'
import { Weapon } from './weapon';
import { Wing1 } from './wing.1';
export class Spaceship0 extends Spaceship {
    constructor(){
        super({});
        this.frame = {
            "name":"???",
            "0": {
                "class":Fuelsource,
                "invoke": ()=>new Fuelsource({option:0}),
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
                "class":Rocket,
                "invoke": ()=>new Rocket({option:1}),
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
                "class":Lifesupport,
                "invoke": ()=>new Lifesupport({shieldregen:2,healthregen:1}),
                "instance":{render},
                "args": {shieldregen:2,healthregen:1},
            },
            "6": {
                "class":Empty,
                "invoke": ()=>new Empty({}),
                "instance":{render},
                "args":[]
            },
        }
    }
}