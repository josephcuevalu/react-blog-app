import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4 text-lg font-semibold">
      <Link to="/">Blog Posts</Link>

      {[1, 2, 3].map((id) => (
        <Link key={id} to={`/posts/${id}`}>
          Post {id}
        </Link>
      ))}

      <Link to="/contact">Contact</Link>

      <button
        onClick={toggleTheme}
        className="bg-white text-indigo-700 dark:bg-gray-700 dark:text-white px-4 py-1 rounded-2xl"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
