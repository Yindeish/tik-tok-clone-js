class DomHelper {
    mainElement = document.querySelector('main');
    videosDisplayScreen = document.querySelector('.videos-display-screen');
    videoBlocks = [...document.querySelectorAll('.video')];
    videos = [...document.querySelectorAll('video')];
    videoBtns = [...document.querySelectorAll('.btns')];
    playBtns = [...document.querySelectorAll('.play')];
    pauseBtns = [...document.querySelectorAll('.pause')];

    tabs = document.querySelector('.tabs');
    followingTab = document.querySelector('.following');
    forYouTab = document.querySelector('.for-you');

    getElements() {
        console.log('get elements in dom helper');
        return {
            mainElement: this.mainElement,
            videosDisplayScreen: this.videosDisplayScreen, 
            videoBlocks: this.videoBlocks,
            videos: this.videos,
            videoBtns: this.videoBtns,
            playBtns: this.playBtns,
            pauseBtns: this.pauseBtns,
            tabs: this.tabs,
            followingTab: this.followingTab,
            forYouTab: this.forYouTab
        }
    }
}

export default DomHelper;