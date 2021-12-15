import { React, useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";

import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Container,
  Alert,
  Spinner,
  FormLabel,
} from "react-bootstrap";

export default function Forms({ getUser }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(value) => {
        let error = {};

        if (!value.email) {
          error.email = "Por favor ingrese un email!";
          console.log("ingrese un email");
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.email)
        ) {
          error.email = "El email debe contener @ , letras, numeros y _ ";
        }
        if (!value.password) {
          error.password = "Por favor ingrese un password!";
        } else if (
          !/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
        ) {
          error.password =
            "La contraseña debe tener letras,numeros,simbolos para su mayor seguridad ";
        }
        return error;
      }}
      onSubmit={({ email, password }, { resetForm }) => {
        console.log("Formulario enviado");
        //console.log(value);
        resetForm();

        getUser({ email, password })
          .then((response) => {
            let { accessToken, refreshToken, user } = response;
            localStorage.setItem("ACCESS_TOKEN", accessToken);
            localStorage.setItem("REFRESH_TOKEN", refreshToken);
            localStorage.setItem("User", user);
            window.location.href = "/card";
            console.log(response);
          })
          .catch((error) => {
            alert("email o paswoord erroneo");
            setIsLogin(false);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <Container>
          {" "}
          {/* Muestra el background*/}
          {/* <input type="image" src={LogoStellantis} className="img-fluid" alt="Responsive image"/> */}
          <Form onSubmit={handleSubmit} className="White">
            <div id="isesion" style={{ textAlign: "center" }}>
              <LockOutlinedIcon fontSize="large" color="primary" />
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <br />
              <FormGroup controlId="formBasicEmail">
                <FormLabel style={{ display: "flex" }}>Email </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Ingresar un email"
                  autoFocus
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div
                    className="error"
                    style={{ color: " red", fontSize: "12px" }}
                  >
                    {errors.email}
                  </div>
                )}
              </FormGroup>

              <FormGroup controlId="formBasicPassword">
                <FormLabel style={{ display: "flex" }}>Contraseña </FormLabel>
                <FormControl
                  type="password"
                  placeholder="Ingresar contraseña"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div
                    className="Danger"
                    style={{ color: " red", fontSize: "12px" }}
                  >
                    {errors.password}
                  </div>
                )}
              </FormGroup>
              <br />

              <Alert variant={"danger"}>
                Debes completar todos los datos para que se envie el formulario
              </Alert>
              <Button
                type="submit"
                variant="primary"
                block
                //disabled={!validateForm()}
              >
                {/* Iniciar seccion */}
                {isLogin ? <Spinner animation="border" /> : "Iniciar sesion"}
              </Button>
            </div>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

// import { React, useState } from "react";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";

// import {
//   Button,
//   Form,
//   FormGroup,
//   FormControl,
//   Container,
//   Alert,
//   Spinner,
//   FormLabel,
// } from "react-bootstrap";

// export default function Forms({ getUser }) {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [isLogin, setIsLogin] = useState(false);

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Formulario enviado");
//     console.log(email);
//     console.log(password);
//     setIsLogin(true);
//     getUser({ email, password })
//       .then((response) => {
//         let { accessToken, refreshToken, user } = response;
//         localStorage.setItem("ACCESS_TOKEN", accessToken);
//         localStorage.setItem("REFRESH_TOKEN", refreshToken);
//         localStorage.setItem("User", user);
//         window.location.href = "/card";
//         console.log(response);
//       })
//       .catch((error) => {
//         alert("email o paswoord erroneo");
//         setIsLogin(false)
//       });
//   }

//   return (
//     <Container>
//       {" "}
//       {/* Muestra el background*/}
//       {/* <input type="image" src={LogoStellantis} className="img-fluid" alt="Responsive image"/> */}
//       <Form onSubmit={handleSubmit} className="White">
//         <div id="isesion" style={{ textAlign: "center" }}>
//           <LockOutlinedIcon fontSize="large" color="primary" />
//           <Typography component="h1" variant="h5">
//             Iniciar Sesión
//           </Typography>
//           <br />
//           <FormGroup controlId="formBasicEmail">
//             <FormLabel style={{ display: "flex" }}>Email </FormLabel>
//             <FormControl
//               type="text"
//               placeholder="Ingresar un email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               // value={user.email}
//               // onChange={(e) => setUser(e.target.value)}
//             />
//           </FormGroup>

//           <FormGroup controlId="formBasicPassword">
//             <FormLabel style={{ display: "flex" }}>Contraseña </FormLabel>
//             <FormControl
//               type="password"
//               placeholder="Ingresar contraseña"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               // value={user.password}
//               // onChange={(e) => setUser(e.target.value)}
//             />
//           </FormGroup>
//           <br />

//           <Alert variant={"danger"}>
//             Debes completar todos los datos para que se envie el formulario
//           </Alert>
//           <Button
//             type="submit"
//             variant="primary"
//             block
//             disabled={!validateForm()}
//           >
//             {/* Iniciar seccion */}
//             {isLogin ? <Spinner animation="border" /> : "Iniciar sesion"}
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// }
