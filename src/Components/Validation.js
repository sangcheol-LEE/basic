import React,{useState} from 'react';
import '../main.css'
const Validation = () => {
  const [info, setInfo] = useState({
    password: "",
    clicked : false,
    validated : false
  })

  const {password, clicked, validated} = info

  const change = (e) => {
    const prev = {
      ...info,
      password : e.target.value
    }
    setInfo(prev)
  }

  const click = () => {
    const prev = {
      ...info,
      clicked : true,
      validated : password === "0000" && true
    }
    setInfo(prev)
  }
  return (
    <div>
      <input type="password" value={password} onChange={change} className={clicked ? (validated ? "success" : "fail" ) : ""}/>
      <button onClick={click}>click</button>
    </div>
  );
};

export default Validation;