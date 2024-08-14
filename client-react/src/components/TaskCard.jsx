
import PropTypes from 'prop-types';


export function TaskCard({task}) {
  return (
    <div>
        <hr />
        <h1>{task.titulo}</h1>
        <p>{task.description}</p>
        <hr />
    </div>
  )
}

TaskCard.propTypes = {
    task: PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };


