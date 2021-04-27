import './App.css';
import {useState} from 'react'
import Output from './components/Output'
import Button from './components/Button'

function App() {
  const [currentOp, setCurrentOp] = useState('')
  const [previousOp, setPreviousOp] = useState('')
  const [operation, setOperation] = useState('')

  
  function appendNumber(button) {
    if (button === "." && currentOp.includes('.')) return
    setCurrentOp(currentOp.toString() + button)
  }

  function finalNumber(number) {
    const stringNumber = number.toString()
    let integerDisplay
    let integerDigits = parseFloat(stringNumber.split('.')[0])
    let decimalDigits = stringNumber.split('.')[1]
    
    
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  function del() {
    setCurrentOp(currentOp.slice(0, -1))
  }

  function clear() {
    setCurrentOp('')
    setPreviousOp('')
    setOperation('')
  }

  function chooseOperation(operator) {
    setOperation(operator)
    setPreviousOp(currentOp + operator)
    setCurrentOp('')
  }

  function compute() {
    let curr = parseFloat(currentOp)
    let prev = parseFloat(previousOp)
    let computation

    switch(operation) {
      case "+":
        computation = prev + curr
        break
      case "-":
        computation = prev - curr
        break
      case "*":
        computation = prev * curr
        break
      case "/":
        computation = prev / curr
        break
      default:
        return
    }

    setCurrentOp(computation)
    setPreviousOp('')
    setOperation('')
  }

  return (
    <div className="calculator">
      <Output currentOp={currentOp} previousOp={previousOp} finalNumber={finalNumber} />
      <Button keyValue={'AC'} onClear={clear}/>
      <Button keyValue={'DEL'} onDelete={del}/>
      <Button keyValue={'/'} onOperation={chooseOperation}/>
      <Button keyValue={'1'} onPress={appendNumber}/>
      <Button keyValue={'2'} onPress={appendNumber}/>
      <Button keyValue={'3'} onPress={appendNumber}/>
      <Button keyValue={'*'} onOperation={chooseOperation}/>
      <Button keyValue={'4'} onPress={appendNumber}/>
      <Button keyValue={'5'} onPress={appendNumber}/>
      <Button keyValue={'6'} onPress={appendNumber}/>
      <Button keyValue={'+'} onOperation={chooseOperation}/>
      <Button keyValue={'7'} onPress={appendNumber}/>
      <Button keyValue={'8'} onPress={appendNumber}/>
      <Button keyValue={'9'} onPress={appendNumber}/>
      <Button keyValue={'-'} onOperation={chooseOperation}/>
      <Button keyValue={'.'} onPress={appendNumber}/>
      <Button keyValue={'0'} onPress={appendNumber}/>
      <Button keyValue={'='} onCompute={compute}/>
    </div>
  );
}

export default App;
