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
            <h1 className="font-bold text-lg">now count: {count}</h1>
            <button className="bg-gray-400 w-12 rounded-lg mr-5" onClick={addCount}>+1</button> 
            <button className="bg-gray-400 w-12 rounded-lg " onClick={minusCount}>-1</button>
        </div>
    )
}

export default Counter;