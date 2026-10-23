import { useFormStatus } from "react-dom";
import { useActionState } from "react";

function SendButton() {
    const { pending } = useFormStatus()
    return <button disabled={pending}>{pending ? 'Sending..' : 'Send'}</button>
}

const sendComment = async (prevState, formData) => {
    await new Promise(r => setTimeout(r, 1500))
    console.log('Comment: ', formData.get('comment'))
    alert('Thank you ' + formData.get('username'))
}

const init = {}

function Comment() {
    const [state, formAction] = useActionState(sendComment, init)

    return (
        <form action={formAction}>
            <input name={"username"} type="text" required />
            <textarea name="comment" placeholder="Write your comment.." required />
            <SendButton />
        </form>
    )
}

export default Comment