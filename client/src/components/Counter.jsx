import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducers/counterSlice';
import Button from '@mui/material/Button';

const Counter = () => {
  const [amount, setAmount] = useState();
  // Read data from the store with hook useSelector; dispatch actions with hook useDispatch
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // ----- Render -----

  return (
    <div>
      <p className="last-line paragraph">
        How much would you like to increment/decrement at a time? 🚧
      </p>
      <div>
        <Button
          className="decrement-value"
          variant="contained"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <span className="counter-value">{count}</span>
        <Button
          className="increment-value"
          variant="contained"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </div>
    </div>
  )
};

export default Counter;