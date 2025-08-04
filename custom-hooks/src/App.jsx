import { useState } from 'react'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useCopyToClipboard from './hooks/useCopyToClipboard'

function App() {
  // const { count, increase, decrease } = useCounter(); --Call Counter Hooks.

  //const { open, change } = useToggle();

  const [copied, copy] = useCopyToClipboard("Don't give up!");
  return (

    // <div>
    //   <div>{count}</div>
    //   <button onClick={increase}>Plus</button>
    //   <button onClick={decrease}>Minus</button>
    // </div>

    // <div>
    //   {open && <div className='box'>Box</div>}

    //   <button onClick={change}>{open ? 'Hide' : 'Show'}</button>
    // </div>

    <div>
      {copied && 'Copied'}
      <button onClick={copy}>Copy</button>
    </div>

  )
}

export default App
