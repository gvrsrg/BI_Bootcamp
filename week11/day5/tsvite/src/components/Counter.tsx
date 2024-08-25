import { ReactElement, ReactNode } from 'react'

interface CounterProps {
    children: ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Counter({children, setCount}: CounterProps): ReactElement {
  return (
    <>
      <h2>Counter</h2>
      {children}
      <button onClick={()=>setCount(count => count + 1)}> + </button>
      <button onClick={()=>setCount(count => count - 1)}> - </button>
    </>
  )
}
