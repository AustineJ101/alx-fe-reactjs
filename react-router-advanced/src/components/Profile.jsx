import { Link, Routes, Route, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
    return (
        <div>
            <h1>This is the Profile Page</h1>
            <nav style={{ display: "flex", gap: "10px" }}>
                <Link to="settings">Settings</Link>
            </nav>

            <ul style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Link to="details/Austine">Austine</Link>
                <Link to="details/Jamie">Jamie</Link>
                <Link to="details/Ghost">Ghost</Link>
                <Link to="details/Tommie">Tommie</Link>
            </ul>

            <Routes>
                <Route path="details/:user" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>

            <Outlet />
        </div>
    );
}

export default Profile;
