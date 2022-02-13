// import {MeshBuilder} from "@babylonjs/core"

interface frame {
    "class":  Function
    "invoke": Function
    "instance":{render}
    "args":any
}


export class Spaceship {
    constructor({}) {
        // this.customize("lotsofguns");
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
        // "0": {
        //     "class":Fuelsource3,
        //     "invoke": ()=>new Fuelsource3({option:1}),
        //     "instance":{render},
        //     "args":{option:1}
        // },
        // "1": {
        //     "class":Wingnose1,
        //     "invoke":()=>new Wingnose1({}),
        //     "instance":{render},
        //     "args":{}
        // },
        // "2": {
        //     "class":XWingL,
        //     "invoke": ()=>new XWingL({}),
        //     "instance":{render},
        //     "args":{},
        // },
        // "3": {
        //     "class":Rocket2,
        //     "invoke":()=>new Rocket2({option:1}),
        //     "instance":{render},
        //     "args":{option:1}
        // },
        // "4": {
        //     "class":XWingR,
        //     "invoke":()=>new XWingR({}),
        //     "instance":{render},
        //     "args":{}
        // },
        // "5": {
        //     "class":WWeaponL,
        //     "invoke":()=>new WWeaponL({firerate:3,damage:1}),
        //     "instance":{render},
        //     "args":{}
        // },
        // "6": {
        //     "class":WWeaponR,
        //     "invoke":()=>new WWeaponR({firerate:3,damage:1}),
        //     "instance":{render},
        //     "args":{}
        // }
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
        // let cust;
        // if (typeof customization === "string") {
        //     cust = Spaceship.customizations.filter((obj) => {
        //         return obj.name === customization
        //     });
        //     if (cust.length !== 1) {
        //         throw new Error();
        //     }
        // } else if (typeof customization === "object" && !Array.isArray(customization)) {
        //     cust = customization;
        // } else {
        //     throw new Error();
        // }
        // for (let i = 0; i < 7; i++){
        //     this.frame[i] = cust[i];               
        // }
        // // framerules enforcement
        // Object.values(this.framerules).forEach((clas,index)=>{
        //     clas.some((classs)=>{
        //         return this.frame[index].class instanceof classs
        //     }) || (()=>{ throw new Error() })()
        // });
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
}