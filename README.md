# Interview Questions (PrepNotes)

Interview prep notes organized into five readable sections:

| Section | Path | Contents |
|---------|------|----------|
| Node.js / JavaScript | `/nodejs` | Runtime, Express, JWT, promises, event loop, puzzles |
| React / Frontend | `/react` | Hooks, Redux, performance, data flow |
| CSS & Layout | `/css` | Box model, flex, position, responsive |
| SQL / MongoDB | `/sql` | Keys, joins, indexes, aggregation, ACID |
| Problems & Code | `/problems` | Ideal numbers, primes, palindromes, React UI drills |

Answers are concise and meant for quick revision — not a textbook.

## Requirements

- Node.js 20+ (recommended)
- npm

## Running the app

```bash
# install dependencies
npm install

# start the development server (port 43123)
npm run dev
```

Then open **http://127.0.0.1:43123** in your browser.

### Other commands

```bash
# production build
npm run build

# serve the production build (port 43123)
npm start

# lint
npm run lint
```

## Content

Q&A lives in `src/content/` (`nodejs.ts`, `react.ts`, `css.ts`, `sql.ts`, `problems.ts`). Add or edit entries there; the UI picks them up automatically.

Search supports live filtering and `?q=` in the URL (example: `/nodejs?q=JWT`).
