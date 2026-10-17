# Prompt Log — Typhoon-Ready Household Guide

**Course:** Web Systems and Technologies
**Activity:** Hands-On Laboratory Activity #4 — Prompt, Observe, Refine
**Name:** Student  **Section:** BSIT 2A
**Tool used:** GitHub Copilot Chat in Visual Studio Code  **Model:** MAI-Code-1.1-Flash

> Documentation rule: record what Copilot ACTUALLY produced. Do not replace real output with an expected response.

---

## Task 1 — Sector Selection

**Objective:** Select one sector, identify users, the challenge, and two or three features.

| Item | Details |
|---|---|
| Sector | Disaster Risk Reduction / Climate Change Adaptation |
| Local Challenge | Households in typhoon- and flood-prone Philippine communities often prepare at the last minute because they lack a simple, clear guide for a go-bag and a family plan. |
| Target Users | Households and families in barangay communities |
| Proposed Project | Typhoon-Ready Household Guide |
| Key Features | 1. Interactive go-bag checklist with progress tracker  2. Family emergency plan builder (meeting place, contact list; demo data only)  3. General evacuation reminders (educational, not live warnings) |

**Project concept:** Many families know typhoons are coming each season but do not have an organized way to prepare. The Typhoon-Ready Household Guide is a single-page, mobile-friendly website that helps a household check off go-bag items, fill in a simple family emergency plan, and read general evacuation reminders. All content is educational demonstration content. It shows no live warnings, forecasts, or official advisories.

---

## Task 2 — Zero-Shot Prompting

**Objective:** Observe what Copilot generates from a basic prompt without examples.

**Exact Prompt:**
> Create a simple webpage that helps families get ready for a typhoon.

**Actual Copilot Output:**
Saved in `outputs/task2-zero-shot/`. The initial page included a title, a short intro, a simple checklist, and one meeting-place field. The actual files and summary were saved in `outputs/task2-zero-shot/response.md`.

**What Worked:**
The baseline generated a readable page with the correct theme and a basic checklist structure. It gave a good starting point for a family-oriented typhoon prep concept.

**What Needs Improvement:**
It did not clearly focus on a Philippine barangay audience, did not include a mobile-ready layout, and lacked a completed-items counter, multiple family-plan fields, and a clear educational demo label.

**Next Action / Verification:**
The next step was to add structured requirements so the page included semantic HTML, labels, responsive design, and interactive features that matched the brief.

*Save this output as the baseline before moving on.*

---

## Task 3 — Structured Prompt (Role · Task · Context · Constraints · Expected Output · Acceptance Criteria)

**Objective:** Improve output relevance using structured prompt components.

**Exact Prompt:**
> **Role:** Act as a frontend web developer.
> **Task:** Create a responsive single-page "Typhoon-Ready Household Guide".
> **Context:** The users are households in typhoon- and flood-prone barangays in the Philippines. The page is an educational prototype.
> **Constraints:** Use semantic HTML, CSS, and vanilla JavaScript only. No external frameworks, backend, database, authentication, or external APIs. Use fictional/demo data only. Do not invent live warnings, forecasts, or official advisories. Label the page clearly as educational demo content.
> **Expected Output:** Three files: index.html, styles.css, script.js. Include (1) an interactive go-bag checklist with a completed-items counter, (2) a family emergency plan section with fields for meeting place and emergency contacts, and (3) general evacuation reminders.
> **Acceptance Criteria:** Layout stays readable on mobile screens. Checklist works with both mouse and keyboard. Every form field has a label. Headings are in logical order.

**Actual Copilot Output:**
Saved in `outputs/task3-structured/` with actual files and a summary in `outputs/task3-structured/response.md`.

**Differences compared with zero-shot (identify at least two):**
1. The page had a clearer structure using semantic sections and a proper responsive layout instead of a simple generic page.
2. It included a real checklist counter and multi-field family plan, which were not present in the zero-shot version.

**What Worked:**
The structured version was much more aligned with the assignment. It included a separate emergency plan area, a more complete checklist, and clearer educational labeling. The layout was better organized and easier to read on smaller screens.

**What Needs Improvement:**
The interaction still needed stronger persistence and a more explicit focus-state strategy for keyboard users. The layout was good, but some improvements were added during refinement.

**Next Action / Verification:**
I verified the interactive behavior by checking a box in the browser and confirming the counter changed from `0 / 8` to `1 / 8`.

---

## Task 4A — Few-Shot Prompting

**Objective:** Explore how examples influence AI output.

**Exact Prompt:**
> Add more items to the go-bag checklist in my Typhoon-Ready Household Guide using this format:
>
> Example 1:
> Item: Battery-powered radio
> Category: Communication
> Description: Keep a radio with spare batteries to follow official announcements.
>
> Example 2:
> Item: Waterproof document pouch
> Category: Documents
> Description: Store copies of IDs and important papers in a sealed waterproof pouch.
>
> Generate four additional general preparedness items using the same format and render them as part of the checklist.

**Actual Copilot Output:**
Saved in `outputs/task4a-few-shot/` with a summary in `outputs/task4a-few-shot/response.md`.

**What Worked (what became more consistent?):**
The few-shot format made the generated checklist entries more consistent in structure and tone. The model kept a repeating pattern of item, category, and description.

**What Needs Improvement:**
The quality was better structured, but the page still needed final polish for accessibility and usability, especially for keyboard and mobile interaction.

**Next Action / Verification:**
The final project kept the improved item structure while adding the accessibility and responsive refinements needed for the final version.

---

## Task 4B — Role Assignment

**Objective:** Examine the same interface from a specialized perspective.

**Exact Prompt:**
> Act as a frontend accessibility reviewer. Examine my Typhoon-Ready Household Guide. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

**Actual Copilot Output:**
Saved in `outputs/task4b-role-review.md`.

**What Worked (what specialized concerns were identified?):**
The review correctly noted that native form controls and semantic sections were already beneficial. It also identified the need for stronger focus states, clearer alignment, and consistent spacing.

**What Needs Improvement:**
The page still needed the final implementation fix to keep the checklist state and plan data consistent, especially after reloading.

**Next Action / Verification:**
The next step was a structured analysis that identified the two most important implementation issues and tested the fix in the browser.

---

## Task 5 — Structured Analysis and Refinement

**Objective:** Use AI-assisted analysis to identify and fix a specific implementation weakness.

**Exact Prompt:**
> Review my Typhoon-Ready Household Guide against its original requirements. Check whether the interactive checklist works correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Give a concise diagnosis, recommend the smallest appropriate corrections, and explain how I can test each one.

**Actual Copilot Output:**
Saved in `outputs/task5-analysis.md`.

**Selected correction:** The chosen fix was to keep the checklist state consistent with a visible counter and saved values in `localStorage`, because the original implementation was not clearly reflecting progress and form data after reload.

**Verification result:** I tested the browser behavior by checking one item and confirming the progress text changed from `0 / 8` to `1 / 8`. I also filled the meeting-place field and clicked Save plan, then confirmed that the saved value remained in `localStorage`.

**What Worked:**
The checklist and form now behave as a real demo tool rather than a static mock-up. The page remains readable and interactive on mobile-sized screens.

**What Needs Improvement:**
The project is functional, but a longer-term improvement would be to add a visible reset button or a more advanced emergency contact list.

**Next Action / Verification:**
The final version was selected after browser checks confirmed the functionality matched the original requirement.

---

## Task 6 — Final Comparison

| Technique | Observation |
|---|---|
| Zero-Shot | The AI created a basic concept but omitted a mobile layout, proper labels, and a meaningful progress tracker. |
| Structured Prompt | The addition of role, context, constraints, and acceptance criteria made the result much more aligned with the assignment. |
| Few-Shot | The output became more consistent in format and item naming because the examples set a clear pattern. |
| Role Assignment | It identified accessibility and clarity concerns that were not obvious in the initial baseline. |
| Structured Analysis | The refined fix targeted the real implementation weakness and was verified in the browser. |

**Selected final version:** The final root version in [index.html](index.html), [styles.css](styles.css), and [script.js](script.js) is the best fit because it satisfies the assignment requirements: semantic HTML, responsive layout, interactive checklist, emergency family plan, and clear educational labeling.

**Final Reflection:**
The zero-shot draft was enough to establish a basic idea, but it was too generic. The structured prompt improved the output significantly by adding constraints and expected features. The few-shot prompt improved consistency in item formatting. The role assignment added a specialized accessibility viewpoint, and the structured analysis was the step that corrected the actual implementation weaknesses. I still had to verify the browser behavior myself, especially the counter update and form persistence, because code alone was not enough proof.

---

## Final Submission Checklist

- [x] Mini frontend prototype (index.html, styles.css, script.js) opens correctly
- [x] prompt-log.md complete (exact prompts, techniques, observations, reflection)
- [x] AI-generated outputs saved in `outputs/` (Tasks 2, 3, 4A, 4B, 5)
- [x] Earlier versions preserved before each new experiment
- [ ] Repository link is accessible
- [ ] CodeSandbox URL works
