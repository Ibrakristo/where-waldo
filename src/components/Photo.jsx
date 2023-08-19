import { useEffect, useRef, useState } from "react"
import Box from './Box.jsx'
import Popup from "./Popup.jsx";
let locationRelative;
export default function Photo({ setKey }) {
    const [isTagging, setIsTagging] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [finished, setFinished] = useState(false);
    const location = useRef({ x: null, y: null })
    function tagging(e) {
        setIsTagging(isTagging ? false : true);
        location.current = { x: e.pageX / e.target.clientWidth, y: (e.pageY - e.target.offsetTop) / e.target.clientHeight };
        locationRelative = { x: e.pageX, y: e.pageY }
    }
    useEffect(() => {
        fetch("http://localhost:3000/characters", {
            credentials: "include"
        }).then((res) => {
            return res.json();
        }).then((chars) => {
            setCharacters(chars)
        }, [])

    }, [])
    return (<>
        {finished && <Popup setKey={setKey} />}
        {!finished && isTagging && <Box location={location.current} setIsTagging={setIsTagging} characters={characters} setCharacters={setCharacters} locationRelative={locationRelative} setFinished={setFinished} />}
        <img src="../../8054.jpg" alt="Where is everyone" onClick={tagging} style={{ width: 100 + "%" }} />
    </>)
}