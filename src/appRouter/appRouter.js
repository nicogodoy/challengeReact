import React from "react";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Forms from "../form/form";
import Card from "../card/card";
import Axios from "axios";
import Home from "../home/home";

export default function appRouter() {


  let login_path = "http://challenge-react.alkemy.org/";


  async function login(email, password) {
    const { data } = Axios.post(
      "http://challenge-react.alkemy.org/",
      email,
      password
    );
    console.log(data);
  }
  async function getUser(user) {
    let url = ` ${login_path}`;
    return Axios.post(url, user);
  }

  

  return (
    <BrowserRouter>
      <Home />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Forms {...props} login={login} getUser={getUser} />
          )}
        ></Route>
        <Route exact path="/card">
          <Card />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



// function PublicRoute({component:Component, ...rest}){
//     const{user}=login()
//     return(
//       <Route {...rest} render={props =>(
//         user ?
//         <Redirect to="/card"/>
//         :
//         <Component {...props} />
//       )} />
//     )
//   }
//   function PrivateRoute({component:Component, ...rest}){
//     const{user}=login()
//     return(
//       <Route {...rest} render={props =>(
//         user ?
//         <Component {...props}/>
//         :
//         <Redirect to="/form"/>
//       )} />
//     )
//    }
// return (
//   <BrowserRouter>
    
//     <Switch>
//       <PrivateRoute
//         exact
//         path="/"
//         render={(props) => (
//           <Forms {...props} login={login} getUser={getUser} />
//         )}
//       ></PrivateRoute>
//       <PublicRoute exact path="/card">
//         <Card />
//       </PublicRoute>
//     </Switch>
//   </BrowserRouter>
// );
// }

// function PublicRoute({component:Component, ...rest}){
  //   const{user}=login()
  //   return(
  //     <Route {...rest} render={props =>(
  //       user ?
  //       <Redirect to="/card"/>
  //       :
  //       <Component {...props} />
  //     )} />
  //   )
  // }
  // function PrivateRoute({component:Component, ...rest}){
  //   const{user}=login()
  //   return(
  //     <Route {...rest} render={props =>(
  //       user ?
  //       <Component {...props}/>
  //       :
  //       <Redirect to="/form"/>
  //     )} />
  //   )
  // }


// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Forms from "../form/form";
// import Card from "../card/card";
// import Axios from "axios";
// import Home from "../home/home";

// export default function appRouter() {
//   let login_path = "http://challenge-react.alkemy.org/";
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

//   return (
//     <BrowserRouter>
//       <Home />
//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={(props) => (
//             <Forms {...props} login={login} getUser={getUser} />
//           )}
//         ></Route>
//         <Route exact path="/card">
//           <Card />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
