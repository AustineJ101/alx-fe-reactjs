import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
    return response.data;
}
function PostsComponent(){
    const {data: posts, isLoading, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })

    const queryClient = useQueryClient();

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error Loading Posts</p>
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul>

            <button onClick={() => {
                queryClient.invalidateQueries(["posts"])
            }}>Refetch</button>
        </div>
    )
}

export default PostsComponent;