import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import Home from "./components/Home"
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }>
          <Route path="profile-details/:id" element={<ProfileDetails />}/>
          <Route path="profile-settings" element={<ProfileSettings />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
