import {renderHook,act} from '@testing-library/react'
import useToggle from '..'

const callToggle = (hooks)=>{
  act(()=>{
    hooks.result.current[1].toggle()
  })
}

const callsetLeft = (hooks)=>{
  act(()=>{
    hooks.result.current[1].setLeft()
  })
}

const callsetRight = (hooks)=>{
  act(()=>{
    hooks.result.current[1].setRight()
  })
}

describe('useToggle',()=>{
  it('基本使用',()=>{
    const hooks = renderHook(()=>useToggle())
    expect(hooks.result.current[0]).toBeFalsy()
  })

  it('toggle模拟',()=>{
    const hooks = renderHook(()=>useToggle('value1','value2'))

    expect(hooks.result.current[0]).toBe('value1')
    callToggle(hooks)
    expect(hooks.result.current[0]).toBe('value2')

    callsetLeft(hooks)
    expect(hooks.result.current[0]).toBe('value1')

    callsetRight(hooks)
    expect(hooks.result.current[0]).toBe('value2')
  })
})
