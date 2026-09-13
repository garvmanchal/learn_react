import { useState } from "react"
import Card from '../components/Card'

function Home(){
    const [count , setCount] = useState(0)

    return (
        <>
        <h1>Vite + React </h1>

        <div className = "card">
            <button onClick= {() =>  setCount((c)=> c + 1)}>
                count is {count}
            </button>
            <p> 
                Edit <code>src/pages/Home.tsx</code> save to test HMR
            </p>
        </div> 

        <div className = "card-grid">
            <Card title = "Fast" description= "Vite's dev server starts almost instantly."/>
            <Card title = "Modern" description = "Built on React 19 with the latest features."/>
            <Card title = "Typed" description ="Typescript catches mistakes before you run the app."/>
            
        </div>
        </>
    )
} 

export default Home