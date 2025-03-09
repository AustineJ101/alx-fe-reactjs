import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    }

    const logout = () => {
        setIsAuthenticated(false);
    }

    return(
        <>  
            <nav>
               
                {isAuthenticated? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                    
                ): (
                    <button onClick={login}>Login</button>
                )}
            </nav>
            <hr />
            <h1>Welcome to the home page</h1>

        </>
    )
}

export default Home;