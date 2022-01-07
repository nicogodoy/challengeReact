import axios from "axios";
import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

export const  GetHeroes= ()=> {
  const [heroes, setHeroes] = useState();
  for(let i=1;i<10;i++){
    fetch(`https://www.superheroapi.com/api.php/4777328935619711/${i}`) 
      .then(data => {
        return data.json();
      })
      .then(data => {
        let dataGet=[data]
        setHeroes(dataGet);
        
      })
      .catch(err => {
        console.log(err);
      });
  }
  //const {id}=useLocation();
  //let query= new URLSearchParams(id)   
  // const [heroes, setHeroes] = useState();
  // const url = `https://www.superheroapi.com/api.php/4777328935619711/1`
  // axios
  //   .get(url)
  //   .then((res) => {
  //     const arraySuperheroe = [res.data];
  //     console.log(res.data);
  //     console.log(arraySuperheroe);
  //     setHeroes(arraySuperheroe);
  //   })
  //   .catch((err) => console.log(err));
}
//let base_path = "https://jsonplaceholder.typicode.com/posts";
//anda bien
export const getItems = new Promise ((resolve,reject)=>{

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>resolve(data))
      .catch(err=>reject(err))

})

// export const getItems = new Promise ((resolve,reject)=>{

//       fetch("https://superheroapi.com/api/4777328935619711/5")
//       .then(response=>response.json())
//       .then(data=>resolve(data))
//       .catch(err=>reject(err))

// })
// export const getItems = new Promise((resolve, reject) => {
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     console.log(response);
//     console.log(response.data);

//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

let login_path = "http://challenge-react.alkemy.org/";

export const getUser=(user)=>{
  let url = ` ${login_path}`;
  return Axios.post(url, user);
}

export const login=({email, password})=>{
  const { data } = Axios.post(
         "http://challenge-react.alkemy.org/",
         email,
         password
       );
       console.log(data);
}