import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Navbar(){

    return(
        <>
            <nav style ={{backgroundColor: 'rebeccapurple', padding: '20px', fontSize: '20px', display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <Link style={{textDecoration: "none", color: 'white'}} to="home">Home </Link>
                <Link style={{textDecoration: "none", color: 'white'}} to="about">About</Link>
                <Link style={{textDecoration: "none", color: 'white'}} to="services">Services </Link>
                <Link style={{textDecoration: "none", color: 'white'}} to="contact">Contact</Link>
            </nav> 

            <Outlet />
        </>
       
    )
}

export default Navbar;