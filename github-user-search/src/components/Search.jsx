import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const data = await fetchUserData(username, location, minRepos);

        if (data.length > 0) {
            setUsers(data);
        } else {
            setUsers([]);
            setError("No users found with the given criteria.");
        }

        setIsLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                    className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" 
                    type="text" 
                    placeholder="GitHub Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" 
                    type="text" 
                    placeholder="Location (Optional)" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input 
                    className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" 
                    type="number" 
                    placeholder="Min Repos (Optional)" 
                    value={minRepos} 
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button 
                    className="w-full text-white bg-green-600 rounded-md px-4 py-2 hover:bg-green-700"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Searching..." : "Search"}
                </button>
            </form>

            {error && <p className="text-red-600 mt-4">{error}</p>}

            {users.length > 0 && (
                <div className="mt-4 space-y-4">
                    {users.map(user => (
                        <div key={user.id} className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
                            <img className="w-12 h-12 rounded-full" src={user.avatar_url} alt={user.login} />
                            <div>
                                <h2 className="text-lg font-semibold">{user.login}</h2>
                                <p className="text-gray-600">{user.location || "Location not available"}</p>
                                <a className="text-blue-500 underline" href={user.html_url} target="_blank" rel="noopener noreferrer">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
