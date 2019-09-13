import React from 'react'
import {LayoutStyle} from './LayoutStyle'
import AudioPlayer from '../AudioPlayer'

const Layout = (props) => {
    return (
        <LayoutStyle>
            <header>
                <a href="." >KPlay</a>
                <a href=".">Meny</a>
            </header>

            {props.children}

            {/* Om context variable innehåller stream URL så visa audioplayer */}
            <AudioPlayer  />
            <footer>
                <a href=".">Hem</a>
                <a href="/sparade">Sparade</a>
            </footer>
        </LayoutStyle>
    )
}

export default Layout

