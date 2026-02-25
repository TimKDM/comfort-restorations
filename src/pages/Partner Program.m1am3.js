import wixWindow from 'wix-window';

$w.onReady(function () {

    // ── Helper to open the lightbox ──
    function openForm() {
        wixWindow.openLightbox('Partner Application');
    }

    // ── Native Wix "Apply Now" buttons ──
    // Place up to 3 buttons on the page with these IDs.
    // If you only have one button, only #buttonApply is needed.
    ['#buttonApply', '#buttonApply2', '#buttonApply3'].forEach((id) => {
        try { $w(id).onClick(openForm); } catch (e) { /* element not on page */ }
    });

    // ── HTML embed message listener (backup) ──
    // If you embed the partner page HTML in an HtmlComponent,
    // clicking "Apply Now" inside it sends a postMessage.
    // This listens on every HtmlComponent on the page.
    ['#html1', '#html2', '#htmlEmbed'].forEach((id) => {
        try {
            $w(id).onMessage((event) => {
                if (event.data === 'openPartnerForm') {
                    openForm();
                }
            });
        } catch (e) { /* element not on page */ }
    });
});
