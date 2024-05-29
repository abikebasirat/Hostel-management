import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import "./Dashboard.css"

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLinkClick =(index) => {
        setActiveIndex(index)
    }
    const dashboardLinks =[
        {title: 'students', url: "/studentdash"},
        {title: 'Rooms', url: "/room"},
        {title: 'RoomsType', url: "/room-type"},
        {title: 'Reports', url: "/report"},
    ]
  return (
    <div className='--flex-start'>
        <div className='left'>
            {dashboardLinks.map(({title, url}, index) =>(
                <div className='--flex-center --dir-column' key={index}>
                    <Link to={url}
                    className={index === activeIndex ? "active-link": ""}
                    onClick={() => handleLinkClick(index)}>
                        {title}
                    </Link>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Sidebar