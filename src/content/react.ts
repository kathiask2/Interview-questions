import type { Category } from "./types";

export const reactCategory: Category = {
  id: "react",
  title: "React & Frontend",
  shortTitle: "React",
  description:
    "React hooks, Redux, performance, components, browser APIs, and frontend interview topics.",
  items: [
    {
      id: "what-are-hooks",
      question: "What are hooks? Types of hooks?",
      answer:
        "Hooks let function components use state and side effects. Built-ins: useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer, useLayoutEffect, useImperativeHandle, useId, useTransition, useDeferredValue, useSyncExternalStore. Custom hooks: functions named use* that call other hooks.",
      tags: ["hooks"],
    },
    {
      id: "custom-vs-normal-hooks",
      question: "Custom hooks vs normal hooks?",
      answer:
        "Custom hooks reuse stateful logic; they don’t render UI. Rules of Hooks still apply (top level, React functions only).",
      tags: ["hooks"],
    },
    {
      id: "usememo",
      question: "What is useMemo?",
      answer:
        "Caches a computed value between renders; recomputes only when dependencies change. Use for expensive pure calculations, not as a default optimization.",
      tags: ["hooks", "perf"],
    },
    {
      id: "usememo-vs-usecallback",
      question: "useMemo vs useCallback?",
      answer:
        "useMemo memoizes a value. useCallback memoizes a function (sugar for useMemo(() => fn, deps)). Both help when referential equality matters (memo children, effect deps).",
      tags: ["hooks", "perf"],
    },
    {
      id: "useselector",
      question: "What is useSelector?",
      answer:
        "React-Redux hook that reads a slice of the store and re-renders when the selected value changes (shallow compare by default).",
      tags: ["redux"],
    },
    {
      id: "usecontext",
      question: "What is Context / useContext? Limits?",
      answer:
        "Context passes data down without prop drilling. useContext(MyContext) reads the nearest Provider. Limits: not a full state manager — frequent updates re-render all consumers; split contexts or use a store for high-churn state.",
      tags: ["hooks"],
    },
    {
      id: "pass-data-components",
      question: "How to pass data between components?",
      answer:
        "Props (parent→child), lifting state, Context, Redux/Zustand, URL/search params, refs/imperative handles for rare parent→child commands.",
      tags: ["state"],
    },
    {
      id: "child-to-child-no-store",
      question: "Pass data between siblings without a store?",
      answer:
        "Lift state to the nearest common parent and pass props/callbacks down. Alternatively Context for deeper trees.",
      tags: ["state"],
    },
    {
      id: "access-store",
      question: "Ways to get data from the Redux store?",
      answer:
        "useSelector in components; store.getState() outside React; connect() (legacy). Dispatch with useDispatch.",
      tags: ["redux"],
    },
    {
      id: "what-is-redux",
      question: "What is Redux? What is the store?",
      answer:
        "Predictable state container: single store, actions describe changes, reducers (pure) produce next state. Store holds state and exposes getState, dispatch, subscribe.",
      tags: ["redux"],
    },
    {
      id: "reducer",
      question: "What is a reducer?",
      answer:
        "Pure function (state, action) => nextState. No side effects; used by Redux and useReducer.",
      tags: ["redux"],
    },
    {
      id: "thunk",
      question: "What is Redux Thunk and how is it used?",
      answer:
        "Middleware that lets you dispatch functions. Those functions receive dispatch/getState and run async work (API calls), then dispatch plain actions.",
      code: `const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: "USER_LOADING" });
  const data = await api.getUser(id);
  dispatch({ type: "USER_SUCCESS", payload: data });
};`,
      tags: ["redux"],
    },
    {
      id: "middleware-react",
      question: "What is middleware in React/Redux?",
      answer:
        "Redux middleware sits between dispatch and reducers (logging, thunks, sagas). React itself doesn’t have Express-style middleware; Next.js middleware runs on the edge for requests.",
      tags: ["redux"],
    },
    {
      id: "lazy-loading",
      question: "What is lazy loading?",
      answer:
        "Load code/assets only when needed. React: React.lazy(() => import('./Page')) + Suspense. Also route-based code splitting and image lazy loading.",
      tags: ["perf"],
    },
    {
      id: "fragment",
      question: "What is a Fragment?",
      answer:
        "<>...</> or <React.Fragment> groups children without an extra DOM node.",
      tags: ["basics"],
    },
    {
      id: "functional-vs-class",
      question: "Functional vs class components? Why functional is preferred?",
      answer:
        "Functional + hooks are the modern default: less boilerplate, easier reuse via custom hooks, better tree-shaking mental model. Classes still work; lifecycle maps to useEffect.",
      tags: ["basics"],
    },
    {
      id: "lifecycle",
      question: "React lifecycle / componentWillUnmount?",
      answer:
        "Class: mount → update → unmount. componentWillUnmount cleans up. Hooks: useEffect(() => { …; return cleanup }, deps) — cleanup runs on unmount and before re-running the effect.",
      tags: ["hooks"],
    },
    {
      id: "virtual-dom",
      question: "Virtual DOM vs real DOM? Why advantageous?",
      answer:
        "Virtual DOM is a JS tree React diffs against the previous tree, then applies a minimal update to the real DOM. Advantage: declarative UI with batched, targeted DOM writes (the real win is the programming model + reconciliation).",
      tags: ["basics"],
    },
    {
      id: "dom-vs-bom",
      question: "DOM vs BOM?",
      answer:
        "DOM: document tree APIs. BOM: browser APIs around the page (window, navigator, location, history). Neither is “real BOM” vs Virtual DOM — Virtual DOM is React’s abstraction over DOM updates.",
      tags: ["browser"],
    },
    {
      id: "pure-components",
      question: "What are pure components?",
      answer:
        "Components that render the same output for the same props/state and skip re-render when inputs are shallow-equal — React.PureComponent or React.memo.",
      tags: ["perf"],
    },
    {
      id: "controlled-uncontrolled",
      question: "Controlled vs uncontrolled components?",
      answer:
        "Controlled: form value lives in React state; onChange updates it. Uncontrolled: DOM holds the value; read via refs. Prefer controlled for validation and single source of truth.",
      tags: ["forms"],
    },
    {
      id: "getters-setters",
      question: "Getters and setters?",
      answer:
        "Object accessors get/set that run logic on property read/write. In React forms you usually use state setters (setX), not JS getters, for UI state.",
      tags: ["javascript"],
    },
    {
      id: "styled-components",
      question: "What is styled-components? useStyle?",
      answer:
        "CSS-in-JS library: const Button = styled.button`…`. Styles are colocated with components. “useStyle” often means a custom hook returning classNames/styles (or libraries like MUI’s sx / Emotion).",
      tags: ["css-in-js"],
    },
    {
      id: "axios",
      question: "Is Axios best to use? How to call APIs from React?",
      answer:
        "fetch is built-in; Axios adds interceptors, JSON defaults, cancel tokens. Neither is universally “best” — pick one and wrap it. Call APIs in useEffect, event handlers, or route loaders; handle loading/error states.",
      code: `useEffect(() => {
  let cancelled = false;
  (async () => {
    try {
      const res = await fetch("/api/items");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      if (!cancelled) setItems(data);
    } catch (e) {
      if (!cancelled) setError(e);
    }
  })();
  return () => { cancelled = true; };
}, []);`,
      tags: ["http"],
    },
    {
      id: "interceptor",
      question: "What is an interceptor?",
      answer:
        "Axios hooks that run before requests or after responses — attach Authorization headers, refresh tokens, or map errors globally.",
      tags: ["http"],
    },
    {
      id: "debounce-throttle",
      question: "Debouncing vs throttling?",
      answer:
        "Debounce: wait until calls stop for N ms (search input). Throttle: at most once per N ms (scroll/resize handlers).",
      tags: ["perf"],
    },
    {
      id: "memoization",
      question: "What is memoization?",
      answer:
        "Caching results of pure functions keyed by inputs. In React: useMemo, useCallback, React.memo, and memoized selectors.",
      tags: ["perf"],
    },
    {
      id: "file-upload",
      question: "How to upload a file?",
      answer:
        "Controlled <input type=\"file\"> → FormData → fetch/Axios multipart POST. Show progress; validate type/size client-side and again on the server.",
      tags: ["forms"],
    },
    {
      id: "form-validation",
      question: "Form validation in React?",
      answer:
        "Controlled inputs + validation on change/blur/submit, or libraries (React Hook Form, Formik) with schema validators (zod/yup).",
      tags: ["forms"],
    },
    {
      id: "cors-frontend",
      question: "What is CORS (frontend view)?",
      answer:
        "Browsers block cross-origin responses unless the server sends proper CORS headers. Fix on the server (or same-origin proxy in Next/Vite), not by disabling browser security.",
      tags: ["security"],
    },
    {
      id: "doctype",
      question: "Why use doctype in HTML?",
      answer:
        "<!DOCTYPE html> puts the browser in standards mode so layout isn’t quirks-mode weird.",
      tags: ["html"],
    },
    {
      id: "semantic-elements",
      question: "What are semantic elements?",
      answer:
        "Tags that describe meaning: header, nav, main, article, section, aside, footer, figure. Better a11y and SEO than div soup.",
      tags: ["html"],
    },
    {
      id: "forwardref-imperative",
      question: "forwardRef + useImperativeHandle (Parent/Child example)?",
      answer:
        "Parent holds a ref; Child uses forwardRef and useImperativeHandle to expose methods (e.g. getAlert) to the parent. Prefer props/callbacks for normal data flow; imperative handles are for focus, scroll, animation APIs.",
      code: `// Child exposes getAlert(); Parent: childRef.current.getAlert()`,
      tags: ["hooks", "refs"],
    },
    {
      id: "filter-map",
      question: "filter / map in React lists?",
      answer:
        "filter selects items; map turns items into elements. Always give list children stable keys.",
      code: `const result = arr.filter((item) => item.age < 27);
return result.map((item) => (
  <p key={item.id}>{item.name}: {item.age}</p>
));`,
      tags: ["javascript"],
    },
    {
      id: "promises-in-react",
      question: "Promises in React?",
      answer:
        "Same JS promises; in components prefer async IIFE inside useEffect or event handlers, and cancel/ignore results on unmount to avoid setting state after unmount.",
      tags: ["async"],
    },
    {
      id: "polling",
      question: "Polling vs pulling?",
      answer:
        "Polling: client repeatedly requests updates on an interval. Pulling often means the client requests on demand. Alternatives: WebSockets, SSE, server push.",
      tags: ["http"],
    },
    {
      id: "improve-performance",
      question: "How to improve React app performance?",
      answer:
        "Code-split routes, memoize heavy subtrees, virtualize long lists, avoid unnecessary state, stabilize callbacks/props, optimize images, measure with Profiler/React DevTools before optimizing.",
      tags: ["perf"],
    },
    {
      id: "exception-react",
      question: "How to handle exceptions in React?",
      answer:
        "try/catch around async logic; Error Boundaries (componentDidCatch / getDerivedStateFromError or react-error-boundary) for render errors; show fallback UI and log.",
      tags: ["errors"],
    },
  ],
};
