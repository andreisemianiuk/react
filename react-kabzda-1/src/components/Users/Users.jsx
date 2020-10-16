import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

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
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "e6cdce24-b112-41f1-b010-c7cd41540c1a"
                  }
                })
                  .then(response => {
                    debugger
                    if (response.data.resultCode === 0) {
                      props.unsubscribe(u.id);
                    }
                  })
              }}>Unubscribe</button>
              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "e6cdce24-b112-41f1-b010-c7cd41540c1a"
                  }
                })
                  .then(response => {
                    debugger
                    if (response.data.resultCode === 0) {
                      props.subscribe(u.id);
                    }
                  })
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