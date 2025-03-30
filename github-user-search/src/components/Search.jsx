import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search () {

    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setIsLoading(true);
        const data =  await fetchUserData(username);
        if(data){
            setUserData({name: data.name, avatar: data.avatar_url, link: data.html_url});
            setIsLoading(false);
        }else{
            setError("Looks like we cant find the user");
            setIsLoading(false);
        }

    }

    return(
        <div className="m-4">
            <form className="mb-2" onSubmit={handleSubmit}>
                <input className="border px-2 py-1 rounded mr-2 focus:outline-none focus:border-green-600" type="text" placeholder="Enter github username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <button className="text-white bg-green-600 rounded-lg px-2 py-1" type="submit" disabled={isLoading}>Search</button>
            </form>
            {isLoading && <p className="text-green-600">Loading...</p>}
            {error && <p>{error}</p>}

            {userData && (
                <div className="flex items-center gap-4 ">
                    <img className="w-16 h-16 rounded-full" src={userData.avatar}/>
                    <h1 className="text-xl font-semibold">{userData.name}</h1>
                    <a className="underline text-blue-500" href={userData.link} target="_blank">{userData? "GitHub" : ""}</a>
                </div>
            )}
        </div>
       
    )
}

export default Search;