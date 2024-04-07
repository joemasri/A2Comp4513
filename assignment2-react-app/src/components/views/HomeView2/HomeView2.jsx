// 1. display races selection from HomeView1
// 2. when race standing clicked, switch to HomeView2/standings display
// 3. keep race selection and buttons on left side, toggle between standings display and HomeView2 display when standings button clicked
import React from "react";
import StandingsDisplay from "./StandingsDisplay";

const HomeView2 = () => {
    
    return (
        <div className="flex">
            <StandingsDisplay />
        </div>
    )

}

export default HomeView2;