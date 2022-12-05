import DomHelper from "../DOM/dom-helper.js";
import VideosGetter from "./video-getters.js";
import Modal from '../Components/modal.js';
import UserInfo from "../Auth/user-info.js";
import Component from "../Components/components.js";

class VideoPlayer {

    constructor(videoType) {
        this.videoType = videoType;
    }

    currentVideoPlaying = null;
    currentVideoPaused = null;

    currentPlayBtn = null;
    currentPauseBtn = null;

    getSignedInUser() {
        const user = new UserInfo();
        const userInfos = user.getInfos();

        return userInfos;
    }

    getVideos() {
        const videosGetter = new VideosGetter();
        videosGetter.run(this.videoType);

        // Checking if an image is followed and updating the UI
        const { videoBlocks } = this.getVideosElements();
        videoBlocks.forEach(videoBlock => {
            if ( videoBlock.querySelector('video').dataset.isFollowed == 'true' ) {
                videoBlock.querySelector('.follow-btn').classList.remove('active');
                videoBlock.querySelector('.unfollow-btn').classList.add('active');
            } else {
                if( !videoBlock.querySelector('.follow-btn').classList.contains('active') ) videoBlock.querySelector('.follow-btn').classList.add('active');
                videoBlock.querySelector('.unfollow-btn').classList.remove('active');
            }
        })
    }

    getVideosElements() {
        const gottenElements = new DomHelper().getElements();
        const { 
            videoBlocks,
            videos,

            videoBtns,
            playBtns,
            pauseBtns,

            videoExtraControls,
            profileImageBtns,
            followBtns,
            unfollowBtns,

            likeBtns,
            unlikeBtns,
            messageBtns,
            shareBtns
        } = gottenElements;
        return {
            videoBlocks,
            videos, 

            videoBtns,
            playBtns,
            pauseBtns,
            
            videoExtraControls,
            profileImageBtns,
            followBtns,
            unfollowBtns,
            likeBtns,
            unlikeBtns,
            messageBtns,
            shareBtns,
            videoBtns,
        }
    }

    controlVideos() {

        const { videos } = this.getVideosElements();

        videos.forEach(video => {
            video.addEventListener('click', event => {
                event.preventDefault();
                const currentVideoAlt = event.target.dataset.alt;
                if( this.videoType.find(video => video.videoAlt == currentVideoAlt) ) {

                    const currentVideo = this.videoType.find(video => video.videoAlt == currentVideoAlt);
                    currentVideo.isPlaying = !currentVideo.isPlaying;
                    
                    event.target.dataset.isPlaying = currentVideo.isPlaying;
                    if( event.target.dataset.isPlaying == 'true') {
                        this.playVideo(event.target);
                    } 
                    if( event.target.dataset.isPlaying == 'false') {
                        this.pauseVideo(event.target);
                    }

                } 
                
            })
        })

    }

    playVideo(video) {
        this.pauseOtherVideos(video);
        this.togglePlayAndPauseBtns(video);
        video.play();
        this.currentVideoPlaying = video;
       
        return this.currentVideoPlaying;
    }

    pauseVideo(video) {
        this.togglePlayAndPauseBtns(video);
        video.pause();
        this.currentVideoPaused = video;
       
        return this.currentVideoPaused;
    }

    pauseOtherVideos(currentVideo) {
        const { videos } = this.getVideosElements();
        videos.forEach(video => {

            if( video != currentVideo || video != this.currentVideoPlaying ) {
                if( !video.paused ) {
                    this.pauseVideo(video);
                } 
            }
        })
    } 

    runVideoClickEventsForSomeOtherElements() {
        const { videoExtraControls, videoBtns } = this.getVideosElements();

        // Run video click for extra control as it lays on video and preventing its click event 
        videoExtraControls.forEach(videoExtraControl => {
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        entry.target.addEventListener('click', () => {
                            const currentVideoPlaying = entry.target.previousElementSibling.querySelector('video');
                            if( currentVideoPlaying.paused ) {
                                this.playVideo(currentVideoPlaying);
                            } else {
                                this.pauseVideo(currentVideoPlaying);
                            }
                        })
                    }
                })
            }, {
                threshold: 1
            });

            observer.observe(videoExtraControl);
        })
        // Run video click for play and pause btns as they lay on video and preventing its click event 

        videoBtns.forEach(videoBtn => {
        
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        entry.target.addEventListener('click', () => {
                            const currentVideoPlaying = entry.target.parentElement.querySelector('video');
                            if( currentVideoPlaying.paused ) {
                                this.playVideo(currentVideoPlaying);
                            } else {
                                this.pauseVideo(currentVideoPlaying);
                            }
                        })
                    }
                })
            }, {
                threshold: 1
            });

            observer.observe(videoBtn);
        })

    }

    togglePlayAndPauseBtns(currentVideo) {
        const currentVideoBtn = currentVideo.parentElement.nextElementSibling.nextElementSibling;

        const currentPlayBtn = currentVideo.parentElement.nextElementSibling.nextElementSibling.querySelector('.play');
        const currentPauseBtn = currentVideo.parentElement.nextElementSibling.nextElementSibling.querySelector('.pause');

        currentVideoBtn.classList.add('active');
        if( currentVideo.paused ) {
            currentPauseBtn.classList.remove('fadeIn');
            currentPauseBtn.classList.add('fadeOut');
            currentPlayBtn.classList.remove('fadeOut');
            currentPlayBtn.classList.add('fadeIn');
        } else {
            currentPlayBtn.classList.remove('fadeIn');
            currentPlayBtn.classList.add('fadeOut');
            currentPauseBtn.classList.remove('fadeOut');
            currentPauseBtn.classList.add('fadeIn');
        }

        setTimeout(() => {
            currentVideoBtn.classList.remove('active');
        }, 2000);
        currentVideoBtn.classList.add('active');
    }

    playFirstVideo() {
        const { videos } = this.getVideosElements();
        videos[0].setAttribute('autoplay', 'true');
    }

    onScroll() {   
        const { videos } = this.getVideosElements();
       
        videos.forEach(video => {
            let options = {
                threshold: 1,
            }
            let callback = (entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        this.playVideo(entry.target);
                    } else {
                        this.pauseVideo(entry.target);
                    }
                })
            }

            let observer = new IntersectionObserver(callback, options);
            observer.observe(video);
        })
    }

    likeVideo() {
        const { likeBtns } = this.getVideosElements();
        likeBtns.forEach(likeBtn => {
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        entry.target.addEventListener('click', event => {
                            event.stopImmediatePropagation();

                            const likeSound = new Audio('../../assets/audios/zapsplat_cartoon_bubble_001_46810.mp3');
                            likeSound.play();

                            const likeBtnSvg = event.target.closest('svg');
                            const unlikeBtnSvg = likeBtnSvg.nextElementSibling;

                            likeBtnSvg.classList.remove('active');
                            unlikeBtnSvg.classList.add('active');

                            const currentVideo = likeBtnSvg.parentElement.parentElement.previousElementSibling.querySelector('video');
                            const currentVideoData = this.videoType.find(video => currentVideo.dataset.alt == video.videoAlt);
                            let currentVideoLikes = currentVideoData.videoExtraInfos.likes;
                            const currentVideoLikesHolder = unlikeBtnSvg.nextElementSibling;
                            currentVideoLikesHolder.textContent = currentVideoLikes;
                            
                            if( unlikeBtnSvg.classList.contains('active') ) {
                                currentVideoLikes++;
                                currentVideoData.videoExtraInfos = {...currentVideoData.videoExtraInfos, currentVideoLikes};
                                currentVideoLikesHolder.textContent = currentVideoData.videoExtraInfos.currentVideoLikes;

                                // this.sendInfo();
                            } else {
                                currentVideoLikesHolder.textContent = currentVideoLikes;
                            }
                        })
                    }
                })
            }, {
                threshold: 1
            });

            observer.observe(likeBtn);
        })
    }

    unlikeVideo() {
        const { unlikeBtns } = this.getVideosElements();
        unlikeBtns.forEach(unlikeBtn => {
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        entry.target.addEventListener('click', event => {
                            event.stopImmediatePropagation();

                            const unlikeSound = new Audio('../../assets/audios/zapsplat_cartoon_bubble_pop_003_40275.mp3');
                            unlikeSound.play();

                            const unlikeBtnSvg = event.target.closest('svg');
                            const likeBtnSvg = unlikeBtnSvg.previousElementSibling;

                            unlikeBtnSvg.classList.remove('active');
                            likeBtnSvg.classList.add('active');

                            const currentVideo = likeBtnSvg.parentElement.parentElement.previousElementSibling.querySelector('video');
                            const currentVideoData = this.videoType.find(video => currentVideo.dataset.alt == video.videoAlt);
                            let currentVideoLikes = currentVideoData.videoExtraInfos.likes;
                            const currentVideoLikesHolder = unlikeBtnSvg.nextElementSibling;
                            currentVideoLikesHolder.textContent = currentVideoLikes;
                            
                            if( likeBtnSvg.classList.contains('active') ) {
                                currentVideoLikesHolder.textContent = currentVideoLikes;

                                // this.sendInfo();
                            } else {
                                currentVideoLikesHolder.textContent = currentVideoLikes;
                            }
                        })
                    }
                })
            }, {
                threshold: 1
            });

            observer.observe(unlikeBtn);
        })
    }

    getComments() {

    }

    sendComment(hook) {
        const { userName, userAvatar } = this.getSignedInUser();

        const currentMessageElement = hook;
        const hookParent = currentMessageElement.parentElement.parentElement.parentElement;
        const hookVideo = hookParent.querySelector('video');

        const currentVideoData = this.videoType.find(video => video.videoAlt == hookVideo.dataset.alt)
        const currentVideoComments = currentVideoData.videoExtraInfos.comments;
        const message = currentMessageElement.value;
        currentVideoComments.push({
            userName,
            message
        })

        // Updating the message count
        const messageCountElement = hookParent.querySelector('.message-count');
        messageCountElement.textContent = currentVideoComments.length;

        const elementCreator = new Component();
        const commentsModalBody = hookParent.querySelector('.comments-modal-body');
        // Create the new comment element
        elementCreator.createElementsFor(commentsModalBody, 'li', 'comment');
        // Differentiating the new comment element
        commentsModalBody.querySelector('.comment:last-child').classList.add('new-comment');
        const newComment = commentsModalBody.querySelector('.new-comment');
        // Create the contents for new comment element
        elementCreator.createElementsFor(newComment, null, null, 
            /*html*/
            `
                <div class="comment-header">
                    <span class="user-avatar">
                        <img src="${userAvatar}">
                    </span>
                    <span class="user-name">${userName}</span>
                </div>
                <div class="comment-body">
                    ${message}
                </div>
                
            `
        );
        
        currentMessageElement.value = '';

    }

    commentOnVideo() {
        const { messageBtns } = this.getVideosElements();
        messageBtns.forEach(messageBtn => {
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        entry.target.addEventListener('click', event => {
                            event.stopImmediatePropagation();

                            const messageSound  = new Audio('../../assets/audios/zapsplat_cartoon_bubble_pop_003_40275.mp3');
                            messageSound.play();

                            const messageBtnSvg = event.target.closest('svg');

                            if( !messageBtnSvg.parentElement.parentElement.parentElement.querySelector('.comments-modal') ) {
                                const messageModal  = new Modal(messageBtnSvg);
                                messageModal.run('message-modal', this.videoType);

                                const sendCommentBtn = messageBtnSvg.parentElement.parentElement.parentElement.querySelector('.comments-modal').querySelector('.send-comment');
                                const messageElement = sendCommentBtn.nextElementSibling;

                                sendCommentBtn.addEventListener('click', () => this.sendComment(messageElement));

                            } else {
                                return ;
                            }

                        })
                    }
                })
            })


            observer.observe(messageBtn);
        })
    }

    followCreator(hook) {
        const unfollowSound = new Audio('../../assets/audios/zapsplat_cartoon_bubbles_005_26520.mp3');
        unfollowSound.play();

        const { userName, userAvatar, userFollowers } = this.getSignedInUser();

        hook.push({
            name: userName,
            followers: userFollowers,
            picture: userAvatar
        });

        // this.sendInfo(followCount);
    }

    unfollowCreator(hook) {
        const followSound = new Audio('../../assets/audios/zapsplat_cartoon_bubble_pop_006_40278.mp3');
        followSound.play();

        hook.pop();

        // this.deleteInfo(followCount);
    }

    toggleFollow() {
        const { profileImageBtns } = this.getVideosElements();
        profileImageBtns.forEach(profileImageBtn => {
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if( entry.isIntersecting ) {
                        entry.target.addEventListener('click', event => {
                            event.stopImmediatePropagation();

                            const creatorProfileBtn = event.target.closest('span');
                            const creatorFollowBtn = creatorProfileBtn.querySelector('.follow-btn');
                            const creatorUnfollowBtn = creatorProfileBtn.querySelector('.unfollow-btn');

                            creatorFollowBtn.classList.toggle('active');
                            creatorUnfollowBtn.classList.toggle('active');

                            const currentVideo = creatorProfileBtn.parentElement.parentElement.parentElement.querySelector('video');

                            const currentVideoData = this.videoType.find(video => video.videoAlt == currentVideo.dataset.alt);                           
                            const currentVideoCreatorFollowers = currentVideoData.creator.followers;

                            if ( !creatorFollowBtn.classList.contains('active') ) {
                                this.followCreator(currentVideoCreatorFollowers);
                            }
                            else {
                               this.unfollowCreator(currentVideoCreatorFollowers);
                            }

                            // Updating the creator followers count
                            const currentCreatorFollowersCount = creatorProfileBtn.parentElement.parentElement.querySelector('.followers-count');
                            currentCreatorFollowersCount.textContent = currentVideoCreatorFollowers.length;
                        })
                    }
                })
            }, {
                threshold: 1
            });

            observer.observe(profileImageBtn);
        })
    }

    run() {
        this.getVideos();
        this.playFirstVideo();
        this.controlVideos();
        this.runVideoClickEventsForSomeOtherElements();
        this.onScroll();
        this.likeVideo();
        this.unlikeVideo();
        this.commentOnVideo();
        this.toggleFollow();
    }

}

export default VideoPlayer;
