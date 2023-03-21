import { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null as any)

type Props = { children: any }

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(false)

  const login = () => setUser(true)

  const logout = () => setUser(false)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
