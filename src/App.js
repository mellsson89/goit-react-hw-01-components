import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import Profile from './views/Profile';
import Statistical from './views/Statistical';
import FriendList from './views/FriendList';
import TransactionHistory from './views/TransactionHistory';
import style from './app.module.scss';
import route from "./route";



const App = () =>  {

  return (
      <>
          <ul className={style.menu}>
              <li >
                  <NavLink exact  to='/goit-react-hw-01-components' className={style.menuListLink} activeClassName={style.menuListLink__active}>Профиль социальной сети</NavLink>
              </li>
              <li><NavLink  to='/goit-react-hw-01-components/statistical' className={style.menuListLink} activeClassName={style.menuListLink__active}>Секция статистики</NavLink></li>
              <li><NavLink  to='/goit-react-hw-01-components/friends' className={style.menuListLink} activeClassName={style.menuListLink__active}>Список друзей</NavLink></li>
              <li><NavLink  to='/goit-react-hw-01-components/transaction' className={style.menuListLink} activeClassName={style.menuListLink__active}>История транзакций</NavLink></li>
          </ul>

          <Switch>
              <Route exact path={route.profile} component={Profile}/>
              <Route  path ={route.statistical} component={Statistical}/>
              <Route  path ={route.friend} component={FriendList}/>
              <Route  path ={route.transactions} component={TransactionHistory}/>
              <Route component={Profile}/>
          </Switch>
      </>
)
}
export default App;