import {useState,useMemo } from 'react'
type Fun = ()=>void

export interface Actions<T>  {
  toggle:Fun,
  setLeft:Fun,
  setRight:Fun
}

function useToggle<T=boolean>():[boolean,Actions<T>];
function useToggle<D,R>(D?,R?):[D|R,Actions<D|R>];
function useToggle<D,R>(defaultValues:D = false as D,reverseValue?:R){
  const [state,seState] = useState(defaultValues)

  const acitons = useMemo(()=>{
    //如果只传 1个  rever = false
    const reverseValueorgin = reverseValue === '' || reverseValue === undefined ? !defaultValues : reverseValue

    const toggle = ()=>{
      seState(value=>value ===defaultValues ?reverseValueorgin:defaultValues)
    }
    const setLeft = ()=>{
      seState(()=>defaultValues)
    }
    const setRight = ()=>{
      seState(()=>reverseValueorgin )
    }
    return {
      toggle,
      setLeft,
      setRight
    }
  })

  return [
    state,
    acitons
  ]
}


export default useToggle
