const NotFound = () => {
  return (
    <section className="!w-full">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center px-4 py-16 space-y-4 text-gray-700">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p>Oops! Looks like you stumbled upon a lost page.</p>
          <a
            href="/"
            className="inline-block px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
