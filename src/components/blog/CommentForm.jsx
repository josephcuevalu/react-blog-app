import { useState } from "react";

function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || text.trim() === "") {
      alert("Please enter your name and a comment.");
      return;
    }
    onAddComment({ name: name, text: text });
    setName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <input
        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg p-3 mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg p-3"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Comment"
      ></textarea>
      <button
        type="submit"
        className="mt-3 bg-amber-400 hover:bg-amber-600 transition text-white px-6 py-2 rounded-2xl"
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
