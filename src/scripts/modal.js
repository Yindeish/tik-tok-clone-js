import Component from "./components.js";
import DomHelper from './dom-helper.js';
import VideoHelper from "./video-helper.js";

class Modal extends Component {

    constructor(hook) {
        super();
        this.hook = hook;
    }

    getElements() {
        const { videoBlocks, messageModalElements } = new DomHelper().getElements();
        const { followingVideos } = new VideoHelper();
        

        return {
            videoBlocks,
            messageModalElements,

            followingVideos
        };
    }

    create(type, moveLimitHeight = 50) {
        const { followingVideos } = this.getElements();
        if ( type == 'message' ) {

            if( this.hook ) {
                const currentVideoBlock = this.hook.parentElement.parentElement.parentElement;
                const currentVideo = currentVideoBlock.querySelector('video');

                // Create the modal  div element
                this.createElementsFor(currentVideoBlock, 'div', 'comments-modal');
                const commentsModalElement = currentVideoBlock.querySelector('.comments-modal');

                // Create the contents for modal div element
                this.createElementsFor(commentsModalElement, null, null, 
                /*html*/
                `
                    <header class="comments-modal-header">
                        <h2>Comments </h2>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up push-btn" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </span>
                    </header>
                    <ul class="comments-modal-body"></ul>
                `
                );

                const currentVideoData = followingVideos.find(video => video.videoAlt == currentVideo.dataset.alt );
                const currentVideoComments = currentVideoData.videoExtraInfos.comments;
                
                for ( let comment of currentVideoComments ) {
                     
                    let commentsModalBody =  document.querySelector('.comments-modal-body');
                    this.createElementsFor(commentsModalBody, 'li', null, null);

                    const commentElements = [...commentsModalBody.querySelectorAll('li')];
                    commentElements.forEach(commentElement => {
                        this.createElementsFor(commentElement, null, 'comment', 
                        /*html*/ 
                        `
                            <div class="comment-header">
                                <span class="user-avatar"></span>
                                <span class="user-name">${comment.userName}</span>
                            </div>
                            <div class="comment-body">
                                ${comment.message}
                            </div>
                        `)

                    })
                }

                const pushBtn = currentVideoBlock.querySelector('.push-btn');
                this.push(pushBtn, commentsModalElement, 'moveUp');

                this.createElementsFor(commentsModalElement, 'span', 'modal-closer');
                const modalCloser = commentsModalElement.querySelector('.modal-closer');
                modalCloser.textContent = 'x';
                this.close(modalCloser, commentsModalElement);
                
            }
        }
        
    }

    push(btn = null, element, classToToggle) {

        if( btn ) {
            btn.addEventListener('click', event => {
                event.preventDefault();

                let rotation = 0;
                if( !element.classList.contains(classToToggle) ) rotation += 180;
                btn.style.transform = `rotate(${rotation}deg)`;

                element.classList.toggle(classToToggle);
            })
        } else {
            element.classList.toggle(classToToggle);
        }
    }

    close(btn = null, element, classToToggle = null) {

        if( btn ) {
            btn.addEventListener('click', event => {
                event.preventDefault();

                // element.style.height = '0px';
                // Close cancel btn
                btn.classList = '';
            })
        } else {
            element.classList = '';
        }
    }

    

    // I don't think i nned to move the modal by myself; Why can't it do itself?
    // moveModal(elementToMove, moveLimitHeight) {
    //     console.log(elementToMove);
    // }

   
}

export default Modal;