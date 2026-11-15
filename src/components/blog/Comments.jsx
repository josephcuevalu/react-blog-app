import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import CommentForm from "./CommentForm";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [id]);

  const postComment = (newComment) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      name: newComment.name,
      body: newComment.text,
    })
      .then((res) => setComments([...comments, res.data]))
      .catch((err) => console.error("Error posting comment:", err));
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-3">Comments</h3>

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="list-disc pl-6">
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong> {comment.body}
            </li>
          ))}
        </ul>
      )}

      <CommentForm onAddComment={postComment} />
    </div>
  );
}

export default Comments;
