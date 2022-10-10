// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

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
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}

function UPDATE(props){
  const [title,setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>UPDATE</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="update your title" value={title} onChange={event=>{
            console.log(event.target.value);
            setTitle(event.target.value);
          }} />
        </p>
        <p>
          <textarea name="body" placeholder="update your body" value={body} onChange={event=>{
            console.log(event.target.value);
            setBody(event.target.value);   
          }}></textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
}


//기능별 OR UI 별로 필요한 요소들을 정의해서 가져다 사용할 수 있기 때문에 가독성도 올라가고 여러모로 좋다.

function App() {
  let content = null; // 값 초기화.
  let contextControl = null;

  // const mode ='Welcome';
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "js", body: "js is..." },
    { id: 4, title: "ts", body: "ts is..." },
  ]);

  if (mode === "Welcome") {
    content = <Article title="Welocme" body="Hello,Web"></Article>;
  } else if (mode === "Read") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Article title={title} body={body}></Article>;
    contextControl = <li><a href={'/update'+id} onClick={(event)=>{
      event.preventDefault();
      setMode("UPDATE");
    }}>Update</a></li>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title: title, body: body };
          const newTopcics = [...topics];
          newTopcics.push(newTopic);
          setTopics(newTopcics);
        }}
      ></Create>
    );
  } else if(mode ==="UPDATE"){
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content= <UPDATE title={title} body={body} onUpdate={(title,body)=>{
      console.log(title,body);
      const newTopcics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i =0; i<newTopcics.length;i++){
        if(newTopcics[i].id === id){
          newTopcics[i]= updatedTopic;
          break;
        }
      }
      setTopics(newTopcics);
      setMode('Read');
    }}></UPDATE>
  }

  return (
    <div>
      <Header
        title="React"
        onChangeMode={() => {
          setMode("Welcome");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("Read");
          setId(id);
        }}
      ></Nav>
      {/* <Article title="Welocme" body="Hello,Web"></Article> */}
      {content}
      <ul>
      <li>
        <a
          href="/create"
          onClick={(event) => {
            event.preventDefault();
            setMode("CREATE");
          }}
        >
          Create
        </a>
      </li>
      {contextControl}
      </ul>
    </div>
  );
}

export default App;
