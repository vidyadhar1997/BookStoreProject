import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';



function App() {
    return (
      <div className="App">
       <Router>
        <Switch>
            <Route path="/login" component={Login} exact={true} /> 
            <Route path="/signup" component={Registration} exact={true} />
            {/* <Route path="/register" component={Registration} exact={true} /> */}
        </Switch>
        </Router>
      </div>
    );
  }

  export default App;