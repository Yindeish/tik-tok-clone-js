import DomHelper from "./dom-helper.js";

class Component {

    retrieveElements() {
        this.getVideos();
        const gottenElements = DomHelper.gottenElements();
                
    }

    run(fn) {
        return fn;
    }
}

export default Component;