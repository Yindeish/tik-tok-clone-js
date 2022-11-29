import VideoPlayer from './video-player.js';
// import Tab  from './tabs.js';


class VideoApp {
    static controlVideos() {
        console.log('control videos in video app');
        const videosPlayer = new VideoPlayer();
        videosPlayer.retrieveElementsAndControlVideos();
    }
}

VideoApp.controlVideos();


class FunctionalitiesApp {
    static init () {
        console.log('init in functionalities app');
        // const tab = new Tab();
        // const switchTabs = tab.swichTabs();
        // tab.run(switchTabs);
    }
}

// FunctionalitiesApp.init();

