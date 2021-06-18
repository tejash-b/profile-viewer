

import React from 'react'
import {Link} from 'react-router-dom'

export default function SideNav() {
    return (
            <div className="side-nav">
                <Link to="/profile" className="links">Profile</Link>
                <Link to="/comingsoon" className="links">Posts</Link>
                <Link to="/comingsoon" className="links">Gallery</Link>
                <Link to="/comingsoon" className="links">ToDo</Link>
            </div>
    )
}
