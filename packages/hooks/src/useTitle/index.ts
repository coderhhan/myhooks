
import {useRef,useEffect} from 'react'
import useUnmount from '../useUnmount'
import isBrowser from '../utils/isBrowser';
interface Options {
  restoreTitle:boolean
}

const defaultOptions:Options = {
  restoreTitle:false
}
function useTitle(title:string,option = defaultOptions){
    const titleRef = useRef(isBrowser ? document.title : '')


    useEffect(()=>{
      document.title =title
    },[title])


    useUnmount(()=>{
      if(option.restoreTitle) {
        document.title = titleRef.current
      }
    })

}

export default useTitle
