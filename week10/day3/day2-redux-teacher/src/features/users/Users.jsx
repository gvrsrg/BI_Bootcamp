import { useSelector, useDispatch } from "react-redux";
import { adduser, addUserPrepare } from "./usersSlice";
import { useRef } from "react";

const Users = (props) => {
  const users = useSelector((state) => state.usersReducer.users);

  const dispatch = useDispatch();

  const userNameRef = useRef();
  const userEmailRef = useRef();

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
        <button
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
        </button>
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
