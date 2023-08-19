import { useEffect, useRef, useState } from "react";

export default function Popup({ setKey }) {
    const inputRef = useRef(null);
    function submit(e) {
        e.preventDefault();
        setKey((key) => { return key + 1 });
        fetch("http://localhost:3000/users", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: inputRef.current.value })
        })
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div style={{ position: "absolute", left: `40%`, top: `40%`, width: "20%", height: "20%" }}> <span>Congratulations</span>
            <label ><span>Your Name is </span><input ref={inputRef} type="text" /></label>
            <button onClick={submit}>Submit</button>
        </div>
    )
}