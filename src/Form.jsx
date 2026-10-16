import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    )
}

function Form() {
    const slowAction = async (formData) => {
        await new Promise(r => setTimeout(r, 2000))
        alert('Done!')
    }

    return(
        <form action={slowAction}>
            <input type="text" name="username" required />
            <SubmitButton /> 
        </form>
    )
}

export default Form