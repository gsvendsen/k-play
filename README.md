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
2. Start running the project from the root k-play folder
```
npm run
```

#### Developers
- [Lovisa Hallgren](https://github.com/lovisahallgren)
- [Gustav Svendsen](https://github.com/gsvendsen)

#### License
The [MIT](https://github.com/gsvendsen/k-play/blob/master/LICENSE) License