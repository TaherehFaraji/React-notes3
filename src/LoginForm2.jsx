import { useActionState } from 'react'

// The action function – simulates server-side validation
const loginAction = async (prevState, formData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  // Basic client-side validation
  const errors = {}
  if (!email) errors.email = 'Email is required'
  if (!password) errors.password = 'Password is required'

  if (Object.keys(errors).length > 0) {
    return { ...prevState, errors, success: null }
  }

  // Simulate API call
  await new Promise(r => setTimeout(r, 2000))
  // Simulate server rejection
  if (email !== 'user@test.com' || password !== '123456') { // !(email === 'user@test.com' && password === '123456') pvq ===  ~(~p^~q)
    return { ...prevState, errors: { server: 'Invalid email or password' }, success: null }
  }

  // Success
  return { ...prevState, errors: {}, success: `Welcome, ${email}!` }
}

const initialState = { errors: {}, success: null }

function LoginForm2() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState)

  return (
    <form action={formAction} style={{ maxWidth: 300 }}>
      <h2>Login</h2>
      {state.success && <p style={{ color: 'green' }}>{state.success}</p>}
      <div>
        <input name="email" placeholder="Email" disabled={isPending} />
        {state.errors.email && <p style={{ color: 'red' }}>{state.errors.email}</p>}
      </div>
      <div>
        <input name="password" type="password" placeholder="Password" disabled={isPending} />
        {state.errors.password && <p style={{ color: 'red' }}>{state.errors.password}</p>}
      </div>
      {state.errors.server && <p style={{ color: 'red' }}>{state.errors.server}</p>}
      <button type="submit" disabled={isPending}>{isPending ? 'Logging in...' : 'Login'}</button>
    </form>
  )
}
export default LoginForm2