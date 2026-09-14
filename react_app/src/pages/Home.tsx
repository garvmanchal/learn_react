// import { useState, useEffect} from "react"
// import Card from '../components/Card'

// function Home(){
//     const [count , setCount] = useState(0)
//     const [bookings , setBookings] = useState([]) 
//     const [loading , setLoading] = useState(true) 


//  useEffect(() => {
//   fetch("http://127.0.0.1:8000/chat", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       message: "Hello",
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//     })
// }, [])


   
//     return (
//         <>
//         <h1>Vite + React </h1>

//         {/* <ul>
//             {bookings.map((b) => (
//             <li key={b.id}>{b.customerName}</li>
//         ))}
//             </ul>
//             );
//         } */}




//         <div className = "card">
//             <button onClick= {() =>  setCount((c)=> c + 1)}>
//                 count is {count}
//             </button>
//             <p> 
//                 Edit <code>src/pages/Home.tsx</code> save to test HMR
//             </p>
//         </div> 

//         <div className = "card-grid">
//             <Card title = "Fast" description= "Vite's dev server starts almost instantly."/>
//             <Card title = "Modern" description = "Built on React 19 with the latest features."/>
//             <Card title = "Typed" description ="Typescript catches mistakes before you run the app."/>
            
//         </div>
//         </>
//     )
// } 



// export default Home

import { useState } from "react"

interface ChatMessage {
  role: "user" | "bot"
  text: string
}

interface ChatResponse {
  answer: string
  model_route: string
  input_tokens: number
  output_tokens: number
  estimated_cost_usd: number
  needs_human_review: boolean
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: ChatMessage = { role: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const data: ChatResponse = await res.json()

      const botMessage: ChatMessage = { role: "bot", text: data.answer }
      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      console.error("Chat error:", err)
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong." },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: 500,
          maxWidth: "90%",
          backgroundColor: "#720404",
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: 20,
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0 }}>Chatbot</h2>

        <div
          style={{
            border: "1px solid #063d17",
            borderRadius: 8,
            padding: 12,
            height: 400,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {messages.length === 0 && (
            <div style={{ color: "#999", textAlign: "center", marginTop: 150 }}>
              Start the conversation...
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.role === "user" ? "#007bff" : "#e5e5ea",
                color: msg.role === "user" ? "#fff" : "#000",
                padding: "8px 12px",
                borderRadius: 16,
                maxWidth: "75%",
              }}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: "flex-start", color: "#888" }}>
              Typing...
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
