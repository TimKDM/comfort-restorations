// ─────────────────────────────────────────────────────────
// Partner Program Page — Wix Velo Page Code (Dev Mode)
// ─────────────────────────────────────────────────────────
// Paste this into the Partner Program page code in Wix
// Editor → Dev Mode → Page Code.
//
// HTML EMBED IDs (Wix auto-assigns numbered IDs):
//   #html1  — Hero section
//   #html2  — Grand Prizes section
//   #html3  — Leaderboard section
//   #html4  — Perks section
//   #html5  — How It Works section
//   #html6  — Footer section
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
//        #html1  ~450px  (Hero)
//        #html2  ~950px  (Prizes — 3 cards stacked on mobile)
//        #html3  ~600px  (Leaderboard — table + note)
//        #html4  ~750px  (Perks — 4 cards stacked)
//        #html5  ~650px  (How It Works — 3 steps)
//        #html6  ~250px  (Footer — contact info)
//     3. Click Preview → open browser console (F12) to see
//        exact heights logged below, then fine-tune.
// ─────────────────────────────────────────────────────────

$w.onReady(function () {

    // Section embeds and their public file paths
    const embeds = {
        '#html1': '/partnerEmbed-hero.html',
        '#html2': '/partnerEmbed-prizes.html',
        '#html3': '/partnerEmbed-leaderboard.html',
        '#html4': '/partnerEmbed-perks.html',
        '#html5': '/partnerEmbed-howItWorks.html',
        '#html6': '/partnerEmbed-footer.html'
    };

    Object.keys(embeds).forEach((id) => {
        try {
            const el = $w(id);
            el.src = embeds[id];

            // Each embed reports its content height on load/resize.
            // Check browser console in Preview to get exact values,
            // then set the HtmlComponent height in the Editor to match.
            el.onMessage((event) => {
                if (event.data && event.data.type === 'setHeight') {
                    console.log(id + ' content height: ' + event.data.height + 'px');
                }
            });
        } catch (e) { /* element not on page */ }
    });
});
