import { useState, useEffect } from 'react'
const url = "http://api.open-notify.org/iss-now.json"

function App () {
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    useEffect( () => {
        fetch(url)
            .then( (response) => response.json())
            .then((data) => data["iss_position"])
            .then((position) => {
                console.log(position["latitude"])
                console.log(position["longitude"])
                setLatitude(position["latitude"])
                setLongitude(position["longitude"])
            })
    })

    return (
    <>
        hello world!
        {latitude}
        {longitude}
    </>
  )

}



export default App