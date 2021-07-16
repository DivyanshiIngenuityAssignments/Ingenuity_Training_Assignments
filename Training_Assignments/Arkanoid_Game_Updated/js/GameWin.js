export class GameWin {
    constructor(canvas) {
        this.canvas = canvas;
        this.isGameWin = false;
    }
    draw(ctx) {
        
        if(this.isGameWin) {
            playSound("levelUp")
            const canvasH = this.canvas.height;
            const canvasW = this.canvas.width;
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.beginPath();
            ctx.rect(0, 0, canvasW, canvasH);
            ctx.fill();
            ctx.closePath();

            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'white';
            ctx.textAlign = 'center';
            ctx.font = '40px Arial Bold';
            ctx.lineWidth = 3;
            ctx.strokeText('Level 1 Completed', canvasW / 2, canvasH / 2);
            ctx.fillText('Level 1 Completed', canvasW / 2, canvasH / 2);
            this.level++;
          this.speed*=2;
          this.start();
          setTimeout(this.reset.bind(this),500);
        }
    }
}