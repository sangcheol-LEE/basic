import React,{useState,useMemo, useCallback, useRef} from 'react';

const aver = arr => {
  console.log("평균 계싼 중...")
  if(arr.length === 0 )return 0;
  const sum = arr.reduce((a,b) => a + b)
  return sum / arr.length
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef()
  const change = useCallback(e => {
    setNumber(e.target.value)
  },[])

  const insert = useCallback(() => {
    const prev = list.concat(parseInt(number))
    setList(prev)
    setNumber("")
    inputEl.current.focus()
  },[list, number])
  const avg = useMemo(() => aver(list),[list])
  return (
    <div>
      <input value={number} onChange={change} ref={inputEl}/>
      <button onClick={insert}>add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <h1>평균값은 : {avg}</h1>
        {/* <h1>평균값은 : {aver(list)}</h1> */}

      </div>
    </div>
  )
 
};

export default Average;