import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({arregloTarea, borrarTarea}) => {
    return (
        <ListGroup>
            {
                arregloTarea.map((tarea, posicion)=>  <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
            }
          </ListGroup>
    );
};

export default ListaTarea;