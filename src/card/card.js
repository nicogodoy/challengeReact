import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "bootstrap-4-react";
import { getItems, GetHeroes } from "../servicie/servicie";
import { Modal, Button, Label, Input, Br, FormGroup } from "bootstrap-4-react";

export default function Cards() {
  const [heroes, setHeroes] = useState();
  const [touchCard, settouchCard] = useState({
    title: "",
    id: "",
    body: "",
  });
  const [eliminarCard, setEliminarCard] = useState(false);
  const [editarCard, setEditarCard] = useState(false);

  useEffect(() => {
    getItems.then((data) => {
      console.log(data);
      setHeroes(data);
    });
  }, []);

  const selecctCard = (heroe, caso) => {
    settouchCard(heroe);
    caso === "Editar" ? setEditarCard(true) : setEliminarCard(true);
  };

  const deleteCard = () => {
    setHeroes(heroes.filter((card) => card.id !== touchCard.id));
    setEliminarCard(false);
    console.log("Se elimino el item correctamente");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="div">
          <h1>SuperHeroes</h1>
          <ul
            style={{
              display: " flex",
              flexDirection: " row",
              alignContent: "center",
              justifyContent: "space-between",
              alignItems: "stretch",
              flexWrap: "wrap",
            }}
          >
            {!heroes
              ? "cargando..."
              : heroes.map((heroe) => {
                  return (
                    <>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title value={touchCard && touchCard.title}>
                            {heroe.title}
                          </Card.Title>
                          <Card.Title>{heroe.key}</Card.Title>
                          <Card.Subtitle
                            value={touchCard && touchCard.id}
                            mb="2"
                            text="muted"
                          >
                            {heroe.id}
                          </Card.Subtitle>
                          <div>
                            <Card.Text value={touchCard && touchCard.body}>
                              {heroe.body}
                            </Card.Text>
                            <Card.Link href="#">
                              {/* Button trigger Modal */}
                              <Card.Link
                                primary
                                data-toggle="modal"
                                data-target="#exampleModal"
                                onClick={() => selecctCard(heroe, "Eliminar")}
                              >
                                Eliminar
                              </Card.Link>

                              {/* Modal */}
                              <Modal
                                id="exampleModal"
                                fade
                                isOpen={eliminarCard}
                              >
                                <Modal.Dialog>
                                  <Modal.Content>
                                    <Modal.Header>
                                      <Modal.Title>Eliminar</Modal.Title>
                                      <Modal.Close>
                                        <span aria-hidden="true">&times;</span>
                                      </Modal.Close>
                                    </Modal.Header>
                                    <Modal.Body>
                                      Desea eliminar este item?{" "}
                                      {settouchCard && touchCard.id}
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        secondary
                                        data-dismiss="modal"
                                        onClick={() => setEliminarCard(false)}
                                      >
                                        Cancelar
                                      </Button>
                                      <Button
                                        primary
                                        onClick={() => deleteCard()}
                                      >
                                        Aceptar
                                      </Button>
                                    </Modal.Footer>
                                  </Modal.Content>
                                </Modal.Dialog>
                              </Modal>
                            </Card.Link>
                           
                          </div>
                        </Card.Body>
                      </Card>
                    </>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}


{/* <Card.Link href="#">
Button trigger Modal
<Card.Link
  primary
  data-toggle="modal"
  data-target="#exampleModal"
  onClick={() => selecctCard(heroe, "Editar")}
>
  Editar
</Card.Link>

Modal
<Modal
  id="exampleModal"
  fade
  isOpen={editarCard}
>
  <Modal.Dialog>
    <Modal.Content>
      <Modal.Header>
        <Modal.Title >Editar</Modal.Title>
        <Modal.Close>
          <span aria-hidden="true">&times;</span>
        </Modal.Close>
      </Modal.Header>
      <Modal.Body>
        Desea actualizar?{" "}
        {settouchCard && touchCard.id}
      </Modal.Body>
      <Modal.Footer>
        <Button
          secondary
          data-dismiss="modal"
          onClick={() => setEditarCard(false)}
        >
          Cancelar
        </Button>
        <Button
          primary
          // onClick={() => deleteCard()}
        >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal.Content>
  </Modal.Dialog>
</Modal>
</Card.Link> */}









{
  /* <Modal id="exampleModal" fade isOpen={editarCard}>
<Modal.Dialog>
<Modal.Content>
<Modal.Header>
<Modal.Title>Editar</Modal.Title>
<Modal.Close> 
<span aria-hidden="true">&times;</span>
</Modal.Close>
</Modal.Header>
<Modal.Body >
Desea eliminar este item? {settouchCard && touchCard.id}

</Modal.Body>
<Modal.Footer>
<Button secondary data-dismiss="modal" onClick={()=>setEliminarCard(false)}>Cancelar</Button>
<Button primary onClick={()=>deleteCard()}>Aceptar</Button>


</Modal.Footer>
</Modal.Content> 
</Modal.Dialog>
</Modal> */
}

// useEffect(() => {
//   for(let i=1;i<10;i++){
//     fetch(`https://www.superheroapi.com/api.php/4777328935619711/${i}`)
//       .then(data => {
//         return data.json();
//       })
//       .then(data => {
//         let dataGet=[data]
//         setHeroes(dataGet);

//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

// }, []);
// useEffect(() => {
//   for(var i=1;i<10;i++){
//     fetch(`https://www.superheroapi.com/api.php/4777328935619711/${i}`)
//     .then(resp => {
//       return resp.json();
//     })
//     .then(data => {
//       heroes.push(data)
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }

//     console.log(heroes);
// }, []);

{
  /* <Card.Title>{heroe.id}</Card.Title>
                       <Card.Title>{heroe.name}</Card.Title>
                       <Card.Title>{heroe.powerstats.intelligence}</Card.Title>
                       <Card.Image src={heroe.image.url} /> */
}

//  return (
//   <div className="App">
//     <div className="container">
//       <div className="div">
//         <h1>SuperHeroes</h1>
//         <ul
//           style={{
//             display: " flex",
//             flexDirection: " row",
//             alignContent: "center",
//             justifyContent: "space-between",
//             alignItems: "stretch",
//             flexWrap: "wrap",
//           }}
//         >
//           {!heroes
//             ? "cargando..."
//             : heroes.map((heroe) => {

//               return (
//                 <>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Body>
//                      <Card.Title>{heroe.title}</Card.Title>
//                       <Card.Title>{heroe.key}</Card.Title>
//                       {/* <Card.Subtitle mb="2" text="muted">
//                         {heroe.id}
//                       </Card.Subtitle> */}
//                       <div>
//                       <Card.Text>{heroe.body}</Card.Text>
//                       <Card.Link onClik={()=>setSelectCard(heroe,'Eliminar')} href="#"><div>
//       {/* Button trigger Modal */}
//       <Card.Link primary data-toggle="modal" data-target="#exampleModal">Eliminar</Card.Link>

//       {/* Modal */}
//       <Modal id="exampleModal" fade>
//         <Modal.Dialog>
//           <Modal.Content>
//             <Modal.Header>
//               <Modal.Title>Eliminar</Modal.Title>
//               <Modal.Close>
//                 <span aria-hidden="true">&times;</span>
//               </Modal.Close>
//             </Modal.Header>
//             <Modal.Body>
//               Desea eliminar este item?
//             </Modal.Body>
//             <Modal.Footer>
//               <Button secondary data-dismiss="modal">Cancelar</Button>
//               <Button primary>Aceptar</Button>
//             </Modal.Footer>
//           </Modal.Content>
//         </Modal.Dialog>
//       </Modal>
//     </div>
//     </Card.Link>
//                       <Card.Link onClik={()=>setSelectCard(heroe,'Editar')} href="#">Editar</Card.Link>
//                       </div>
//                     </Card.Body>
//                   </Card>

//                 </>
//               );
//             })}
//         </ul>
//       </div>
//     </div>
//   </div>
// );
