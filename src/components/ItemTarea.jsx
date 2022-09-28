import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = (nombreTarea) => {
    return (
        <div>
           <ListGroup.Item className="d-flex justify-content-between">Tarea prueba 
            {nombreTarea}
            <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;