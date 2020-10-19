import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {Redirect, NavLink} from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  return <div>
    <div className={s.pageNums}>
      {pages.map(p =>
        <span className={(props.currentPage === p) ? s.selected : null}
              onClick={() => props.onPageChanged(p)}>{p}</span>
      )}
    </div>
    {
      props.users.map(u => <div key={u.id} className={s.users}>
        <div>
          <NavLink to={'/profile/' + u.id}>
            <img className={s.photo} src={u.photos.small ? u.photos.small : userPhoto} alt=''/>
          </NavLink>
          <div className={s.btn}>
            {u.followed
              ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                props.unfollow(u.id);
              }}>Unubscribe</button>
              : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                props.follow(u.id);
              }}>Subscribe</button>}
          </div>
        </div>
        <div className={s.fullName}>
          <span>{u.name}</span>
        </div>
        <div className={s.rightSide}>
          <div>
            <span>{'city'}</span>
            <span>{'country'}</span>
          </div>
          <div>{u.status ? u.status : 'Zhyve Belarus!'}</div>
        </div>

      </div>)
    }
  </div>
}

export default Users;