import { useState, useEffect } from "react"


function Clock() {
    const[time, setTime] = useState(new Date());
    
    useEffect (() => {
        const timer = setInterval(() => setTime(new Date()), 1000) ;
        return () => clearInterval(timer);


    },[]);

    return <p>{time.toLocaleDateString()}</p>

}


export default Clock 
