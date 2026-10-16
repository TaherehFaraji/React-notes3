import { useState } from 'react'

function ContactForm() {
  const [sent, setSent] = useState(false)

  const sendMessage = async (formData) => {
    await new Promise(r => setTimeout(r, 1500))
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    })
    setSent(true)
  }

  if (sent) return <h2>Message sent! We'll reply soon.</h2>

  return (
    <form action={sendMessage}>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit">Send</button>
    </form>
  )
}
export default ContactForm