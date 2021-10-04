const NL = 15
const NC = 15
const LADO = 20;

class Cell {
  x: number;
  y: number;
  color: p5.Color;
  constructor(x: number, y: number, color: p5.Color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Snake {
  body: Cell;
  vx: number;
  vy: number;
  constructor() {
    this.cell = [];
    this.vx = 0;
    this.vy = 0;
    for (let i = 0; i < 3; i++) {
      this.cells.push(new Cell(i, 0, color(0, 0, 255)));
    }
  }

  move() {
    let head = this.cells[this.cells.length - 1];
    let newCell = new Cell(head.x, head.y, head.color);
    this.cells.push(newCell);
    this.cells.shift();
  }

  eat() {
    let head = this.cells[this.cells.length - 1];
    let newCell = new Cell(head.x, head.y, head.color);
    this.cells.push(newCell);
  }

  turn(newDirection: number) {
    this.direction = newDirection;
  }

  show() {
    for (let i = 0; i < this.cells.length; i++) {
      let cell = this.cells[i];
      fill(cell.color);
      rect(cell.x * LADO, cell.y * LADO, LADO, LADO);
    }
  }
}

let snake_x = 1;
let snake_y = 1;
let snake_vx = 0;
let snake_vy = 0;
let snake_color: p5.Color;
let cell_color: p5.Color;
let timer = 0;

function setup() {
  createCanvas(NC*LADO, NL*LADO);
  frameRate(30);
  snake_color = color("white");
  cell_color = color(20);
}

function keyPressed(){
  if (keyCode ===LEFT_ARROW) {
    snake_vx = -1;
    snake_vy = 0;
  } else if (keyCode === RIGHT_ARROW) {
    snake_vx = 1;
    snake_vy = 0;
  } else if (keyCode === UP_ARROW) {
    snake_vx = 0;
    snake_vy = -1;
  } else if (keyCode === DOWN_ARROW) {
    snake_vx = 0;
    snake_vy = 1;
  }
}

function draw_cell(x: number, y: number, color: p5.Color){
  noStroke();
  fill(color)
  square(x*LADO+0.3,y*LADO+0.3,LADO-0.3);
}

function draw_mat(){
  for(let c=0; c<NC; c++)
    for(let l=0;l<NL;l++)
      draw_cell(c,l,cell_color);
}

function snake_loop() {
  if(snake_x==NC)
    snake_x=0;
  if (snake_y==NL)
    snake_y=0
  if (snake_x==-1)
    snake_x=NC-1;
  if (snake_y==-1)
    snake_y=NL-1;
}

function snake_walk(){
  if (frameCount - timer > 5) {
    timer = frameCount; 
    snake_x += snake_vx; 
    snake_y += snake_vy;
  }
}

function draw(){
  snake_walk();
  snake_loop();
  background(220);
  draw_mat();
  draw_cell(snake_x,snake_y, snake_color);
}