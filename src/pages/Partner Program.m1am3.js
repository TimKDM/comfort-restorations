import wixWindow from 'wix-window';

$w.onReady(function () {
    $w('#html1').onMessage((event) => {
        if (event.data === 'openPartnerForm') {
            wixWindow.openLightbox('Preferred Partner Program Application');
        }
    });
});