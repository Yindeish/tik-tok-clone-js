import DomHelper from "../DOM/dom-helper.js";

class Component {

    getElements() {

        const { 
            // Tab
            tabs,
            // Modal
            videosDisplayScreen,
            videoBlocks,
            messageModalElements,
            // Video Recorder
            recordingVideo,
            recordedVideo,
            recordBtn,
            stopBtn,
            closeVideoRecorderBtn,
            flipBtn,
            effectsBtn,
            uploadBtn
        } = new DomHelper().getElements();

        return {
            // Tab
            tabs,
            // Modal
            videosDisplayScreen, 
            videoBlocks,
            messageModalElements,
            // Video Recorder
            recordingVideo,
            recordedVideo,
            recordBtn,
            stopBtn,
            closeVideoRecorderBtn,
            flipBtn,
            effectsBtn,
            uploadBtn
        };
    }

    createElementsFor(parentElement, tagName = null, className = null, innerCode = null) {

        if( innerCode && !tagName ) {
            parentElement.innerHTML = innerCode;
            if( className ) parentElement.classList.add(className);
        } 
        if( !innerCode &&  tagName ) {
            let element = document.createElement(tagName);
            if( className ) element.classList.add(className);
            parentElement.append(element);
        }


        return parentElement;
    }

}

export default Component;