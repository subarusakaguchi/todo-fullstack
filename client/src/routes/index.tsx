import { Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'

import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { useAuth } from '../hooks/useAuth'

interface IPrivateProps {
  Item: () => JSX.Element
}

const Private = ({ Item }: IPrivateProps) => {
  const { authStates } = useAuth()

  return authStates.signed ? <Item /> : <SignIn />
}

export function RoutesApp() {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Fragment>
  )
}
