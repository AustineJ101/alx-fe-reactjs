import { Link, Outlet } from "react-router-dom";

function Profile(){
    return(
        <>
            <h1>Main Profile</h1>
            <nav>
                <Link to="profile-settings">Profile Settings</Link>
                <Link to="profile-details">Profile Details</Link>
            </nav>
            
            <Link to="profile-details/1">User 1</Link>
            <Link to="profile-details/2">User 2</Link>

            <Outlet />
        </>
    )
}

export default Profile;