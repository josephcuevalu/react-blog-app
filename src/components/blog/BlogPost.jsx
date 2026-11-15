import Content from "./Content";
import Comments from "./Comments";

function BlogPost({ title, content, author }) {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8">
      <Content title={title} content={content} author={author} />
      <Comments />
    </div>
  );
}

export default BlogPost;
