  const canvas = document.querySelector('#myGame');
  const ctx = canvas.getContext('2d');
  const car = new Image();
  const car1 = new Image();
  const car2 = new Image();
  const car3 = new Image();
  const road = new Image();
  
  const boundry=new Image();
  const carW = 48;
  const carH = 92;
  const roadW=500;
  const roadH=600;
  const car1H=92;
  const car2H=92;
  const car3H=92
  let car1Y=80
let car2Y=300;
let car3Y=400;
  let x = 330;
  let y = 505;
  let speed = 5;
  let dir = 0;
  let mod = 0;
  let b=505;
  let bh=40;
  car.addEventListener('load', ()=>{
    draw();
    window.addEventListener('keydown', keyHandler);
    window.addEventListener('keyup', keyHandler);
 });
  car1.src="car7.png";
  car2.src="car9.jfif";
  car3.src="car8.jpg";
  road.src="2.jpg";
  
  car.src ="https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
boundry.src="boundry.jpg";

  function draw() {
      if(car1Y + car1H<canvas.height || car2Y+car2H<canvas.height || car3Y+car3H<canvas.length){
          car1Y--;
          car2Y--;
          car3Y--;
      }
      car1Y+=4;
      car2Y+=5;
      car3Y+=6;
      if(car1Y>=canvas.height && car2Y>=canvas.height && car3Y>=canvas.height){
          car1Y=0;
          car2Y=0;
          car3Y=0;
      }
          
      if(road.complete && car.complete) {
          x += speed * mod;
          y += speed * dir;

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(boundry, 0,0, 1000, 700);
          ctx.drawImage(road, 400-90  , 0, roadW, roadH);
          ctx.drawImage(car1, 600, car1Y, 48, car1H);
          ctx.drawImage(car2, 400, car2Y, 48, car2H);
          ctx.drawImage(car3, 700, car3Y, 48, car3H);
          ctx.drawImage(car, x, y, carW, carH);

          
      }
    
      requestAnimationFrame(draw);
    
  }
  function keyHandler(e){
      // console.log("Event ", e);
      switch (e.type) {
          case 'keydown':
              switch(e.code){
                  case 'KeyW':
                  case 'ArrowUp':
                      dir = -1;
                      break;
                  case 'KeyS':
                  case 'ArrowDown':
                      dir = 1;
                      break;
                  case 'KeyA':
                  case 'ArrowLeft':
                      mod = -1;
                     break;
                  case 'KeyD':
                  case 'ArrowRight':
                      mod = 1;
                      break;
              }
              break;
          case 'keyup':
              switch(e.code){
                  case 'KeyW':
                  case 'ArrowUp':
                  case 'KeyS':
                  case 'ArrowDown':
                      dir = 0;
                      break;
                  case 'KeyA':
                  case 'ArrowLeft':
                  case 'KeyD':
                  case 'ArrowRight':
                      mod = 0;
                      break;
              }
              break;
      }
  }
