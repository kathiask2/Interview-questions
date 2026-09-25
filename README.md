# PrepNotes

Interview prep notes organized into five readable sections:

| Section | Path | Contents |
|---------|------|----------|
| Node.js / JavaScript | `/nodejs` | Runtime, Express, JWT, promises, event loop, puzzles |
| React / Frontend | `/react` | Hooks, Redux, performance, data flow |
| CSS & Layout | `/css` | Box model, flex, position, responsive |
| SQL / MongoDB | `/sql` | Keys, joins, indexes, aggregation, ACID |
| Problems & Code | `/problems` | Ideal numbers, primes, palindromes, React UI drills |

Answers are concise and meant for quick revision — not a textbook.

## Run locally

```bash
npm install
npm run dev -- -p 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Content

Q&A lives in `src/content/` (`nodejs.ts`, `react.ts`, `css.ts`, `sql.ts`, `problems.ts`). Add or edit entries there; the UI picks them up automatically.
