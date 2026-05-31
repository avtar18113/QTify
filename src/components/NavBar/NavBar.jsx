import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import "./NavBar.css";

const NavBar = ({ searchText, setSearchText }) => {
  return (
    <nav className="navbar">
      <Logo />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Button className="feedback-btn">Give Feedback</Button>
    </nav>
  );
};

export default NavBar;