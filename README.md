<p align="center">
    <img alt="K Play Logo" title="K Play Logo" src="https://i.imgur.com/Aamccen.png" width="150">
</p>

## Introduction
K-Play is a project of class WU18 at Yrgo where we were assigned to develop a working prototype for a new streaming service from Kulturakademin called K-Play.

We worked alongside the Digital Design and UX Design classes in a group of seven people to assemble a finished prototype which was presented to Kulturakademin

## Build Process
The prototype was built using React and Styled Components. The data which is used is fetched from Youtube and Soundcloud, which is where the client uploads their content. (for prototyping purposes the data currently used is stored in .json files to prevent exceeding maximum allowed API calls to Youtube and Soundcloud)

The current prototype was built for mobile first and therefore is not fully optimal in a desktop view. Further development of the streaming service would include a proper design for desktop and tablet view.

<p align="center">
    <img alt="Prototype" title="Prototypes" src="https://i.imgur.com/5Uw24kD.png">
</p>

### Functionality

- Navigation for finding video or podcast media
- Working embedded Youtube player and custom audioplayer using Soundcloud as a media source
- Accessability functionality (dark/light mode, high contrast mode, larger font size alternatives)
- Local storage tracking of video and audio progress, displayed on start screen
- Possibility to bookmark video and audio episodes, displayed on bookmarks page


### Installation
1. Clone the repository
```
$ git clone https://github.com/gsvendsen/k-play.git
```
2. Install dependencies and packages
```
npm install
```
3. Start running the project from the root k-play folder
```
npm run
```

#### Developers
- [Lovisa Hallgren](https://github.com/lovisahallgren)
- [Gustav Svendsen](https://github.com/gsvendsen)

#### License
The [MIT](https://github.com/gsvendsen/k-play/blob/master/LICENSE) License

# Code Review by Group 2
- Destructure component props
- [NotificationMessages#11](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/NotificationMessages/index.js#L11) - Clear timeout on unmount
- [Navbar#71](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/Navbar/index.js#L71) - DRY, create reusable link component that closes menu
- [AudioPlayer#11](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/AudioPlayer/index.js#L11) - Destructure props directly instead of doing it on line #17
- [AudioPlayer#146](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/AudioPlayer/index.js#L146) - Maybe put PodPlayer in separate file for readability
- [Navbar#9](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/Navbar/index.js#L9) - Hard to understand what “one” & “two” means without reading the rest of the code.
- [BookmarksPage#30](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/pages/BookmarksPage/index.js#L30) - Put filter logic inside useEffect that triggers on filterState change. Otherwise it will run on every re-render.
- [BookmarksPage#18](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/pages/BookmarksPage/index.js#L19) - Similar to the one above. Currently data from local storage gets fetched on every re-render. Could probably do this only on mount with useEffect.
- Some `console.log()` ’s has been left behind
- [MenuOption#10](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/MenuOption/index.js#L10) - `onClick={()=>props.onSelect()}` can be reduced to `onClick={props.onSelect}`.
- Could create more styled components instead of using large inline styling in some cases. Ex: [EpisodePage#131](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/pages/EpisodePage/index.js#L131)
- Fetch from local storage data in useEffect to reduce logic in the JSX. Ex: [SearchPage#123](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/pages/SearchPage/index.js#L123)
- A lot of empty  `alt=“”`
- [Navbar#44](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/Navbar/index.js#L44) - <li> tags outside of <ol> or <ul>
- [Manifest](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/public/manifest.json#L21) - Invalid `start_url`, should be “/“
- Could probably move all context related functionality to one file. Maybe make a general provider component that combines all providers to reduce code in App.js.
- [AudioPlayer#150](https://github.com/gsvendsen/k-play/blob/7ca15bccc6979de26e9e93024cfd2eb8116d788f/src/components/AudioPlayer/index.js#L150) - Unnecessary loading state, immediately gets set to false
- Use `target=“_blank”` for external links
- Netlify redirects/rewrites not working. Visiting a url other than start page directly causes 404 error. _redirects file is missing [Redirects | Netlify](https://www.netlify.com/docs/redirects/#rewrites-and-proxying)
- The `!important` keyword is considered bad practice and can probably be avoided.
