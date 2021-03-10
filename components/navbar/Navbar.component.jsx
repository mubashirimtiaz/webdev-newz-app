import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-purple-700 to-blue-600 py-1" />
      <nav className="text-gray-700 flex justify-between items-center py-3 px-3 md:px-10 bg-white shadow-md relative">
        <h1 className="flex-1 text-shadow-sm text-2xl font-bold text-purple-700 ">
          <Link href="/">
            <a>WEBDEV NEWZ</a>
          </Link>
        </h1>
        <ul className=" flex-1 flex justify-between items-center">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
