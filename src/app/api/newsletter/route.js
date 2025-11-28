import axios from "axios";

export async function POST(request) {
    try {
        const { email } = await request.json();
        console.log(email);
        if (!email) {
            return Response.json({ error: 'Email is required' }, { status: 400 })
        }
        const res = await axios.post(
            `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID_NEWSLETTER}/subscribe`,
            {
                api_key: process.env.CONVERTKIT_API_KEY,
                email,
            }
        );
        const data = res.data;
        console.log(data);
        return Response.json({ message: 'Newsletter subscribed successfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({
            error: "Failed to subscribe",
            details: error.response?.data || error.message,
        }, { status: 500 });
    }
}