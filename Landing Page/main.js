

// let table = document.createElement("table")
// for (let i = 0 ; i<8 ; i++){
//   let row = document.createElement("tr")
//   for (let j = 0; j<8; j++){
//     let cell = document.createElement("td")

//     if((i+j)%2 == 0){
//       cell.setAttribute('class', 'Whitecell')
//       row.appendChild(cell)
//     }
//     else{
//       cell.setAttribute('class', 'Blackcell')
//       row.appendChild(cell)
//     }

//   }

//   table.appendChild(row)

// }

// document.body.appendChild(table)

const limit = 8



function printSolution(board)
{
    for(let i = 0; i < limit; i++)
    {
        for(let j = 0; j < limit; j++)
        {
            document.write(board[i][j], " ")
        }
        document.write("</br>")
    }
}

const checksafe = (board, row, col) => {



    for( let i = 0; i < col; i++ ){
        if(board [row][i] === 1)
        {
            return false
        }
    }

    for( let i = row, j = col; i >= 0 && j >= 00; i--, j--){

        if (board [i][j] === 1)
        {
            return false
        }
    }

    for( let i = row, j = col ; j >= 0, i<limit; i++, j--){

        if (board [i][j] === 1)
        {
            return false
        }
    }

    return true

}

const placeQueen = (board, col) => {

  if(col >= limit){
    return true
  }

  for(let i = 0; i < limit; i++)
  {
    if(checksafe(board, i, col )){
      board[i][col] = 1

      if(placeQueen(board, col + 1) === true)
      {
        return true
      }


      board[i][col] = 0 
    }
  }

  return false

}

const generateBoard = (limit) =>{
  let table = document.createElement('table')
  let board=[];
  for(let i=0; i<limit; i++){
    let row = document.createElement('tr')
    board[i]=[];
    for(let j=0; j<limit; j++){
      let cell = document.createElement('td')
      board[i][j]=0;
      cell.setAttribute("id", board[i][j])
      
    }
  }
  return board; 
}


const solveQueen = () => {

  let board = generateBoard(limit)
  let firstQueen = Math.floor(Math.random() * 9)
  board[firstQueen][0] = 1

  placeQueen(board, 1)


  printSolution(board)

}

