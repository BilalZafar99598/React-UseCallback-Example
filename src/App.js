import { useState, useEffect, useCallback } from "react"

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2])
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
      // console.log(`New sum. Value is: ${sum()}`)
      console.log(`Array Value is: ${buildArray()}`)
  }, [buildArray]);

  return (
    <main className="App">
        <input
          type="text"
          placeholder="Input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
           />
    </main>
  )
}

export default App