import wixWindow from 'wix-window';

$w.onReady(function () {

    // ── Open the native "Partner Application" lightbox ──
    // Attach this to every "Apply Now" button on the page.
    // If your page only has one button, keep just the first line.

    const applyButtons = ['#buttonApply', '#buttonApply2', '#buttonApply3'];

    applyButtons.forEach((id) => {
        if ($w(id)) {
            $w(id).onClick(() => {
                wixWindow.openLightbox('Partner Application');
            });
        }
    });
});
