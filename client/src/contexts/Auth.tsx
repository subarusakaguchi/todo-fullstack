import { useNavigate } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'

import {
  IAuthData,
  IAuthProps,
  IReturn,
  IUser
} from './interfaces/AuthInterfaces'
import { api } from '../services/api'

export const AuthContext = createContext<IAuthData>({} as IAuthData)

export function AuthProvider({ children }: IAuthProps): JSX.Element {
  const navigate = useNavigate()
  const [signed, setSigned] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({
    name: '',
    email: ''
  })

  useEffect(() => {
    const sessionExists = localStorage.getItem('user')

    if (sessionExists) {
      setUser(JSON.parse(sessionExists))
      setSigned(true)
      navigate('/home')
    }
  }, [])

  const signIn = async (email: string, password: string): Promise<IReturn> => {
    const dataResponse = {
      error: false,
      message: ''
    }

    try {
      const response = await api.post('/session', {
        email,
        password
      })

      if (response.data) {
        const { user, token, tokenId } = response.data
        const { name, email } = user

        if (token) {
          setUser({
            name,
            email
          })

          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('jwt', token)
          localStorage.setItem('jwt-id', tokenId)

          setSigned(true)

          navigate('/home')
        }
      }

      dataResponse.message = 'Logado com sucesso!'

      return dataResponse
    } catch (err) {
      dataResponse.error = true
      dataResponse.message = `Error: ${err}`
      return dataResponse
    }
  }

  const signUp = async (
    name: string,
    email: string,
    password: string
  ): Promise<IReturn> => {
    const dataResponse = {
      error: false,
      message: ''
    }

    try {
      const response = await api.post('/users', {
        name,
        email,
        password
      })

      if (response.data.message === 'Created!') {
        navigate('/')
      }

      dataResponse.message = 'Saiu com sucesso!'

      return dataResponse
    } catch (err) {
      dataResponse.error = true
      dataResponse.message = `Error: ${err}`
      return dataResponse
    }
  }

  const logout = async (): Promise<IReturn> => {
    const dataResponse = {
      error: false,
      message: ''
    }
    try {
      const token = localStorage.getItem('jwt')
      const tokenId = localStorage.getItem('jwt-id')

      if (token && tokenId) {
        const config = {
          headers: {
            authorization: `Bearer ${token}`
          }
        }

        await api.delete(`/session/${tokenId}`, config)

        localStorage.clear()

        setSigned(false)
        navigate('/')
      }

      dataResponse.message = 'Saiu com sucesso!'

      return dataResponse
    } catch (err) {
      dataResponse.error = true
      dataResponse.message = `Error: ${err}`
      return dataResponse
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authStates: {
          user,
          signed
        },
        authFunctions: {
          signIn,
          signUp,
          logout
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
