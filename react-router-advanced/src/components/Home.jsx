import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <nav>
                <Link to="/profile" style={{textDecoration: "none", fontSize: "20px", fontWeight: "bold"}}>Profile</Link>
            </nav>
            <hr />
            <h1>Welcome to the homepage</h1>

        
        </>
    )
}

export default Home;