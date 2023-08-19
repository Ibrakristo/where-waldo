
export default function CrossedBox({ location }) {
    console.log(location)
    return (<div style={{ border: "1px black solid", position: "absolute", left: `calc(${location.x}px - 12.5px)`, top: `calc(${location.y}px - 12.5px)`, width: 25 + "px", height: 25 + "px", color: "black" }}>
        <span style={{ width: `100%`, height: `100%`, display: "block" }}>&#x2573;</span>
    </div>)
}