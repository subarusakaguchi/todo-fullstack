import { Dispatch, ReactNode, SetStateAction } from 'react'

interface ITask {
  _id: string
  title: string
  description: string
  isCompleted: boolean
}

interface IConfig {
  headers: {
    authorization: string
  }
}

interface ITasksData {
  taskStates: {
    tasks: ITask[]
    newTaskTitle: string
    newTaskBody: string
  }
  taskFunctions: {
    startTasks: () => Promise<void>
    setNewTaskTitle: Dispatch<SetStateAction<string>>
    setNewTaskBody: Dispatch<SetStateAction<string>>
    createTask: (title: string, description: string) => Promise<void>
    updateTask: (id: string) => Promise<void>
    deleteTask: (id: string) => Promise<void>
  }
}

interface ITasksProps {
  children: ReactNode
}

export type { ITask, ITasksData, IConfig, ITasksProps }
