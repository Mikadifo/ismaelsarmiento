const Navbar = () => {
  return (
    <div className="flex place-content-between bg-lightBlue w-screen py-2 px-8 border-b border-solid border-white">
      <a href="/">
        <img src="/icon.svg" alt="Ismael Sarmiento Logo" className="w-8" />
      </a>
      <a
        href="#contact"
        className="bg-transparent border border-solid rounded text-white font-bold text-base px-3 py-1 hover:bg-white hover:text-darkBlue"
      >
        Contactar
      </a>
    </div>
  );
};

export default Navbar;
