import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Navbar(){

    const navStyle = {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        textDecoration: "none"
    }
    return(
        <>
            <nav style ={navStyle}>
                <Link style={{textDecoration: "none"}} to="home">Home </Link>
                <Link style={{textDecoration: "none"}} to="about">About</Link>
                <Link style={{textDecoration: "none"}} to="services">Services </Link>
                <Link style={{textDecoration: "none"}} to="contact">Contact</Link>
            </nav> 

            <Outlet />
        </>
       
    )
}

export default Navbar;