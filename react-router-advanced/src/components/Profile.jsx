import { Link, Outlet } from "react-router-dom"
function Profile(){
    return(
        <div>
            <h1>This is the Profile Page</h1>
            <nav style={{display: "flex", gap: "10px"}}>
                <Link to="settings">Settings</Link>
            </nav>

            
            <ul style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                <Link to="/profile/details/Austine">Austine</Link>
                <Link to="/profile/details/Jamie">Jamie</Link>
                <Link to="/profile/details/Ghost">Ghost</Link>
                <Link to="/profile/details/Tommie">Tommie</Link>
            </ul>
            
           
            <Outlet />
        </div>
    )
}

export default Profile;