import DomHelper from './dom-helper.js';
import VideoHelper from './video-helper.js';

class VideosGetter {

    gottenVideos = new VideoHelper().getVideos();
    followingVideos = this.gottenVideos.followingVideos;
    forYouVideos  = this.gottenVideos.forYouVideos;

    createVideoBlock(video) {
        console.log('createVideoBlock in video getters');
        const videoBlock = document.createElement('div');
        /* html */
        videoBlock.innerHTML = `
        <div class="video-container">
            <video src='${video.videoSrc}' loop poster='${video.videoPoster}'></video>
        </div>
        <ul class="extra-controls d-flex-c">
            <li class="controls profile-image-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </li>
            <li class="controls like">
            <svg class="active" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            <div class="like-count"></div>
            </li>
            <li class="controls message">
                <svg class="active" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                <div class="message-count"></div>
            </li>
            <li class="controls share"></li>
            <li class="controls media-share">
                <span>

                </span>
            </li>
            <li class="controls sound-info"></li>
        </ul>
        <div class="btns d-flex-c">
            <span class="play d-flex-c">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
            </span>
            <span class="pause d-flex-c">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
                </svg>
            </span>
        </div>
        <div class="video-info">
            <p>${video.videoInfo}</p>
            <p class="sound-info">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                    </svg>
                </span>
                ${video.soundInfo}  
            </p>
        </div>
        `;
        videoBlock.className = 'video';
        return videoBlock;
    }

    connectVideoInfosToVideoBlock() {
        console.log('connectVideoInfosToVideoBlock in video getters');
        for (let video of this.followingVideos ) {
            this.connectToVideoDisplayScreen(this.createVideoBlock(video));
        }
    }

    connectToVideoDisplayScreen(videoBlock) {
        console.log('connectToVideoDisplayScreen in video getters');
        const gottenElements = new  DomHelper().getElements();
        const videosDisplayScreen = gottenElements.videosDisplayScreen;
        videosDisplayScreen.append(videoBlock);
    }

    run() {
        console.log('run in videos getter');
        this.connectVideoInfosToVideoBlock();
    }

}

export  default VideosGetter;