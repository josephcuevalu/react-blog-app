function Content({ title, content, author }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Author:</strong> {author}</p>
    </div>
  );
}

export default Content;
