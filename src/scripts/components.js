import DomHelper from "./dom-helper.js";

class Component {

    retrieveElements() {
        this.getVideos();
        const gottenElements = DomHelper.gottenElements();
                
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

    

    run(fn) {
        return fn;
    }
}

export default Component;