var canvas = document.getElementById('canvas_id')
var ctx = canvas.getContext('2d')
var snakesSide = 20, rows = canvas.clientHeight, colums = canvas.clientWidth, moveTime = 250;
var moveDirection = 'right'
var snake = []

PushBack(0,0)
PushBack(1,0)
PushBack(2,0)
PushBack(3,0)

function PushBack(rowIndex, colIndex){
    snake.push({rowIndex:rowIndex, colIndex: colIndex})
}

function DrawField(){
    ctx.fillStyle = '#FF420E'
    ctx.clearRect(0,0,snakesSide*rows,snakesSide*colums)
    for(var index = 0; index < snake.length; index++){
        var block = snake[index]
        ctx.fillRect(block.rowIndex*snakesSide, block.colIndex*snakesSide, snakesSide, snakesSide)
    }
}

function Move(){
      block = snake[snake.length-1];
      var rowIndex = block.rowIndex;
      var colIndex = block.colIndex;
      snake.shift()
      if(moveDirection == 'right') rowIndex++
      else if(moveDirection == 'left') rowIndex--
      else if(moveDirection == 'down') colIndex++
      else if(moveDirection == 'up') colIndex--
      PushBack(rowIndex, colIndex)
}

//PushBack()
//unshift - push in head

document.addEventListener('keydown', function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which)
    var head = snake[snake.length-1]
    if(event.which == 37) moveDirection = 'left'
    else if(event.which == 38) moveDirection = 'up'
    else if (event.which == 39) moveDirection = 'right'
    else if(event.which == 40) moveDirection = 'down'
})

mainGameCycle = setInterval(function(){
    DrawField()
    Move()
},moveTime)
