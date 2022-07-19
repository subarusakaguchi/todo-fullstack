import { ReactNode } from 'react'

interface IReturn {
  error: boolean
  message: string
}

interface IUser {
  name: string
  email: string
}

interface IAuthData {
  authStates: {
    user: IUser
    signed: boolean
  }
  authFunctions: {
    signIn: (email: string, password: string) => Promise<IReturn>
    signUp: (name: string, email: string, password: string) => Promise<IReturn>
    logout: () => Promise<IReturn>
  }
}

interface IAuthProps {
  children: ReactNode
}

export type { IUser, IAuthData, IAuthProps, IReturn }
