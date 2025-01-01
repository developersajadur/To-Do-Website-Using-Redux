import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value)
  // console.log(count);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount))
  }

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount))
  }

  return (
    <div>
      <h1>Counter By Redux</h1>
      <button onClick={() => handleIncrement(1)}>Increment By 1</button>
      <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      <p>Count: {count}</p>
      <button onClick={() => handleDecrement(1)}>Decrement By 1</button>
      <button onClick={() => handleDecrement(5)}>Decrement By 5</button>
    </div>
  )
}

export default App
