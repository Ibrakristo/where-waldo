export default function Navbar({ leaderBoard, setLeaderBoard }) {
    function openLeaderBoard(e) {
        setLeaderBoard(leaderBoard ? false : true)
    }
    return (
        <div >
            <a href="#">Where's Waldo</a>
            <button onClick={openLeaderBoard}>LeaderBoard</button>
        </div>
    )
}