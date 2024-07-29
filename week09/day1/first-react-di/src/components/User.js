import './user.css'
export function User({user}) {
    return(
    <div class="user-card">
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
    </div> )

}