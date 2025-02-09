import  { FC } from "react";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  isActivemenu: boolean;
  deActiveMenu: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isActivemenu, deActiveMenu }) => {
  return (
    <div className="burger-wrapper">
      <div
        onClick={deActiveMenu}
        className={`burger-menu ${isActivemenu ? "active" : ""}`}
      >
        <span className={`middle-line ${isActivemenu ? "active" : ""}`}></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
