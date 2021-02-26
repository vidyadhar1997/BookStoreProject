import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Dashboard from './component/Dashbord/DisplayBook';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';




function App() {
    return (
      <div className="App">
       <Router>
        <Switch>
            <Route path="/login" component={Login} exact={true} /> 
            <Route path="/signup" component={Registration} exact={true} />
            {/* <Route path="/dashbord" component={Dashboard} exact={true} /> */}
            <Route path="/home" component={Home} exact={true} />
        </Switch>
        </Router>
      </div>
    );
  }

  export default App;