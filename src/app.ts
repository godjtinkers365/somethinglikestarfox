import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, Vector4 } from "@babylonjs/core";

import { Spaceship } from "./spaceship";
// import { Weapon } from "./weapon";
// import { Rocket } from "./rocket";
// import { Wing1 } from "./wing.1";
// // import { Wing } from "./wing";
// import { Fuelsource } from "./fuelsource";
// import { Lifesupport } from "./lifesupport";
// import { Tower0 } from "./tower.0";
// import { Tower1 } from "./tower.1";
// import { Asteroid } from "./asteroid";
// import { Star } from "./star";


class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        var scene = new Scene(engine);

        var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        // var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
        camera.attachControl(canvas, true);    

        // const roofMat = new Babylon.StandardMaterial("roofMat");
        // roofMat.diffuseTexture = new Babylon.Texture("https://assets.babylonjs.com/environments/roof.jpg", scene);



        
        // new Weapon(3,1).render(scene);
        // new Rocket(0).render(scene);
        // new Wing1().render(scene);
        // new Fuelsource(0).render(scene);
        // new Lifesupport(2,1).render(scene);
        // new Tower0().render(scene);
        // new Tower1().render(scene);
        // new Asteroid().render(scene);
        // new Star().render(scene);

        new Spaceship().render(scene);


        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}
new App();