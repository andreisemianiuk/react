import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer  /> }/>
          <Route path='/dialogs' render={ () => <Dialogs /> } />
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/music' component={Music}/>
          <Route path='/friends' component={Friends}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
	);
}

export default App;
