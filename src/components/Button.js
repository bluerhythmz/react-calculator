import '../App.css'
function Button({keyValue, onPress, onDelete, onClear, onOperation, onCompute}) {
    const operatorArr = ["/", "+", "*", "-"]
    const numberArr = ["1","2","3","4","5","6","7","8","9","0","."]

    function handleButtonClick(e) {
        if (numberArr.includes(e.target.innerText)) {
            onPress(e.target.innerText)
        }
        if (operatorArr.includes(e.target.innerText)) {
            onOperation(e.target.innerText)
        }
        if (e.target.innerText === "DEL") {
            onDelete()
        }
        if (e.target.innerText === "AC") {
            onClear()
        }
        if (e.target.innerText === "=") {
            onCompute()
        }
    }

    return (
        <button className={keyValue === "=" || keyValue === "AC" ? "span-two" : ""} id={operatorArr.includes(keyValue) ? "operator" : numberArr.includes(keyValue) ? "number" : keyValue === "DEL" ? "delete" : keyValue === "AC" ? "all-clear" : keyValue === "=" ? "equals" : ""} onClick={handleButtonClick}>{keyValue}</button>
    )
}

export default Button
