import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BlogPost from "../components/blog/BlogPost";

function IndividualPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
          .then((res) => setUser(res.data));
      })
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  return (
    <BlogPost
      key={id}
      title={post.title}
      content={post.body}
      author={user.name}
    />
  );
}

export default IndividualPostPage;
