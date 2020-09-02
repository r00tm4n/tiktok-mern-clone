import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@r00tm4n</h3>
                <p>This is the description</p>
                <div className="videoFooter___ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>   
                    <Ticker mode="smooth">
                        {({ index }) =>
                            (<> <p>I am a song</p> </>)
                        }
                    </Ticker>
                </div>   
            </div>
            <img 
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />           
        </div>
    )
}

export default VideoFooter;
