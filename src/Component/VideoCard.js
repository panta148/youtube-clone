import React from 'react'
// import { Avatar } from '@material-ui/core'
import './Videocard.css'

function VideoCard({ title, views, timeStamp, channelImage, image, channel }) {
    return (
        <div className='videocard'>
            {/* <img src={image} alt="no images" className='videocard_image' /> */}
            <iframe src={image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='videocard_img'></iframe>
            <div className="videocard_info">
                {/* <Avatar src={channelImage} alt={title} className='videocard_avatar' /> */}
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}  . {" "} {timeStamp}</p>
                </div>
            </div>

        </div >
    )
}

export default VideoCard
