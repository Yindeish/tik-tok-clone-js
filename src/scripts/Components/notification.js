import Component from "./components.js";

class Notification extends Component {

    constructor(message) {
        super();
        this.message = message;
    }

    createNotification () {

        const DOMbodyElement = document.body;
        this.createElementsFor(DOMbodyElement, 'div', 'notification');
        let notificationElement = document.querySelector('.notification');

        notificationElement.textContent = this.message;

        this.showNotification(notificationElement);
        setTimeout(() => {
            this.closeNotification(notificationElement);
        }, 3000)
    }

    showNotification(element, showClass = 'fade-down', closeClass = 'fade-up') {
        element.classList.remove(closeClass);
        element.classList.add(showClass);
    }

    closeNotification(element, closeClass = 'fade-up', showClass = 'fade-down') {
        element.classList.remove(showClass);
        element.classList.add(closeClass);
    }
}

export default Notification;