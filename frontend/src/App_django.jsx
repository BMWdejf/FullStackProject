import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState([])

    useEffect( () => {
    async function fetchData() {
        console.log(import.meta.env.VITE_API_URL)

        const response = await fetch(`${import.meta.env.VITE_API_URL_DJANGO}`)
        const result = await response.json();
            //console.log(result)
            //setTimestamp(result);
        console.log(result)
        setTitle(["title"])


    }

    fetchData();
    }, [] )



  return (
    <>
    hello world!
    </>
  )
}

export default App
