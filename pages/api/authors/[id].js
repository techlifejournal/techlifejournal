
import urls from '../../../backend.config';
export default async (req, res) => {
    const { id } = req.query

    try {
        const apiRes = await fetch(`${urls.base_url}user/authors?id=${id}`, {
            method: 'GET',
        });
        const data = await apiRes.json();
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
            error: err
        });
    }

};
