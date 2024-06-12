document.addEventListener('click', event => {

    const toggleButton = event.target.closest('[data-element="notifications-popover.toggle-button"]');
    if (!toggleButton) {
        return;
    }
    
    const notificationsPopover = document.querySelector('[data-component="notifications-popover"]');
    if(!notificationsPopover) {
        return;
    }

    notificationsPopover.classList.toggle('OPEN');  
  
});
