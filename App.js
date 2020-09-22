import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe
  ('pk_test_51HTizBLaJ442UXw2TmmwKo3YNc2RQ3piFeUirPOJu7Vm22pvS9mZChFngCrKj0IUyPVjZJOOOz1WC2Co5BXDjRPf00jsmZdPGx');

function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);
      if (authUser) {
        //the user just looged in  / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router >
      <div className="app" >

        <Switch>
          <Route path="/orders" >
            <Header />
            <Orders />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" >
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/"  >
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//firebase init , 
// functions ni andar npm install express, npm install cors, npm install stripe
// cd..
// amazon-clone , npm install moment
// for start backend , firebase emulators:start
