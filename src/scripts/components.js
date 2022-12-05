import DomHelper from "./dom-helper.js";

class Component {

    getElements() {

        const { videosDisplayScreen , videoBlocks, messageModalElements, tabs} = new DomHelper().getElements();

        return {
            videosDisplayScreen, 
            videoBlocks,
            messageModalElements,
            tabs
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