import { User } from "./User.js";
import 

function UserList({users}) {
    return (<div className="user-list">
            {users.map((c) => {return (<User user={c} />)})}
            </div> )
}

export default UserList
