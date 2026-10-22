import { useFormStatus } from "react-dom";

function FeedbackButtton() {
    const { pending } = useFormStatus()
    return <button disabled={pending}>{pending ? 'Sending...' : 'Send Feedback'}</button>
}

function FeedbackForm() {
    const sendFeedback = async (formData) => {
        await new Promise(r => setTimeout(r, 2000))
        console.log('Rating:', formData.get('rating'), 'Comment:', formData.get('comment'))
        alert('Tank you!')
    }

    return (
        <form action={sendFeedback}>
            <label>
                Rating:
                <select name="rating" defaultValue="5">
                    <option value="5">5-Excellent</option>
                    <option value="4">4-Good</option>
                    <option value="3">3-Average</option>
                </select>
            </label>
            <textarea name="comment" placeholder="Your comment" />
            <FeedbackButtton />
        </form>
    )
}

export default FeedbackForm