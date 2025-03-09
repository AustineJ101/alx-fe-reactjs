import { useState } from "react";

function RegistrationForm(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username, email, password){
            console.log("Form Submitted", {username, email, password})
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "300px", gap: "10px"}}>
            <label>Username:</label>
            <input type="text" name="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>

            <label>Email:</label>
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

            <label>Password:</label>
            <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit" style={{padding: "10px", color: "white", backgroundColor: "green", border: "none"}}>Submit</button>
            
        </form>
    )
}

export default RegistrationForm;