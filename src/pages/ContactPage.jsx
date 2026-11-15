import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", name, email, message);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg p-3 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg p-3 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <textarea
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg p-3 mb-3"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        ></textarea>
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-600 transition text-white px-6 py-2 rounded-2xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
