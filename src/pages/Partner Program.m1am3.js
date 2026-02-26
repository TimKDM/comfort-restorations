// ─────────────────────────────────────────────────────────
// Partner Program Page — Wix Velo Page Code (Dev Mode)
// ─────────────────────────────────────────────────────────
// Paste this into the Partner Program page code in Wix
// Editor → Dev Mode → Page Code.
//
// HTML EMBED IDs (set in the Wix Editor Properties panel):
//   #htmlHero         — Hero section        (sends openPartnerForm)
//   #htmlPrizes       — Grand Prizes section
//   #htmlLeaderboard  — Leaderboard section
//   #htmlPerks        — Perks section
//   #htmlHowItWorks   — How It Works section (sends openPartnerForm)
//   #htmlFooter       — Footer section
// ─────────────────────────────────────────────────────────

import wixWindow from 'wix-window';

$w.onReady(function () {

    function openForm() {
        wixWindow.openLightbox('Partner Application');
    }

    // Section embeds and their public file paths
    const embeds = {
        '#htmlHero':        '/partnerEmbed-hero.html',
        '#htmlPrizes':      '/partnerEmbed-prizes.html',
        '#htmlLeaderboard': '/partnerEmbed-leaderboard.html',
        '#htmlPerks':       '/partnerEmbed-perks.html',
        '#htmlHowItWorks':  '/partnerEmbed-howItWorks.html',
        '#htmlFooter':      '/partnerEmbed-footer.html'
    };

    Object.keys(embeds).forEach((id) => {
        try {
            const el = $w(id);
            el.src = embeds[id];

            el.onMessage((event) => {
                if (event.data && event.data.type === 'openPartnerForm') {
                    openForm();
                }
            });
        } catch (e) { /* element not on page */ }
    });
});
