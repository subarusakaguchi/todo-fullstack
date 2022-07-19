import { FiTrash } from 'react-icons/fi'

import { Item } from './styles'
import { useTasks } from '../../hooks/useTasks'
import { ITask } from '../../contexts/interfaces/TasksInterfaces'

interface IProps {
  task: ITask
}

export function TaskItem(props: IProps) {
  const { taskFunctions } = useTasks()

  function handleToggleTaskCompletion(id: string) {
    taskFunctions.updateTask(id)
  }

  function handleRemoveTask(id: string) {
    taskFunctions.deleteTask(id)
  }

  return (
    <Item>
      <div className={props.task.isCompleted ? 'completed' : ''}>
        <label>
          <input
            type="checkbox"
            readOnly
            checked={props.task.isCompleted}
            onClick={() => handleToggleTaskCompletion(props.task._id)}
          />
          <span className="checkmark"></span>
        </label>
        <div>
          <h4>{props.task.title}:</h4>
          <p>{props.task.description}</p>
        </div>
      </div>

      <button type="button" onClick={() => handleRemoveTask(props.task._id)}>
        <FiTrash size={16} />
      </button>
    </Item>
  )
}
