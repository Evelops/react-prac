import React from "react";
import Board from "../component/Board";
// 함수형 컴포넌트 
const Home = () => {
    return(
    <div>
        <h1 className="font-bold"> HOME 화면임</h1>
        <div>
            <Board/>
        </div>
    </div>
        
    ) 

}

export default Home;