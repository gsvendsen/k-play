import React from 'react'
import {Link} from 'react-router-dom'
import {LayoutStyle} from './LayoutStyle'
import AudioPlayer from '../AudioPlayer'
import HamburgerButton from '../HamburgerButton';
import {withRouter} from 'react-router'

const Layout = (props) => {
    console.log(props)
    
    return (
        <LayoutStyle>
            <header>
                <img src="./svg/logo.svg" alt="K Play Logo"/>
                <HamburgerButton/>
            </header>

            <section>
            {props.children}
            </section>

            {/* Om context variable innehåller stream URL så visa audioplayer */}
            <AudioPlayer  />
            <footer>
                <Link to=".">
                    {props.history.location.pathname === "/" ?
                        <img src="./svg/home-filled.svg" alt="Home"/> :
                        <img src="./svg/home.svg" alt="Home"/>}
                    Hem
                </Link>
                <Link to="/bookmarks">
                    {props.history.location.pathname === "/search" ?
                    <img src="./svg/search-icon-filled.svg" alt="Search"/> :
                    <img src="./svg/search-icon.svg" alt="Search"/>} 
                    Search
                </Link>
                <Link to="/bookmarks">
                    {props.history.location.pathname === "/bookmark" ?
                    <img src="./svg/bookmark-filled.svg" alt="Bookmark"/> :
                    <img src="./svg/bookmark.svg" alt="Bookmark"/>} 
                    Sparade
                </Link>
            </footer>
        </LayoutStyle>

    )
}

export default withRouter(Layout)

