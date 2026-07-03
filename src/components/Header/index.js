import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Nav } from "./styled";

const Header = () => {
  return (
    <Nav>
      <a href="/">
        <FaHome size={24}></FaHome>
      </a>
      <a href="/">
        <FaUserAlt size={24}></FaUserAlt>
      </a>
      <a href="/">
        <FaSignInAlt size={24}></FaSignInAlt>
      </a>
    </Nav>
  );
};

export default Header;
