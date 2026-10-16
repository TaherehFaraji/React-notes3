import { useState } from 'react'

function SubscribeForm() {
  const [message, setMessage] = useState('')

  // This function is our "server action" – for now, just an async function
  const subscribeAction = async (formData) => {
    const email = formData.get('email')
    await new Promise(r => setTimeout(r, 1000)) // simulate delay
    setMessage(`Subscribed ${email}!`)
  }

  return (
    <form action={subscribeAction}>
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Subscribe</button>
      <button type='submit' formAction={publishAction}>Publish</button>
      <p>{message}</p>
    </form>
  )
}
export default SubscribeForm