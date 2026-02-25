import { submitPartnerApplication } from 'backend/partnerSubmit.jsw';

$w.onReady(function () {
    $w('#html12').onMessage((event) => {
        if (event.data && event.data.type === 'partnerApplication') {
            const formData = event.data.data;

            const record = {
                title: formData.firstName + ' ' + formData.lastName,
                firstName: formData.firstName,
                lastName: formData.lastName,
                companyName: formData.companyName || '',
                applyingAs: formData.applyingAs,
                phone: formData.phone,
                email: formData.email,
                address: formData.address || '',
                industryYears: formData.industryYears,
                authorized: formData.authorized,
                understandW9: formData.understandW9,
                exclusiveReferrals: formData.exclusiveReferrals,
                monthlyCallVolume: formData.monthlyCallVolume,
                onboardingAcknowledge: formData.onboardingAcknowledge,
                submittedAt: new Date()
            };

            submitPartnerApplication(record)
                .then(() => {
                    $w('#html12').postMessage({ type: 'formResult', success: true });
                })
                .catch((err) => {
                    console.error('Error saving partner application:', err);
                    $w('#html12').postMessage({ type: 'formResult', success: false });
                });
        }
    });
});
