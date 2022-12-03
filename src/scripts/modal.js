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

    createModal(type) {
        const { followingVideos } = this.getElements();
        if ( type == 'message-modal' ) {

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
                    <div class="add-comment">
                        <button class="send-comment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                        </button>
                        <textarea class="message" placeholder="Add your own comment"></textarea>
                    </div>
                `
                );

                const currentVideoData = followingVideos.find(video => video.videoAlt == currentVideo.dataset.alt );
                const currentVideoComments = currentVideoData.videoExtraInfos.comments;
                
                for ( let comment of currentVideoComments ) {
                     
                    // Create the modal  li element
                    let commentsModalBody =  document.querySelector('.comments-modal-body');
                    this.createElementsFor(commentsModalBody, 'li', null, null);

                    // Create the li's contents
                    const commentElements = [...commentsModalBody.querySelectorAll('li')];
                    commentElements.forEach(commentElement => {
                        this.createElementsFor(commentElement, null, 'comment', 
                        /*html*/ 
                        `
                            <div class="comment-header">
                                <span class="user-avatar">
                                    <img src="${comment.avatar}">
                                </span>
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

                // Create Modal close btn
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

                element.parentElement.removeChild(element);

                // Close cancel btn
                btn.classList = '';
            })
        } else {
            element.classList = '';
        }
    }

    run(type) {
        this.createModal(type);
    }
   
}

export default Modal;