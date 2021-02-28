import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import CartBooks from './component/CartBooks/CartBooks';
import Dashboard from './component/Dashbord/DisplayBook';
import OrderSummary from './component/OrderSummary/OrderSummary';
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
            <Route path="/cartbooks" component={CartBooks} exact={true} /> 
            <Route path="/home" component={Home} exact={true} />
            <Route path="/ordersummary" component={OrderSummary} exact={true} />
        </Switch>
        </Router>
      </div>
    );
  }

  export default App;