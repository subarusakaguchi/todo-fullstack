import { createContext, useEffect, useState } from 'react'

import {
  IConfig,
  ITask,
  ITasksData,
  ITasksProps
} from './interfaces/TasksInterfaces'
import { api } from '../services/api'

export const TasksContext = createContext<ITasksData>({} as ITasksData)

export function TasksProvider({ children }: ITasksProps): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskBody, setNewTaskBody] = useState('')

  const [config, setConfig] = useState<IConfig>()

  const startTasks = async (): Promise<void> => {
    const userToken = localStorage.getItem('jwt')
    console.log(config)
    setConfig({ headers: { authorization: `Bearer ${userToken}` } })
    setNewTaskTitle('')
    setNewTaskBody('')
    await getTasks()
  }

  const getTasks = async () => {
    if (config) {
      const response = await api.get('/tasks', config)

      setTasks(response.data.tarefas as ITask[])
    }
  }

  const createTask = async (
    title: string,
    description: string
  ): Promise<void> => {
    if (config) {
      await api.post('/tasks', { title, description }, config)

      getTasks()
    }
  }

  const updateTask = async (id: string): Promise<void> => {
    if (id && id !== '') {
      const bodyParam = {
        key: 'value'
      }

      await api.patch(`/tasks/${id}`, bodyParam, config)

      getTasks()
    }
  }

  const deleteTask = async (id: string): Promise<void> => {
    if (id && id !== '') {
      await api.delete(`/tasks/${id}`, config)

      getTasks()
    }
  }

  return (
    <TasksContext.Provider
      value={{
        taskStates: { tasks, newTaskTitle, newTaskBody },
        taskFunctions: {
          startTasks,
          setNewTaskTitle,
          setNewTaskBody,
          createTask,
          updateTask,
          deleteTask
        }
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
