
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {

  const navigate = useNavigate()
  return (
    <div
     onClick={() =>{
      navigate(`/tasks/${task.id}`)
     }}
    >
        <hr />
        <h1>titulo:{task.titulo}</h1>
        <p> descrption{task.description}</p>
        <hr />
       
    </div>
  )
}

TaskCard.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };


