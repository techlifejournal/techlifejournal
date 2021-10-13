

import urls from '../../../backend.config';
export default async function List(req, res) {
    const { uname, uid } = req.body;
    if (req.method === 'GET' || req.method === 'POST') {
        try {
            const apiRes = await fetch(`${urls.base_url}article/list?uname=${uname}`, {
                method: 'GET',
            });
            const data = await apiRes.json();
            console.log(data)
            if (apiRes.status === 200) {
                return res.status(200).json({
                    data: data
                });
            } else {
                return res.status(apiRes.status).json({
                    error: data.error
                });
            }
        } catch (err) {
            return res.status(500).json({
                error: 'Something went wrong when retrieving user'
            });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
};
