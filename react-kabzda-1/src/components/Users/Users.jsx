import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import PaginationTable from "./PaginationTable";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return <div>
    <div className={s.pageNums}>
      <PaginationTable
        itemsperpage={10}
        nocolumns={2}
        items={pages}
        pagesspan={4}
        props={props}
      />
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