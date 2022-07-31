import React,{useState} from 'react';

const EventPractice = () => {
  const [info, setInfo] = useState({
    message : ""
  })

  const [userInfo, setUserInfo] = useState({
    userName : "",
    password : ""
  })
  const {userName, password} = userInfo

 const aaa = () => {
   alert(info.message)
   const prev ={
     ...info,
     message : ""
   }
   setInfo(prev)
 }

  const handleChange = (e) => {
    const prev = {
      ...info,
      message : e.target.value
    }
    setInfo(prev)
  }

  const userChange = (e) => {
    const prev = {
      ...userInfo,
      [e.target.name] : e.target.value
    }
    setUserInfo(prev)
  }
  const user = () => {
    alert(`유저명 : ${userName} 비밀번호 : ${password}`)
    const prev = {
      ...userInfo,
      userName: "",
      password: ""
    }
    setUserInfo(prev)
  }

  const ddd = (e)=> {
    if(e.key === "Enter") {
      user()
    }
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" placeholder="press anything" value={info.message} onChange={handleChange} />
      <button onClick={aaa}>click</button>

      <h1>인풋 여러개 다루기 </h1>

      <input type="text" name="userName" placeholder="userName" value={userName} onChange={userChange}/> <br />
      <input type="password" name="password" placeholder="password" value={password} onChange={userChange} onKeyDown={ddd}/>
      <button onClick={user}>click</button>

    </div>
  );
};

export default EventPractice;