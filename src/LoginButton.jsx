import { useNavigate } from 'react-router-dom'

function LoginButton() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // simulate login
    // navigate('/dashboard')
    // navigate(-1)
    navigate('/home', { replace: true })
  }

  return <button onClick={handleLogin}>Log In</button>
}

export default LoginButton