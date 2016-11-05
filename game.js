var canvas = document.getElementById('canvas_id')
var ctx = canvas.getContext('2d')
var snakesSide = 20, rows = canvas.clientHeight, colums = canvas.clientWidth, moveTime = 250;
var snake = []
var field = [[]]

SetIn(0,0,'right')
SetIn(1,0,'right')
SetIn(2,0,'right')
SetIn(3,0,'right')

function SetIn(rowIndex, colIndex, moveDirection){
    snake.push({rowIndex:rowIndex, colIndex: colIndex, moveDirection:moveDirection})
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
  for(var index = 0; index < snake.length; index++){
      var block = snake[index]
      if(block.moveDirection == 'right')
          block.rowIndex == rows/snakesSide - 1 ? block.rowIndex = 0 : block.rowIndex++
      else if(block.moveDirection == 'left')
          block.rowIndex == 0 ? block.rowIndex = rows/snakesSide - 1 : block.rowIndex--
      else if(block.moveDirection == 'up')
              block.colIndex == 0 ? block.colIndex = colums/snakesSide - 1 : block.colIndex--
      else if(block.moveDirection == 'down')
          block.colIndex == colums/snakesSide - 1 ? block.colIndex = 0 : block.colIndex++
  }
}

SetIn()

mainGameCycle = setInterval(function(){
    DrawField()
    Move()
},moveTime)

document.addEventListener('keydown', function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which)
})
