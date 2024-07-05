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

document.addEventListener('click', event => {

    const toggleButton = event.target.closest('[data-element="profile-menu.toggle-button"]');
    if (!toggleButton) {
        return;
    }
    const profileMenu = document.querySelector('[data-component="profile-menu"]');
    if(!profileMenu) {
        return;
    }

    profileMenu.classList.toggle('OPEN');  
  
});
