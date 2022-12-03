import Auth from "./Auth/auth.js";

class NewVideo extends Auth {

    constructor(userVideo) {
        this.userCreator = userVideo.creator;
        this.userVideoFollowers = userVideo.creator.followers;
        this.userAvatar = userVideo.creator.picture;
        this.userVideoSrc = userVideo.videoSrc;
        this.userVideoAlt = userVideo.videoAlt;
        this.userVideoextraInfos = userVideo.videoextraInfos;
        this.userVideoIsPlaying = userVideo.videoIsPlaying;
        this.userVideoSoundInfo = userVideo.soundInfo;

        this.userVideo = userVideo;            
    }

    createNewVideo() {

        const newVideo = {
            userCreator: this.userCreator,
            userVideoSrc: this.userVideoSrc,
            userVideoSrc: this.userVideoSrc,
            userVideoAlt: this.userVideoAlt,
            userVideoextraInfos: this.userVideoextraInfos,
            userVideoIsPlaying: this.userVideoIsPlaying,
            userVideoSoundInfo: this.userVideoSoundInfo
        }

        return newVideo;
    }

}

export default NewVideo;