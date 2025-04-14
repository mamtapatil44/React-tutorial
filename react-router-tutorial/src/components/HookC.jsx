import React, { useEffect, useReducer, useRef, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
      default:
        return state;
  }
}

const HookC =   () => {
  const [data, setData] = useState("");
  const inputValue = useRef("new");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleData = (updatedValue) => {
    setData(updatedValue);
  };
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = await res.json();
    console.log("data== ", jsonData);
  };
  useEffect(() => {
    let timer = setTimeout(fetchData(), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <input
           className=" w-2xl bg-gray-400 border p-2"
        value={data}
        onChange={(e) => handleData(e.target.value)}
      />



      <input
        className=" w-2xl bg-gray-400 border p-2 mt-4"
        ref={inputValue}
        value={inputValue.current.value}
        placeholder="Enter input"
      />
      <p>Count : {state.count}</p>
      <button className="rounded-lg p-2 m-2 bg-amber-400" onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button className="rounded-lg p-2 m-2 bg-amber-400" onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  );
};

export default HookC;
