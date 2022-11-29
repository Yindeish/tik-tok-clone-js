import DomHelper from "./dom-helper.js";
import VideosGetter from "./video-getters.js";

class VideoPlayer {

    currentVideoPlaying = null;
    currentVideoPaused = null;

    currentPlayBtn = null;
    currentPauseBtn  = null;

    windowHeight = window.innerHeight;
    canPlayNow = false;
    heightToPlayVideo = 10;

    getVideos() {
        console.log('gte videos in video player');
        const videosGetter = new VideosGetter();
        videosGetter.run();
    }

    retrieveElementsAndControlVideos() {
        console.log('retrieveElements in video player');
        this.getVideos();
        const gottenElements = new DomHelper().getElements();
        const videosDisplayScreen = gottenElements.videosDisplayScreen;
        const videos = gottenElements.videos;

        const followingVideos = new VideosGetter().followingVideos;

        [...videos].forEach(video => {
            video.addEventListener('click', event => {
                event.preventDefault();
                const currentVideoPoster = event.target.poster.slice(event.target.poster.indexOf('assets'));

                if( followingVideos.find(video => video.videoPoster == '../'+currentVideoPoster) ) {

                    const currentVideo = followingVideos.find(video => video.videoPoster == '../'+currentVideoPoster);
                    currentVideo.isPlaying = !currentVideo.isPlaying;
                    event.target.setAttribute('data-video-is-playing', currentVideo.isPlaying);
                    if( event.target.getAttribute('data-video-is-playing') == 'true') {
                        this.playVideo(event.target);
                    } 
                    if(event.target.getAttribute('data-video-is-playing') == 'false') {
                        this.pauseVideo(event.target);
                    }

                    return currentVideo;
                }
                
            })
        })
    }

    playVideo(video) {
        video.play();
        this.currentVideoPlaying = video;
        this.currentPauseBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.pause');
        this.currentPlayBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.play');
        this.currentPauseBtn.classList.add('fadeOut');
        // this.currentPauseBtn.classList.remove('active');
        // this.currentPlayBtn.classList.add('active');
        this.currentPlayBtn.classList.add('fadeIn');
    }

    pauseVideo(video) {
        video.pause();
        this.currentVideoPaused = video;
        this.currentPlayBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.play');
        this.currentPauseBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.pause');
        this.currentPlayBtn.classList.add('fadeOut');
        // this.currentPlayBtn.classList.remove('active');
        // this.currentPauseBtn.classList.add('active');
        this.currentPauseBtn.classList.add('fadeIn');
    }

    togglePlayAndPauseBtns() {

    }

    onScroll(video) {

        const videoTop = video.getBoundingClientRect().top;
        window.addEventListener('scoll', event => {
            if( this.heightToPlayVideo <= this.windowHeight - videoTop ) {
                this.canPlayNow = true;
                this.retrieveElementsAndControlVideos();
                console.log('can now play current video');
            }
        })
    }

}

export default VideoPlayer;