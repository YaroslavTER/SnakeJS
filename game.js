var canvas = document.getElementById('canvas_id')
var ctx = canvas.getContext('2d')
var snakesSide = 20, rows = canvas.clientHeight, colums = canvas.clientWidth, moveTime = 100;
var limit = rows/snakesSide - 1
var moveDirection = 'right'
var snakeColor = '#FF420E', pointColor = '#63E072'
var point = {rowIndex:0, colIndex:0}
var snake = []
var isRunning = true

PushBack(0,0)
PushBack(1,0)
PushBack(2,0)
PushBack(3,0)

GeneratePoint()

function PushBack(rowIndex, colIndex){ snake.push({rowIndex:rowIndex, colIndex:colIndex}) }

function DrawSnake(){
    ctx.fillStyle = snakeColor
    ctx.clearRect(0,0,snakesSide*rows,snakesSide*colums)
    for(var index = 0; index < snake.length; index++){
        var block = snake[index]
        ctx.fillRect(block.rowIndex*snakesSide, block.colIndex*snakesSide, snakesSide, snakesSide)
    }
    DrawPoint()
}

function DrawPoint(){
    ctx.fillStyle = pointColor
    ctx.fillRect(point.rowIndex*snakesSide, point.colIndex*snakesSide, snakesSide, snakesSide)
}

function Move(){
      block = snake[snake.length-1]
      var rowIndex = block.rowIndex, colIndex = block.colIndex
      var pRowIndex = rowIndex, pColIndex = colIndex
      snake.shift()
      if(moveDirection == 'right') rowIndex == limit ? rowIndex = 0 : rowIndex++
      else if(moveDirection == 'left') rowIndex == 0 ? rowIndex = limit : rowIndex--
      else if(moveDirection == 'down') colIndex == limit ? colIndex = 0 : colIndex++
      else if(moveDirection == 'up') colIndex == 0 ? colIndex = limit : colIndex--
      if(!IsEmptyPlace(rowIndex,colIndex)) isRunning = false
      if(rowIndex == point.rowIndex && colIndex == point.colIndex){
          snake.unshift({pRowIndex, pColIndex})
          GeneratePoint()
      }
      PushBack(rowIndex, colIndex)
}

function IsEmptyPlace(rowIndex, colIndex){
    isEmptyPlace = true
    for(var index = 0; index < snake.length-1;index++){
        var block = snake[index]
        if(block.rowIndex == rowIndex && block.colIndex == colIndex)
            isEmptyPlace = false
    }
    return isEmptyPlace
}

function GeneratePoint(){
    do{
        var rowIndex = GetRandIn(0,limit), colIndex = GetRandIn(0,limit)
    }while(rowIndex == point.rowIndex && colIndex == point.colIndex && !IsEmptyPlace(rowIndex, colIndex))
    point.rowIndex = rowIndex
    point.colIndex = colIndex
}

function GetRandIn(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min }

document.addEventListener('keydown', function(event) {
    var head = snake[snake.length-1]
    if(event.which == 37 && moveDirection != 'right') moveDirection = 'left'
    else if(event.which == 38 && moveDirection != 'down') moveDirection = 'up'
    else if (event.which == 39 && moveDirection != 'left') moveDirection = 'right'
    else if(event.which == 40 && moveDirection != 'up') moveDirection = 'down'
})

mainGameCycle = setInterval(function(){
    if(isRunning){
      DrawSnake()
      Move()
    }
},moveTime)
