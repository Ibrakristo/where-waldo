import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Photo from './components/Photo'
import LeaderBoard from './components/LeaderBoard'
function App() {
    const [key, setKey] = useState(0);
    const [leaderBoard, setLeaderBoard] = useState(false);
    return (<>
        <Navbar leaderBoard={leaderBoard} setLeaderBoard={setLeaderBoard} />
        {leaderBoard && <LeaderBoard />}
        <Photo key={key} setKey={setKey} />
        <Footer />

    </>)
}

export default App
