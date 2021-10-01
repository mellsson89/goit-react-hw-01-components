import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import Profile from './views/Profile';
import Statistical from './views/Statistical';
import FriendList from './views/FriendList';
import TransactionHistory from './views/TransactionHistory';
import style from './app.module.scss'


const App = () =>  {
  return (
      <>
          <ul className={style.menu}>
              <li >
                  <NavLink exact  to='/' className={style.menuListLink} activeClassName={style.menuListLink__active}>Профиль социальной сети</NavLink>
              </li>
              <li><NavLink  to='/statistical' className={style.menuListLink} activeClassName={style.menuListLink__active}>Секция статистики</NavLink></li>
              <li><NavLink  to='/friends' className={style.menuListLink} activeClassName={style.menuListLink__active}>Список друзей</NavLink></li>
              <li><NavLink  to='/transaction' className={style.menuListLink} activeClassName={style.menuListLink__active}>История транзакций</NavLink></li>
          </ul>

          <Switch>
              <Route exact path='/' component={Profile}/>
              <Route  path ='/statistical' component={Statistical}/>
              <Route  path ='/friends' component={FriendList}/>
              <Route  path ='/transaction' component={TransactionHistory}/>
              <Route component={Profile}/>
          </Switch>
      </>
)
}
export default App;