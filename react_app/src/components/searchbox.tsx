import { useRef } from "react"

function Searchbox(){
    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput(){
        inputRef.current?.focus()
    }

    return (
        <>
        <input ref = {inputRef} />
        <button onClick={focusInput}>Focus</button>
        </>
    )
}

export default Searchbox 