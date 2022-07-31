import React,{useReducer} from 'react';

function reducer(state, action) {
  switch(action.type) {
    case "INCREASE" :
      return  {value : state.value + 1}
    case "DECREASE" : 
      return  {value : state.value - 1}
    default : 
      return state
  }
}

function rreducer(state,action) {
  return {
    ...state,
    [action.name] : action.value
  }

}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value : 0})
  const [stateX, dispatchX] = useReducer(rreducer, {
    name: "",
    nickName : ''
  })
  const {name , nickName} = stateX;

  const change = (e) => {
    dispatchX(e.target)
  }
  return (
    <div>
        <h1>{state.value}</h1>
        <button onClick={() => dispatch({ type : "INCREASE" })}>INCREASE</button>
        <button onClick={() => dispatch({ type : "DECREASE" })}>DECREASE</button>

        <h1>iput</h1>

        <input name="name" value={name} onChange={change} /> <br/>
        <input name="nickName" value={nickName} onChange={change} />

      <div>name : {name}</div>
      <div>nickName : {nickName}</div>



    </div>
  );
};

export default Counter;