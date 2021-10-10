import cookie from 'cookie'
import url from '../../../backend.config'
import axios from 'axios'
export default async (req, res) => {
    if (req.method === "POST") {
        const { headline, content, Tags } = req.body;
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;
        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }
        const apiRes = await axios.post(`${url.base_url}article/entry`, { headline, content, Tags },
            { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${access}` } })
        const data = await apiRes.data
        console.log(data)
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