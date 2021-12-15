import axios from "axios";
import React from "react";

// export const  GetHeroes= ()=> {
//   const [heroes, setHeroes] = useState();
//   const url = "https://www.superheroapi.com/api.php/4777328935619711/3";
//   axios
//     .get(url)
//     .then((res) => {
//       const arraySuperheroe = [res.data];
//       console.log(res.data);
//       console.log(arraySuperheroe);
//       setHeroes(arraySuperheroe);
//     })
//     .catch((err) => console.log(err));
// }
//let base_path = "https://jsonplaceholder.typicode.com/posts";

export const getItems = new Promise ((resolve,reject)=>{

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>resolve(data))
      .catch(err=>reject(err))

})
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
