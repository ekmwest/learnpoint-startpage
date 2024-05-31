document.addEventListener('click', event => {

    const toggleButton = event.target.closest('[data-element="notifications-popover.toggle-button"]');
    if (!toggleButton) {
        console.log("No button clicked")
        return;
    }
    console.log("Button clicked")
    const notificationsPopover = document.querySelector('[data-component="notifications-popover"]');
    if(!notificationsPopover) {
        return;
    }

    notificationsPopover.classList.toggle('OPEN');  
  
});
