import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }
  render() {
    return <div>
      {
        this.props.users.map(u => <div key={u.id} className={s.users}>
          <div>
            <img className={s.photo} src={u.photos.small ? u.photos.small : userPhoto} alt='' />
            <div className={s.btn}>
              { u.subscribed
                ? <button onClick={ () =>  this.props.unsubscribe(u.id) }>Unubscribe</button>
                : <button onClick={ () =>  this.props.subscribe(u.id) }>Subscribe</button> }
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

        </div> )
      }
    </div>
  }
}

export default Users;