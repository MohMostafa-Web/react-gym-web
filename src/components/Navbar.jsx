import { Stack } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./../assets/images/Logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  // console.log(pathname); // debug

  const navLinkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid #ff2625" : "3px solid transparent",
    };
  };

  return (
    <Stack
      direction="row"
      gap={{ xs: "40px", sm: "122px" }}
      mt={{ xs: "20px", sm: "32px" }}
      px="20px"
    >
      {/* Logo  */}
      <Link to="/" style={{ margin: "0 20px" }}>
        <img src={Logo} alt="Gold's Gym" width="48px" height="48px" />
      </Link>
      {/* Links */}
      <Stack
        direction="row"
        gap="40px"
        fontSize={{ xs: 20, sm: 24 }}
        alignItems="flex-end"
        color="#3A1212"
      >
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
        {pathname === "/" && <a href="/#exercises">Exercise</a>}
        {pathname.startsWith("/exercise") && (
          <NavLink to={pathname} style={navLinkStyle}>
            Exercise
          </NavLink>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
