import React,{useState} from "react";
import Average from "../Components/Average";
import Counter from "../Components/Counter";
import Info from "../Components/Info";


const App = () =>{
  const [visible, setVisible] = useState(false)
  return (
    <>
    <button onClick={() => {setVisible(!visible)}}>View</button>
    {visible && 
      <>
        <Info /> 
        <Counter />
      </>
    } 
    <Average />
    </>
    );
}

export default App;
