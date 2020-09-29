import React from "react";
import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={s.item}><a>profile</a></li>
				<li className={s.item}><a>messages</a></li>
				<li className={s.item}><a>music</a></li>
				<li className={s.item}><a>friends</a></li>
				<li className={s.item}><a>events</a></li>
			</ul>
		</nav>
	)
}

export default Nav;