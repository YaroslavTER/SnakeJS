var canvas = document.getElementById('canvas_id')
var ctx = canvas.getContext('2d')
var snakesSide = 20, rows = 100, colums = 100, moveTime = 500;
var snake = []
var field = [[]]

SetIn(0,0,'right')
SetIn(1,0,'right')
SetIn(2,0,'right')
SetIn(3,0,'right')

function SetIn(rowIndex, colIndex, moveDirection){
    snake.push({rowIndex:rowIndex, colIndex: colIndex, status:true, moveDirection:moveDirection})
}

function DrawField(){
    ctx.fillStyle = '#FF420E'
    ctx.clearRect(0,0,rows,colums)
    for(var index = 0; index < snake.length; index++){
        var block = snake[index]
        if(block.status)
            ctx.fillRect(block.rowIndex*snakesSide, block.colIndex*snakesSide, snakesSide, snakesSide)
    }
}

function Move(){
  for(var index = 0; index < snake.length; index++){
      var block = snake[index]
      if(block.status){
          if(block.moveDirection == 'right')
              block.rowIndex++
      }
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
