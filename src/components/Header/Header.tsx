import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isActivemenu, setIsActiveMenu] = useState(false);

  function deActiveMenu() {
    setIsActiveMenu(isActivemenu => !isActivemenu)
  }

  return (
    <header className={styles.header}>
      <NavLink onClick={()=>{setIsActiveMenu(false)}} className={styles.logo} to="/">
        _satskiy.dev
      </NavLink>

      <nav className={`${isActivemenu?styles.active:''}`}>

        <NavLink onClick={()=>{setIsActiveMenu(false)}}
           className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          to="/"
        >
            <img src="./react.webp" alt="" />
          _головна.tsx
        </NavLink>{" "}
        <NavLink onClick={()=>{setIsActiveMenu(false)}}
           className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          to="/about"
        >
            <img src="./react.webp" alt="" />
          _про_мене.tsx
        </NavLink>{" "}
        <NavLink onClick={()=>{setIsActiveMenu(false)}}
           className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          to="/portfolio"
        >
            <img src="./react.webp" alt="" />
          _портфоліо.tsx
        </NavLink>{" "}
        <NavLink onClick={()=>{setIsActiveMenu(false)}}
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          to="/skills"
        >
            <img src="./react.webp" alt="" />
          _skills.tsx
        </NavLink>
      </nav>
      <BurgerMenu isActivemenu={isActivemenu} deActiveMenu={deActiveMenu}/>
      <div className={styles.empty}></div>
    </header>
  );
};

export default Header;
