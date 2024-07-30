import Button from "./Button";
// import { useState } from "react";

const Counter = (props) => {
  console.log(props);
  //   const [count, setCount] = useState(0);
  const { count, setCount } = props;
  return (
    <>
      <h2>Counter</h2> {count} <Button setCount={setCount} />
    </>
  );
};
export default Counter;
