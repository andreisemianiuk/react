import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>
          <Route path='/content' render={ () => <Content contentPage={props.state.contentPage}
                                                         dispatch={props.dispatch} /> }/>
          <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                                         dispatch={props.dispatch} /> } />
          <Route path='/music' component={Music}/>
          <Route path='/friends' component={Friends}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
	);
}

export default App;
