import axios from "axios";

const fetchUserData = async (username, location, minRepos) => {
    try {
        let query = `q=${username}`; // Base query

        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        const response = await axios.get(`https://api.github.com/search/users?${query}`);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
};

export default fetchUserData;
