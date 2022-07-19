import { useContext } from 'react'

import { TasksContext } from '../contexts/Tasks'

export function useTasks() {
  const context = useContext(TasksContext)

  return context
}
