# Portfolio CV update implementation plan

Approved design: `../specs/2026-10-08-portfolio-cv-design.md`.
The writing-plans skill is not installed in this session; this plan documents the implementation steps directly.

1. Update root page metadata, viewport and loading fallback while preserving React and root deployment.
2. Update components with CV content, work experience, skills, education and achievements; expose root CV download and valid contact links.
3. Extend the existing stylesheet while retaining the forest/moon hero, dark/pink palette and light content sections. Adapt new sections and navigation for small screens, keyboard use and reduced motion.
4. Synchronize source/distribution copies, with the parent CV path for the optional dist preview.
5. Serve locally; check desktop/mobile rendering, browser errors, keyboard navigation, content accuracy, asset requests and GitHub Pages paths. Review final diff without pushing a deployment.

## Validation completed

- `node --check script.js` and `git diff --check` passed.
- Headless Chrome checked widths 320, 390, 768 and 1440 px with no horizontal overflow, JavaScript exceptions or failed network requests.
- Verified all four experience entries and four projects, CV download, internal navigation, menu Escape and keyboard focus containment.
- Verified footer visibility and interaction, reduced-motion rendering and the distribution preview CV path.
- Visually reviewed desktop hero, mobile content, menu and footer; confined fixed decorative graphics to the hero to prevent overlap with other content.
- Confirmed root `index.html`, source/distribution synchronization, unchanged CNAME and unchanged root artifact upload on `master`.
- Application changes are local; no production deployment was performed.

## Follow-up visual refinement

The user requested an Astra review and visual improvement after deploying the initial CV update.
Replaced the inherited CSS, adopted consistent sans-serif typography, restrained the forest/moon backdrop, added desktop navigation, and rebuilt project/timeline/contact layouts. Astra reviewed desktop and mobile screenshots twice. The refinement retains CV content and root GitHub Pages deployment.

Refinement validation passed at 320, 390, 768 and 1440 px: no horizontal overflow, no JavaScript errors or failed network requests; menu, Escape, focus containment, CV download, footer, reduced motion, distribution preview and local forest asset verified. Stylesheet/script URLs include a version query so browsers request the refined assets after deployment.
