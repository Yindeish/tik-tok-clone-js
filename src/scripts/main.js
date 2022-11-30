import VideoPlayer from './video-player.js';
// import Tab  from './tabs.js';


class VideoApp {
    static controlVideos() {
        const videosPlayer = new VideoPlayer();
        // videosPlayer.retrieveElementsAndControlVideos();
        // videosPlayer.onScroll();
        videosPlayer.run();
    }
}

VideoApp.controlVideos();


class FunctionalitiesApp {
    static init () {
        // const tab = new Tab();
        // const switchTabs = tab.swichTabs();
        // tab.run(switchTabs);
    }
}

// FunctionalitiesApp.init();

