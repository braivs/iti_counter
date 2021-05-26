import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss'

export function Navbar() {
  return (
    <div className={s.navbar}>
      <div className={s.navItem}>
        <NavLink to="/counter2" activeClassName={s.active}>Counter 2</NavLink>
      </div>
      <div className={s.navItem}>
        <NavLink to="/counter2.1" activeClassName={s.active}>Counter 2.1</NavLink>
      </div>
    </div>
  )

}