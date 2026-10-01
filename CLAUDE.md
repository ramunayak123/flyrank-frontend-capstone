# Project Rules - FE-03 Foundations

1. **Accessibility First:** Every input must have explicit label with for/id. No placeholder-only inputs. All errors must use role=alert, aria-live=polite, and toggle aria-invalid. Focus must move to first invalid field on submit.

2. **Validation & Persistence:** Client-side validation required for all fields (required, format, min length). Save valid data to localStorage. On page load, restore from localStorage. Use textContent not innerHTML to prevent XSS.

3. **Verification Loop:** After generating code, write manual test steps: empty submit, invalid email, short key, localStorage check, keyboard nav, screen reader announcement. Only commit after all tests pass. Use explore-plan-code loop, not single shot.
