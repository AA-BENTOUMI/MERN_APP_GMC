import React from 'react'
import { useSelector } from "react-redux";

const Profile = () => {
    
    const isLoad = useSelector((state) => state.userReducer.isLoad);
    const user = useSelector((state) => state.userReducer.user);
    return (
        <div>
            <h1>profile</h1>
           { user ?
            (<div><h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.role}</h1></div>)
            :null}
        </div>
    )
}

export default Profile
