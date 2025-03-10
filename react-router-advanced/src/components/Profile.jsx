import { Link, Outlet } from "react-router-dom"
function Profile(){
    return(
        <div>
            <h1>This is the Profile Page</h1>
            <nav style={{display: "flex", gap: "10px"}}>      
                <Link to="profile-details">Profile Details</Link>
                <Link to="profile-settings">Profile Settings</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Profile;