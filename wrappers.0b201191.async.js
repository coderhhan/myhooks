(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),s=n("ahKI"),r=n.n(s),u=n("RGYn"),a=n("DBVu"),i=n("GAyR"),c=n("7JWa"),l="\nimport useBoolean from \"..\";\nimport React from 'react';\nexport default ()=>{\n  const [state ,{toggle,setTrue,setFalse}] = useBoolean(undefined)\n\n  return (\n    <div>\n      {`state:${state}`}\n      <button onClick={toggle}>toggle</button>\n      <button onClick={setTrue}>setTrue</button>\n      <button onClick={setFalse}>setFalse</button>\n    </div>\n  )\n\n}",d="\n\n\nimport {useState,useMemo } from 'react'\ninterface Actions {\n  toggle:()=>void,\n  setTrue:()=>void,\n  setFalse:()=>void,\n}\n\nfunction useBoolean(defaultvalue:boolean=false):[boolean,Actions] {\n\n  const [state,setState] = useState(defaultvalue)\n\n  const actions = useMemo(()=>{\n    const toggle = ()=>{\n      setState(!state)\n    }\n\n    const setTrue = ()=>{\n      setState(true)\n    }\n\n    const setFalse = ()=>{\n      setState(false)\n    }\n    return {\n       toggle,\n        setTrue,\n        setFalse\n    }\n  },[])\n\n  return [\n    state,\n    actions\n  ]\n}\n\nexport default useBoolean",p="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'encode-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const latestCountRef = useLatest(count);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(latestCountRef.current + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return (\n    <>\n      <p>count: {count}</p>\n    </>\n  );\n};",m="import React from 'react'\nimport { useToggle } from 'encode-hooks'\n\nexport default () =>{\n  const [state,{toggle,setLeft,setRight} ] = useToggle()\n\n  return (\n    <div>\n      <p>\u5f53\u524dstate\u7684\u503c\u4e3a:{state.toString()}</p>\n      <button onClick={toggle}>toggle\u5207\u6362</button>\n      <button onClick={setLeft}>setLeft\u5207\u6362</button>\n      <button onClick={setRight}>setRight\u5207\u6362</button>\n    </div>\n  )\n}",f="import React from 'react'\nimport { useToggle } from 'encode-hooks'\n\nexport default () =>{\n  const [state,{toggle,setLeft,setRight} ] = useToggle('value1','value2')\n\n  return (\n    <div>\n      <p>\u5f53\u524dstate\u7684\u503c\u4e3a:{`${state}`}</p>\n      <button onClick={toggle}>toggle\u5207\u6362</button>\n      <button onClick={setLeft}>setLeft\u5207\u6362</button>\n      <button onClick={setRight}>setRight\u5207\u6362</button>\n    </div>\n  )\n}",g="//222import { useBoolean, useUnmount } from 'uni-hooks';\nimport { message } from 'antd';\nimport React from 'react';\n\nconst MyComponent = () => {\n  // useUnmount(() => {\n  //   message.info('unmount');\n  // });\n\n  return <p>Hello World!</p>;\n};\n\nexport default () => {\n  // const [state, { toggle }] = useBoolean(true);\n\n  return (\n    <>\n      {/* <button type=\"button\" onClick={toggle}>\n        {state ? 'unmount' : 'mount'}\n      </button>\n      {state && <MyComponent />} */}111\n    </>\n  );\n};",b={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l},"index.ts":{import:"..",content:d}},dependencies:{react:{version:"18.2.0"}},hideActions:["CSB"],identifier:"useboolean-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useLatest \u8fd4\u56de\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u503c</p></div>',identifier:"uselatest-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"18.2.0"}},title:"useToggle\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5f53\u6ca1\u6709\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u65f6,\u9ed8\u8ba4\u4f7f\u7528true\\false\u5207\u6362</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"18.2.0"}},title:"useToggle\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5f53\u6ca1\u6709\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u65f6,\u9ed8\u8ba4\u4f7f\u7528true\\false\u5207\u6362</p></div>',identifier:"usetoggle-demo2"}},"useunmount-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"y7Gi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0c\u6267\u884c\u51fd\u6570\u3002</p></div>',identifier:"useunmount-demo1"}}},h=n("Zs1V"),v=n("XyGb"),k=n.n(v);t["default"]=e=>r.a.createElement(k.a,Object(o["a"])({},e,{config:u,demos:b,apis:h}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/hooks":[{"title":"\u751f\u547d\u5468\u671f","children":[{"path":"/hooks/use-unmount","title":"useUnmount"}]},{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"}]}],"/":[{"title":"\u9996\u9875","path":"index"}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"uni hooks","logo":"/myhooks/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);