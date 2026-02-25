// ─────────────────────────────────────────────────────────
// Partner Program Page — Wix Velo Page Code
// ─────────────────────────────────────────────────────────
// Layout: The page is built with a mix of native Wix
// sections (Hero, Mid-CTA, Final CTA) and HTML embeds
// (Prizes, Leaderboard, Perks, How It Works).
//
// CTA buttons are native Wix buttons so they can call
// wixWindow.openLightbox() directly — no postMessage needed.
//
// NATIVE WIX ELEMENTS (set these IDs in the Wix Editor):
//   Hero section:
//     #buttonApply           — "Apply Now" hero button
//   Mid-page CTA section:
//     #buttonApplyMid        — "Apply Now" mid-page button
//   Final CTA section:
//     #buttonApplyFinal      — "Apply Now" final button
//     #buttonTerms           — "Terms & Conditions" button
//
// HTML EMBED ELEMENTS (set these IDs in the Wix Editor):
//   #htmlPrizes             — Grand Prizes embed
//   #htmlLeaderboard        — Leaderboard embed
//   #htmlPerks              — Perks embed
//   #htmlHowItWorks         — How It Works embed
//   #htmlFooter             — Footer info embed
// ─────────────────────────────────────────────────────────

import wixWindow from 'wix-window';

$w.onReady(function () {

    // ── Open Partner Application lightbox ──
    function openForm() {
        wixWindow.openLightbox('Partner Application');
    }

    // ── Hero CTA ──
    $w('#buttonApply').onClick(openForm);

    // ── Mid-page CTA ──
    try { $w('#buttonApplyMid').onClick(openForm); } catch (e) { /* not on page */ }

    // ── Final CTA ──
    try { $w('#buttonApplyFinal').onClick(openForm); } catch (e) { /* not on page */ }

    // ── Terms & Conditions — opens in a new tab ──
    try {
        $w('#buttonTerms').onClick(() => {
            wixWindow.openLightbox('Terms and Conditions');
        });
    } catch (e) { /* not on page */ }

    // ── Load HTML embeds from public files ──
    // Each embed is a self-contained content section with no CTA buttons.
    // The src is set here so if you rename files you only change one place.
    const embeds = {
        '#htmlPrizes': '/partnerEmbed-prizes.html',
        '#htmlLeaderboard': '/partnerEmbed-leaderboard.html',
        '#htmlPerks': '/partnerEmbed-perks.html',
        '#htmlHowItWorks': '/partnerEmbed-howItWorks.html',
        '#htmlFooter': '/partnerEmbed-footer.html'
    };

    Object.keys(embeds).forEach((id) => {
        try {
            $w(id).src = embeds[id];
        } catch (e) { /* embed not on page yet */ }
    });
});
