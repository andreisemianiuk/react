import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={s.item}><NavLink to='/content' activeClassName={s.active}>profile</NavLink></li>
				<li className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>messages</NavLink></li>
				<li className={s.item}><NavLink to='/music' activeClassName={s.active}>music</NavLink></li>
				<li className={s.item}><NavLink to='/friends' activeClassName={s.active}>friends</NavLink></li>
				<li className={s.item}><NavLink to='/settings' activeClassName={s.active}>settings</NavLink></li>
			</ul>
		</nav>
	)
}

export default Nav;