if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function() {
            console.log('service worker registriert')
        })
        .catch(
            err => { console.log(err); }
        );
}
    const installButton = document.getElementById('share-image-button');
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';

});
    installButton.addEventListener('click', (e) => {
    installButton.style.display = 'none';

    //Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
    .then((choiceResult) => {
    console.log(choiceResult.outcome);
    deferredPrompt = null;
});
});
