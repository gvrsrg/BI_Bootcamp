import { useState, useEffect } from "react";
import User from "./components/User";
import UnmountExample from "./components/UnmountExample";
import "./App.css";
import "tachyons";

function App() {
  //const [state, setState] = useState()
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState();
  const [unmount, setUnmount] = useState(false);

  useEffect(() => { 
    console.log("useEffect");
    if (count > 5) {
      fetchdata();
    }

    const aaa = async() => {
      await fetch()
    }
    aaa()
    return () => alert("App will soon gone!!!");
  }, [count]);

  // const add =() => {
  //   setCount(count + 1)
  // }

  // const minus =() => {
  //   setCount(count - 1)
  // }

  const fetchdata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Users</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      </div>

      {users ||
        users.map((item) => {
            return <User key={item.id} {...item} />;
          })
        }

      <div>
        <button onClick={() => setUnmount(!unmount)}>
          {unmount ? "Mounnt" : "UnMount"}
        </button>
        {unmount || <UnmountExample />}
      </div>
    </>
  );
}

export default App;
