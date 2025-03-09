import { useState } from "react";

function RegistrationForm(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && email && password){
            setErrors({});
            console.log("Form Submitted", {username, email, password})
        }

        if(!username){
            setErrors({...errors, username: "Username is required"})
        }

        if(!email){
            setErrors({...errors, email: "Email is required"})
        }

        if(!password){
            setErrors({...errors, password: "Password is required"})
        }

    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "300px", gap: "10px"}}>
            <label>Username:</label>
            <input type="text" name="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}

            <label>Email:</label>
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

            <label>Password:</label>
            <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

            <button type="submit" style={{padding: "10px", color: "white", backgroundColor: "green", border: "none"}}>Submit</button>
            
        </form>
    )
}

export default RegistrationForm;