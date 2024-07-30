import Button from "./Button";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  if(count > 5) {
    throw new Error('Crashed...!!!')
  }

  return (
    <>
      <h2>Counter</h2> {count} <Button setCount={setCount} />
    </>
  );
};
export default Counter;
