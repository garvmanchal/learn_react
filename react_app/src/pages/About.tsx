function About() {
    return (
        <div className = "card">
            <h1>About Page</h1>
            <p> 
                This is a second page, reachable at <code>/about</code>, wired up
                with React Router. Notice the page changed without a full browser
                 reload — that's client-side routing in action.
            </p>
        </div>
    )
}

export default About
