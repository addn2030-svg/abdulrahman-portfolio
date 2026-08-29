# AI Editing Instructions

This repository is the public portfolio only.

## Required workflow

- Do not modify `main` directly for normal future updates.
- Create a branch named for the change, then open a Pull Request.
- Keep changes focused and easy to review.
- Do not merge unless Abdulrahman or an authorized reviewer approves.

## Privacy boundary

Never add or expose:
- secrets, tokens, API keys, credentials, service-account JSON, environment files;
- patient-identifiable or confidential clinical information;
- private financial/family information;
- private operational state from the Personal AI Agent;
- internal agent source code unless Abdulrahman explicitly approves publication.

The private `personal-ai-agent` repository is not a source to copy wholesale into this public repository.

## Factual integrity

- Use only user-approved or verified professional facts.
- Do not invent dates, credentials, titles, awards, clinical outcomes, project maturity, or institutional claims.
- If two sources conflict, surface the conflict instead of silently choosing one.
- Keep AI/clinical software described as decision support unless validation and regulatory status are verified.
- Keep unfinished systems labeled `in development`.

## Clinical language

Use careful professional wording: assessment, hypothesis, contributing factor, test–retest response, rehabilitation plan, supports/helps. Avoid cure guarantees, unsupported root-cause certainty, or claims that a technique/device is proven beyond available evidence.

## Design

- Mobile-first and responsive.
- Preserve accessibility, readable contrast, semantic HTML, and fast static loading.
- Do not add trackers, third-party scripts, forms, or external data collection without explicit approval.

## Deployment

GitHub Pages deploys the repository root from `main` using `.github/workflows/pages.yml`.
