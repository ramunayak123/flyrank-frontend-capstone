# WORKFLOW.md - FE-03: Vague vs Precise Prompting

## Phase: Foundations | Feature: Settings Form with Validation

### Round 1: Vague Prompt
**Prompt Used:** "Create a settings form"
**Process:** Single prompt, accepted first output, no constraints. Saved to round1-vague.
**Output:** Minimal HTML with 3 inputs using placeholders only, no labels, no validation, inline CSS. JS was alert('saved') only.
**Correctness:** Failed. Accepts empty values, invalid emails like "abc", API keys of 1 char. No persistence, no error feedback. User cannot know what failed.
**Accessibility:** Failed WCAG. Placeholders disappear on type, no label with for/id association, no aria-describedby, no role=alert, no aria-invalid, no keyboard focus management. Screen readers cannot identify fields or errors.
**Edge Cases:** None handled. Empty submit passes, malformed data passes, refresh loses data, long inputs break layout, no loading/disabled state.
**Review Effort:** 1 minute to generate, but would require 2+ hours to rewrite for production. Fast generation created tech debt.

### Round 2: Precise Prompt
**Prompt Used:** "Build settings form in index.html, style.css, script.js. Requirements: 1) Labels with for/id linked to inputs 2) Helper text via aria-describedby 3) Error spans with role=alert and aria-live=polite 4) JS toggles aria-invalid 5) Validation: SiteName required, Email regex, API Key min 8 chars 6) Save to localStorage 7) Focus first invalid on submit 8) Then write tests and run them. Use explore-plan-code loop."
**Process:** Explore (checked repo structure), Plan (listed WCAG requirements), Code (implemented semantic HTML, validation, localStorage), Verify (manual test + edge case checklist).
**Output:** Production form with full validation, persistence, accessible error handling.
**Correctness:** Passes. Required fields blocked, email format validated, API key length enforced, localStorage save/load, success message, form reset handling.
**Accessibility:** Passes WCAG 2.1 AA. Labels explicitly linked, aria-describedby connects hints/errors, role=alert announces errors, aria-invalid=true on error, focus moves to first error, all operable via keyboard, color not sole error indicator.
**Edge Cases:** Handled: empty fields, whitespace only, invalid email, short API key, localStorage quota/unavailable, XSS via textContent not innerHTML, rapid double submit disabled, Enter key submits, long values truncated safely, browser autofill.
**Review Effort:** 20 minutes to craft precise prompt + 10 minutes to verify checklist. Zero rewrite needed. Precise prompting is faster overall.

### Diff Analysis
Branch diff: round1-vague 12 lines vs round2-precise 180+ lines. Added: label elements, aria attributes, validation functions, localStorage logic, error containers, focus management. Diff makes visible that "Used AI to build it" is not a skill; directing AI with specs, verification, and review is. Vague delegates quality to model randomness. Precise defines acceptance criteria.

### Learnings
1) Specificity is quality. 2) Accessibility must be specified, not assumed. 3) Verification step ("write tests and run them") catches hallucinations.
