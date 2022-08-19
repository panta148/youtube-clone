import React from 'react'
import './Sidebarrow.css'
function SidebarRow({ Icon, title, selected }) {
    return (
        <div className={`sidebarrow ${selected && "selected"}`}>
            <Icon className='sidebarrow_icon' />
            <h2 className="sidebarrow_title">{title}</h2>

        </div>
    )
}

export default SidebarRow
