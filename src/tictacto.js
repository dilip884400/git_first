
import style from './tictacto.module.css'


import { useState } from 'react';


export default function Tictactoe() {

    const [board,setBoard] = useState(Array(9).fill(""))
    const [move,setMove] = useState("X")

    function click(i){
        let square = [...board]
        if(board[i] !=""){
            alert("Alreqady Clicked")
            return 
        }
        square[i] = move
        setBoard(square)
      if(move=="X"){
        setMove("O")
      }else{
        setMove("X")
      }
     if(checkWin(square)){
        alert("win")
     }
      
    }

    function checkWin(board){
        const conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag=false;
        conditions.forEach(element => {
            if(board[element[0]] !="" && board[element[1]]!="" && board[element[2]]!=""){
           if(board[element[0]]==board[element[1]] && board[element[1]]==board[element[2]]){
                flag=true
           }
        }
        })
        return flag
      }

  return (
   <>
    <h1>Tic tac Toe Game </h1>
    <table>
        <tr>
            <td onClick={()=>{click(0)}}>{board[0]}</td>
            <td onClick={()=>{click(1)}}>{board[1]}</td>
            <td onClick={()=>{click(2)}}>{board[2]}</td>
        </tr>

        <tr>
            <td onClick={()=>{click(3)}}>{board[3]}</td>
            <td onClick={()=>{click(4)}}>{board[4]}</td>
            <td onClick={()=>{click(5)}}>{board[5]}</td>
        </tr>

        <tr>
            <td onClick={()=>{click(6)}}>{board[6]}</td>
            <td onClick={()=>{click(7)}}>{board[7]}</td>
            <td onClick={()=>{click(8)}}>{board[8]}</td>
        </tr>
    </table>
   </>
  )
}
