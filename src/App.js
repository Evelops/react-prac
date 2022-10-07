// import logo from './logo.svg';
import "./App.css";

// 다음과 같이 함수형태로 컴포넌트화 시킬 수 있다.
function Header(props) {
  console.log("props", props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // a 태그가 화면을 새로고침 하는 것을 막아줌, 함수의 첫번째 파라미터 값을 event로 주고, 다음과 같이 실행.
            props.onChangeMode(); // props가 가지는 값이 함수일 경우, 다음과 같이 지정해준다.
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

// component -> Nav
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(t.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

// 화살표 함수로도 컴포넌트화 시킬 수 있다.
const Article = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
};

//기능별 OR UI 별로 필요한 요소들을 정의해서 가져다 사용할 수 있기 때문에 가독성도 올라가고 여러모로 좋다.

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "js", body: "js is..." },
    { id: 4, title: "ts", body: "ts is..." },
  ];
  return (
    <div>
      <Header
        title="React"
        onChangeMode={() => {
          alert("!!");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welocme" body="Hello,Web"></Article>
    </div>
  );
}

export default App;
