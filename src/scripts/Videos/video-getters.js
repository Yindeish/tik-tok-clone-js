import DomHelper from '../DOM/dom-helper.js';
import VideoHelper from './video-helper.js';

class VideosGetter {

    gottenVideos = new VideoHelper().getVideos();
    followingVideos = this.gottenVideos.followingVideos;
    forYouVideos  = this.gottenVideos.forYouVideos;

    // nfollowingVideos = this.gottenVideos.nfollowingVideos;

    createVideoBlock(video) {
        const videoBlock = document.createElement('div');
        /* html */
        videoBlock.innerHTML = `
        <div class="video-container">
            <video src='${video.videoSrc}' loop data-alt='${video.videoAlt}' data-is-playing="${video.isPlaying}" data-is-followed="${video.isFollowed}"></video>
        </div>
        <ul class="extra-controls d-flex-c">
            <li class="controls profile-image">
                <span class="profile-image-btn">
                    <img src="${video.creator.picture}">
                    <svg class="bi bi-plus-circle active follow-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <svg class="bi bi-check-circle unfollow-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                </span>
                <div class="followers-count count">${video.creator.followers.length}</div>
            </li>
            <li class="controls like">
                <svg class="bi bi-heart-fill active like-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                <svg class="bi bi-heart-fill unlike-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                <div class="like-count count">${video.videoExtraInfos.likes}</div>
            </li>
            <li class="controls message">
                <svg class="bi bi-chat-dots-fill active message-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                <div class="message-count count">${video.videoExtraInfos.comments.length}</div>
            </li>
            <li class="controls share">
                <svg class="active share-btn" xmlns="http://www.w3.org/2000/svg" width="174.166" height="149.931" viewBox="0 0 174.166 149.931">
                    <g id="Group_1" data-name="Group 1" transform="translate(-1020.834 -441)">
                    <g id="Polygon_1" data-name="Polygon 1" transform="translate(1195 441) rotate(90)" fill="#fff">
                        <path d="M 99.238037109375 74.50000762939453 L 5.76197338104248 74.50000762939453 C 4.812133312225342 74.50000762939453 3.983173370361328 73.99701690673828 3.544519901275635 73.15452575683594 C 3.10588002204895 72.31203460693359 3.169186592102051 71.34449005126953 3.713893413543701 70.56633758544922 L 50.45191955566406 3.797726631164551 C 50.92629241943359 3.120046615600586 51.67278671264648 2.731379985809326 52.5 2.731379985809326 C 53.32720184326172 2.731379985809326 54.07370758056641 3.120046615600586 54.54808044433594 3.797726631164551 L 101.2861099243164 70.56633758544922 C 101.830810546875 71.34449005126953 101.8941345214844 72.31203460693359 101.4554824829102 73.154541015625 C 101.0168304443359 73.99701690673828 100.1878814697266 74.50000762939453 99.238037109375 74.50000762939453 Z" stroke="none"/>
                        <path d="M 52.5 3.231369018554688 C 51.83824157714844 3.231369018554688 51.24103927612305 3.54229736328125 50.86153411865234 4.084457397460938 L 4.123497009277344 70.85307312011719 C 3.687736511230469 71.47557830810547 3.637092590332031 72.24961853027344 3.988014221191406 72.92362213134766 C 4.338935852050781 73.59761047363281 5.002090454101562 73.99999237060547 5.761970520019531 73.99999237060547 L 99.238037109375 73.99999237060547 C 99.99790954589844 73.99999237060547 100.6610641479492 73.59761047363281 101.0119857788086 72.92362213134766 C 101.362907409668 72.24961853027344 101.312255859375 71.47557830810547 100.8764953613281 70.85307312011719 L 54.13846588134766 4.084457397460938 C 53.75896072387695 3.54229736328125 53.16175842285156 3.231369018554688 52.5 3.231369018554688 M 52.49999618530273 2.231376647949219 C 53.43026733398438 2.231376647949219 54.36053848266602 2.657913208007812 54.95769500732422 3.510993957519531 L 101.6957168579102 70.27960968017578 C 103.0875625610352 72.26793670654297 101.6650924682617 74.99999237060547 99.238037109375 74.99999237060547 L 5.761970520019531 74.99999237060547 C 3.334892272949219 74.99999237060547 1.912437438964844 72.26793670654297 3.304267883300781 70.27960968017578 L 50.04230499267578 3.510993957519531 C 50.63945388793945 2.657913208007812 51.56972503662109 2.231376647949219 52.49999618530273 2.231376647949219 Z" stroke="none" fill="#fff"/>
                    </g>
                    <path id="Path_1" data-name="Path 1" d="M1120,456s-45.088,8.783-69.755,42.449-28.912,92.217-28.912,92.217,26.789-43.112,51.455-58.445A48.71,48.71,0,0,1,1120,529.333Z" fill="#fff" stroke="#fff" stroke-width="1"/>
                    </g>
                </svg>
            </li>
            <li class="controls media-share">
                <span>

                </span>
            </li>
            <li class="controls sound-info">
                <span>
                </span>
            </li>
        </ul>
        <div class="btns">
            <svg class="play" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg>
            <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
            </svg>
        </div>
        <div class="video-info">
            <p>${video.creator.name}</p>
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

    connectVideoInfosToVideoBlock(videoType) {
        for (let video of videoType ) {
            this.connectToVideoDisplayScreen(this.createVideoBlock(video));
        }
    }

    connectToVideoDisplayScreen(videoBlock) {
        const gottenElements = new  DomHelper().getElements();
        const { videosDisplayScreen } = gottenElements;
        videosDisplayScreen.append(videoBlock);
    }

    run(videoType) {
        this.connectVideoInfosToVideoBlock(videoType);
    }

}

export  default VideosGetter;