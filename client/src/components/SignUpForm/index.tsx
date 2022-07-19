import { Link } from 'react-router-dom'
import { useState } from 'react'

import { FormContent } from '../LoginForm/styles'
import { useAuth } from '../../hooks/useAuth'

export function SignUpForm() {
  const { authFunctions } = useAuth()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault()
    await authFunctions.signUp(name, email, password)
  }

  return (
    <FormContent>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          name="full-name"
          placeholder="Nome completo"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <input type="password" name="password" placeholder="Senha" />
        <input
          type="password"
          name="password-confirm"
          placeholder="Reconfirme a senha escolhida"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <input type="submit" value="SIGN-UP" />
        <Link to="/">or Sign-in</Link>
      </form>
    </FormContent>
  )
}
