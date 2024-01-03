import { renderHook,act } from "@testing-library/react";
import useTitle from "..";

describe('useTitle基本用法', () => {
  it('默认标题',()=>{
    const hooks = renderHook((props)=>useTitle(props),{
      initialProps:'自定义标题'
    })

    expect(document.title).toBe('自定义标题')

    act(()=>{
      hooks.rerender('自定义标题1')
    })

    expect(document.title).toBe('自定义标题1')
  })

  it('组件销毁重置title1',()=>{

    document.title = '旧标题';

    const hooks = renderHook((props)=>useTitle(props,{restoreTitle:true}),{
      initialProps:'自定义标题'
    })

    expect(document.title).toBe('自定义标题')

    act(()=>{
      hooks.unmount()
    })

    expect(document.title).toBe('旧标题')
  })


  it('组件销毁重置title2',()=>{

    document.title = '旧标题';

    const hooks = renderHook((props)=>useTitle(props,{restoreTitle:false}),{
      initialProps:'自定义标题'
    })

    expect(document.title).toBe('自定义标题')

    act(()=>{
      hooks.unmount()
    })

    expect(document.title).toBe('自定义标题')
  })
 })
