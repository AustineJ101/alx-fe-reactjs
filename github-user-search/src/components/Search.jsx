import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]); // Now stores multiple users
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const data = await fetchUserData(username, location, minRepos);

        if (data.length > 0) {
            setUsers(data); // Store multiple users
        } else {
            setError("Looks like we can't find any users matching the criteria.");
        }

        setIsLoading(false);
    };

    return (
        <div className="m-4">
            {/* 🔹 Search Form */}
            <form className="mb-4 flex flex-col gap-2 md:flex-row" onSubmit={handleSubmit}>
                <input
                    className="border px-2 py-1 rounded focus:outline-none focus:border-green-600"
                    type="text"
                    placeholder="GitHub Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="border px-2 py-1 rounded focus:outline-none focus:border-green-600"
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    className="border px-2 py-1 rounded focus:outline-none focus:border-green-600"
                    type="number"
                    placeholder="Min Repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button
                    className="text-white bg-green-600 rounded-lg px-2 py-1"
                    type="submit"
                    disabled={isLoading}
                >
                    Search
                </button>
            </form>

            {/* 🔹 Loading & Error Messages */}
            {isLoading && <p className="text-green-600">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* 🔹 Display List of Users */}
            {users.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center gap-4 p-4 border rounded-lg">
                            <img className="w-16 h-16 rounded-full" src={user.avatar_url} alt={user.login} />
                            <div>
                                <h1 className="text-lg font-semibold">{user.login}</h1>
                                <a
                                    className="underline text-blue-500"
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
