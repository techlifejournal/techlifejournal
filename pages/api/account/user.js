
import urls from '../../../backend.config';
import { getSession } from "next-auth/client"
export default async (req, res) => {
    if (req.method === 'GET') {

        const session = await getSession({ req });

        if (!session) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        try {
            const apiRes = await fetch(`${urls.base_url}user/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${session.accessToken}`
                }
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
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
};
