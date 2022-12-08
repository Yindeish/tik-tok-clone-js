class DomHelper {
    // Tab
    tabs = document.querySelector('.tabs');

    // Modal
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

    // Video Recorder
    videoRecordBlock = document.querySelector('.video-record');
    recordingVideoControls = document.querySelector('.recording-videos-controls');
    recordedVideoControls = document.querySelector('.recorded-videos-controls');
    recordingVideo = document.getElementById('recording-video');
    recordedVideo = document.getElementById('recorded-video');
    logElement = document.querySelector('#log');
    recordBtn = document.getElementById('record-video');
    stopRecord = document.getElementById('stop-record');
    playRecord = document.querySelector('.play-record');
    closeVideoRecorderBtn = document.querySelector('.close-video-recorder');
    soundBtn = document.querySelector('.sound-btn');
    flipBtn = document.querySelector('.flip-btn');
    effectsBtn = document.querySelector('.effects-btn');
    uploadBtn = document.querySelector('.upload-btn');
    markImage = document.querySelector('.mark-image');
    cancelImage = document.querySelector('.cancel-image');


    getElements() {
        return {
            tabs: this.tabs,

            // Modal
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

            // Video Recorder
            videoRecordBlock: this.videoRecordBlock,
            recordingVideoControls: this.recordingVideoControls,
            recordedVideoControls: this.recordedVideoControls,
            recordingVideo: this.recordingVideo,
            recordedVideo: this.recordedVideo,
            logElement: this.logElement,
            recordBtn: this.recordBtn,
            stopRecord: this.stopRecord,
            playRecord: this.playRecord,
            closeVideoRecorderBtn: this.closeVideoRecorderBtn,
            soundBtn: this.soundBtn,
            flipBtn: this.flipBtn,
            effectsBtn: this.effectsBtn,
            uploadBtn: this.uploadBtn,
            markImage: this.markImage,
            cancelImage: this.cancelImage
            
        }
    }
}

export default DomHelper;