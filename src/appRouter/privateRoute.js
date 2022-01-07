import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {login,getUser} from '../servicie/servicie'

export default function privateRoute({component:Component,...rest}) {
  
    return (
       
      <Route {...rest} render={props => (
        !getUser.email && !getUser.password ?
         <Component {...props} login={login} getUser={getUser} />
        :<Redirect  to="/" />
    )} />
    )
}





















// let login_path = "http://challenge-react.alkemy.org/";

//   async function login(email, password) {
//     const { data } = Axios.post(
//       "http://challenge-react.alkemy.org/",
//       email,
//       password
//     );
//     console.log(data);
//   }
//   async function getUser(user) {
//     let url = ` ${login_path}`;
//     return Axios.post(url, user);
   
//   }
//   console.log(getUser.user)

 // <Route  {...rest} component={(props)=> getUser.user? <Component  {...props}/>: <Redirect to="/"/>}/>
      //   <Route {...rest} render={props => (
      //     !getUser.email && !getUser.password ?
      //         <Component {...props} />
      //     : <Redirect to="/home" />
      // )} />