import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {login,getUser} from '../servicie/servicie'

export default function publicRouter({path,component:Component,...rest}) {
    
    return (
      

           
            <Route {...rest}  render={props=>(
              getUser.email && getUser.password ?  <Redirect to="/home"/>
              : <Component{...props} login={login} getUser={getUser} />
              
            )}/>
            
            
        
        
    )
}

















 // <Route {...rest}  component={(props)=> !getUser.email && !getUser.password  ? <Component  {...props}/> : <Redirect to="/card"/>}/>

 // <Route {...rest}  render={props=>(
            //   getUser.email && getUser.password ? 
            //   <Redirect to="/home"/>:
            //   <Component{...props} login={login} getUser={getUser}/>
            // )}/>
            // <Route {...rest}  render={props=>(
            //   <Component {...props} login={login} getUser={getUser}/> ? <Redirect to="/home"/> : <Component{...props}/>
              
            // )}/>

            //let login_path = "http://challenge-react.alkemy.org/";

  // async function login(email, password) {
  //   const { data } = Axios.post(
  //     "http://challenge-react.alkemy.org/",
  //     email,
  //     password
  //   );
  //   console.log(data);
  // }
  // async function getUser(user) {
  //   let url = ` ${login_path}`;
  //   return Axios.post(url, user);
  // }
  // async function getUser(email,password) {
  //   let url = ` ${login_path}`;
  //   return Axios.post(url, email,password);
  // }