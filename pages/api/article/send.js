import cookie from 'cookie'
import url from '../../../backend.config'
import { getSession } from 'next-auth/client';
import axios from 'axios'
export default async function Send(req, res) {
    if (req.method === "POST") {
        const { headline, content, tags } = req.body;
        const session = await getSession({ req });
        if (!session.accessToken) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }
        const apiRes = await axios.post(`${url.base_url}article/entry`, { headline, content, tags },
            { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${session.accessToken}` } })
        if (apiRes.status == 200) {
            return res.status(200).json({
                success: "article successfully sent",
            })
        } else {
            return res.status(apiRes.status).json({ error: "something went wrong" })
        }
    }
    else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }

}