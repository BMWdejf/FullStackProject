import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [posts, setPosts] = useState([])

    useEffect( () => {
    async function fetchData() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_DJANGO}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            setPosts(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    fetchData();
    }, [] )



  return (
    <div>
            <h1>Seznam příspěvků</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default App
