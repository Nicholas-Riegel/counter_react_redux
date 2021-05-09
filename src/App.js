import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store'

export const App = () => {
  
  let yo = useSelector(x=>x)

  const dispatch = useDispatch()
  
  return (
    <div>
      <p>Count: {yo}</p>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>
    </div>
  )
}
