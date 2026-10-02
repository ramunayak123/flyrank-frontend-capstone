# FlyRank Round 3 - AI Prompts Used

This project was built with AI assistance (80% boilerplate) and manual debugging / optimization (20%).

### Prompt 1: Initial Setup
"Create a React task management app component in App.jsx with useState for tasks, add/edit/delete functionality and Tailwind CSS styling. Keep code simple and accessible."

### Prompt 2: Bug Fix - Infinite Loop
"The useEffect for localStorage is causing infinite re-render. Fix the dependency array and add proper cleanup. I will handle it manually after your suggestion."

### Prompt 3: Accessibility Improvement
"Add aria-labels, keyboard navigation (Enter to save, Escape to cancel), and focus management for the task list. Make it WCAG compliant."

### Prompt 4: Performance Optimization
"Optimize the task filtering and counting logic using useMemo and useCallback to prevent unnecessary re-renders on large lists."

### Prompt 5: Documentation & Polish
"Generate a clean PROMPTS.md structure and add comments in App.jsx explaining the manual fixes I did vs AI generated code."

## What I Fixed Manually (My Contribution - 20%)
1. Fixed useEffect infinite loop bug - AI gave [tasks] dependency causing loop, I corrected to [] with proper load/save logic.
2. Added aria-label="Edit task" and aria-label="Delete task" manually - AI missed it.
3. Added useMemo for filteredTasks - AI code was filtering on every render.
4. Added keyboard UX - Enter/Escape handling myself.
5. Refactored localStorage error handling with try/catch.

AI Tool Used: Claude / ChatGPT for boilerplate
Final Verification: Tested manually, fixed bugs myself.
