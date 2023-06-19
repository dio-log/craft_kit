"use strict";
class GIS {
    constructor(canvasId) {
        this.ids = [];
        this.objects = [];
        this.canvas = document.getElementById(canvasId);
        this.engine = new BABYLON.Engine(this.canvas, true);
        if (this.engine instanceof BABYLON.Engine) {
            this.scene = new BABYLON.Scene(this.engine);
            this.engine.runRenderLoop(() => {
                this.scene?.render();
            });
        }
        // this.camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 3, BABYLON.Vector3.Zero(), this.scene);
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(2, 2, -10), this.scene);
        //=====
        let boxOptions = {
            width: 1,
            height: 1,
            depth: 1
        };
        let cube = BABYLON.MeshBuilder.CreateBox("box1", boxOptions, this.scene);
        cube.position = new BABYLON.Vector3(0, 0, 0);
        let material = new BABYLON.StandardMaterial("material", this.scene);
        material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        cube.material = material;
        this.scene?.addMesh(cube);
        //====
        boxOptions = {
            width: 1,
            height: 1,
            depth: 1
        };
        cube = BABYLON.MeshBuilder.CreateBox("box2", boxOptions, this.scene);
        cube.position = new BABYLON.Vector3(0, 0, 0);
        material = new BABYLON.StandardMaterial("material", this.scene);
        material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        cube.material = material;
        this.scene?.addMesh(cube);
        window.addEventListener("resize", () => {
            this.engine?.resize();
        });
        this.canvas.addEventListener("pointerdown", (e) => {
            this.click(e);
        });
    }
    createObject(shape) {
        if (shape == "cube") {
            return;
        }
        if (shape == "sphere") {
            return;
        }
        if (shape == "cylinder") {
            return;
        }
    }
    addEvent(eventName, callback) {
        switch (eventName) {
            case "click":
                this.canvas.addEventListener("click", () => {
                });
                break;
            case "hover":
                break;
        }
    }
    addTooltip(cssText, innerHtml) {
        let divElem = document.createElement("div");
        if (cssText == null) {
            //기본 폼을 만들어 놔야겠군
            divElem.style.position = "absolute";
            divElem.textContent = "hello";
            divElem.style.left = "10px";
            divElem.style.top = "10px";
        }
        else {
            divElem.style.cssText = cssText;
        }
        if (innerHtml != null) {
            divElem.innerHTML = innerHtml;
        }
        this.canvas.parentNode?.appendChild(divElem);
    }
    click(e) {
        let pickedObject = this.scene?.pick(this.scene.pointerX, this.scene.pointerY);
        // console.log("d",pickedObject)
        if (pickedObject?.hit) {
            let mesh = pickedObject.pickedMesh;
            console.log("m", mesh);
            console.log(mesh?.name);
        }
    }
    hover(e) {
    }
}
