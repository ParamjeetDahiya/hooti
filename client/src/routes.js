import React from 'react';
import {Switch,Route} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

//components
import Home from './component/home/home';
import Layout from './hoc/layout';
import Login from './component/form/login_form';
import Register from './component/form/register_form';

if (localStorage.jwtToken) {
    //set token
    setAuthToken(localStorage.jwtToken);
    //decode token
    const decoded = jwt_decode(localStorage.jwtToken);
    //set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    //check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      //logout user
      store.dispatch(logoutUser());
      //clear profile
      //redirect login
      window.location.href = "/login";
    }
  }


const Routes=()=>{
    return(
        <Provider store={store}>
           <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                </Switch>
           </Layout>
        </Provider>
    )
}

export default Routes;