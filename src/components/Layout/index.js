import React from 'react'
import {Link} from 'react-router-dom'
import {LayoutStyle} from './LayoutStyle'
import AudioPlayer from '../AudioPlayer'
import NotificationMessages from '../NotificationMessages'
import HamburgerButton from '../HamburgerButton';
import {withRouter} from 'react-router'

const Layout = (props) => {
    console.log(props)
    
    return (
        <LayoutStyle>
            <header>
                <Link to="/">
                    <img src="./svg/logo.svg" alt="K Play Logo"/>
                </Link>
                <HamburgerButton/>
            </header>

            <section>
            {props.children}
            </section>

            {/* Om context variable innehåller stream URL så visa audioplayer */}
            <AudioPlayer />

            {/* Om context variable innehåller data object för pop up messages*/}
            <NotificationMessages />

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
                    {props.history.location.pathname === "/bookmarks" ?
                    <img src="./svg/bookmark-filled.svg" alt="Bookmark"/> :
                    <img src="./svg/bookmark.svg" alt="Bookmark"/>} 
                    Sparade
                </Link>
            </footer>
        </LayoutStyle>

    )
}

export default withRouter(Layout)

