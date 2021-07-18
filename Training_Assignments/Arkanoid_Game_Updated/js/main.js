import {Game} from "./Game.js";

onload = ()=>{
    const main = document.querySelector('#main');
    //const canvas = document.createElement("canvas");
    //canvas.width = 800;
    //canvas.height = 600;
    //main.append(canvas);

    const ctx = new Game(canvas);
    ctx.start();

    onkeydown = ctx.onKeyDown.bind(ctx);
    onkeyup = ctx.onKeyUp.bind(ctx);
    function loop (){
        ctx.update();
        ctx.draw();
        requestAnimationFrame(loop);
    }
    loop();
}