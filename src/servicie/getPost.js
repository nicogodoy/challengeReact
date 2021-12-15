import axios from "axios";

const url = "";

export const getItemsPromise = new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err));
});

export async function getItemAsincAwait(){

    const response= await fetch(url)
    const json= await response.json()
    console.log(json)
    if(json.status !== 200){
       throw Error('el usuario no existe')
    }
    return json
}
getItemAsincAwait()
.then((data)=>console.log(data))
.catch(err=>console.log(err))


export function getItemAxios(){
    axios.get(url)
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
}