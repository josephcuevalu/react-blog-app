import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-linear-to-r from-blue-500 to-indigo-700 dark:from-slate-800 dark:to-indigo-950 text-white p-6 shadow-md">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">My Blog</h1>
      <Navbar />
    </header>
  );
}

export default Header;
