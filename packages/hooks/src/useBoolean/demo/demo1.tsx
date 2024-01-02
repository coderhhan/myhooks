
import useBoolean from "..";
import React from 'react';
export default ()=>{
  const [state ,{toggle,setTrue,setFalse}] = useBoolean(undefined)

  return (
    <div>
      {`state:${state}`}
      <button onClick={toggle}>toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
    </div>
  )

}
