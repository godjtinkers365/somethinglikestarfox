import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, Vector4 } from "@babylonjs/core";

import { Spaceship0 } from "./spaceship.0";
import { Spaceship1 } from "./spaceship.1";
import { Spaceship2 } from "./spaceship.2";
import { Spaceship3 } from "./spaceship.3";
import { Spaceship4 } from "./spaceship.4";
import { Spaceship5 } from "./spaceship.5";
import { Fuelsource0 } from "./fuelsource.0";
import { Fuelsource1 } from "./fuelsource.1";
import { Fuelsource2 } from "./fuelsource.2";
import { Fuelsource3 } from "./fuelsource.3";
import { Lifesupport0 } from "./lifesupport.0";
import { Rocket0 } from "./rocket.0";
import { Rocket1 } from "./rocket.1";
import { Rocket2 } from "./rocket.2";



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

        // new Spaceship0().render(scene);
        // new Spaceship1().render(scene);
        // new Spaceship2().render(scene);
        // new Spaceship3().render(scene);
        // new Spaceship4().render(scene);
        // new Spaceship5().render(scene);


        // new Fuelsource0({option:1}).render(scene);
        // new Fuelsource1({option:1}).render(scene);
        // new Fuelsource2({option:1}).render(scene);
        // new Fuelsource3({option:1}).render(scene);

        // new Lifesupport0({shieldregen:2, healthregen:1}).render(scene)

        // new Rocket0({option:1}).render(scene)
        // new Rocket1({option:1}).render(scene)
        // new Rocket2({option:1}).render(scene)



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