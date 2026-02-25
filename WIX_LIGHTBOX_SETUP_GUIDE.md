# Partner Application — Wix Native Lightbox Setup Guide

This replaces the HTML embed approach with a **native Wix Lightbox** that talks
directly to the backend. No postMessage, no iframe issues.

---

## STEP 1 — Create the Lightbox

1. In the **Wix Editor**, click **Add (+)** → **Interactive** → **Lightbox**
2. Choose a **blank / minimal** template (no pre-built form)
3. Name the lightbox exactly: **`Partner Application`**
   *(This must match the name in the page code)*
4. Set the lightbox **overlay** to dark (black at 85% opacity)
5. Set the lightbox **container** to:
   - Background: **#FFFFFF** (white)
   - Width: **600px**
   - Border-radius: **8px**
   - Padding: **0px** (we'll use inner boxes for spacing)

---

## STEP 2 — Add the Header

1. Add a **Box** at the top of the lightbox
   - Background: **#1A1A1A** (black)
   - Full width of the lightbox container
   - Height: ~70px
   - Padding: 20px

2. Inside the box, add a **Text** element:
   - Text: **Partner Application**
   - Font: **Montserrat**, Bold (700), **22px**
   - Color: **#FFFFFF** (white)

3. Add a **Button** in the top-right corner for Close:
   - ID: **`buttonClose`**
   - Text: **✕**
   - Style: text-only (no fill, no border)
   - Font color: **#FFFFFF**
   - Size: 36px

---

## STEP 3 — Add Form Elements

Add all elements below **inside the lightbox**, under the header.
Group them inside a **Box** with ID: **`boxForm`**
(padding 30px on all sides).

### Section 1 — Personal Information

Add a **Text** element: "1 — Personal Information"
  - Font: Montserrat, Bold (700), 15px
  - Color: #2D2D2D

| Element         | Type            | ID                   | Placeholder / Label                                    |
|-----------------|-----------------|----------------------|--------------------------------------------------------|
| First Name      | Text Input      | `inputFirstName`     | "First Name *"                                         |
| Last Name       | Text Input      | `inputLastName`      | "Last Name *"                                          |
| Company Name    | Text Input      | `inputCompany`       | "Company Name (optional)"                              |
| Applying As     | Radio Buttons   | `radioApplyingAs`    | Options: `Business Entity`, `Individual 1099 Partner`  |

### Section 2 — Contact Information

Add a **Text** element: "2 — Contact Information"

| Element  | Type       | ID             | Placeholder / Label       |
|----------|------------|----------------|---------------------------|
| Phone    | Text Input | `inputPhone`   | "Phone *"                 |
| Email    | Text Input | `inputEmail`   | "Email *"                 |
| Address  | Text Input | `inputAddress` | "Address (optional)"      |

### Section 3 — Experience & Qualifications

Add a **Text** element: "3 — Experience & Qualifications"

| Element                | Type          | ID                  | Placeholder / Options                          |
|------------------------|---------------|---------------------|-------------------------------------------------|
| Years of Experience    | Text Input    | `inputYears`        | "How long in the industry? *"                   |
| Authorized to Refer    | Radio Buttons | `radioAuthorized`   | Options: `Yes`, `No`                            |
| W-9 Understanding      | Radio Buttons | `radioW9`           | Options: `Yes`, `No`                            |
| Exclusive Referrals    | Radio Buttons | `radioExclusive`    | Options: `Yes`, `No`                            |
| Monthly Call Volume    | Dropdown      | `dropdownVolume`    | Options: `1 - 5`, `6 - 10`, `11 - 20`, `21 - 50`, `50+` |

> **Radio label text:**
> - radioAuthorized → "Are you authorized to refer water damage jobs?"
> - radioW9 → "Do you understand W-9 requirements?"
> - radioExclusive → "Willing to refer exclusively to Comfort Restorations?"

### Section 4 — Acknowledgment

| Element              | Type     | ID                     | Label                                                                                     |
|----------------------|----------|------------------------|-------------------------------------------------------------------------------------------|
| Acknowledge checkbox | Checkbox | `checkboxAcknowledge`  | "I understand that referrals only qualify after official onboarding and written approval." |

### Submit Button

| Element | Type   | ID             | Label                |
|---------|--------|----------------|----------------------|
| Submit  | Button | `buttonSubmit` | "SUBMIT APPLICATION" |

**Submit button styling:**
- Background: **#CFA054** (gold)
- Text color: **#FFFFFF**
- Font: Montserrat, Bold (700), 15px, UPPERCASE
- Letter-spacing: 1.5px
- Full width of form area
- Border-radius: 4px
- Hover background: **#DAAD64**

### Error Text

Add a **Text** element:
- ID: **`textError`**
- Text: (leave blank or "Error")
- Color: **#D32F2F** (red)
- Font: Montserrat, 14px
- Place it just above the submit button
- **Hidden by default** (right-click → Hide on Load, or use the Properties panel)

---

## STEP 4 — Add the Success State

1. Add another **Box** element (sibling of `boxForm`, not inside it):
   - ID: **`boxSuccess`**
   - Background: **#FFFFFF**
   - Padding: 40px
   - Center-aligned content
   - **Hidden by default**

2. Inside `boxSuccess`, add:
   - A **Text** element: **✓** (green checkmark, 48px)
   - A **Text** element: **"Application Received!"**
     - Font: Montserrat, Bold, 24px, Color: #2D2D2D
   - A **Text** element (ID: `textSuccess`):
     **"Thank you for applying. We review applications within 24-48 hours. You'll receive a call from our team."**
     - Font: Montserrat, 15px, Color: #666
   - A **Button**: "CLOSE"
     - onClick → close lightbox (already handled by code, or add another close button with ID `buttonClose`)

---

## STEP 5 — Styling All Inputs to Match the Brand

Apply these styles to **every Text Input, Dropdown, and Radio Group**:

| Property         | Value                            |
|------------------|----------------------------------|
| Border           | 2px solid **#E0E0E0**           |
| Border-radius    | 4px                              |
| Font             | Montserrat, 15px                 |
| Padding          | 12px                             |
| Focus border     | **#CFA054** (gold)              |
| Background       | **#FFFFFF**                      |

**Gold accent color for reference:** `#CFA054`

---

## STEP 6 — Partner Program Page Buttons

On the **Partner Program page**, make sure your "Apply Now" buttons have these IDs:

- First button: **`buttonApply`**
- Second button (mid-page CTA): **`buttonApply2`**
- Third button (bottom CTA): **`buttonApply3`**

The page code will wire them to open the lightbox automatically.

> If you only have one Apply button, just give it ID `buttonApply` and
> the other two IDs will be safely ignored.

---

## STEP 7 — Paste the Code

### Lightbox Code
1. Click on the **Partner Application** lightbox
2. Open the code panel (bottom of editor)
3. Paste the contents of: `src/pages/Partner Application.js`

### Partner Program Page Code
1. Go to the **Partner Program** page
2. Open the code panel
3. The code is already in: `src/pages/Partner Program.m1am3.js`
   (replace whatever is there)

### Backend (already done)
The file `src/backend/partnerSubmit.jsw` is already set up — no changes needed.

---

## STEP 8 — Test

1. **Preview** the Partner Program page
2. Click any **Apply Now** button → lightbox should open
3. Fill out the form and submit
4. Check the **PartnerApplications** collection in the CMS → record should appear
5. Verify the success message shows after submission

---

## Quick Troubleshooting

| Problem                         | Fix                                                                 |
|---------------------------------|---------------------------------------------------------------------|
| Lightbox doesn't open           | Verify lightbox name is exactly `Partner Application`               |
| "Element not found" error       | Check element IDs match exactly (case-sensitive)                    |
| Submission fails silently       | Open browser DevTools → Console for errors                         |
| Record missing from collection  | Ensure `PartnerApplications` collection exists with matching fields |
| Buttons don't work              | Make sure button IDs are `buttonApply`, `buttonApply2`, etc.       |

---

## Collection Field Reference (PartnerApplications)

These fields must exist in your Wix CMS collection:

| Field Key              | Type    |
|------------------------|---------|
| title                  | Text    |
| firstName              | Text    |
| lastName               | Text    |
| companyName            | Text    |
| applyingAs             | Text    |
| phone                  | Text    |
| email                  | Text    |
| address                | Text    |
| industryYears          | Text    |
| authorized             | Text    |
| understandW9           | Text    |
| exclusiveReferrals     | Text    |
| monthlyCallVolume      | Text    |
| onboardingAcknowledge  | Text    |
| submittedAt            | Date    |
