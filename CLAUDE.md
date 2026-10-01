# Claude / AI Usage Documentation

## Prompts Used
- "Create a settings form with site name, email, api key"
- "Make it accessible with labels and ARIA"
- "Add client side validation"

## What AI Generated
- Initial HTML structure
- Base CSS
- Validation regex suggestions

## What I Modified Manually
- Changed error handling to use aria-describedby
- Added invalid class styling
- Added localStorage save/load
- Fixed email regex to simple standard
- Tested keyboard navigation manually

## Verification
- Tested without mouse (Tab + Enter)
- Checked errors are visible and announced
- Validated HTML via W3C validator mental check
- No AI-generated code left unverified

## Round 2 Compliance
- Labels use for/id matching
- Errors use id + aria-describedby linkage
- role=alert for errors
- aria-invalid toggled on error
