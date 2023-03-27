import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Login() {
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleSubmit = () => {
    if (password === import.meta.env.VITE_CLIENT_PASSWORD) {
      auth.login()
      navigate(redirectPath, { replace: true })
      setPassword('')
    } else {
      setErrorMessage(true)
    }
    return
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-48 relative">
      <span className="text-4xl mb-6">🔒</span>
      <label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="w-64 p-3 focus:outline-black"
          onChange={(e) => {
            setPassword(e.target.value)
            setErrorMessage(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
        />
        <button
          className="p-3 text-3xl absolute left-1/2 translate-x-20 -translate-y-1.5"
          onClick={handleSubmit}
        >
          &rarr;
        </button>
      </label>
      {errorMessage ? (
        <div className="error-msg bg-red-700 w-60 p-2 text-white font-bold text-center">
          Incorrect password
        </div>
      ) : null}
    </div>
  )
}
