export default function Box({ location, setIsTagging, characters, setCharacters, locationRelative, setFinished, setExistedCharacters, existedCharacters }) {


    return (<>
        <div style={{ border: "1px black solid", position: "absolute", left: `calc(${locationRelative.x}px - 12.5px)`, top: `calc(${locationRelative.y}px - 12.5px)`, width: 25 + "px", height: 25 + "px" }} onClick={() => setIsTagging(false)}></div>
        <ul style={{ position: "absolute", left: `calc(${locationRelative.x}px + 1%)`, top: `calc(${locationRelative.y}px - 7%)`, color: "black" }}>
            {characters.map(character => {
                return <li key={character} onClick={async (e) => {
                    let test = JSON.stringify({ name: character, x: location.x, y: location.y, remainingCharacters: characters });
                    let res = await fetch("http://localhost:3000/characters", {
                        method: "POST",
                        body: test,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        credentials: "include"
                    })
                    res = await res.json();
                    if (res.found === true || res.success === true) {
                        setCharacters(characters.filter((char) => { return char !== character }));
                        if (res.success === true) {
                            setFinished(true);
                        }
                        setExistedCharacters([...existedCharacters, locationRelative])
                    }
                    setIsTagging(false);
                }}>{character}</li>;
            })}
        </ul>
    </>)
}