import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux'
import Home from './Components/Home'
import Profile from './Components/Profile'
import SideNav from './Components/SideNav'
import ComingSoon from './Components/ComingSoon';
import Logout from './Components/Logout';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <div className="content">

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <SideNav />
                <Profile />
                <Logout />
              </Route>
              <Route exact path="/comingsoon">
                <SideNav />
                <ComingSoon />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
