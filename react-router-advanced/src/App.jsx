import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import BlogPost from "./components/BlogPost"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}>
          <Route path="details/:user" element={<ProfileDetails />}/>
          <Route path="settings" element={<ProfileSettings />}/>
        </Route>
        <Route path="/blog/:id" element={
          <ProtectedRoute>
            <BlogPost />
          </ProtectedRoute>
          }/>
      </Routes>
    </Router>
    
  )
}

export default App

