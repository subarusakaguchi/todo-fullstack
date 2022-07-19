import { TodoDashboard } from '../../patterns/TodoDashboard'
import { TasksProvider } from '../../contexts/Tasks'

export function Home() {
  return (
    <TasksProvider>
      <TodoDashboard />
    </TasksProvider>
  )
}
