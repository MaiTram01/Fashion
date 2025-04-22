import React, { useState } from 'react'

export default function FunctionState() {
    const [state, setState] = useState(0);
  return (
    <div>
        <h1>Giá trị:{state}</h1>
        <button onClick={() => setState(state + 1)}>Tăng giá trị</button>
        <button onClick={() => setState(state - 1)}>Giảm giá trị</button>
    </div>
  )
}
