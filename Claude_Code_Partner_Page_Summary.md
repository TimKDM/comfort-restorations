# Comfort Restorations — Preferred Partner Program Page
## Claude Code Implementation Summary

---

## Project Overview

Comfort Restorations (comfortrestorations.com) is building a **Preferred Partner Program** landing page to recruit plumber partners in Colorado Springs. The page is hosted on Wix and needs to be updated from an older multi-tier version to a simplified single-tier program based on business owner (Karl) feedback.

**Site platform:** Wix  
**GitHub repo:** Contains a commit of the current Wix site  
**Goal:** Replace the current Partner Program page content with the finalized v7 HTML

---

## Current State

The Partner Program page in Wix currently has a **webinar template** with placeholder content ("Start Lean", "Tamala Francis" speaker bio, etc.). None of the actual partner program content is live yet.

---

## What Needs to Be Implemented

### The Final HTML File

**File:** `Plumber_Partner_v7.html` (attached/in outputs)

This is the complete, ready-to-deploy landing page. It should be embedded into the Wix Partner Program page via an HTML embed widget. The page contains:

### Page Sections (in order)

1. **Hero** — "Earn $500 For Every Water Job You Refer"
   - Badge: "Plumbers Only — Limited Spots"
   - Subtitle: "$100 per lead · +$400 when it closes · Annual grand prizes up to $55K"
   - Apply Now button (triggers Wix Lightbox form)
   - Trust badges: Veteran-Owned, IICRC Certified, 24/7 Emergency Response

2. **Grand Prizes** — Podium layout (2nd | 1st elevated | 3rd)
   - 1st Place: Pick Your Truck — up to $55,000 (image: `0b5ede_1620fbd8f608439c84d8c9a76cfc51e6~mv2.avif`)
   - 2nd Place: ATV Package — up to $5,000 (image: `0b5ede_bbf9cf88cea348238e1c5ce3af8fbcbe~mv2.jpg`)
   - 3rd Place: Vacation Voucher — $3,000 (image: `0b5ede_aedc45ecd42545a8b0cbbdc0d2f2e575~mv2.webp`)
   - All images hosted on Wix static CDN
   - December 20th Partner Party and award reveal noted

3. **Mid-Page CTA** — "Ready to start competing? Spots are limited." + Apply Now

4. **Leaderboard** — Top 5 anonymous Partner #s with points
   - Updated every Friday
   - Cutoff: December 19th at midnight
   - Resets December 20th
   - Shows: Rank, Partner # (random, anonymous), Points
   - Note: "Your Partner # is private — only you know which one is yours."
   - **Placeholder data** (will be manually updated weekly by Karl's team):
     - #1: Partner #047 — 24 pts
     - #2: Partner #012 — 19 pts
     - #3: Partner #031 — 15 pts
     - #4: Partner #008 — 11 pts
     - #5: Partner #023 — 8 pts

5. **Preferred Partner Perks** — 2x2 grid of benefit cards
   - $500 Per Closed Job ($100 lead + $400 sale, paid via gift card Net 30)
   - Return Work Guaranteed (plumber gets called back for all recon/retail at that address)
   - Free Emergency Cleanup (plumber-caused losses cleaned free, 35% off reconstruction)
   - Annual Grand Prizes (every partner competes, Dec 20th reveal)

6. **How It Works** — 3 steps with arrows
   - Apply → Get Selected → Start Earning

7. **Final CTA** — "Ready to Start Earning?"
   - Apply Now button
   - Terms & Conditions button (links to PDF)
   - Contact: 719-439-0611 / partners@comfortrestorations.com

8. **Sticky Mobile CTA** — Fixed bottom bar on mobile, appears after scrolling past hero

### Terms & Conditions PDF
- URL: `https://0b5ede69-f747-4d23-bfff-5c32b2c63e71.usrfiles.com/ugd/0b5ede_9b57ba2b0c734e409efb36883b99fea7.pdf`
- Linked in two places: outline button in final CTA section, and text link in form area
- Karl has already drafted a comprehensive T&C document covering eligibility, compensation, leaderboard rules, grand prize details, plumber-caused loss benefit, and program removal/enforcement

---

## Form Integration

The HTML does NOT contain a built-in form. All "Apply Now" buttons use:

```javascript
window.parent.postMessage('openPartnerForm', '*')
```

This sends a message to the parent Wix page, which should open a **Wix Lightbox** named:

**`Preferred Partner Program Application`**

### Wix Page Code (Dev Mode)

Add this to the Partner Program page code:

```javascript
import wixWindow from 'wix-window';

$w.onReady(function () {
    $w('#html1').onMessage((event) => {
        if (event.data === 'openPartnerForm') {
            wixWindow.openLightbox('Preferred Partner Program Application');
        }
    });
});
```

- `#html1` = the HTML embed widget ID (verify in Wix editor Properties panel)
- Lightbox name must match exactly: `Preferred Partner Program Application`

### Form Fields (in the Wix Lightbox)

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Phone Number | Phone | Yes |
| Company Name | Text | Yes |
| Position | Dropdown: Owner, Manager, Lead Technician, Technician, Other | Yes |

### Post-Submission

- Automated thank you email (built in Wix Automations)
- Internal notification to Karl
- Submissions go to Wix CRM
- Karl's team does qualifying phone calls within 48 hours
- If qualified: welcome email with Partner #, T&C, rules, details

---

## Brand & Design Specs

### Colors
- Gold: `#CFA054`
- Gold Light: `#DAAD64`
- Gold Dark: `#B8893D`
- Black: `#1a1a1a`
- Black Light: `#242424`
- Light BG: `#f5f5f3`

### Typography
- Font: Montserrat (Google Fonts)
- Weights: 400, 500, 600, 700, 800

### Layout Pattern
- Alternating dark/light strips
- Max content width: 980px
- Strip padding: 80px vertical, 40px horizontal

---

## Wix-Specific Configuration

### Page Settings
- **Page URL:** `/plumber-partners` (or whatever the current Partner Program page slug is)
- **Page Title:** `Preferred Partner Program | Comfort Restorations Colorado Springs`
- **Meta Description:** `Join Comfort Restorations' Preferred Partner Program. Earn $500 per closed job, free emergency cleanup, and compete for annual grand prizes up to $55K. Colorado Springs plumbers apply now.`
- **Page Visibility:** Hidden from site navigation (unlisted) — QR code is the only access point

### HTML Embed Widget
- Full-width embed containing the v7 HTML
- Set height to ~4500-5500px (adjust until no scrollbar)
- Disable "Allow scrolling" in widget settings

---

## Key Business Rules (for context, NOT shown on the page)

These are internal rules Karl defined. They are NOT on the landing page — they come via email after qualification:

- $100 per lead where Comfort has opportunity to earn the job
- Must speak to plumber AND homeowner, get property authorization
- Must physically inspect on-site
- Must be exclusive lead — Comfort is first restoration company dispatched
- Multiple companies referred = automatic program suspension
- +$400 if mitigation contract signed (minimum $1,500 contract value)
- Leaderboard: 1 pt per customer per insurance loss, +1 bonus for reconstruction, max 2 per loss
- Payments: gift card, Net 30 from date of sale
- Free cleanup: max 3 per calendar year, must notify within 1 hour, abuse = removal
- Grand prizes: 1st place requires $75,000 minimum signed mitigation revenue

---

## What Was Explicitly Removed from Earlier Versions

- ❌ Four-tier system (Registered, Growth, Power, Elite) — replaced with single "Preferred Partner" level
- ❌ Monthly bonuses — eliminated
- ❌ Company names on leaderboard — replaced with anonymous Partner #s
- ❌ YTD dollar amounts on leaderboard — replaced with points only
- ❌ Built-in HTML form — replaced with Wix Lightbox form
- ❌ Unsplash stock images — replaced with Wix-hosted images

---

## Files

| File | Purpose |
|------|---------|
| `Plumber_Partner_v7.html` | Final landing page HTML — embed this in Wix |
| `Partner_Application_Form.html` | Standalone form (backup if Wix Lightbox doesn't work) |
| `Partner_Thank_You_Email.html` | Automated confirmation email template |
| `Plumber_Partner_Wix_Embed_Setup_Guide.md` | Step-by-step Wix implementation guide |

---

## Iteration History

| Version | Key Changes |
|---------|-------------|
| v4 | Original multi-tier page with complex form |
| v5 | Earned status tier language, podium prizes, hero improvements, leaderboard trimmed to 5 |
| v6 | Karl's feedback: single tier, new pay structure, ATV/vacation prizes, anonymous leaderboard, simplified form — full redesign |
| v7 | **Final** — v5 design style + v6 content. Wix images, T&C button, postMessage form integration. This is the version to deploy. |
