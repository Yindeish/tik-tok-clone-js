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
            videoRecordBlock,
            recordingVideoControls,
            recordedVideoControls,
            recordingVideo,
            recordedVideo,
            logElement,
            recordBtn,
            stopRecord,
            playRecord,
            closeVideoRecorderBtn,
            flipBtn,
            effectsBtn,
            uploadBtn,
            markImage,
            cancelImage
        } = new DomHelper().getElements();

        return {
            // Tab
            tabs,
            // Modal
            videosDisplayScreen, 
            videoBlocks,
            messageModalElements,
            // Video Recorder
            videoRecordBlock,
            recordingVideoControls,
            recordedVideoControls,
            recordingVideo,
            recordedVideo,
            logElement,
            recordBtn,
            stopRecord,
            playRecord,
            closeVideoRecorderBtn,
            flipBtn,
            effectsBtn,
            uploadBtn,
            markImage,
            cancelImage
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