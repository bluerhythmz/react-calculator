import '../App.css'

function Output({currentOp, previousOp, finalNumber}) {
    return (
        <div className="output">
            <div className="output__previous-operand">{finalNumber(previousOp)}</div>
            <div className="output__current-operand">{finalNumber(currentOp)}</div>
        </div>
    )
}

export default Output
