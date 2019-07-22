import React from 'react';
import nav from './Header.module.css'

const Header = () => {
  return (
  <header className={nav.header}>
    <div className={nav.container}>
      <div className={nav.phone}></div>
      <div className={nav.menu}>
        <a href="#" className={nav.top}>home</a>
        <a href="#" className={nav.top}>about</a>
        <a href="#" className={nav.top}>skills</a>
        <a href="#" className={nav.top}>portfolio</a>

      </div>
    </div>
  </header>
  )
}
export default Header;