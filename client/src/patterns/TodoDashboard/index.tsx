import { useEffect } from 'react'

import { TaskListBody, TaskListContainer } from './styles'
import { useTasks } from '../../hooks/useTasks'
import { TodoHeader } from '../../components/TodoHeader'
import { TaskItem } from '../../components/TaskItem'
export function TodoDashboard() {
  const { taskStates, taskFunctions } = useTasks()

  useEffect(() => {
    taskFunctions.startTasks()
  }, [])

  return (
    <TaskListContainer>
      <TodoHeader />
      <TaskListBody>
        <ul>
          {taskStates.tasks.map(task => (
            <TaskItem key={task._id} task={task} />
          ))}
        </ul>
      </TaskListBody>
    </TaskListContainer>
  )
}
