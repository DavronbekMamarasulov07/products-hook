import { useEffect, useState } from 'react'
import axios from "../api"

const useFetch = (url, isVisible) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [viewed, setViewed] = useState(false);

    useEffect(() => {
        if(isVisible){
            setViewed(true)
        }
        const loadData = async () => {
            try {
                setLoading(true)
                const res = await axios(url)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false)
            }

        }
        if(isVisible && !viewed){
            loadData();
        }
    }, [url, isVisible, viewed])

    return [ data, loading ]
}

export  { useFetch }
