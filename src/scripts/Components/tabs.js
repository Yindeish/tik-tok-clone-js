import Component from './components.js';
import VideoHelper from '../Videos/video-helper.js';
import VideoPlayer from '../Videos/video-player.js';

class Tabs extends Component {
    
    activeView = 'for you';
    constructor() {
        super()
    }

    switchTab(tab) {
        tab.addEventListener('click', event => {

            // --------For vue referrence
            // const activeTab =  event.target.closest('.tabs').querySelector('div:not(.active)');
            // const previousTab = document.querySelector('.tabs .tab.active');

             // previousTab.classList.remove('active');
            // activeTab.classList.add('active');

            // --------For vue referrence

            const activeTab = document.querySelector('.tabs .tab.active');

            this.activeView = this.getView(activeTab);

            if ( this.activeView == 'for you' ) {
                this.controlForYouVideos();
            } 
            if( this.activeView == 'following') {
                this.controlFollowingVideos();
            }

        })
    }

    getView(currentTab) {
        return currentTab.querySelector('h3').textContent;
    }

    controlFollowingVideos() {

        const { videoBlocks, videosDisplayScreen } = this.getElements();

        const { videos }  = new VideoHelper();

        const followingVideos = videos.filter(video => {
            return video.isFollowed == true;
        });

        const videosPlayer = new VideoPlayer(followingVideos);
        videosPlayer.run();

        videoBlocks.forEach(videoBlock => {
            
            this.removeForYouVideos(videoBlock, videosDisplayScreen);
            
        })
    }

    controlForYouVideos() {

        const { videoBlocks, videosDisplayScreen } = this.getElements();

        const { videos }  = new VideoHelper();

        const forYouVideos = videos.filter(video => {
            return video.isFollowed == false;
        });

        const videosPlayer = new VideoPlayer(forYouVideos);
        videosPlayer.run();

        videoBlocks.forEach(videoBlock => {
            
            this.removeFollowingVideos(videoBlock, videosDisplayScreen);
            
        })
    }
    
    removeForYouVideos(videoBlock, displayScreen) {

        if ( videoBlock.querySelector('.follow-btn.active') ) {

            displayScreen.removeChild(videoBlock);

        }
        else {
            return;
        }
    }

    removeFollowingVideos(videoBlock, displayScreen) {

        if ( videoBlock.querySelector('.unfollow-btn.active') ) {

            displayScreen.removeChild(videoBlock);

        }
        else {
            return;
        }
    }

    run() {

        const activeTab = document.querySelector('.tabs .tab.active');

        this.activeView = this.getView(activeTab);

        if ( this.activeView == 'for you' ) {
            this.controlForYouVideos();
        } 
        if( this.activeView == 'following') {
            this.controlFollowingVideos();
        }

    }
}

export default Tabs;