var ball,img,paddle,paddleimage,ballimage;
function preload() {
  /* preload your images here of the ball and the paddle */
  
  paddleimage = loadImage("paddle.png");
  ballimage = loadImage("ball.png");
 
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(20,200,10,10);
  paddle = createSprite(380,200,10,10);
  /* assign the images to the sprites */
  paddle.addImage("paddle",paddleimage);
  ball.addImage("ball",ballimage);

  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown("up"))
  {
     /* what should happen when you press the UP Arrow Key */
    ball.velocityY = -5 
  }
  
  if(keyDown("down"))
  {
    /* what should happen when you press the UP Arrow Key */
    ball.velocityY = 5
  }
  drawSprites();
  
}

function randomVelocity(){
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}