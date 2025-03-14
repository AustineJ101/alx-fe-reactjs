import { useState } from "react";

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        
        if (!username) {
            newErrors.username = "Username is required";
        }

        if (!email) {
            newErrors.email = "Email is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Submitted", { username, email, password });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}
        >
            <label>Username:</label>
            <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button
                type="submit"
                style={{ padding: "10px", color: "white", backgroundColor: "green", border: "none" }}
            >
                Submit
            </button>
        </form>
    );
}

export default RegistrationForm;
