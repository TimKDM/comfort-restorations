// ─────────────────────────────────────────────────────────
// Partner Program Page — Wix Velo Page Code
// ─────────────────────────────────────────────────────────
// Layout: The page is built with a mix of native Wix
// sections (Hero, Mid-CTA, Final CTA) and HTML embeds
// (Hero, Prizes, Leaderboard, Perks, How It Works, Footer).
//
// CTA buttons live both in native Wix elements and inside
// HTML embeds. Embed buttons use postMessage to request
// the lightbox; this controller listens via onMessage().
//
// NATIVE WIX ELEMENTS (set these IDs in the Wix Editor):
//   #buttonApply           — "Apply Now" hero button (optional)
//   #buttonApplyMid        — "Apply Now" mid-page button (optional)
//   #buttonApplyFinal      — "Apply Now" final button (optional)
//   #buttonTerms           — "Terms & Conditions" button (optional)
//
// HTML EMBED ELEMENTS (set these IDs in the Wix Editor):
//   #htmlPartnerPage         — Full-page Partner embed (Plumber_Partner_v7)
//   #htmlHero              — Hero embed (has Apply Now button)
//   #htmlPrizes            — Grand Prizes embed
//   #htmlLeaderboard       — Leaderboard embed
//   #htmlPerks             — Perks embed
//   #htmlHowItWorks        — How It Works embed (has Apply Now button)
//   #htmlFooter            — Footer info embed
// ─────────────────────────────────────────────────────────

import wixWindow from 'wix-window';

$w.onReady(function () {

    // ── Open Partner Application lightbox ──
    function openForm() {
        wixWindow.openLightbox('Partner Application');
    }

    // ── Native Wix CTA buttons (optional — kept for backwards compat) ──
    try { $w('#buttonApply').onClick(openForm); } catch (e) { /* not on page */ }
    try { $w('#buttonApplyMid').onClick(openForm); } catch (e) { /* not on page */ }
    try { $w('#buttonApplyFinal').onClick(openForm); } catch (e) { /* not on page */ }

    // ── Terms & Conditions ──
    try {
        $w('#buttonTerms').onClick(() => {
            wixWindow.openLightbox('Terms and Conditions');
        });
    } catch (e) { /* not on page */ }

    // ── Full-page embed: listen for CTA clicks ──
    try {
        $w('#htmlPartnerPage').onMessage((event) => {
            if (event.data && event.data.type === 'openPartnerForm') {
                openForm();
            }
        });
    } catch (e) { /* full-page embed not on page */ }

    // ── Load HTML embeds from public files ──
    const embeds = {
        '#htmlHero': '/partnerEmbed-hero.html',
        '#htmlPrizes': '/partnerEmbed-prizes.html',
        '#htmlLeaderboard': '/partnerEmbed-leaderboard.html',
        '#htmlPerks': '/partnerEmbed-perks.html',
        '#htmlHowItWorks': '/partnerEmbed-howItWorks.html',
        '#htmlFooter': '/partnerEmbed-footer.html'
    };

    Object.keys(embeds).forEach((id) => {
        try {
            const el = $w(id);
            el.src = embeds[id];

            // Listen for CTA clicks from inside the embed
            el.onMessage((event) => {
                if (event.data && event.data.type === 'openPartnerForm') {
                    openForm();
                }
            });
        } catch (e) { /* embed not on page yet */ }
    });
});
