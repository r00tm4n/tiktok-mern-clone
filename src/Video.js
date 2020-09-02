import React,{useRef, useState} from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';

function Video() {
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
                src="https://v77.tiktokcdn.com/9a368f1ca4b3f743f19445639f1debcb/5f504001/video/tos/useast2a/tos-useast2a-ve-0068c003/a7aaa39f62ee43d987c617654b0873fd/?a=1233&br=1998&bt=999&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200902185929010189073165272004B2&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M292bmRtZ3dvdTMzODczM0ApNzxmOmg5aDw7NztpPDk5ZWduMzRucWpkNmpfLS0tMTZzcy40LzUyMTBfMTJeNDYuNTE6Yw%3D%3D&vl=&vr=" />
            
            <VideoFooter />
            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;
