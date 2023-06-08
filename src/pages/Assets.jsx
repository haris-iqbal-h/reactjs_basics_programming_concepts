import React from 'react'
import sample from '../assets/video/sample.mp4'
import ReactPlayer from "react-player";

const Assets = () => {
    const audio1=require('../assets/audio/audio.mp3')
    const audio=new Audio({audio1})
    const handleChange=()=>{
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    return (
        <>
            {/* <div>Assets</div> */}
            
            {/* <div>
                <button onClick={handleChange}>Play / Pause</button>
            </div> */}
            <video src={require('../assets/video/sample.mp4')} width={400} height={400} controls/>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=xkPQDs1nBwY&ab_channel=TehzeebHafiOfficial' 
                    playing={false}
                    volume={0.5}
                    controls
                />
        </>
    )
}

export default Assets