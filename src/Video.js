import React,{useRef, useState} from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, shares, messages}) {
    const [playing, setplaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing){
            videoRef.current.pause();
            setplaying(false)
        } else {
            videoRef.current.play();
            setplaying(true);
        }
    }

    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef}
                src={url} />
            
            <VideoFooter channel={channel} descritpion={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;
