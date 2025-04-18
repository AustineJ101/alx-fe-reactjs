import axios from "axios";

const fetchUserData = async (username, location, minRepos) => {
    try {
        let query = `${username ? `user:${username}` : ""}`;

        if (location) {
            query += ` location:${location}`;
        }

        if (minRepos) {
            query += ` repos:>${minRepos}`;
        }

        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

        return response.data.items;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
};

export default fetchUserData;


