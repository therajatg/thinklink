import style from "./navbar.module.css";
import { FiBell } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className={style.main}>
      <div className={style.logo}>CORKOWL</div>
      <input type="text" placeholder="Search wines, customers here..." />
      <span>
        <FiBell />
        Nicholas D.
        <img
          className={style.avatar}
          src="https://res.cloudinary.com/therajatg/image/upload/v1663860688/avatar_glarhx.png"
          alt="avatar"
        />
      </span>
    </nav>
  );
};
