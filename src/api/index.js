import axios  from "axios";

const intence = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json"
    },

    timeout: 10000,
    
})

export default intence