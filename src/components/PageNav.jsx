import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import AuthInput from "./AuthInput";

function PageNav() {
  return (
    <nav className={styles.nav}>
      {/* <Logo /> */}

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resumes</NavLink>
        </li>
      </ul>
      <AuthInput />
    </nav>
  );
}

export default PageNav;
