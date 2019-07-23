import React from "react";
import nav from "./Header.module.css";


const Header = () => {
  return (
    <header className={nav.header}>
      <div className="container">
        <div className={nav.cols}>
          <div className={nav.col}>
            <a href="tel:+38 (093) 650 4658" className={nav.tel}>
              +38 (093) 650 46 58
            </a>
            <strong>MILAEVA VITALIIA</strong>
          </div>
          <div className={nav.col}>
            <a href="#" className={nav.top}>
              home
            </a>
            <a href="#" className={nav.top}>
              about
            </a>
            <a href="#" className={nav.top}>
              skills
            </a>
            <a href="#" className={nav.top}>
              portfolio
            </a>
            <a href="#" className={nav.top}>
              contact
            </a>
          </div>
        </div>             
      </div>
    </header>
  );
};
export default Header;
