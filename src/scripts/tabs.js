import DomHelper from './dom-helper.js';
import Component from './components.js';

class Tabs extends Component {
    
    constructor() {
        super()
    }

    swichTabs() {
        console.log('switch tabs in tabs');
        // Getting Tab Navigaotrs
        const gottenElements = new DomHelper().getElements();
        const tabs = gottenElements.tabs;
        const tabNavigators = [...tabs.children];

        // Switching Tabs
        tabNavigators.forEach(tabNavigator => {
            tabNavigator.addEventListener('click', event => {
                tabNavigators.forEach(tabNavigator => tabNavigator.classList.remove('active'));
                event.currentTarget.classList.add('active');
            })
        })
    }
}

export default Tabs;