const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8 flex flex-col items-center justify-center">
      <div className="text-base text-center ">
        <p>&copy; {currentYear} Awesome AI Platform, All rights reserved</p>
      </div>
      <div className="flex space-x-4">
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
