


import {useState,useMemo } from 'react'
interface Actions {
  toggle:()=>void,
  setTrue:()=>void,
  setFalse:()=>void,
}

function useBoolean(defaultvalue:boolean=false):[boolean,Actions] {

  const [state,setState] = useState(defaultvalue)

  const actions = useMemo(()=>{
    const toggle = ()=>{
      setState(!state)
    }

    const setTrue = ()=>{
      setState(true)
    }

    const setFalse = ()=>{
      setState(false)
    }
    return {
       toggle,
        setTrue,
        setFalse
    }
  },[])

  return [
    state,
    actions
  ]
}

export default useBoolean
