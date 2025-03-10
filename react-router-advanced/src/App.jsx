import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}>
          <Route path="profile-details" element={<ProfileDetails />}/>
          <Route path="profile-settings" element={<ProfileSettings />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
