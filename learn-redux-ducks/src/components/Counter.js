const Counter = ({ number, onIncrese, onDecrese }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrese}>+1</button>
        <button onClick={onDecrese}>-1</button>
      </div>
    </div>
  )
}

export default Counter