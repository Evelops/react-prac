import logo from './logo.svg';

import './App.css';
import './index.css';
import { Routes,Route,Link } from 'react-router-dom';

import About from './page/About';
import Home from './page/Home';
import Counter from './page/Counter';


function App() {
  return (
    <div className='App'>
      <nav>
        {/* 
        react-router-dom에 내장 모듈로, a 태크와 비슷하게 말 글대로 링크를 걸어줄 수 있음.
        url querystring에서 라우팅되는 경로값을 지정 할 수 있음. 
        */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to = "/counter">Counter</Link>
      </nav>  
      {/*
      위에서 Link로 정의한 라우팅 경로에 해당하는 실제 경로값을 지정해주는 부분
      위 Link의 to에 해당하는 경로값과 일치하는 path에 해당하는 컴포넌트를 렌더링함 
       */}
      <Routes>
        <Route path ="/" element = {<Home />}></Route>
        <Route path ="/about" element = {<About />}></Route>
        <Route path ="/counter" element = {<Counter />}></Route>
        </Routes>    
    </div>
  );
}

export default App;
