import React,{useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        tel:"",
    });

    // state를 별도로 객체 형식으로 사용할 경우, 별도로 구조분해 할당을 해주어야 함. 
    const {name, email, tel} = inputs;

    const setUpdate = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            ...inputs,
            [id]:value
        });
    };


    return (
        <div>
            <div>
                <label>이름: </label>
                <input tpye="text" id="name" value={name} onChange={setUpdate} />
            </div>
            <div>
                <label>이메일: </label>
                <input tpye="eamil" id="email" value={email} onChange={setUpdate} />
            </div>
            <div>
                <label>전화번호: </label>
                <input tpye="tel" id="tel" value={tel} onChange={setUpdate} />
            </div>
            <p>Name:{name}, Email:{email}, Tel:{tel}</p>
        </div>
    );
}
export default Input2;