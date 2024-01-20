import axios from 'axios'
import  { useEffect, useState } from 'react'

export default function FetchImg ({ url }) {
    const [data, setData] = useState()

    const fetchImage = async () => {
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            console.log('ошибка')
        }
    }

    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <div>
            <img src={data?.sprites.back_default} alt="pockemon"/>
        </div>
    )
}