class DomHelper {
    mainElement = document.querySelector('main');
    videosDisplayScreen = document.querySelector('.videos-display-screen');
    videoBlocks = [...document.querySelectorAll('.video')];
    videos = [...document.querySelectorAll('video')];
    videoExtraControls = [...document.querySelectorAll('.extra-controls')];
    profileImageBtns = [...document.querySelectorAll('.profile-image-btn')]
    likeBtns = [...document.querySelectorAll('.like-btn')];
    unlikeBtns = [...document.querySelectorAll('.unlike-btn')];
    messageBtns = [...document.querySelectorAll('.message-btn')];
    shareBtns  = [...document.querySelectorAll('.share-btn')];
    videoBtns = [...document.querySelectorAll('.btns')];
    playBtns = [...document.querySelectorAll('.play')];
    pauseBtns = [...document.querySelectorAll('.pause')];
    footer = document.querySelector('footer');

    tabs = document.querySelector('.tabs');
    followingTab = document.querySelector('.following');
    forYouTab = document.querySelector('.for-you');

    getElements() {
        return {
            mainElement: this.mainElement,
            videosDisplayScreen: this.videosDisplayScreen, 
            videoBlocks: this.videoBlocks,
            videos: this.videos,
            videoBtns: this.videoBtns,
            videoExtraControls: this.videoExtraControls,
            profileImageBtns: this.profileImageBtns,
            likeBtns: this.likeBtns,
            unlikeBtns: this.unlikeBtns,
            messageBtns: this.messageBtns,
            shareBtns: this.shareBtns,
            playBtns: this.playBtns,
            pauseBtns: this.pauseBtns,
            tabs: this.tabs,
            followingTab: this.followingTab,
            forYouTab: this.forYouTab,
            footer: this.footer
        }
    }
}

export default DomHelper;