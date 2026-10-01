# Workflow

## AI Assistance Used
- Used AI for initial HTML/CSS scaffolding (Round 1)
- Used AI to improve accessibility and validation (Round 2)
- All logic reviewed and tested manually

## Round 2 Changes
1. Added explicit <label for=""> linked to inputs
2. Added aria-describedby for error messages
3. Added role="alert" to error spans
4. Added aria-invalid handling in JS
5. Implemented client-side validation with inline errors
6. Added localStorage persistence
7. Added success feedback and loading state

## Testing Steps
1. Open index.html in browser
2. Click Save with empty fields - errors appear
3. Enter invalid email - email error appears
4. Enter valid data - success message and localStorage saved
5. Refresh - data persists

## Accessibility Notes
- All inputs have associated labels
- Errors announced via aria-describedby + role alert
- Invalid state exposed via aria-invalid
