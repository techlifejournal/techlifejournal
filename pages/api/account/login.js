import cookie from 'cookie'
import url from '../../../backend.config'
import axios from 'axios';
export default async (req, res) => {
    if (req.method === "POST") {
        const { username, password } = req.body;
        const body = JSON.stringify({
            username, password
        })
        try {
            let apiRes = await axios({
                url: `${url.base_url}token/`,
                method: 'POST',
                timeout: 8000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            })
            const data = await apiRes.json()
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
                    success: "Logged in successfully"
                })
            } else {
                return res.status(apiRes.status).json({ error: "Authentication failed" })
            }
        } catch (err) {
            return res.status(500).json({
                error: "Something went wrong🐛"
            })

        }
    }
    else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }

}