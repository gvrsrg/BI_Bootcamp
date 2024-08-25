// import Heading from "./components/Heading";
// import Section from "./components/Section";
// import Counter from "./components/Counter";
import List from "./components/List";
import "./App.css";
import { ChangeEvent, ChangeEventHandler, KeyboardEvent, MouseEvent, useMemo} from "react";
import { useState, useCallback, useEffect, useRef  } from "react";

function App() {
  const [count, setCount] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const numRef = useRef(0)
  
  console.log(numRef?.current);

  const retNum = ():number => {
    return 6;
  };

  const result = useMemo(() => retNum(), [])
  console.log(result);
  

  useEffect(()=>{
    return ():void => console.log("helppp");
  }, []
  )

  const addTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => {
    //console.log(e);
    setCount((prev => prev + 2))
  },
  []
  );
  
  
  //const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e):void => {
    console.log(inputRef?.current?.value);
    console.log(e.target.value);
  }

  return (
    <>
      {/* <Heading title="abc" sub="ssssssssss"/>
      <Section content="hello">
        <>
          hello from section
        </>
      </Section>
      <Counter setCount={setCount}>
        <h2>Count is {count}</h2>
      </Counter> */}
      {/* <List items={[1,2,3,4,33,"w"]}/> */}
      <div>
        <button onClick={(e)=>addTwo(e)}>Add 2</button>
        {count}
      </div>

      <input 
        onChange={handleChange} 
        ref={inputRef} 
        placeholder="Enter here...">
      </input>
    </>
  );
}

export default App;
