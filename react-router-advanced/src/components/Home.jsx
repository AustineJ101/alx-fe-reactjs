import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "./authStore";

function Home(){
    const {isAuthenticated, login, logout} = useAuthStore();
    
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