import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcons from '@material-ui/icons/Apps'
import NotificationsIcons from '@material-ui/icons/Notifications'
// import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic';
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    const [inputSearch, setinputSearch] = useState('')
    return (
        <div className='header'>
            <div className="leftpart">
                <MenuIcon />
                <Link to='/'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfPBXKeIeZLtg_clyWyXV84vVr7pjBpZWiA&usqp=CAUv" alt="youtube" className='header_logo' />
                </Link>

            </div>
            <div className="middlepart">
                <input type="text" value={inputSearch} onChange={e => setinputSearch(e.target.value)} placeholder='search' />
                <Link to={`/Search/${inputSearch}`}>
                    <form action="">
                        <SearchIcon type='submit' className='header_search' />
                    </form>
                </Link>
                <MicIcon />

            </div>
            <div className="rightpart">
                <VideoCallIcon className='headdr_icon' />
                <AppIcons className='headdr_icon' />
                <NotificationsIcons className='headdr_icon' />
                {/* <Avatar alt='user' className='headdr_icon' src="./picture/amrit.jpg" /> */}
            </div>
        </div>
    )
}

export default Header
