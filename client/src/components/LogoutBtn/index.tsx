import { LogoutContainer } from './styles'
import { useAuth } from '../../hooks/useAuth'

export function LogoutBtn() {
  const { authFunctions } = useAuth()
  return (
    <LogoutContainer>
      <button>
        <a onClick={authFunctions.logout}>Logout</a>
      </button>
    </LogoutContainer>
  )
}
