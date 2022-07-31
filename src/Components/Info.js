import React,{useState, useEffect} from 'react';

const Info = () => {

  const [name, setName] = useState("");
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log("finish rendering")
    console.log({
      name, nickName
    });

    return() => {
      console.log("clean Up")
      console.log(name)
    }
  },[name])

  const nameC = e => {
    setName(e.target.value)
  }

  const nickNameC = e => {
    setNickName(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={nameC}/> <br/>
      <input value={nickName} onChange={nickNameC}/>
      <br />
      <div>이름 : {name}</div>
      <div>닉네임 : {nickName}</div>

    </div>
  );
};

export default Info;