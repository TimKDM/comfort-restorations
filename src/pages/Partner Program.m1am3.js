import wixData from 'wix-data';

$w.onReady(function () {
    $w('#html12').onMessage((event) => {
        // Handle partner application form submission
        if (event.data && event.data.type === 'partnerApplication') {
            const formData = event.data.data;

            const record = {
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

            wixData.insert('PartnerApplications', record)
                .then(() => {
                    console.log('Partner application saved successfully.');
                })
                .catch((err) => {
                    console.error('Error saving partner application:', err);
                });
        }
    });
});
