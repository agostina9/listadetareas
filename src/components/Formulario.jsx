import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  //busco los datos del LS
  const tareasLocalStorage= JSON.parse(localStorage.getItem('arregloTareaKey')) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareasLocalStorage);
  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar el input
    setTarea('')
  };
//ciclo de vida del componente
  useEffect(()=>{
    //guardar en el localStorage
    localStorage.setItem('arregloTareaKey',JSON.stringify(arregloTarea) )
  },[arregloTarea])

  const borrarTarea = (nombre)=>{
    let arregloModificado = arregloTarea.filter((item)=>(item !== nombre));
    //actualizo el state
    setArregloTarea(arregloModificado);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
    </div>
  );
};

export default Formulario;
