/**
 * title: useToggle基础用法
 * desc: 当没有设置默认值时,默认使用true\false切换
 */
import React from 'react'
import { useToggle } from 'uni-hooks'

export default () =>{
  const [state,{toggle,setLeft,setRight} ] = useToggle('value1','value2')

  return (
    <div>
      <p>当前state的值为:{`${state}`}</p>
      <button onClick={toggle}>toggle切换</button>
      <button onClick={setLeft}>setLeft切换</button>
      <button onClick={setRight}>setRight切换</button>
    </div>
  )
}
