# Excellent Care Clinic planner

## Quick project overview

Excellent Care Clinic planner is a Next.js + React application that uses Chakra UI for styling and a small custom theme.

Key folders:

- `src/app/components/Planner` — main planner UI (CalendarGrid, CalendarCell, EventCard, Roster, etc.)
- `src/app` — Next.js app routes and layout
- `src/context` — React contexts (e.g., `PlannerViewContext`)
- `src/lib/planner` — planner constants and types (event and room data)

---

## Tech stack

- Node (use a recent LTS, e.g. Node 18+)
- Next.js
- React 19
- Chakra UI
- TypeScript
- Biome (formatting & linting configured in `package.json` scripts)

---

## Prerequisites

- Node.js (LTS recommended)
- npm (or pnpm/yarn if you prefer; commands below use `npm`)

---

## Setup (local development)

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

---

## Useful scripts

- `npm run dev` — start Next.js dev server
- `npm run build` — build production assets
- `npm run start` — run production server after build
- `npm run lint` — run Biome linting (`biome check`)
- `npm run format` — format files (`biome format --write`)

Run `npm run lint` and `npm run format` before opening a PR.

---

## Code style & tooling

- Formatting and linting use Biome (see `package.json` scripts): run `npm run format` and `npm run lint`.
- TypeScript is used across the project — keep types accurate and prefer explicit types for public APIs.
- Follow existing folder/file naming conventions (camelCase for variables/functions, PascalCase for components).

Accessibility: try to follow Chakra UI's accessibility patterns; prefer semantic HTML where appropriate.

---

## Project structure notes

- UI components are colocated under `src/app/components`. The Planner components are in `src/app/components/Planner` and contain subfolders such as `EventCard`, `CalendarGrid`, `CalendarCell`, and `Roster`.
- Shared data for the planner (mock events, rooms, time slots) is stored under `src/lib/planner` (constants and types).
- Contexts (e.g., planner view state) are in `src/context`.

If you need to modify planner data for local testing, update the constants file (e.g. `src/lib/planner/constants.ts`).

---

## How to make a good contribution

1. Fork the repository and create a feature branch named with the pattern: `feat/<short-description>` or `fix/<short-description>`.
2. Implement your changes in a focused, well-scoped commit. Prefer multiple small commits where each commit is logical and testable.
3. Run `npm run format` and `npm run lint` and fix any issues.
4. Update or add tests if applicable (this repo currently has no test harness; if you add tests, document how to run them).
5. Push your branch and open a Pull Request against `main` with a clear description of what you changed and why.

PR checklist (before requesting review):

- [ ] The code builds and runs locally (`npm run dev`)
- [ ] Formatting applied (`npm run format`)
- [ ] Linting passed (`npm run lint`)
- [ ] Changes are covered by tests where appropriate
- [ ] Documentation/README updated if behavior or APIs changed

---

## Branching & Pull Request workflow

- Create feature branches from `main`.
- Keep PRs small and focused.
- Use descriptive PR titles and write clear descriptions explaining the motivation for the change.
- Reviewers should be added based on the code ownership or teams.

Merging: Prefer squash-and-merge for a clean history unless contributors explicitly request keeping commit history.

---

## Key contributor notes

- If you're working on calendar layout or event placement, check `src/app/components/Planner/CalendarGrid/CalendarGrid.tsx`, `CalendarCell.tsx`, and `EventCard/EventCard.tsx`.
- For Roster UI, see `src/app/components/Planner/Roster/Roster.tsx`.
- Theme tokens live in `src/app/theme.ts` — prefer using theme tokens rather than hard-coded colors where possible.

---

## Debugging & testing changes locally

- Use `console.log` or React devtools for runtime debugging.
- If you change layout/grid logic, test at different viewport sizes to ensure sticky headers and scroll behavior are correct.

---

## Communication

If you have questions or need help, open an issue describing the problem and include screenshots or code snippets where useful.

---

## License & Code of Conduct

- Add LICENSE in the project root if this repo should be licensed. If the project already has a license, follow its terms.
- Consider adding a `CODE_OF_CONDUCT.md` to clarify expectations for contributors.

---

Thanks for contributing — your improvements make this project better for everyone!
