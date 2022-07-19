import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import { FormContent } from './styles'
import { useAuth } from '../../hooks/useAuth'

export function LoginForm() {
  const { authFunctions } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault()
    await authFunctions.signIn(email, password)
  }
  return (
    <FormContent>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="login"
          placeholder="Email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <input type="submit" value="LOGIN" />
        <Link to="/signup">or Sign-up</Link>
      </form>
    </FormContent>
  )
}
