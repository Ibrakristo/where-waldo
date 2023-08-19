import { useEffect, useState } from "react"


export default function LeaderBoard() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const callUsers = async () => {
            let res = await fetch("http://localhost:3000/users/leaderboard")

            let result = await res.json();
            setUsers(result);
        }
        callUsers();
    }, [])
    return (<div style={{ position: "absolute", left: `40%`, top: `40%`, width: "20%", height: "20%", color: "black" }}>
        <span>Top 10</span>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.totalTime}</td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>)
}