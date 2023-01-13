import Link from "next/link";
import { NavContainer } from "../styles/Navbar.styles";
import { Write } from "./vectors/Write";


const Nav = (): JSX.Element => {
  return (
    <NavContainer>
      <Link href="/">
        <img
          src="https://res.cloudinary.com/dctmgu7mb/image/upload/v1601332391/devLogo_ocngza.png"
          alt="logo"
          className="h-8"
        />
      </Link>
      <div className="flex items-center gap-6">
      <div className="flex gap-1 transition duration-200 hover:text-white ">  <Write/> <span>Write</span></div>
        <button className="transition duration-200 rounded-3xl border text-base border-black px-3 py-1 md:px-7 md:py-3 md: text-base text-black hover:text-white hover:bg-black">
          Admin Login
        </button>
      </div>
    </NavContainer>
  );
};

export default Nav;
