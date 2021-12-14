const url = process.env.URL
const base_url = process.env.LOCALHOST ? "http://127.0.0.1:8000/" : "https://api-techlifejournal.herokuapp.com/api/"
const urls = {
    base_url,
    client_url: url,
}
export default urls