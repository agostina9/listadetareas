import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({propsArregloTarea}) => {
    return (
        <ListGroup>
            {
                propsArregloTarea.map((tarea, posicion)=>  <ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea>)
            }
          </ListGroup>
    );
};

export default ListaTarea;