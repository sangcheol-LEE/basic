import React,{useState,useCallback} from 'react';

const MapPractice = () => {
  const [names, setNames] = useState ([
    {id: 1, text: "SnowMan"},
    {id: 2, text: "Elsa"},
    {id: 3, text: "Hulk"},
    {id: 4, text: "Ian"},
    {id: 5, text: "IronMan"}
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6);
 
  const nameList = names.map(name => <li key={name.id}>{name.text} <button onClick={() => clickx(name.id)}>delete</button></li>)

  const change = (e) => {
    setInputText(e.target.value)
  }

  const clickx = (id) => {
    const prev = names.filter(name => name.id !== id)
    setNames(prev)
  }


  const clickk = () => {
    setNames(names.concat({id: nextId, text: inputText}) )
    setNextId(nextId + 1)
    setInputText("")
  }
  console.log("names",names)
  return (
    <>
    <ul>{nameList}</ul>

    <input type="text" placeholder="press name" value={inputText} onChange={change}/>
    <button onClick={clickk}>Add</button>
    </>
  )
  
};

export default MapPractice;