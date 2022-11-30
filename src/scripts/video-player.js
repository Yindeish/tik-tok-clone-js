import DomHelper from "./dom-helper.js";
import VideosGetter from "./video-getters.js";

class VideoPlayer {

    currentVideoPlaying = null;
    currentVideoPaused = null;

    currentPlayBtn = null;
    currentPauseBtn  = null;

    windowHeight = window.innerHeight;
    canPlayNow = false;
    heightToPlayVideo = 100;

    getVideos() {
        const videosGetter = new VideosGetter();
        videosGetter.run();
    }

    getVideosElements() {
        const gottenElements = new DomHelper().getElements();
        const videos = gottenElements.videos;
        const followingVideos = new VideosGetter().followingVideos;
        return {
            videos, 
            followingVideos
        }
    }

    controlVideos() {

        const { videos, followingVideos } = this.getVideosElements();

        videos.forEach(video => {
            video.addEventListener('click', event => {
                event.preventDefault();
                const currentVideoAlt = event.target.dataset.alt;
                if( followingVideos.find(video => video.videoAlt == currentVideoAlt) ) {

                    const currentVideo = followingVideos.find(video => video.videoAlt == currentVideoAlt);
                    currentVideo.isPlaying = !currentVideo.isPlaying;
                    event.target.setAttribute('data-video-is-playing', currentVideo.isPlaying);
                    if( event.target.getAttribute('data-video-is-playing') == 'true') {
                        this.playVideo(event.target);
                    } 
                    if(event.target.getAttribute('data-video-is-playing') == 'false') {
                        this.pauseVideo(event.target);
                    }
                } 
                
            })
        })

    }

    playVideo(video) {
        this.pauseOtherVideos(video);
        video.play();
        console.log('playing');
        this.currentVideoPlaying = video;
        this.currentPauseBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.pause');
        this.currentPlayBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.play');
        this.currentPauseBtn.classList.add('fadeOut');
        // this.currentPauseBtn.classList.remove('active');
        // this.currentPlayBtn.classList.add('active');
        this.currentPlayBtn.classList.add('fadeIn');
        // console.dir(video);
        console.log(this.currentVideoPlaying);
        return this.currentVideoPlaying;
    }

    pauseVideo(video) {
        video.pause();
        console.log('paused');
        this.currentVideoPaused = video;
        this.currentPlayBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.play');
        this.currentPauseBtn = video.parentElement.nextElementSibling.nextElementSibling.querySelector('.pause');
        this.currentPlayBtn.classList.add('fadeOut');
        // this.currentPlayBtn.classList.remove('active');
        // this.currentPauseBtn.classList.add('active');
        this.currentPauseBtn.classList.add('fadeIn');
        // console.dir(video);
        console.log(this.currentVideoPaused);

        return this.currentVideoPaused;
    }

    pauseOtherVideos(currentVideo) {
        const { videos } = this.getVideosElements();
        videos.forEach(video => {

            if( video != currentVideo ) {
                if( !(video.paused) ) {
                    this.pauseVideo(video);
                } 
            }
           
        })
    } 

    togglePlayAndPauseBtns() {

    }

    playFirstVideo() {
        const { videos, followingVideos } = this.getVideosElements();
        // videos[0].setAttribute('autoplay', true);
    }

    stopFirstVideo() {
        const { videos, followingVideos } = this.getVideosElements();
        videos[0].removeAttribute('autoplay');
    }

    onScroll() {   
        const { videos, followingVideos } = this.getVideosElements();
       
        videos.forEach(video => {

            let callback = (entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        this.playVideo(entry.target);
                    } else {
                        this.pauseVideo(entry.target);
                    }
                })
            }

            let observer = new IntersectionObserver(callback);
            observer.observe(video);
        })
    }

    run() {
        this.getVideos();
        this.controlVideos();
        this.onScroll();
    }

}

export default VideoPlayer;