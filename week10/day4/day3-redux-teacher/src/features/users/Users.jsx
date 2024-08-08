import { useSelector, useDispatch } from "react-redux";
import { adduser, addUserPrepare, initusers, fetchUsers } from "./usersSlice";
import { useRef, useEffect } from "react";

const Users = (props) => {
  const users = useSelector((state) => state.usersReducer.users);
  const status = useSelector((state) => state.usersReducer.status);

  const dispatch = useDispatch();

  const userNameRef = useRef();
  const userEmailRef = useRef();

  useEffect(() => {
    dispatch(fetchUsers(7));
  }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const result = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await result.json();
  //     dispatch(initusers(data))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  if(status === 'loading') return <h2>Loading...</h2>

  if(status === 'failed') return <h2>Somthing went wrong, try in few minutes...</h2>

  return (
    <>
      <h2>Users:</h2>
      <div>
        <input placeholder='Name' ref={userNameRef} />
        <input placeholder='Email' ref={userEmailRef} />
        <button
          onClick={() =>
            dispatch(
              adduser({
                name: userNameRef.current?.value,
                email: userEmailRef.current?.value,
              })
            )
          }
        >
          Add User
        </button>
        {/* <button
          onClick={() =>
            dispatch(
            addUserPrepare(
                userNameRef.current?.value,
                userEmailRef.current?.value,
              )
            )
          }
        >
          Add Prepare User
        </button> */}
      </div>
      <div>
        {users.map((item) => {
          return (
            <div key={item.id}>
              {item.id} . {item.name} , {item.email}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Users;
