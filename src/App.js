// import logo from './logo.svg';
import './App.css';

// 다음과 같이 함수형태로 컴포넌트화 시킬 수 있다. 
function Header(){
  return   <header>
  <h1><a href="/">WEB</a></h1>
</header>
}

// component -> Nav 
function Nav(){
  return <nav>
  <ol>
    <li><a href="/read/1">html</a></li>
    <li><a href="/read/2">css</a></li>
    <li><a href="/read/3">js</a></li>
  </ol>
</nav>
}

// 화살표 함수로도 컴포넌트화 시킬 수 있다.
const Article =()=>{
  return <article>
  <h2>Welcome</h2>
  hello, web!
</article>
}

// 위와 같이 컴포넌트화 시키면 사용자가 정의한 컴포넌트를 사용할 수 있기 때문에, 
//기능별, UI 별로 필요한 요소들을 정의해서 가져다 사용할 수 있음. 가독성도 올라가고 여러모로 좋다. 

function App() {
  return (
    <div>
    <Header></Header>
    <Nav></Nav>
    <Article></Article>
    </div>
    
  );
}

export default App;
