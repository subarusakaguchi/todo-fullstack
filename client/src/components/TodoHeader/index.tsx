import { FiCheckSquare } from 'react-icons/fi'

import { HeaderTaskListContainer } from './styles'
import { LogoutBtn } from '../LogoutBtn'
import { useTasks } from '../../hooks/useTasks'

export function TodoHeader() {
  const { taskStates, taskFunctions } = useTasks()

  function handleCreateNewTask() {
    if (
      taskStates.newTaskTitle &&
      taskStates.newTaskTitle !== '' &&
      taskStates.newTaskBody &&
      taskStates.newTaskBody !== ''
    ) {
      taskFunctions.createTask(taskStates.newTaskTitle, taskStates.newTaskBody)

      taskFunctions.setNewTaskTitle('')
      taskFunctions.setNewTaskBody('')
    } else {
      alert('Título e/ou descrição vazio!')
    }
  }
  return (
    <>
      <LogoutBtn />
      <HeaderTaskListContainer>
        <h2>My Tasks To-do</h2>

        <div>
          <input
            type="text"
            placeholder="Título"
            onChange={e => taskFunctions.setNewTaskTitle(e.target.value)}
            value={taskStates.newTaskTitle}
          />
          <input
            type="text"
            placeholder="Tarefa"
            onChange={e => taskFunctions.setNewTaskBody(e.target.value)}
            value={taskStates.newTaskBody}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </HeaderTaskListContainer>
    </>
  )
}
