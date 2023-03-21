import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

type Props = { children: any }

export default function RequireAuth({ children }: Props) {
  const location = useLocation()
  const auth = useAuth()

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />
  }

  return children
}
