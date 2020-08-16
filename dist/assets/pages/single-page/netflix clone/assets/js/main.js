const tabItems = document.querySelectorAll('.tabs--item');
const tabContentItems = document.querySelectorAll('.tab--content');


//selct tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border')

    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));