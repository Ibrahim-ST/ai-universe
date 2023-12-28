const Header = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-2">
      <div>
        <h1 className="text-xl space-x-4 font-semibold ">AI Awesome Platform</h1>
      </div>
      <nav className="flex space-x-7">
        <a className="nav-items" href="/favorites">
          Favorites
        </a>
        <a className="nav-items" href="/resources">
          Resources
        </a>
        <a className="nav-items" href="/latest-ai-news">
          Latest AI News
        </a>
        <button className="nav-items">Join Discord</button>
        <button className="inline-block px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;
