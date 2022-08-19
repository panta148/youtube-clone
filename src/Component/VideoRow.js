import React from 'react'
import './VideoRow.css'

function VideoRow({ views, description, subs, timeStamp, image, title, channel }) {
    return (
        <div className='videorow'>
            <iframe src={image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='viderow_img'></iframe>
            <div className="videorow_text">
                <h3>{title}</h3>
                <p className='videorow-heading'>{channel}. <span className='videorow_s'> <span className='videorow_sub'> {subs}</span> subscribers </span> . {views} Views .{timeStamp}</p>
                <p className='videorow_des'>{description}</p>


            </div>

        </div>
    )
}

export default VideoRow
