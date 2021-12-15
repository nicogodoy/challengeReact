import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "bootstrap-4-react";
import { getItems } from "../servicie/servicie";

export default function Cards() {
  const [heroes, setHeroes] = useState();

  
  useEffect(() => {
    getItems.then((data)=>{
      console.log(data)
      setHeroes(data);
    })
  }, []);

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
                          <Card.Title>{heroe.title}</Card.Title>
                          <Card.Title>{heroe.key}</Card.Title>
                          <Card.Subtitle mb="2" text="muted">
                            {heroe.id}
                          </Card.Subtitle>
                          <Card.Text>{heroe.body}</Card.Text>
                          <Card.Link href="#">Eliminar</Card.Link>
                          <Card.Link href="#">Editar</Card.Link>
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
