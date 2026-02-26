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
//
// FULL-HEIGHT MOBILE SETUP:
//   Wix doesn't support setting HtmlComponent height from
//   Velo code. Each embed reports its content height via
//   postMessage — the console.log below prints the real
//   value so you can set the right height in the Editor.
//
//   In the Wix Editor, for each HtmlComponent:
//     1. Click the embed → Settings → turn Scrolling OFF
//     2. Set the height (px) to at least these values:
//        #htmlHero         ~450px
//        #htmlPrizes       ~950px  (3 cards stacked on mobile)
//        #htmlHowItWorks   ~700px  (3 steps + Apply button)
//        #htmlPerks        ~750px  (4 cards stacked)
//        #htmlLeaderboard  ~600px  (table + note)
//        #htmlFooter       ~250px  (contact info)
//     3. Click Preview → open browser console (F12) to see
//        exact heights logged below, then fine-tune.
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
                if (!event.data) return;

                // "Apply Now" buttons inside hero & howItWorks embeds
                if (event.data.type === 'openPartnerForm') {
                    openForm();
                }

                // Each embed reports its content height on load/resize.
                // Check browser console in Preview to get exact values,
                // then set the HtmlComponent height in the Editor to match.
                if (event.data.type === 'setHeight') {
                    console.log(id + ' content height: ' + event.data.height + 'px');
                }
            });
        } catch (e) { /* element not on page */ }
    });
});
