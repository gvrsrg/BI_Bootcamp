import { useEffect } from "react";

const UnmountExample = (props) => {
  useEffect(() => {

    //...
    return () => alert("I will soon gone!!!");
  },[conut]);

  return (
    <>
      <h1>This is me</h1>
    </>
  );
};
export default UnmountExample;
