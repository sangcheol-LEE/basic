import React,{useState} from "react";
import Info from "../Components/Info";


const App = () =>{
  const [visible, setVisible] = useState(false)
  return (
    <>
    <button onClick={() => {setVisible(!visible)}}>View</button>
    {visible && 
    <Info /> }
    </>
    );
}

export default App;
