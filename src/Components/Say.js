import React,{useState} from 'react';

const Say = () => {
  const [color, setColor] = useState("red")
  const a = {a: 1, b: 2, c : 3}
  const b = {...a, d : 4, e: 5}
  const c = [
    {a : 1, b: 2},
    {a : 3, b: 1},
    {a : 2, b: 2},
    {a : 4, b: 1}
  ]

  let d = c.concat({a : 5, b: 3})
  let f = c.filter(item => item.a % 2 === 0)
  let m = c.map (item => item.a > 2 ? console.log("bigger") : console.log("small"))
 
console.log("D",d)
console.log("f",f)

  return (
    <div>
      change: {color}
      <br/>
      <button onClick={()=> setColor("Green")}>Green</button>
      <button onClick={()=> setColor("Blue")}>Blue</button>
      <button onClick={()=> setColor("Yellow")}>Yellow</button>
    </div>
  );
};


export default Say;