
import axios from 'axios'
export default function handler(req, res) {
    axios.get('http://127.0.0.1:8000/api/article/list')
        .then(response => {
            res.status(200).json({ data: response.data })
        })
}
