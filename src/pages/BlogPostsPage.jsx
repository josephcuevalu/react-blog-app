import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{post.body.slice(0, 100)}...</p>
          <Link to={`/posts/${post.id}`} className="text-indigo-600 dark:text-indigo-300 font-semibold">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostsPage;
