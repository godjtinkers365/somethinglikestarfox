import {Fuelsource} from "./fuelsource"
import {Fuelsource1} from "./fuelsource.1"
import {Rocket} from "./rocket"
import {Rocket1} from "./rocket.1"
import {Weapon} from "./weapon"
// import {Wing} from "./wing"
import {Wing1} from "./wing.1"
import {Wingnose} from "./wingnnose"
import {Lifesupport} from "./lifesupport"
import {Empty} from "./empty";
// import {MeshBuilder} from "@babylonjs/core"


function render(scene){
    /**
     * This is a mock function
     * to trick the transpiler.
     */
}

export class Spaceship {
    constructor({}) {
        // this.customize("fng");
    }

    energy = 3000;      // everything in the game revolves around energy
    health = 100;       // health is regenerated by life support
    shield = 100;       // shield is regenerated by life support
                        // health regenerates slower than shield
    framerules = {
        0: [Fuelsource], 
        1: [Weapon, Wing1, Lifesupport], 
        2: [Weapon, Wing1, Lifesupport], 
        3: [Rocket],
        4: [Weapon, Wing1, Lifesupport],
        5: [Weapon, Wing1, Lifesupport], 
        6: [Weapon, Wing1, Lifesupport], 
    }
    frame = { // ships central frame

        // 6 attachments
        // 1 inner fuel storage

        // 0: {},  // inner        // fuelsource only 
        // 1: {},  // front face   // 
        // 2: {},  // left face    //
        // 3: {},  // back face    // rockets only
        // 4: {},  // right face   //
        // 5: {},  // top face     //
        // 6: {},  // bottom face  //
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
    }

    fuelsource:{
        // frameposition: 0,
        // instance: (new Fuelsource(0)), // fuelsource object instance
    }

    rockets: {
    //     frameposition: 3,
    //     instance: new Rocket(0),   // rocket object instance 
    //     quantity: 1,    // rocket quantity, max 5 
    }

    weapons: [
    //     /**
    //      * weapons are allowed anywhere besides
    //      * the rockets position
    //      */
    //     {
    //         frameposition: null,
    //         instance: new Weapon(3,1),    // weapon object instance
    //     }
    ]

    wing: [
    //     /**
    //      * wings are allowed anywhere besides
    //      * the rockets position
    //      * 
    //      * wings increase maneuverability
    //      * wing causes less fuel consumption
    //      * wings stabilize flight path in atomsphere
    //      */
    //     {
    //         frameposition: null,
    //         instance: new Wing1(), // wing object instance
    //     }
    ]

    lifesupport: [
    //     /**
    //      * lifesupport are allowed anywhere besides 
    //      * rocket position
    //      */
    //     {
    //         frameposition: null,
    //         instance: new Lifesupport(2,1),
    //     }
    ]


    public move(){}
    public aim(){}
    public fire(){}
    public accel(){}

    public customize(customization){
        let cust;
        if (typeof customization === "string") {
            cust = Spaceship.customizations.filter((obj) => {
                return obj.name === customization
            });
            if (cust.length !== 1) {
                throw new Error();
            }
        } else if (typeof customization === "object" && !Array.isArray(customization)) {
            cust = customization;
        } else {
            throw new Error();
        }
        for (let i = 0; i < 7; i++){
            this.frame[i] = cust[i];               
        }
        // framerules enforcement
        Object.values(this.framerules).forEach((clas,index)=>{
            clas.some((classs)=>{
                return this.frame[index].class instanceof classs
            }) || (()=>{ throw new Error() })()
        });
    }

    public render(scene){
        Object.values(this.frame).forEach((attachment)=>{
        //     console.log("attachment",attachment);
        //     let clas = attachment["class"];
        //     let args = attachment["args"];
        //     let instance = new clas(args);
        //     attachment["instance"] = instance;
            attachment.instance = attachment.invoke()
            attachment.instance.render(scene);
        });
    }




    static customizations = [
        {
            "0": {
                "class":Fuelsource,
                "instance": ()=>new Fuelsource({option:0}),
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
        },
        {
            "name": "fng",
            "0": {
                "class":Fuelsource1,
                "invoke": ()=>new Fuelsource1({}),
                "instance":{},
                "args":{}
            },
            "1": {
                "class":Wingnose,
                "invoke":()=>new Wingnose({}),
                "instance":{},
                "args":{}
            },
            "2": {
                "class":Wing1,
                "invoke": ()=>new Wing1({}),
                "instance":{},
                "args":{},
            },
            "3": {
                "class":Rocket1,
                "invoke":()=>new Rocket1({option:1}),
                "instance":{},
                "args":{option:1}
            },
            "4": {
                "class":Empty,
                "invoke":()=>new Empty({}),
                "instance":{},
                "args":{}
            },
            "5": {
                "class":Empty,
                "invoke":()=>new Empty({}),
                "instance":{},
                "args":{}
            },
            "6": {
                "class":Empty,
                "invoke":()=>new Empty({}),
                "instance":{},
                "args":{}
            }
        },
        // {
        //     "name": "",
        //     "0": {
        //         "class":"Fuelsource",
        //         "args":[0]
        //     },
        //     "1": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "2": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "3": {
        //         "class":"Rocket",
        //         "args":[]
        //     },
        //     "4": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "5": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "6": {
        //         "class":"",
        //         "args":[]
        //     }
        // },
        // {
        //     "name": "",
        //     "0": {
        //         "class":"Fuelsource",
        //         "args":[0]
        //     },
        //     "1": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "2": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "3": {
        //         "class":"Rocket",
        //         "args":[]
        //     },
        //     "4": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "5": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "6": {
        //         "class":"",
        //         "args":[]
        //     }
        // },
        // {
        //     "name": "",
        //     "0": {
        //         "class":"Fuelsource",
        //         "args":[0]
        //     },
        //     "1": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "2": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "3": {
        //         "class":"Rocket",
        //         "args":[]
        //     },
        //     "4": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "5": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "6": {
        //         "class":"",
        //         "args":[]
        //     }
        // },
        // {
        //     "name": "",
        //     "0": {
        //         "class":"Fuelsource",
        //         "args":[0]
        //     },
        //     "1": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "2": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "3": {
        //         "class":"Rocket",
        //         "args":[]
        //     },
        //     "4": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "5": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "6": {
        //         "class":"",
        //         "args":[]
        //     }
        // },
        // {
        //     "name": "",
        //     "0": {
        //         "class":"Fuelsource",
        //         "args":[0]
        //     },
        //     "1": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "2": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "3": {
        //         "class":"Rocket",
        //         "args":[]
        //     },
        //     "4": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "5": {
        //         "class":"",
        //         "args":[]
        //     },
        //     "6": {
        //         "class":"",
        //         "args":[]
        //     }
        // }
    ]












}