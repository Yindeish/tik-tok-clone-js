class DomHelper {
    tabs = document.querySelector('.tabs');

    mainElement = document.querySelector('main');
    videosDisplayScreen = document.querySelector('.videos-display-screen');

    videoBlocks = [...document.querySelectorAll('.video')];
    videos = [...document.querySelectorAll('video')];

    videoExtraControls = [...document.querySelectorAll('.extra-controls')];
    profileImageBtns = [...document.querySelectorAll('.profile-image-btn')];
    followBtns = [...document.querySelectorAll('.follow-btn')];
    unfollowBtns = [...document.querySelectorAll('.unfollow-btn')];
    likeBtns = [...document.querySelectorAll('.like-btn')];
    unlikeBtns = [...document.querySelectorAll('.unlike-btn')];
    messageBtns = [...document.querySelectorAll('.message-btn')];
    shareBtns  = [...document.querySelectorAll('.share-btn')];

    videoBtns = [...document.querySelectorAll('.btns')];
    playBtns = [...document.querySelectorAll('.play')];
    pauseBtns = [...document.querySelectorAll('.pause')];

    messageModalElements = [...document.querySelectorAll('.comments-modal')];

    footer = document.querySelector('footer');

    followingTab = document.querySelector('.following');
    forYouTab = document.querySelector('.for-you');

    getElements() {
        return {
            tabs: this.tabs,

            mainElement: this.mainElement,
            videosDisplayScreen: this.videosDisplayScreen, 

            videoBlocks: this.videoBlocks,
            videos: this.videos,

            videoBtns: this.videoBtns,
            playBtns: this.playBtns,
            pauseBtns: this.pauseBtns,

            videoExtraControls: this.videoExtraControls,
            profileImageBtns: this.profileImageBtns,
            followBtns: this.followBtns,
            unfollowBtns: this.unfollowBtns,
            likeBtns: this.likeBtns,
            unlikeBtns: this.unlikeBtns,
            messageBtns: this.messageBtns,
            shareBtns: this.shareBtns,
            playBtns: this.playBtns,
            pauseBtns: this.pauseBtns,

            messageModalElements: this.messageModalElements,

            footer: this.footer, 
            
            followingTab: this.followingTab,
            forYouTab: this.forYouTab,
            
        }
    }
}

export default DomHelper;