import React,{useState} from "react";

const Input = () => {
    const [inputText, setChageText] = useState("");

    const changeInput = (e) => {
        setChageText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={changeInput} />
            <br/>
            <p>{inputText}</p>
        </div>
    );
}
export default Input;