
export default function GameBoard({onSelectChangeSymbol,board}){

    return (<ol id="game-board">
        {board.map((row,rowIndex)=>(
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,symIndex)=>(
                <li key={symIndex}>
                    <button  onClick={()=>onSelectChangeSymbol(rowIndex,symIndex)} 
                    disabled={playerSymbol!==null}>
                        {playerSymbol}
                        </button>
                </li>))}
            </ol>
        </li>))}
    </ol>)
}