import { useContext } from 'react'
import Counter from './component/Counter'
import './App.css'
import {ConterContext} from './context/Counttxt';


function App() {
  const counterState = useContext(ConterContext);
  console.log("context",counterState);
  return (
    <>
      <div className='App'>
        <h1>Count is 0</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </>
  )
}

export default App
