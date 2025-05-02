import React, { useEffect } from "react";
import useFetch from "./useFetch";
function PostComponent({ posts, error, isLoading }) {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <h1>List posts</h1>
            <ul>
                {posts && posts.length > 0 && 
                    posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )

}
const Posts = React.memo(PostComponent);

export default Posts;