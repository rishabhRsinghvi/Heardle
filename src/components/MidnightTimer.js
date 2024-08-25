import React from "react";

export default function MidnightTimer(){

    const [midCountdown, setMidCountdown] = React.useState("...")

    setInterval(function(){ 
        var toDate = new Date();
        var tomorrow = new Date();
        tomorrow.setHours(24,0,0,0);
        var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
        var diffHr = Math.floor(diffMS / 3600);
        diffMS = diffMS-diffHr * 3600;
        var diffMi = Math.floor(diffMS / 60);
        diffMS = diffMS-diffMi * 60;
        var diffS = Math.floor(diffMS);
        var result = ((diffHr < 10) ? "0" + diffHr : diffHr);
        result += ":" + ((diffMi < 10) ? "0" + diffMi : diffMi);
        result += ":" + ((diffS < 10) ? "0" + diffS : diffS);
        setMidCountdown(result)
    }, 1000);

    return (
        <p className="result-text next-heardle-timer">Next Heardle in {midCountdown}</p>
    )
}