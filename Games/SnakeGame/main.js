// QuerySelector Variables
let gameBoard = document.querySelector('#snakeGame');

let ctx = gameBoard.getContext('2d');

let resetBtn = document.querySelector('.resetBtn');

let scoreText = document.querySelector('.score');
// console.log(ctx);

// Game Variables

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardColor = 'black';
const unitSize = 10;
let foodX, foodY;
const foodColor = 'red';
const snakeColor = 'green';
const snakeBorder = 'black';
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];
let xVelocity = unitSize;
let yVelocity = 0;
let score = 0;

// Game functions

function createFood() {
    function randomNumber(min, max) {
        let randVar = Math.floor((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randVar;
    }
    foodX = randomNumber(0, gameWidth);
    foodY = randomNumber(0, gameWidth);
    // console.log(foodX);
    // console.log(foodY);
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function clearBoard() {
    ctx.fillStyle = boardColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;

    snake.forEach((s) => {
        ctx.fillRect(s.x, s.y, unitSize, unitSize);
        ctx.strokeRect(s.x, s.y, unitSize, unitSize);
    })
}

function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    }
    snake.unshift(head);
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score++;
        scoreText.innerText = score;
        createFood();
    }
    else {
        snake.pop();
    }
}

clearBoard();
createFood();
drawFood();
drawSnake();


