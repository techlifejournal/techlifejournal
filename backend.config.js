
const client_url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.URL

const urls = {
    base_url: "https://api-techlifejournal.herokuapp.com/api/",
    client_url: "http://localhost:3000",
}

export default urls