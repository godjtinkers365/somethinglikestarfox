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
                "instance": ()=>new Empty({}),
                "args":{},
            },
            "2": {
                "class":Wing1,
                "instance": ()=>new Wing1({}),
                "args":{},
            },
            "3": {
                "class":Rocket,
                "instance": ()=>new Rocket({option:1}),
                "args":{
                    "option": 1
                }
            },
            "4": {
                "class":Weapon,
                "instance": ()=>new Weapon({firerate:3,damage:1}),
                "args":{firerate:3,damage:1},
            },
            "5": {
                "class":Lifesupport,
                "instance": ()=>new Lifesupport({shieldregen:2,healthregen:1}),
                "args": {shieldregen:2,healthregen:1},
            },
            "6": {
                "class":Empty,
                "instance": ()=>new Empty({}),
                "args":[]
            },
        }
    }
}