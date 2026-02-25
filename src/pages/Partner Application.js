// ─────────────────────────────────────────────────────────
// Partner Application Lightbox — Wix Velo Page Code
// ─────────────────────────────────────────────────────────
// This is a native Wix Lightbox. No HTML embed needed.
// All inputs are native Wix elements wired directly to
// the backend — no postMessage relay.
//
// ELEMENT IDS REQUIRED (set these in the Wix Editor):
//   Text Inputs:  #inputFirstName, #inputLastName,
//                 #inputCompany, #inputPhone, #inputEmail,
//                 #inputAddress, #inputYears
//   Radio Groups: #radioApplyingAs, #radioAuthorized,
//                 #radioW9, #radioExclusive
//   Dropdown:     #dropdownVolume
//   Checkbox:     #checkboxAcknowledge
//   Buttons:      #buttonSubmit, #buttonClose
//   Text:         #textError, #textSuccess
//   Boxes:        #boxForm, #boxSuccess
// ─────────────────────────────────────────────────────────

import { submitPartnerApplication } from 'backend/partnerSubmit.jsw';
import wixWindow from 'wix-window';

$w.onReady(function () {

    // --- Hide status messages on load ---
    $w('#textError').hide();
    $w('#textSuccess').hide();
    $w('#boxSuccess').hide();

    // --- Close button ---
    $w('#buttonClose').onClick(() => {
        wixWindow.lightbox.close();
    });

    // --- Submit handler ---
    $w('#buttonSubmit').onClick(() => {

        // Collect values
        const firstName = $w('#inputFirstName').value.trim();
        const lastName = $w('#inputLastName').value.trim();
        const companyName = $w('#inputCompany').value.trim();
        const applyingAs = $w('#radioApplyingAs').value;
        const phone = $w('#inputPhone').value.trim();
        const email = $w('#inputEmail').value.trim();
        const address = $w('#inputAddress').value.trim();
        const industryYears = $w('#inputYears').value.trim();
        const authorized = $w('#radioAuthorized').value;
        const understandW9 = $w('#radioW9').value;
        const exclusiveReferrals = $w('#radioExclusive').value;
        const monthlyCallVolume = $w('#dropdownVolume').value;
        const onboardingAcknowledge = $w('#checkboxAcknowledge').checked;

        // --- Validation ---
        $w('#textError').hide();

        if (!firstName || !lastName) {
            showError('First and last name are required.');
            return;
        }
        if (!phone || !email) {
            showError('Phone and email are required.');
            return;
        }
        if (!applyingAs) {
            showError('Please select how you are applying.');
            return;
        }
        if (!industryYears) {
            showError('Please enter your years of experience.');
            return;
        }
        if (!authorized || !understandW9 || !exclusiveReferrals) {
            showError('Please answer all qualification questions.');
            return;
        }
        if (!monthlyCallVolume) {
            showError('Please select your monthly call volume.');
            return;
        }
        if (!onboardingAcknowledge) {
            showError('You must acknowledge the onboarding requirement.');
            return;
        }

        // --- Disable button while submitting ---
        $w('#buttonSubmit').disable();
        $w('#buttonSubmit').label = 'Submitting...';

        const record = {
            title: firstName + ' ' + lastName,
            firstName,
            lastName,
            companyName: companyName || '',
            applyingAs,
            phone,
            email,
            address: address || '',
            industryYears,
            authorized,
            understandW9,
            exclusiveReferrals,
            monthlyCallVolume,
            onboardingAcknowledge: String(onboardingAcknowledge),
            submittedAt: new Date()
        };

        submitPartnerApplication(record)
            .then(() => {
                // Show success state
                $w('#boxForm').hide();
                $w('#boxSuccess').show();
                $w('#textSuccess').show();
            })
            .catch((err) => {
                console.error('Submission error:', err);
                showError('Something went wrong. Please try again.');
                $w('#buttonSubmit').enable();
                $w('#buttonSubmit').label = 'SUBMIT APPLICATION';
            });
    });
});

function showError(msg) {
    $w('#textError').text = msg;
    $w('#textError').show();
}
