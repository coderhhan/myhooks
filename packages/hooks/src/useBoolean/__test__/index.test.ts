import { renderHook ,act} from "@testing-library/react";
import useBoolean from "..";

const callToggle = (hooks)=>{
 act(()=>{
  hooks.result.current[1].toggle()
 })
}


const callSettrue = (hooks)=>{
  act(()=>{
   hooks.result.current[1].setTrue()
  })
 }

 const callSetfalse = (hooks)=>{
  act(()=>{
   hooks.result.current[1].setFalse()
  })
 }


describe('useBoolean',()=>{
  it('基本使用-默认',()=>{
    const hooks= renderHook(()=>useBoolean())
    expect(hooks.result.current[0]).toBe(false)

    callToggle(hooks)
    expect(hooks.result.current[0]).toBe(true)


    callSetfalse(hooks)
    expect(hooks.result.current[0]).toBe(false)

    callSettrue(hooks)
    expect(hooks.result.current[0]).toBe(true)
  })

})
