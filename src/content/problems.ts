import type { Category } from "./types";

export const problemsCategory: Category = {
  id: "problems",
  title: "Problems & Code",
  shortTitle: "Problems",
  description:
    "Coding puzzles, React UI exercises, and snippets from interviews — with solutions.",
  items: [
    {
      id: "ideal-number",
      question: "Ideal number: only prime divisors 3 and 5?",
      answer:
        "A positive integer is ideal if it is of the form 3^x × 5^y (x,y ≥ 0). Divide out all factors of 3 and 5; what remains must be 1. Examples: 405 = 3^4×5 → true; 243 = 3^5 → true; 240 = 2^4×3×5 → false.",
      code: `function isIdeal(n) {
  if (!Number.isInteger(n) || n < 1) return false;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
}

console.log(isIdeal(405)); // true
console.log(isIdeal(243)); // true
console.log(isIdeal(240)); // false
console.log(isIdeal(1));   // true (3^0 * 5^0)`,
      tags: ["algorithm"],
    },
    {
      id: "increment-counter",
      question: "React: increment counter",
      answer:
        "Local useState with a button that increments. Prefer functional updates when basing on previous state.",
      code: `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Count: {count}
    </button>
  );
}`,
      tags: ["react"],
    },
    {
      id: "parent-child-enable-buttons",
      question: "Parent/child buttons enable each other",
      answer:
        "Lift boolean flags (or a single turn state) to the parent. Parent click enables child; child click (callback) enables parent.",
      code: `function Parent() {
  const [parentEnabled, setParentEnabled] = useState(true);
  const [childEnabled, setChildEnabled] = useState(false);

  return (
    <>
      <button
        disabled={!parentEnabled}
        onClick={() => {
          setParentEnabled(false);
          setChildEnabled(true);
        }}
      >
        Parent
      </button>
      <Child
        enabled={childEnabled}
        onClick={() => {
          setChildEnabled(false);
          setParentEnabled(true);
        }}
      />
    </>
  );
}`,
      tags: ["react"],
    },
    {
      id: "list-search-sort",
      question: "List + search filter + ASC/DESC sort",
      answer:
        "Keep source array in state; derive filtered+sorted list with useMemo from query and sort direction.",
      code: `function ListTools({ items }) {
  const [q, setQ] = useState("");
  const [dir, setDir] = useState("asc");

  const view = useMemo(() => {
    const filtered = items.filter((x) =>
      x.name.toLowerCase().includes(q.toLowerCase())
    );
    return [...filtered].sort((a, b) =>
      dir === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }, [items, q, dir]);

  return (
    <>
      <input value={q} onChange={(e) => setQ(e.target.value)} />
      <button onClick={() => setDir((d) => (d === "asc" ? "desc" : "asc"))}>
        Sort {dir.toUpperCase()}
      </button>
      <ul>
        {view.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </>
  );
}`,
      tags: ["react"],
    },
    {
      id: "prime-number",
      question: "Prime number check (JavaScript)",
      answer:
        "Primes are > 1 with no divisors other than 1 and themselves. Check divisibility up to sqrt(n).",
      code: `function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}`,
      tags: ["algorithm"],
    },
    {
      id: "palindrome",
      question: "Palindrome check (JavaScript)",
      answer:
        "Normalize (optional: lower case, strip non-alphanumerics) and compare to its reverse, or two-pointer from ends.",
      code: `function isPalindrome(s) {
  const t = String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
  let i = 0, j = t.length - 1;
  while (i < j) {
    if (t[i] !== t[j]) return false;
    i++; j--;
  }
  return true;
}`,
      tags: ["algorithm"],
    },
    {
      id: "count-duplicates",
      question: "Count each duplicate element",
      answer:
        "Build a frequency map. Example [1,1,2,2,3] → {1:2, 2:2, 3:1}. (Your note’s {1:2, 2:1} looks incomplete for that input.)",
      code: `function frequencies(arr) {
  return arr.reduce((acc, x) => {
    acc[x] = (acc[x] || 0) + 1;
    return acc;
  }, {});
}

console.log(frequencies([1, 1, 2, 2, 3]));
// { 1: 2, 2: 2, 3: 1 }`,
      tags: ["algorithm"],
    },
    {
      id: "char-frequency-string",
      question: "Count character occurrences in a string",
      answer:
        "Spread string to chars; track seen set; for each unique char, filter and log count.",
      code: `const name = "Kathir is giving interview...";
const chars = [...name];
const seen = [];
chars.forEach((item) => {
  if (!seen.includes(item)) {
    seen.push(item);
    const count = chars.filter((ele) => ele === item).length;
    console.log(item, "is presented", count);
  }
});
// Better O(n): use a Map/object frequency counter.`,
      tags: ["algorithm"],
    },
    {
      id: "anagram",
      question: "Anagram check",
      answer:
        "Two strings are anagrams if they contain the same characters with the same frequencies (ignore spaces/case as required).",
      code: `function isAnagram(a, b) {
  const norm = (s) =>
    [...s.toLowerCase()].filter((c) => c !== " ").sort().join("");
  return norm(a) === norm(b);
}`,
      tags: ["algorithm"],
    },
    {
      id: "signup-route-snippet",
      question: "Express route wiring (common mistake)",
      answer:
        "app.post('/signup').signupcontroller.signup() is invalid. Register a path and handler: app.post('/signup', signupController.signup).",
      code: `app.post("/signup", signupController.signup);`,
      tags: ["express"],
    },
    {
      id: "npm-object-assign-bug",
      question: "Object.assign with { key: value } bug",
      answer:
        "Object.assign(newObj, { key: item[1] }) always writes the literal property name \"key\". Use computed property: { [key]: item[1] }, or newObj[key] = …",
      code: `const newObj = {};
for (const [key, value] of Object.entries(npm)) {
  newObj[key] = key === "NPMA-33-2Chk" ? "yes" : value;
}`,
      tags: ["javascript"],
    },
  ],
};
