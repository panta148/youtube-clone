import React from 'react'
// import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './ChannelRow.css'

function ChannelRow({ subs, noOfVideo, description, channel, channelImage, verified }) {
    return (
        <div className='channelrow'>
            {/* <Avatar src={channelImage} alt={channel} className='channelrow_logo' /> */}
            <div className="channelrow_text">
                <h4>{channel} {verified && <VerifiedUserIcon className='channelrow-verified' />}</h4>
                <p>{subs}  subscribes . {noOfVideo} Videos</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow
