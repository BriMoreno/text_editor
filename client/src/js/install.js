const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
towindow.addEventListener('beforeinstallprompt', (event) => {
    // storing the triggered event and removing the hidden class from the button
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }
    // show prompt and reset the deferredPrompt once
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear the prompt
    window.deferredPrompt = null;
    console.log('app installed', event);
});
