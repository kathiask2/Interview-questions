import type { Category } from "./types";

export const nodejsCategory: Category = {
  id: "nodejs",
  title: "Node.js & JavaScript",
  shortTitle: "Node / JS",
  description:
    "Core JavaScript, Node.js runtime, Express, JWT, streams, and related backend interview topics.",
  items: [
    {
      id: "what-is-nodejs",
      question: "What is Node.js?",
      answer:
        "Node.js is a JavaScript runtime built on Chrome’s V8 engine. It lets you run JS outside the browser, with a non-blocking, event-driven I/O model suited for scalable network apps.",
      tags: ["basics"],
    },
    {
      id: "js-vs-nodejs",
      question: "JavaScript vs Node.js?",
      answer:
        "JavaScript is the language. Node.js is a runtime that executes JavaScript on the server (and CLI), adding APIs like fs, http, process, and Buffer that browsers don’t have.",
      tags: ["basics"],
    },
    {
      id: "nodejs-single-threaded",
      question: "Is Node.js single-threaded?",
      answer:
        "The JavaScript event loop runs on one main thread. CPU-heavy work blocks that thread. I/O (file, network, DNS) is offloaded to the libuv thread pool or OS async APIs. Use worker_threads or cluster for parallel JS.",
      tags: ["concurrency"],
    },
    {
      id: "event-loop",
      question: "What is the event loop?",
      answer:
        "The event loop schedules and runs callbacks: timers → pending I/O → idle/prepare → poll → check (setImmediate) → close callbacks. process.nextTick and microtasks (Promises) run between phases, before the next phase continues.",
      tags: ["concurrency"],
    },
    {
      id: "concurrency-single-thread",
      question: "How does Node handle concurrency despite being single-threaded?",
      answer:
        "Non-blocking I/O: while one request waits on disk/network, the event loop serves others. Heavy CPU work should be moved to workers/child processes so the main loop stays free.",
      tags: ["concurrency"],
    },
    {
      id: "middleware",
      question: "What is middleware?",
      answer:
        "In Express, middleware is a function `(req, res, next)` that runs in the request pipeline. It can read/modify req/res, end the response, or call next(). Used for auth, logging, parsing, CORS, errors.",
      tags: ["express"],
    },
    {
      id: "middleware-params",
      question: "What parameters does middleware take?",
      answer:
        "Normal: `(req, res, next)`. Error middleware: `(err, req, res, next)` — four args so Express treats it as an error handler.",
      code: `const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};`,
      tags: ["express", "jwt"],
    },
    {
      id: "types-of-middleware",
      question: "Types of middleware in Node/Express?",
      answer:
        "Application-level, router-level, built-in (express.json, static), third-party (cors, helmet), and error-handling middleware.",
      tags: ["express"],
    },
    {
      id: "prototype",
      question: "What is prototype in JavaScript/Node?",
      answer:
        "Every object has an internal [[Prototype]] link. Property lookup walks the prototype chain. Constructor.prototype is shared by instances created with new. Used for inheritance before (and alongside) class syntax.",
      tags: ["javascript"],
    },
    {
      id: "prototypical-inheritance",
      question: "What is prototypal inheritance?",
      answer:
        "Objects inherit from other objects via the prototype chain, not via classical class copies. Object.create(proto) or class extends both ultimately use prototypes.",
      tags: ["javascript"],
    },
    {
      id: "jwt-structure",
      question: "Structure of a JWT?",
      answer:
        "Three Base64URL parts: header.payload.signature. Header = alg + typ. Payload = claims (sub, exp, iat, custom). Signature = HMAC/RSA over header+payload with a secret/key.",
      tags: ["jwt", "security"],
    },
    {
      id: "jwt-token",
      question: "What is a JWT token? Refresh token? Expiration?",
      answer:
        "JWT is a signed, often short-lived access token sent as Bearer auth. Refresh tokens are longer-lived, stored securely, and used to mint new access tokens without re-login. exp claim sets access-token lifetime (e.g. 15m); verify it on every request.",
      tags: ["jwt", "security"],
    },
    {
      id: "exception-handling",
      question: "How are exceptions handled in Node?",
      answer:
        "sync: try/catch. async/await: try/catch around await. Promises: .catch(). Express: next(err) → error middleware. Unhandled rejections/exceptions should be logged; don’t leave the process in a bad state.",
      tags: ["errors"],
    },
    {
      id: "promiseall",
      question: "What is Promise.all?",
      answer:
        "Runs many promises in parallel; resolves with an array of results when all succeed; rejects on the first failure. Promise.allSettled waits for all and reports each status.",
      tags: ["promises"],
    },
    {
      id: "promises",
      question: "What are promises? States?",
      answer:
        "A Promise represents a future value. States: pending → fulfilled or rejected (settled once). Thenables chain with then/catch/finally. async/await is syntactic sugar over promises.",
      tags: ["promises"],
    },
    {
      id: "promisify",
      question: "What is promisify?",
      answer:
        "util.promisify(fn) wraps a Node-style callback function (err, result) into a function that returns a Promise.",
      tags: ["promises"],
    },
    {
      id: "callback",
      question: "What is a callback? Callback hell?",
      answer:
        "A function passed to be called later with a result/error. Callback hell is deeply nested callbacks. Avoid with promises, async/await, or modularization.",
      tags: ["async"],
    },
    {
      id: "streams",
      question: "What is a stream? Types?",
      answer:
        "Streams process data in chunks without loading everything into memory. Types: Readable, Writable, Duplex, Transform. Useful for files, HTTP bodies, piping pipelines.",
      tags: ["streams"],
    },
    {
      id: "buffer",
      question: "What is a Buffer?",
      answer:
        "A fixed-size chunk of binary data outside the V8 heap. Used when working with files, TCP, crypto, and binary protocols.",
      tags: ["basics"],
    },
    {
      id: "module-exports",
      question: "What does module.exports / exports do?",
      answer:
        "CommonJS: module.exports is the value other files get via require(). exports is a shortcut reference to module.exports; reassigning exports alone does not change what is exported — assign module.exports = … for a new export object.",
      tags: ["modules"],
    },
    {
      id: "import-module",
      question: "How do you import a module in Node?",
      answer:
        "CommonJS: const x = require('./x'). ESM: import x from './x.js' (\"type\": \"module\" or .mjs). Prefer explicit extensions in ESM.",
      tags: ["modules"],
    },
    {
      id: "npm",
      question: "What is npm? Used modules? What is ~ and ^ in package.json?",
      answer:
        "npm is the Node package manager (install, scripts, registry). Common modules: express, cors, jsonwebtoken, bcrypt, mongoose, dotenv, winston/pino, multer, axios. ^1.2.3 allows minor/patch updates; ~1.2.3 allows patch only.",
      tags: ["npm"],
    },
    {
      id: "package-json",
      question: "What is package.json?",
      answer:
        "Project manifest: name, version, scripts, dependencies, engines, and metadata. npm/yarn/pnpm read it to install and run the project.",
      tags: ["npm"],
    },
    {
      id: "body-parser",
      question: "What is body-parser / urlencoded?",
      answer:
        "Parses request bodies. express.json() for JSON; express.urlencoded({ extended: true }) for form bodies. body-parser was separate; Express 4.16+ bundles equivalents.",
      tags: ["express"],
    },
    {
      id: "cors",
      question: "What is CORS?",
      answer:
        "Browser security: cross-origin requests need server permission via Access-Control-* headers. Use the cors package or set headers manually. Preflight OPTIONS checks methods/headers.",
      tags: ["security"],
    },
    {
      id: "cluster",
      question: "What is cluster?",
      answer:
        "cluster module forks workers sharing a server port so you use multiple CPU cores. One primary distributes connections; workers handle requests. Alternatives: PM2, containers, worker_threads for CPU tasks.",
      tags: ["scale"],
    },
    {
      id: "child-process",
      question: "What is a child process? spawn vs fork?",
      answer:
        "child_process runs another process. spawn: general (any command), streams stdio. fork: special spawn of another Node process with IPC channel. exec buffers full output (smaller tasks).",
      tags: ["scale"],
    },
    {
      id: "setimmediate-nexttick",
      question: "setImmediate vs process.nextTick vs setTimeout?",
      answer:
        "process.nextTick: runs before the event loop continues (can starve I/O if recursive). setImmediate: check phase, after poll. setTimeout(fn, 0): timers phase, at least next tick after delay. Prefer setImmediate for yielding to I/O.",
      tags: ["event-loop"],
    },
    {
      id: "repl",
      question: "What is REPL?",
      answer:
        "Read–Eval–Print Loop — interactive Node shell (node with no file) for quick experiments.",
      tags: ["basics"],
    },
    {
      id: "logging",
      question: "What is used for logging?",
      answer:
        "console for simples; production: pino or winston (levels, JSON, transports). Never log secrets/tokens.",
      tags: ["ops"],
    },
    {
      id: "let-vs-var",
      question: "Difference between let, var, and const?",
      answer:
        "var: function-scoped, hoisted (undefined). let/const: block-scoped, TDZ until init. const: no rebinding of the binding (object contents can still mutate).",
      tags: ["javascript"],
    },
    {
      id: "hoisting",
      question: "What is hoisting?",
      answer:
        "Declarations are processed before execution. var → undefined; function declarations fully hoisted; let/const exist in TDZ until initialized.",
      tags: ["javascript"],
    },
    {
      id: "closure",
      question: "What is a closure?",
      answer:
        "A function that remembers variables from its lexical outer scope even after that outer function has returned. Used for encapsulation, factories, and private state.",
      tags: ["javascript"],
    },
    {
      id: "arrow-vs-normal",
      question: "Normal function vs arrow function?",
      answer:
        "Arrow functions have no own this/arguments/super/new.target; this is lexical. They can’t be constructors. Prefer arrows for callbacks; methods that need dynamic this should use function or class methods.",
      tags: ["javascript"],
    },
    {
      id: "es5-es6",
      question: "ES5 vs ES6 (highlights)?",
      answer:
        "ES6 added let/const, arrow functions, classes, modules, promises, template literals, destructuring, spread/rest, Map/Set, default params, and more.",
      tags: ["javascript"],
    },
    {
      id: "destructuring",
      question: "What is object destructuring?",
      answer:
        "Unpack properties into variables: const { name, skills: { primary } } = user. Nested paths must exist or you get undefined/errors — you cannot destructure a primitive string as an object.",
      tags: ["javascript"],
    },
    {
      id: "typeof-null-undefined",
      question: "typeof undefined, typeof null, null === undefined?",
      answer:
        "typeof undefined → \"undefined\". typeof null → \"object\" (legacy bug). null == undefined is true; null === undefined is false.",
      tags: ["javascript"],
    },
    {
      id: "dynamic-typing",
      question: "Is JavaScript statically or dynamically typed?",
      answer:
        "Dynamically typed (and weakly typed). Types are checked at runtime. TypeScript adds static typing on top.",
      tags: ["javascript"],
    },
    {
      id: "global-object",
      question: "What is the global object?",
      answer:
        "In browsers: window (or globalThis). In Node: global (also globalThis). Prefer globalThis for portable code.",
      tags: ["javascript"],
    },
    {
      id: "hof",
      question: "What is a higher-order function?",
      answer:
        "A function that takes functions as arguments and/or returns a function — e.g. map, filter, reduce, middleware factories.",
      tags: ["javascript"],
    },
    {
      id: "currying",
      question: "What is currying?",
      answer:
        "Turning f(a,b,c) into f(a)(b)(c). Useful for partial application and reusable configured functions.",
      tags: ["javascript"],
    },
    {
      id: "call-apply-bind",
      question: "call, apply, bind?",
      answer:
        "fn.call(thisArg, a, b) and fn.apply(thisArg, [a,b]) invoke immediately with a given this. fn.bind(thisArg) returns a new function with this fixed.",
      tags: ["javascript"],
    },
    {
      id: "session-local-cookies",
      question: "Session vs localStorage vs cookies?",
      answer:
        "localStorage: persistent in browser, ~5MB, not sent automatically. sessionStorage: per-tab, cleared on tab close. Cookies: small, can be HttpOnly/Secure/SameSite; sent with matching requests — preferred for auth tokens if HttpOnly.",
      tags: ["web", "security"],
    },
    {
      id: "data-security-nodejs",
      question: "How do you ensure data security in Node apps?",
      answer:
        "HTTPS, helmet, input validation, parameterized queries, hashed passwords (bcrypt/argon2), short-lived JWTs + refresh rotation, HttpOnly cookies, rate limits, least-privilege DB users, secrets in env/vault, dependency audits.",
      tags: ["security"],
    },
    {
      id: "backend-validation",
      question: "Validation in the backend?",
      answer:
        "Never trust the client. Validate/sanitize with libraries (zod, joi, express-validator) at the edge of each request. Return clear 400 errors.",
      tags: ["security"],
    },
    {
      id: "hashtable-hashmap",
      question: "Hash table vs hash map?",
      answer:
        "Both map keys → values via hashing. In JS, Object and Map are hash-map-like; Map keeps insertion order, any key type, and clearer size/iteration semantics.",
      tags: ["ds"],
    },
    {
      id: "express-vs-node",
      question: "Express vs Node?",
      answer:
        "Node is the runtime. Express is a minimal web framework on top of Node’s http module (routing, middleware).",
      tags: ["express"],
    },
    {
      id: "put-vs-patch",
      question: "PUT vs PATCH?",
      answer:
        "PUT replaces the whole resource (idempotent full update). PATCH applies a partial update.",
      tags: ["http"],
    },
    {
      id: "advantages-disadvantages",
      question: "Advantages and disadvantages of Node.js?",
      answer:
        "Pros: fast I/O, one language full-stack, huge npm ecosystem, great for APIs/realtime. Cons: CPU-bound work blocks the loop; callback/async complexity; historically immature tooling for some domains (less of an issue now).",
      tags: ["basics"],
    },
    {
      id: "control-flow",
      question: "What is control flow in Node?",
      answer:
        "Ordering async work: sequential, parallel, waterfall. Managed with callbacks, promises, async/await, or libraries — not with blocking waits on the main thread.",
      tags: ["async"],
    },
    {
      id: "event-driven",
      question: "What is event-driven programming?",
      answer:
        "Logic reacts to events (emitters, EventEmitter, HTTP requests). Node’s core APIs are heavily event/callback based.",
      tags: ["basics"],
    },
    {
      id: "solid-userservice",
      question: "How are UserService instances created? (DI / SOLID example)",
      answer:
        "In the sample, ReviewService and ShortlistService both take UserService via constructor injection. Whether they share one instance depends on the DI container: singleton (typical default) → same object, so ReviewService.setName affects what ShortlistService reads; transient → separate instances with independent name. ApiController wires both services; it does not create UserService itself.",
      code: `// Typical DI (Nest/Inversify-style singleton):
// one UserService → reviews.init() sets name "ReviewService"
// → shortlist.init() logs "ReviewService"`,
      tags: ["solid", "di"],
    },
    {
      id: "post-increment-puzzle",
      question: "What does a = a++ repeated print?",
      answer:
        "a stays 5. Post-increment returns the old value, then increments briefly, then the assignment writes the old value back. console.log(a) → 5.",
      code: `var a = 5;
a = a++; // still 5
console.log(a); // 5`,
      tags: ["javascript", "puzzle"],
    },
    {
      id: "var-settimeout",
      question: "for + var + setTimeout: what logs?",
      answer:
        "var i is function-scoped and shared. After the loop i === 6; all five timeouts log 6. Fix: let i (block scope per iteration) or an IIFE/bind.",
      code: `for (var i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), 0); // 6,6,6,6,6
}
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), 0); // 1..5
}`,
      tags: ["javascript", "puzzle"],
    },
    {
      id: "lambda",
      question: "What is Lambda? (AWS)",
      answer:
        "AWS Lambda runs functions serverless in response to events — no always-on server. Common with API Gateway, S3, SQS.",
      tags: ["aws"],
    },
    {
      id: "s3",
      question: "What is S3? Limitations? Replica? Copy?",
      answer:
        "S3 is object storage (buckets/objects). Limits include object size (5 TB), request rates (scale with prefixes), and eventually consistent overwrite edge cases historically. Cross-Region Replication copies objects to another region. Copy: aws s3 cp / CopyObject API / console copy.",
      tags: ["aws"],
    },
    {
      id: "vpc",
      question: "What is a VPC?",
      answer:
        "Virtual Private Cloud — isolated network in AWS with subnets, route tables, security groups, NACLs for private app/DB placement.",
      tags: ["aws"],
    },
    {
      id: "microservices",
      question: "What are microservices?",
      answer:
        "Architecture of small, independently deployable services communicating over network (HTTP/gRPC/events). Tradeoffs: scale/team autonomy vs distributed complexity, ops, and consistency.",
      tags: ["architecture"],
    },
    {
      id: "api-types",
      question: "What types of APIs have you worked on?",
      answer:
        "Typical answer: REST (JSON over HTTP), sometimes GraphQL, webhooks, and internal RPC. Mention auth (JWT), versioning, pagination, and error shapes.",
      tags: ["http"],
    },
    {
      id: "rest-disadvantages",
      question: "Disadvantages of REST APIs?",
      answer:
        "Over/under-fetching, multiple round-trips for graphs of data, versioning pain, and no single standard for all conventions. GraphQL/RPC sometimes fit better.",
      tags: ["http"],
    },
    {
      id: "nodejs-flow",
      question: "Node.js request flow (Express mental model)?",
      answer:
        "TCP → http.Server → Express app → middleware chain → route handler → response (or error middleware). Async work schedules callbacks on the event loop; response ends when you send/end.",
      tags: ["express"],
    },
    {
      id: "passport",
      question: "What is Passport?",
      answer:
        "Auth middleware for Node with strategies (local, JWT, OAuth). Strategies verify credentials and attach user to the request.",
      tags: ["auth"],
    },
    {
      id: "file-upload-packages",
      question: "Packages for file uploading?",
      answer:
        "multer (multipart), busboy, formidable. Stream to disk/S3; validate MIME/size; never trust client filenames.",
      tags: ["express"],
    },
    {
      id: "why-nodejs",
      question: "Why use Node.js?",
      answer:
        "Non-blocking I/O, shared JS with frontend, strong ecosystem for APIs and realtime (WebSockets), fast iteration.",
      tags: ["basics"],
    },
    {
      id: "npm-version-flag",
      question: "Why use -v / --version?",
      answer:
        "Quickly check installed tool versions: node -v, npm -v — useful for debugging environment mismatches.",
      tags: ["npm"],
    },
    {
      id: "solid-principles",
      question: "SOLID principles (brief)?",
      answer:
        "S: single responsibility. O: open for extension, closed for modification. L: subtypes substitutable. I: small interfaces. D: depend on abstractions (DI), not concretions.",
      tags: ["solid"],
    },
    {
      id: "abstraction-vs-interface",
      question: "Abstraction vs interface?",
      answer:
        "Abstraction hides details behind a simpler surface. An interface (or TypeScript interface / abstract class) defines a contract without implementation. Classes implement interfaces; abstractions can be interfaces or abstract base types.",
      tags: ["oop"],
    },
    {
      id: "implicit-explicit",
      question: "Implicit vs explicit (operators/coercion)?",
      answer:
        "Implicit: JS coerces types automatically (1 + \"2\" → \"12\"). Explicit: you convert (Number(\"2\"), String(1)). Prefer explicit conversions for clarity.",
      tags: ["javascript"],
    },
  ],
};
