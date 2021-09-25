import cookie from 'cookie'
import url from '../../../backend.config'
import axios from 'axios';
export default async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body)
        const { email, password } = req.body;
        try {
            const apiRes = await axios.post(`${url.base_url}token/`, {
                email: email,
                password: password,
            })
            const data = await apiRes.data
            console.log(data)
            if (apiRes.status == 200) {
                res.setHeader('Set-Cookie', [
                    cookie.serialize('access', data.access, {
                        httpOnly: true,
                        secure: false,
                        maxAge: 60 * 30,
                        sameSite: 'strict',
                        path: '/api/',
                    }),
                    cookie.serialize('refresh', data.refresh, {
                        httpOnly: true,
                        secure: false,
                        maxAge: 60 * 60 * 24,
                        sameSite: 'strict',
                        path: '/api/',
                    })
                ])
                return res.status(200).json({
                    success: "Logged in successfully",
                })
            } else {
                return res.status(apiRes.status).json({ error: "Authentication failed" })
            }
        } catch (err) {
            return res.status(500).json({
                error: err
            })

        }
    }
    else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }

}