import React, { useState } from "react";


const Counter = () => {
    // 초기값 0으로 지정
     const [count, setCount] = useState(0);

     const addCount = () => {
        setCount(count+1);
     }

     const minusCount = () => {
        setCount(count-1);
     }

    return (
        <div>
            <h1>now count: {count}</h1>
            <button onClick={addCount}>+1</button>
            <button onClick={minusCount}>-1</button>
        </div>
    )
     
    

}

export default Counter;