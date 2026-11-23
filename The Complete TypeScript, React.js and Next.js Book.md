# The Complete TypeScript, React.js and Next.js Book

Nov 22, 2026 · @Albert Hackthon

## Preface: Read This First

Welcome to Book 2. In Book 1 you learned JavaScript, Node.js and Express and built full websites with server-rendered pages and APIs. In this book you learn the three tools that most modern web teams use for the user interface and the full-stack application layer:

- **TypeScript**: JavaScript with types, so that a whole class of bugs is caught while you type instead of after you ship.
- **React**: a library for building user interfaces from small reusable components that update automatically when your data changes.
- **Next.js**: a framework built on React that adds routing, server rendering, data fetching, API endpoints, caching and easy deployment, so that you can build a complete, fast, search-engine-friendly website in one project.

### What you should know first

This book assumes you finished Book 1, or that you are comfortable with: variables, functions, arrays and objects, `map` and `filter`, destructuring and spread, modules (`import` and `export`), `async` and `await`, `fetch`, JSON, basic HTML and CSS, and the idea of a REST API with a database behind it. If a topic feels shaky, revisit the matching chapter of Book 1 first. We refer back to it often.

### Versions used in this book

The web ecosystem moves quickly, so here are the versions this book is written for (current at the time of writing, late 2026):

| Tool | Version | Notes |
| --- | --- | --- |
| Node.js | Current LTS (Node 22 or newer) | Use a version manager (nvm, fnm, Volta) |
| TypeScript | 7.x | The 7.0 release is a native port of the compiler, around ten times faster than 6.0. The language you write is the same TypeScript |
| React | 19.x (19.3 at the time of writing) | Actions, `use`, `useActionState`, `useOptimistic`, `useEffectEvent`, `Activity`, View Transitions, stable React Compiler |
| Next.js | 16.x (16.3 at the time of writing) | App Router, Turbopack by default, `proxy.ts` replacing `middleware.ts`, Cache Components with `use cache`, async `params` |
| Vite | Current | For plain React single-page apps |

Two habits will protect you from version confusion:

1. When you start a project, run the official generator (`npm create vite@latest`, `npx create-next-app@latest`). It sets up the current recommended structure.
2. When an example in an older tutorial fails, check the version it targets. Next.js in particular has changed a lot between 12, 13, 14, 15 and 16. This book teaches the modern **App Router**, not the old Pages Router.

Also keep your framework **up to date**. Next.js now publishes scheduled security releases, so check for patches regularly (Chapter 22 shows how) and do not stay on an old version in production.

### How the book is organised

| Part | Chapters | What you can do after it |
| --- | --- | --- |
| 1. TypeScript | 1 to 5 | Type any JavaScript code, model data safely, configure projects, and add types to your Express API |
| 2. React | 6 to 13 | Build interactive single-page applications with state, effects, forms, routing and data fetching |
| 3. Next.js | 14 to 22 | Build full-stack apps with server components, caching, server actions, a database, authentication and deployment |
| 4. Capstone and growth | 23 to 24 | Build a complete production-style app and plan your next steps |

### How to study

- **Type the code.** Do not copy and paste. The editor's red underlines and error messages are your best teacher in TypeScript.
- **Keep a project open all the time.** Create one practice folder for TypeScript, one Vite project for React and one Next.js project, and try every example in them.
- **Read the errors.** TypeScript errors look long at first. Read the last line first: it usually states the real problem. Chapter 1 shows how.
- **Rebuild, do not just read.** At the end of every part there is a project. Finishing projects is what turns reading into skill.
- **Use the official documentation** as your reference: typescriptlang.org, react.dev and nextjs.org/docs. They have excellent interactive examples.

### Code conventions

- Files with TypeScript have the extension `.ts`; files that contain JSX (HTML-like syntax in code) use `.tsx`.
- `$` at the start of a line means a terminal command. Do not type the `$`.
- Comments with `//` explain the code. Lines in output blocks show what you should see.
- We use single quotes in code, two-space indentation, and semicolons, as in Book 1.

### A realistic timeline

With about two hours a day: TypeScript in about 2 weeks, React in about 5 to 6 weeks, Next.js in about 5 to 6 weeks, and the capstone in 2 weeks. About four months to become a confident modern full-stack developer. Take the time you need; consistency matters more than speed.

# Part 1: TypeScript

## Chapter 1: Why TypeScript? Setup and First Steps

In Book 1 you saw how easily JavaScript lets mistakes through. You can call a function with the wrong arguments, misspell a property, or forget that a value may be `undefined`, and the program only fails when a real user hits that line. **TypeScript** fixes this by checking your code **before it runs**.

### 1.1 What is TypeScript?

TypeScript is JavaScript plus a **type system**. You describe what kind of data your variables, function parameters and return values hold, and the TypeScript compiler checks that you use them consistently. Then it removes the types and produces plain JavaScript, which runs anywhere JavaScript runs.

```text
your code (.ts, .tsx)  -->  TypeScript checks the types  -->  plain JavaScript (.js)  -->  browser or Node.js
```

Important facts:

- **Every valid JavaScript program is valid TypeScript** (you may only get type warnings). You can adopt it gradually.
- **Types exist only at development time.** They are erased when the code runs. TypeScript does not make your program faster or slower, and it cannot check data that arrives at runtime (for example JSON from a server). For that you will validate with a library such as Zod (Chapter 4).
- TypeScript is developed by Microsoft as open source. Version 7 is a rewrite of the compiler in the Go language that is much faster, but the language you write is the same.

### 1.2 Why use it? A first example

```js
// JavaScript: runs, but is wrong
function getTotal(price, quantity) {
  return price * quantity;
}

console.log(getTotal('10', 3));        // 30 (works by accident because '10' * 3 converts)
console.log(getTotal(10));             // NaN: quantity is undefined
console.log(getTotal(10, 3, 'extra')); // 30: the extra argument is silently ignored
```

```ts
// TypeScript: the editor and compiler stop you before you run
function getTotal(price: number, quantity: number): number {
  return price * quantity;
}

getTotal('10', 3);        // Error: Argument of type 'string' is not assignable to parameter of type 'number'
getTotal(10);             // Error: Expected 2 arguments, but got 1
getTotal(10, 3, 'extra'); // Error: Expected 2 arguments, but got 3
```

**The benefits, in order of importance:**

1. **Fewer bugs.** Typos, wrong arguments, missing cases and `undefined` problems are caught immediately.
2. **Better editor help.** Autocomplete knows exactly which properties and methods exist. Hover to see types. Rename a function or property everywhere safely with one command.
3. **Types as documentation.** The signature `createUser(data: NewUser): Promise<User>` tells you much without reading the code, and it never goes out of date like a comment can.
4. **Safer refactoring.** Change a data shape and the compiler lists everything that must be updated.
5. **Easier teamwork** on large projects, which is why most companies use it for React and Node.js code.

**The costs:** a little more to write, new concepts to learn, and occasional fights with the compiler. This book keeps the learning curve gentle, and you will find the trade is worth it quickly.

### 1.3 Setting up a TypeScript project

Make sure Node.js is installed (`node --version`), then create a practice project:

```bash
$ mkdir ts-practice && cd ts-practice
$ npm init -y
$ npm install -D typescript tsx @types/node
$ npx tsc --init
```

What each does:

- `typescript` provides the compiler, the `tsc` command.
- `tsx` runs TypeScript files directly during development, with no manual compile step. (Recent Node.js versions can also run simple `.ts` files directly by stripping the types, but `tsx` supports more features and works everywhere.)
- `@types/node` supplies type information for Node.js built-ins such as `fs` and `process`.
- `tsc --init` creates `tsconfig.json`, the configuration file. We study it in Chapter 5. For now set at least these options:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

The most important option is **`"strict": true`**. It switches on all the strict checks (including catching `null` and `undefined` mistakes). Always use it in new projects. Without it, TypeScript is much less useful.

Add `"type": "module"` to `package.json` (as in Book 1) and these scripts:

```json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "typecheck": "tsc --noEmit",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

- `npm run dev` runs and restarts your file when you save.
- `npm run typecheck` checks the types without producing files (`--noEmit`). Run it in CI and before commits.
- `npm run build` compiles to JavaScript in `dist/`.

**Editor.** VS Code has TypeScript built in, so red underlines and hover tips work immediately. Hover over any variable to see its type. Press F12 to jump to a definition, F2 to rename safely, and Ctrl+Space for suggestions.

### 1.4 Your first TypeScript file

Create `src/index.ts`:

```ts
const name: string = 'Albert';
const age: number = 22;
const isStudent: boolean = true;

function greet(person: string, years: number): string {
  return `Hello ${person}, you are ${years} years old.`;
}

console.log(greet(name, age));
```

Run `npm run dev`. Now introduce a mistake on purpose:

```ts
console.log(greet(age, name));
```

The editor underlines both arguments, and `npm run typecheck` prints:

```text
src/index.ts:11:19 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### 1.5 Type annotations and type inference

You write a **type annotation** after a colon: `name: string`. But you often do not need one, because TypeScript **infers** the type from the value:

```ts
let city = 'Pune';        // inferred as string
city = 'Delhi';           // ok
// city = 42;             // Error: Type 'number' is not assignable to type 'string'

const count = 10;         // inferred as the literal type 10 (a const cannot change)
const items = [1, 2, 3];  // inferred as number[]

function double(n: number) {
  return n * 2;           // return type inferred as number
}
```

**The rule of thumb:**

- **Annotate** function parameters (TypeScript cannot guess them), exported function return types when it helps readers, and variables that start empty.
- **Let inference** handle everything else. Over-annotating makes code noisy.

```ts
let price: number;        // annotation needed: no initial value to infer from
price = 19.99;

const tags: string[] = []; // annotation needed: an empty array would be inferred as never[]
```

### 1.6 The basic types at a glance

```ts
let a: string = 'text';
let b: number = 42;          // integers and decimals
let c: boolean = false;
let d: null = null;
let e: undefined = undefined;
let f: string[] = ['a', 'b'];             // array of strings
let g: Array<number> = [1, 2, 3];         // same idea, different syntax
let h: [string, number] = ['age', 22];    // tuple: fixed length and types
let i: unknown = JSON.parse('{}');        // anything, but you must check before using it
let j: any = 'avoid me';                  // switches checking off: avoid
```

Chapter 2 covers each of these in depth.

### 1.7 Reading TypeScript errors

TypeScript errors can be long, but they follow a pattern. Take this one:

```ts
const user = { name: 'Asha', age: 22 };
console.log(user.email);
```

```text
Property 'email' does not exist on type '{ name: string; age: number; }'.
```

How to read errors:

1. **Read the first line** for the simple statement, then the **last line** of a long error: nested explanations end with the actual mismatch.
2. Note the **error code** (for example `TS2339`). Searching `TS2339` finds explanations.
3. Hover over the underlined code to see the types TypeScript believes are present. Most confusion comes from the compiler knowing something different from what you assumed.
4. Fix the cause (change the code or the type). Avoid silencing the error.

The escape hatches, and why to use them sparingly:

```ts
// @ts-expect-error: we know this is wrong, and it should stay a reminder
const wrong: number = 'oops';

const value = JSON.parse('{"a":1}') as { a: number };   // a type assertion: you promise the shape
const el = document.querySelector('input')!;            // non-null assertion: you promise it exists
```

Assertions (`as`) and `!` tell the compiler to trust you. If you are wrong, the program still crashes at runtime. Prefer checking the value (narrowing, Chapter 3) over asserting.

### 1.7.1 TypeScript in the browser: a quick look

In real front-end projects (Vite, Next.js) you do not compile by hand. The tool runs TypeScript for you and shows type errors in the editor and terminal. You only write `.ts` and `.tsx` files. This chapter's Node setup is the simplest place to learn the language itself.

### 1.8 Converting JavaScript to TypeScript gradually

If you have a JavaScript project (like your Book 1 Express app):

1. Install TypeScript and `@types/...` packages (for example `@types/express`).
2. Add a `tsconfig.json` with `"allowJs": true` and `"checkJs": false`, so JS files still work.
3. Rename files one by one from `.js` to `.ts`, starting with small utility files, then fix errors.
4. Turn on `strict` once most files are converted.
5. Add types to the most important functions and data shapes first (API requests and responses, database models).

### 1.9 Common beginner mistakes

- Turning off `strict` because errors are annoying. The errors are the point.
- Using `any` everywhere, which makes TypeScript pointless. Use `unknown` and narrow instead (Chapter 2).
- Believing types check runtime data. A value typed `User` that came from `fetch` is not verified; validate it.
- Over-annotating variables that inference handles well.
- Fighting the compiler with assertions instead of understanding why it complains.

### Chapter 1 summary

- TypeScript adds static types to JavaScript, checks them before running, then erases them.
- Set up with `typescript`, `tsx` and `@types/node`; use `strict: true`; use `tsc --noEmit` to check.
- Annotate parameters; let inference do the rest.
- Read errors from the first and last lines, and avoid silencing them with `any` or assertions.

### Exercises

1. Create the practice project and run the examples from this chapter. Introduce three different mistakes on purpose and read each error.
2. Write `function add(a: number, b: number): number` and call it with a string. What exactly does the error say?
3. Write a function `fullName(first: string, last: string)` and hover over it to see its inferred return type.
4. Take one small JavaScript file from Book 1 (for example the word counter), rename it to `.ts` and fix all errors.
5. Find out what `noImplicitAny` does and test it by writing a function with an untyped parameter.

## Chapter 2: Types in Depth

This chapter gives you the full toolbox of basic types and shows how to type functions. After it you can add types to most everyday JavaScript.

### 2.1 Primitive types

```ts
const username: string = 'asha';
const score: number = 98.5;        // one type for integers and decimals
const isActive: boolean = true;
const big: bigint = 9007199254740993n;
const id: symbol = Symbol('id');
const nothing: null = null;
const notSet: undefined = undefined;
```

Primitive type names are lowercase (`string`, `number`, `boolean`). The capitalised `String`, `Number`, `Boolean` refer to wrapper objects. Never use them as types.

### 2.2 Arrays and tuples

```ts
const names: string[] = ['Asha', 'Ravi'];
const scores: Array<number> = [90, 85];         // identical to number[]
const matrix: number[][] = [[1, 2], [3, 4]];
const readonlyList: readonly string[] = ['a', 'b'];   // cannot push, pop or change

names.push('Meera');      // ok
// names.push(42);        // Error: number is not assignable to string

const first = names[0];   // string (with noUncheckedIndexedAccess it becomes string | undefined)
```

A **tuple** is an array with a fixed length where each position has its own type:

```ts
const point: [number, number] = [10, 20];
const entry: [string, number] = ['age', 22];
const [key, value] = entry;                    // destructuring keeps the types

type RGB = [red: number, green: number, blue: number];   // labelled tuple elements
const orange: RGB = [255, 165, 0];

// Tuples are what React's useState returns: [value, setValue]
```

### 2.3 Literal types and unions

A **literal type** is one exact value. A **union** (`|`) means 'this or that'. Together they replace many bug-prone strings and numbers.

```ts
let direction: 'left' | 'right' | 'up' | 'down' = 'left';
direction = 'up';
// direction = 'north';   // Error: not one of the allowed values

type Status = 'idle' | 'loading' | 'success' | 'error';
let status: Status = 'idle';

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let id: string | number = 'abc123';
id = 42;                     // ok: either type allowed

let maybeName: string | null = null;      // very common: a value that may be missing
let optionalAge: number | undefined;
```

When a value can be one of several types you must **narrow** it before using type-specific features:

```ts
function format(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase();         // here id is string
  }
  return id.toFixed(2);              // here id is number
}
```

Narrowing is the heart of working with TypeScript and is explored fully in Chapter 3.

### 2.4 any, unknown, never and void

**`any`** turns off type checking for a value. It is contagious and defeats the purpose of TypeScript.

```ts
let x: any = 'hello';
x.foo.bar();        // no error at compile time... crashes at runtime
x = 42;             // anything goes
```

**`unknown`** is the safe alternative. It means 'a value of a type I do not know yet', and TypeScript forces you to check before using it:

```ts
let input: unknown = JSON.parse('{"name":"Asha"}');

// input.name;                    // Error: 'input' is of type 'unknown'

if (typeof input === 'object' && input !== null && 'name' in input) {
  console.log(input.name);         // now allowed (type is { name: unknown })
}

function parseNumber(value: unknown): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Number(value))) return Number(value);
  throw new Error('Not a number');
}
```

Use `unknown` for data you do not control (JSON, form data, `catch` clause values), then narrow or validate (Chapter 4 shows Zod).

**`void`** is the return type of functions that return nothing:

```ts
function log(message: string): void {
  console.log(message);
}
```

**`never`** is the type of values that never happen: a function that always throws or never ends, and the 'impossible' branch of a check. It is the key to exhaustive checks (Chapter 3):

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

**Errors in `catch`** are `unknown` under strict settings:

```ts
try {
  riskyOperation();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log('Unknown error', error);
  }
}
```

### 2.5 Functions

```ts
// Parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameter (the type becomes number | undefined)
function greet(name: string, greeting?: string): string {
  return `${greeting ?? 'Hello'}, ${name}!`;
}

// Default parameter (type is inferred)
function power(base: number, exponent = 2): number {
  return base ** exponent;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Object parameter with destructuring (very common in React)
function createUser({ name, age = 18 }: { name: string; age?: number }) {
  return { name, age };
}
```

**Function types** describe the shape of a function, which you need when passing callbacks:

```ts
type Operation = (a: number, b: number) => number;

const subtract: Operation = (a, b) => a - b;      // parameter types are inferred from Operation

function applyOperation(a: number, b: number, op: Operation): number {
  return op(a, b);
}

applyOperation(10, 3, (x, y) => x * y);

// A callback with no return value
function repeat(times: number, action: (index: number) => void): void {
  for (let i = 0; i < times; i++) action(i);
}
```

**Async functions** return promises, and you write the type of the resolved value inside `Promise<...>`:

```ts
async function fetchUserName(id: number): Promise<string> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();     // json() returns Promise<any>: validate it in real code
  return user.name;
}
```

**Overloads** allow several call signatures for one function. They are useful for library code but rarely needed in application code, so use a union type instead when you can:

```ts
function parse(value: string): number;
function parse(value: string[]): number[];
function parse(value: string | string[]): number | number[] {
  return Array.isArray(value) ? value.map(Number) : Number(value);
}
```

**`this` parameter** (rarely needed): `function onClick(this: HTMLButtonElement, event: MouseEvent) {}`.

### 2.6 Enums and their alternatives

TypeScript has an `enum` keyword that creates a set of named constants:

```ts
enum Role {
  User,       // 0
  Admin,      // 1
  Editor,     // 2
}

const r: Role = Role.Admin;

enum Color { Red = 'RED', Green = 'GREEN' }   // string enum
```

Enums generate extra JavaScript code and have some surprising behaviours. Many teams prefer a **union of literals** or a **const object**, which are simpler and erased at runtime:

```ts
type Role = 'user' | 'admin' | 'editor';

const ROLES = ['user', 'admin', 'editor'] as const;    // readonly tuple of literals
type RoleFromList = (typeof ROLES)[number];            // 'user' | 'admin' | 'editor'

const Status = {
  Idle: 'idle',
  Loading: 'loading',
} as const;
type StatusValue = (typeof Status)[keyof typeof Status];   // 'idle' | 'loading'
```

The pattern `as const` freezes a value into its most specific literal type. It is very useful, and you will see it in Next.js and React code. If you want a rule: **prefer literal unions** unless a library requires enums.

### 2.7 Type assertions and the non-null operator, revisited

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement;   // assertion
const input = document.querySelector<HTMLInputElement>('#name');         // generic form: safer
console.log(input?.value);                                                 // handle null with ?.

const el = document.querySelector('.box')!;      // non-null assertion: only when truly certain
```

The **`satisfies`** operator checks that a value fits a type **without changing its inferred type**. It is a modern, safer alternative to assertions:

```ts
type Theme = Record<string, string>;

const theme = {
  primary: '#4f46e5',
  danger: '#dc2626',
} satisfies Theme;

theme.primary.toUpperCase();    // still knows primary is a string
// theme.other                  // Error: no such key (a plain annotation would have allowed it)
```

### 2.8 Strict mode flags worth knowing

`strict: true` enables a family of checks. The most important:

| Flag | What it catches |
| --- | --- |
| `strictNullChecks` | Using a value that might be `null` or `undefined` |
| `noImplicitAny` | Missing types where TypeScript cannot infer them |
| `strictFunctionTypes` | Unsafe function parameter assignments |
| `strictPropertyInitialization` | Class properties never set in the constructor |
| `useUnknownInCatchVariables` | Treats `catch (error)` as `unknown` |

Two extra flags that are not part of `strict` but are very useful in new projects:

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true,   // array[index] and object[key] may be undefined
    "noImplicitReturns": true,          // every code path in a function must return
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": false
  }
}
```

`strictNullChecks` is where TypeScript saves you most often:

```ts
function getLength(text: string | null): number {
  // return text.length;       // Error: 'text' is possibly 'null'
  return text?.length ?? 0;    // ok
}

const users = ['Asha', 'Ravi'];
const third = users[2];         // with noUncheckedIndexedAccess this is string | undefined
console.log(third?.toUpperCase());
```

### 2.9 Type aliases (a first look)

A `type` gives a name to any type, so you can reuse it:

```ts
type ID = string | number;
type Point = [number, number];
type Callback = (error: Error | null, result?: string) => void;

function findUser(id: ID): void {}
```

Chapter 3 uses `type` and `interface` to describe objects, which is where they matter most.

### 2.10 Practical example: a typed utility library

```ts
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (size < 1) throw new RangeError('size must be at least 1');
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function groupBy<T, K extends string | number>(items: readonly T[], getKey: (item: T) => K): Record<K, T[]> {
  const groups = {} as Record<K, T[]>;
  for (const item of items) {
    const key = getKey(item);
    (groups[key] ??= []).push(item);
  }
  return groups;
}

console.log(chunk([1, 2, 3, 4, 5], 2));                      // [[1, 2], [3, 4], [5]]
console.log(groupBy(['apple', 'avocado', 'banana'], (s) => s[0]));
```

The `<T>` in `chunk` is a **generic**: a placeholder for 'some type to be decided when called'. Generics are the subject of Chapter 4.

### 2.11 Common mistakes

- Using `any` to make an error disappear. Use `unknown` and narrow.
- Writing `Object`, `Function`, `String` as types instead of `object` (or a specific shape), a function type, and `string`.
- Forgetting that `typeof null` is `'object'`: check `value !== null` too.
- Assuming array indexing returns a definite value.
- Using enums when a union of string literals would be simpler.
- Assertions with `as` that hide real problems.

### Chapter 2 summary

- Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`. Arrays: `T[]`. Tuples: fixed-length arrays.
- Literal and union types model exact sets of values; narrowing selects the right branch.
- Prefer `unknown` over `any`; `void` and `never` describe functions that return nothing or never return.
- Type functions with parameter and return types, function type aliases, optional and default parameters, and `Promise<T>` for async.
- Prefer literal unions or `as const` objects over enums; use `satisfies` instead of unnecessary assertions.
- Always enable `strict`.

### Exercises

1. Write a function `formatPrice(amount: number, currency: 'INR' | 'USD' | 'EUR' = 'INR'): string`.
2. Write `parseJsonSafe(text: string): unknown` and a function that safely reads the `name` property from its result.
3. Define `type Status = 'draft' | 'published' | 'archived'` and a function that returns a label for each status.
4. Write `first<T>(items: readonly T[]): T | undefined`. What changes when `noUncheckedIndexedAccess` is on?
5. Convert an `enum` to an `as const` object and derive the union type from it.
6. Create a tuple type for a `[latitude, longitude]` pair and a function that returns the distance between two points.

## Chapter 3: Objects, Interfaces, Unions and Narrowing

Most real data is an object: a user, a product, an API response, the props of a React component. This chapter teaches you to describe object shapes, combine types, and make TypeScript understand which variant of a value you hold. These are the skills you will use every day in React and Next.js.

### 3.1 Object types

You can describe an object's shape inline:

```ts
const user: { name: string; age: number; email?: string } = {
  name: 'Asha',
  age: 22,
};

console.log(user.name);
// console.log(user.phone);   // Error: Property 'phone' does not exist
user.email = 'asha@example.com';   // ok: email is optional (string | undefined)
```

Syntax details: properties are separated by `;` or `,`. A `?` after the name makes it optional. `readonly` makes it immutable:

```ts
type Point = {
  readonly x: number;
  readonly y: number;
};

const p: Point = { x: 1, y: 2 };
// p.x = 5;   // Error: Cannot assign to 'x' because it is a read-only property
```

### 3.2 Type aliases and interfaces

Inline types become messy when reused. Give them names with `type` or `interface`.

```ts
type User = {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatarUrl?: string;
};

interface Product {
  id: number;
  title: string;
  price: number;
  tags: string[];
}

function printUser(user: User): void {
  console.log(`${user.name} <${user.email}>`);
}

const products: Product[] = [
  { id: 1, title: 'Laptop', price: 55000, tags: ['tech'] },
];
```

**Interface or type?** For objects they are nearly the same. The differences:

|  | `interface` | `type` |
| --- | --- | --- |
| Describe object shapes | Yes | Yes |
| Extend | `interface B extends A` | Intersection: `type B = A & { ... }` |
| Declaration merging (same name twice adds members) | Yes | No |
| Unions, tuples, primitives, mapped and conditional types | No | Yes |
| Classes can `implement` | Yes | Yes (object types) |

A practical rule many teams use: use `interface` for public object shapes that may be extended (and for class contracts), and `type` for everything else, especially unions and utility types. Both are fine. **Pick one convention and stay consistent in your project.** In this book we use `type` for most things, and `interface` where extension reads naturally.

### 3.3 Structural typing: shapes matter, not names

TypeScript uses **structural typing** (sometimes called 'duck typing'): a value is accepted if it has the required shape, no matter how it was created.

```ts
interface HasName { name: string }

function hello(entity: HasName) {
  return `Hello ${entity.name}`;
}

const dog = { name: 'Rex', breed: 'Labrador' };   // has extra property: fine
hello(dog);                                        // ok

// hello({ name: 'Rex', breed: 'Labrador' });      // Error! Excess property check applies to fresh object literals
```

The **excess property check** only triggers when you pass an object literal directly. It catches typos like `{ nmae: 'Rex' }`. Passing a variable skips the check because the extra data may be intentional.

### 3.4 Extending and combining types

```ts
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  school: string;
  grades: number[];
}

const s: Student = { name: 'Albert', age: 20, school: 'Tech Institute', grades: [90, 85] };

// Intersection (&): a value that must satisfy BOTH types
type Timestamps = { createdAt: Date; updatedAt: Date };
type Post = { id: number; title: string } & Timestamps;

const post: Post = { id: 1, title: 'Hi', createdAt: new Date(), updatedAt: new Date() };
```

### 3.5 Index signatures and Record

When you do not know the property names in advance (a dictionary):

```ts
type Scores = { [subject: string]: number };

const scores: Scores = { math: 90, science: 85 };
scores.english = 78;           // ok

// The shorter, preferred way:
type Scores2 = Record<string, number>;

// With a fixed set of keys: every key must be present
type Role = 'user' | 'admin' | 'editor';
const permissions: Record<Role, string[]> = {
  user: ['read'],
  admin: ['read', 'write', 'delete'],
  editor: ['read', 'write'],
};
```

If you forget one of the roles the compiler tells you. This is a common way to guarantee that every case is handled.

### 3.6 Union types in practice

A union says 'one of these types'. Typical uses:

```ts
type ID = string | number;
type MaybeUser = User | null;
type ApiResult = User[] | { error: string };
```

You can only use members that **all** types of the union have, until you narrow:

```ts
function describe(value: string | string[]) {
  // value.length           // ok: both have length
  // value.toUpperCase()    // Error: string[] has no toUpperCase

  if (Array.isArray(value)) {
    return value.join(', '); // value is string[] here
  }
  return value.toUpperCase(); // value is string here
}
```

### 3.7 Narrowing: how TypeScript understands your checks

When you test a value, TypeScript follows the logic and refines the type inside each branch. The tools:

```ts
// 1. typeof (primitives)
function padLeft(value: string | number) {
  return typeof value === 'number' ? ' '.repeat(value) : value;
}

// 2. Truthiness (removes null, undefined, 0, '' ...)
function printName(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());   // string
  }
}

// 3. Equality
function compare(a: string | number, b: string | boolean) {
  if (a === b) {
    a.toUpperCase();     // the only common type is string, so both are string here
  }
}

// 4. in operator (checks a property)
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) animal.swim();
  else animal.fly();
}

// 5. instanceof (classes, Date, Error)
function toDate(value: string | Date): Date {
  return value instanceof Date ? value : new Date(value);
}

// 6. Array.isArray
// 7. Optional chaining and nullish operators
const length = maybeText?.length ?? 0;
```

**Custom type guards.** Write your own check with a **type predicate** (`value is Type`):

```ts
interface Cat { meow: () => void }
interface Dog { bark: () => void }

function isCat(pet: Cat | Dog): pet is Cat {
  return 'meow' in pet;
}

function speak(pet: Cat | Dog) {
  if (isCat(pet)) pet.meow();
  else pet.bark();
}

// Filtering nulls out of arrays: a very common need
const items: (string | null)[] = ['a', null, 'b'];
const clean = items.filter((x): x is string => x !== null);   // string[]
```

One warning: a type predicate is a promise to the compiler. If your check is wrong, TypeScript will trust you anyway.

### 3.8 Discriminated unions: the most useful pattern

When a value can be one of several **variants**, give each variant a common property (the **discriminant**) with a unique literal value. TypeScript then knows exactly which variant you have after checking it.

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;            // shape is the circle variant
    case 'rectangle':
      return shape.width * shape.height;
    case 'triangle':
      return (shape.base * shape.height) / 2;
  }
}
```

**Exhaustive checking with `never`.** If you later add a new shape and forget to handle it, you want the compiler to remind you:

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}

function perimeter(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': return 2 * Math.PI * shape.radius;
    case 'rectangle': return 2 * (shape.width + shape.height);
    // Missing 'triangle': the default branch below fails to compile:
    default: return assertNever(shape);   // Error: Argument of type '{ kind: 'triangle'; ... }' is not assignable to 'never'
  }
}
```

**Modelling loading states.** This pattern removes a whole family of bugs in React:

```ts
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function render(state: RequestState<User[]>) {
  switch (state.status) {
    case 'idle': return 'Press the button';
    case 'loading': return 'Loading...';
    case 'success': return `${state.data.length} users`;    // data exists only here
    case 'error': return `Failed: ${state.error}`;           // error exists only here
  }
}
```

Compare with the common JavaScript habit of three separate variables (`loading`, `error`, `data`) that can get out of sync in impossible combinations ('loading and error at the same time'). A discriminated union makes illegal states **unrepresentable**.

Another important example is a **result type** that avoids exceptions for expected failures:

```ts
type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E };

function parseAge(input: string): Result<number> {
  const n = Number(input);
  if (!Number.isInteger(n) || n < 0 || n > 130) return { ok: false, error: 'Invalid age' };
  return { ok: true, value: n };
}

const result = parseAge('22');
if (result.ok) console.log(result.value);
else console.log(result.error);
```

### 3.9 Typing arrays of objects and common patterns

```ts
type Todo = { id: number; title: string; done: boolean };

const todos: Todo[] = [
  { id: 1, title: 'Learn TS', done: false },
  { id: 2, title: 'Learn React', done: false },
];

// map, filter, find: types flow through automatically
const titles = todos.map((t) => t.title);               // string[]
const open = todos.filter((t) => !t.done);               // Todo[]
const found = todos.find((t) => t.id === 2);             // Todo | undefined

if (found) console.log(found.title);

// Immutable updates keep types
const toggled: Todo[] = todos.map((t) => (t.id === 1 ? { ...t, done: !t.done } : t));

// Typing a function that takes a partial update
function updateTodo(todo: Todo, changes: Partial<Todo>): Todo {
  return { ...todo, ...changes };
}
```

`Partial<T>` makes every property optional. It is one of many **utility types** you meet in the next chapter.

### 3.10 Typing `fetch` responses honestly

```ts
type Post = { id: number; title: string; body: string; userId: number };

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data: unknown = await res.json();
  // We TRUST the server here. Chapter 4 shows how to verify the shape at runtime with Zod.
  return data as Post[];
}
```

This is the single biggest limitation of TypeScript: the types describe what you *expect*. The network can send anything, so for important data validate at the boundary.

### 3.11 Common mistakes

- Marking everything optional (`?`) so that errors disappear, which just moves the bug to runtime.
- Using a boolean pair like `isLoading` and `isError` instead of a discriminated union.
- Forgetting the `default` branch with `assertNever` in `switch` statements over unions.
- Writing type predicates with incorrect checks.
- Trusting API data without validation.
- Duplicating the same object shape in many places instead of defining it once and exporting it.

### Chapter 3 summary

- Describe objects with `type` or `interface`; use `?` for optional and `readonly` for immutable.
- TypeScript is structural: shapes matter, and extra properties are fine except in fresh literals.
- Combine with `extends` or `&`; model dictionaries with `Record`.
- Narrow unions with `typeof`, `in`, `instanceof`, truthiness, equality and custom type guards.
- Discriminated unions plus `never` checks model states and variants safely.

### Exercises

1. Define a `Product` type and a function `applyDiscount(product, percent): Product` that returns a new product.
2. Model a payment method as a discriminated union: card (with number and expiry), UPI (with id), cash. Write `describePayment(method): string` with an exhaustive `switch`.
3. Create `RequestState<T>` and write a function that returns a message for every state.
4. Write a type guard `isUser(value: unknown): value is User` that checks the properties at runtime.
5. Write `groupByStatus(todos)` that returns `Record<'open' | 'done', Todo[]>`.
6. Use `satisfies` to define a routes object where each route has a `path` and `label`, and use `as const` to keep the literal types.

## Chapter 4: Generics, Utility Types and Typing Real Data

Generics let you write one function, type or component that works with many types while staying fully type-safe. Utility types let you build new types from existing ones instead of copying them. Together they are what make TypeScript feel powerful, and they are behind most of the types you see in React and Next.js.

### 4.1 The problem generics solve

```ts
function firstNumber(items: number[]): number | undefined { return items[0]; }
function firstString(items: string[]): string | undefined { return items[0]; }
// ... a copy for every type? No.

function firstAny(items: any[]): any { return items[0]; }   // one function, but the result type is lost
```

A **generic** function has a **type parameter**, a placeholder written in angle brackets, which TypeScript fills in for each call:

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const n = first([1, 2, 3]);          // T is number  -> number | undefined
const s = first(['a', 'b']);         // T is string  -> string | undefined
const u = first<User>([]);           // you can also give T explicitly
```

The name `T` is a convention ('Type'). Use descriptive names when there are several: `TItem`, `TKey`, `TData`, or simple letters `K` (key), `V` (value), `E` (error).

### 4.2 Generic functions in practice

```ts
// Return the same type you receive
function identity<T>(value: T): T {
  return value;
}

// Two type parameters
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
const p = pair('age', 22);           // [string, number]

// Generic arrow function in a .tsx file needs a trailing comma or extends, so that it is not read as JSX
const wrap = <T,>(value: T) => ({ value });

// Callbacks keep types flowing
function mapArray<T, U>(items: T[], fn: (item: T) => U): U[] {
  return items.map(fn);
}
const lengths = mapArray(['one', 'three'], (s) => s.length);   // number[]
```

### 4.3 Constraints: limiting what T can be

`extends` restricts a type parameter to types that have certain properties:

```ts
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

longest('abc', 'de');         // ok: strings have length
longest([1, 2, 3], [1]);      // ok: arrays have length
// longest(10, 20);           // Error: numbers have no length

// Look up a property safely with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Asha', age: 22 };
const name = getProperty(user, 'name');    // string
const age = getProperty(user, 'age');      // number
// getProperty(user, 'email');              // Error: not a key of user
```

The building blocks used here:

- **`keyof T`**: a union of the property names of `T`. For `{ name: string; age: number }` it is `'name' | 'age'`.
- **`T[K]`**: an **indexed access type**, the type of property `K` in `T`.
- **`typeof value`** in a type position: the type of a variable. `type UserType = typeof user;`.

### 4.4 Generic types and interfaces

```ts
type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};

const r: ApiResponse<User[]> = { data: [], status: 200 };

interface Page<T> {
  items: T[];
  page: number;
  pages: number;
  total: number;
}

// Defaults for type parameters
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

// A generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  get size(): number { return this.items.length; }
}

const numbers = new Stack<number>();
numbers.push(1);
// numbers.push('a');   // Error
```

You already use generics: `Array<T>`, `Promise<T>`, `Record<K, V>`, `Map<K, V>`, `Set<T>`, and React's `useState<T>` all take type parameters.

### 4.5 Built-in utility types

TypeScript ships helpers that transform types. Start from one base type and derive the others, so a change is made in one place.

```ts
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  bio?: string;
};
```

| Utility | Result | Example |
| --- | --- | --- |
| `Partial<T>` | All properties optional | `Partial<User>` for an update payload |
| `Required<T>` | All properties required | `Required<User>` |
| `Readonly<T>` | All properties readonly | `Readonly<User>` |
| `Pick<T, K>` | Only the listed keys | `Pick<User, 'id' \| 'name'>` |
| `Omit<T, K>` | Everything except the keys | `Omit<User, 'password'>` for a public user |
| `Record<K, V>` | Object with keys K and values V | `Record<string, number>` |
| `Exclude<U, X>` | Remove members from a union | `Exclude<'a' \| 'b', 'a'>` is `'b'` |
| `Extract<U, X>` | Keep only matching union members | `Extract<string \| number, string>` |
| `NonNullable<T>` | Removes `null` and `undefined` | `NonNullable<string \| null>` is `string` |
| `ReturnType<F>` | Return type of a function | `ReturnType<typeof createUser>` |
| `Parameters<F>` | Tuple of a function's parameter types | `Parameters<typeof createUser>` |
| `Awaited<T>` | The resolved type of a Promise | `Awaited<Promise<string>>` is `string` |

```ts
type PublicUser = Omit<User, 'password'>;
type NewUser = Omit<User, 'id'>;
type UserPreview = Pick<User, 'id' | 'name'>;
type UserUpdate = Partial<Omit<User, 'id'>>;

async function updateUser(id: number, changes: UserUpdate): Promise<PublicUser> {
  // ...
  throw new Error('not implemented');
}

async function loadUsers() {
  return [{ id: 1, name: 'Asha' }];
}
type Loaded = Awaited<ReturnType<typeof loadUsers>>;   // { id: number; name: string }[]
```

**Deriving types from values** avoids duplication:

```ts
const config = {
  apiUrl: 'https://api.example.com',
  retries: 3,
  features: ['search', 'upload'],
} as const;

type Config = typeof config;
type Feature = (typeof config.features)[number];   // 'search' | 'upload'
```

### 4.6 Mapped types

A **mapped type** builds a new type by looping over the keys of another. This is how `Partial` and `Readonly` are implemented:

```ts
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Transform the keys too, with `as`
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<{ name: string; age: number }>;
// { getName: () => string; getAge: () => number }

// A form's state derived from a model: every field has a value and an error
type FormState<T> = {
  [K in keyof T]: { value: T[K]; error?: string };
};
```

### 4.7 Conditional types

A **conditional type** chooses a type by a condition, like an `if` for types: `T extends U ? X : Y`.

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<'hi'>;    // true
type B = IsString<42>;      // false

// Unwrap arrays
type ElementOf<T> = T extends (infer U)[] ? U : T;
type E1 = ElementOf<string[]>;   // string
type E2 = ElementOf<number>;     // number

// How ReturnType works
type MyReturnType<F> = F extends (...args: never[]) => infer R ? R : never;
```

`infer R` means 'capture the type here and call it R'. You will rarely write advanced conditional types in application code, but reading them helps you understand library types.

### 4.8 Template literal types

Types built from string patterns:

```ts
type Method = 'GET' | 'POST';
type Path = '/users' | '/posts';
type Route = `${Method} ${Path}`;      // 'GET /users' | 'GET /posts' | 'POST /users' | 'POST /posts'

type EventName = `on${Capitalize<'click' | 'change'>}`;   // 'onClick' | 'onChange'
```

### 4.9 Making `fetch` truly type-safe with Zod

Types vanish at runtime, so TypeScript cannot know what a server really sends. **Zod** (used in Book 1) bridges the gap: you write a schema once, get runtime validation, and **infer the TypeScript type from it**, so the type and the check can never disagree.

```bash
$ npm install zod
```

```ts
import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(['user', 'admin']).default('user'),
  bio: z.string().optional(),
});

type User = z.infer<typeof UserSchema>;       // { id: number; name: string; email: string; role: 'user' | 'admin'; bio?: string }

const UsersSchema = z.array(UserSchema);

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://example.com/api/users');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const json: unknown = await res.json();
  return UsersSchema.parse(json);             // throws a detailed error if the data is wrong
}

// Non-throwing version
const result = UserSchema.safeParse({ id: 1, name: '', email: 'x' });
if (!result.success) {
  console.log(result.error.issues);           // which fields failed and why
} else {
  console.log(result.data.name);               // typed as User
}
```

Use Zod (or Valibot, ArkType) at every **boundary**: API responses, form submissions, environment variables, URL parameters, `localStorage` reads, webhook bodies. Inside your app, trust the types.

A typed API client combining generics and Zod:

```ts
import { z, ZodType } from 'zod';

export async function fetchJson<T>(url: string, schema: ZodType<T>, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`Request failed with ${res.status}`);
  return schema.parse(await res.json());
}

const PostSchema = z.object({ id: z.number(), title: z.string(), body: z.string() });

const posts = await fetchJson('https://jsonplaceholder.typicode.com/posts?_limit=3', z.array(PostSchema));
// posts is Post[], and it was checked at runtime
```

### 4.10 Typing events, DOM and third-party libraries

```ts
const button = document.querySelector<HTMLButtonElement>('#save');
button?.addEventListener('click', (event: MouseEvent) => {
  console.log(event.clientX);
});

const form = document.querySelector<HTMLFormElement>('#signup');
form?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  const data = new FormData(form);
  const email = data.get('email');           // FormDataEntryValue | null  (string | File | null)
  if (typeof email === 'string') console.log(email);
});
```

Many npm packages include their own types. For those that do not, install community types from DefinitelyTyped: `npm install -D @types/express @types/node`. If a package has no types at all, you can declare it in a `.d.ts` file (Chapter 5).

### 4.11 Guidelines for using generics well

- Use a generic only when a type needs to **flow** from input to output. If `T` appears only once in a signature, you probably do not need it.
- Constrain type parameters (`extends`) so the function body can rely on something.
- Prefer simple, readable types over clever ones. Types are code others must read.
- Let inference work: do not write `first<number>(items)` when `first(items)` is enough.
- Derive types from a single source of truth (a Zod schema, a database model, a constant) rather than writing parallel copies.

### 4.12 Common mistakes

- Overusing `any` inside generic functions, which erases type information.
- Writing generics that are never used by the caller (just use a normal type).
- Using type assertions to force results out of generic functions instead of fixing the signature.
- Believing `z.infer` and a TypeScript interface need to be written twice.
- Using `Omit` with keys that do not exist (it does not complain by default). Prefer `Pick` for clarity when keeping a few keys.

### Chapter 4 summary

- Generics are type parameters (`<T>`) that let types flow through functions, types, interfaces and classes. Constrain them with `extends`.
- `keyof`, `typeof`, indexed access and utility types (`Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`) derive types from other types.
- Mapped, conditional and template literal types transform types; you will mostly read them in libraries.
- Validate unknown data at the boundaries with Zod and infer types from the schemas.

### Exercises

1. Write `last<T>(items: readonly T[]): T | undefined` and `unique<T>(items: readonly T[]): T[]`.
2. Write `pluck<T, K extends keyof T>(items: T[], key: K): T[K][]` and test it on an array of users.
3. From `type User = {...}` derive `NewUser`, `PublicUser` and `UserUpdate` with utility types.
4. Implement a generic `Cache<K, V>` class with `get`, `set`, `has` and a maximum size.
5. Create a Zod schema for a blog post from your Book 1 API, infer its type, and write a `fetchPosts` function that validates the response.
6. Write a mapped type `Optionalize<T, K extends keyof T>` that makes only the selected keys optional.

## Chapter 5: Classes, Modules, tsconfig and TypeScript on the Server

This chapter finishes the TypeScript language and then applies it to the Node.js and Express code you wrote in Book 1. By the end you can set up a typed project from scratch and read any `tsconfig.json`.

### 5.1 Classes in TypeScript

TypeScript adds type checking and some keywords to the classes you learned in Book 1.

```ts
class BankAccount {
  // Parameter properties: declare and assign in one step
  constructor(
    public readonly owner: string,
    private balance: number = 0,
  ) {}

  deposit(amount: number): this {
    if (amount <= 0) throw new RangeError('Deposit must be positive');
    this.balance += amount;
    return this;
  }

  withdraw(amount: number): this {
    if (amount > this.balance) throw new Error('Insufficient funds');
    this.balance -= amount;
    return this;
  }

  get currentBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount('Meera', 500);
account.deposit(200).withdraw(100);
console.log(account.currentBalance);   // 600
// account.balance;                     // Error: 'balance' is private
// account.owner = 'Other';             // Error: 'owner' is readonly
```

**Access modifiers** (checked only by TypeScript; they are erased at runtime):

| Modifier | Meaning |
| --- | --- |
| `public` | Accessible anywhere (the default) |
| `protected` | Inside the class and its subclasses |
| `private` | Only inside the class |
| `readonly` | Can be assigned only in the declaration or constructor |

For *real* runtime privacy, use JavaScript's `#field` syntax from Book 1. Both can be used.

**Abstract classes and interfaces for classes**

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {         // the compiler checks the class fits the interface
  log(message: string): void {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

abstract class Shape {
  abstract area(): number;                       // subclasses must implement
  describe(): string {
    return `Area: ${this.area().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
}

class AppError extends Error {
  constructor(message: string, public readonly status = 500) {
    super(message);
    this.name = 'AppError';
  }
}
```

A reminder from Book 1: in React and modern Node.js code you will write far more functions and plain objects than classes. Use classes for errors, services with internal state, and when a library asks for them.

### 5.2 Modules and imports

Modules work as in Book 1, with extra type features:

```ts
// user.ts
export type User = { id: number; name: string };
export interface Admin extends User { permissions: string[] }
export function createUser(name: string): User { return { id: Date.now(), name }; }
export default class UserService {}

// main.ts
import UserService, { createUser } from './user.js';
import type { User, Admin } from './user.js';          // type-only import: erased completely
import { type User as U2, createUser as cu } from './user.js';   // inline type modifier
```

**`import type`** is important. It tells TypeScript and the bundler that the import is only used for types, so it never appears in the output JavaScript. It prevents accidental circular dependencies and keeps bundles small. A compiler option, `verbatimModuleSyntax`, can enforce it.

**File extensions in imports.** When compiling for Node.js ESM, write `./user.js` even though the source file is `user.ts`: TypeScript resolves it correctly, and the compiled output uses `.js`. With bundlers (Vite, Next.js), imports are usually written without an extension: `'./user'`. The rule depends on `moduleResolution` (below).

**Namespaces and triple-slash directives** are old features. Avoid them in new code.

### 5.3 tsconfig.json explained

`tsconfig.json` tells the compiler how strict to be and how to read and emit your files. Here is an annotated version for a Node.js backend:

```json
{
  "compilerOptions": {
    // --- Language and output ---
    "target": "ES2022",              // which JavaScript version to emit
    "lib": ["ES2023"],               // which built-in APIs exist (no DOM for a server)
    "module": "NodeNext",            // module system for Node.js
    "moduleResolution": "NodeNext",  // how imports are found (Node rules)
    "outDir": "dist",                // compiled files go here
    "rootDir": "src",
    "sourceMap": true,               // helps debugging: errors point to .ts lines

    // --- Strictness (keep these ON) ---
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    // --- Interop and speed ---
    "esModuleInterop": true,
    "skipLibCheck": true,            // do not re-check the types inside node_modules
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,         // each file must be compilable alone (needed by most bundlers)
    "resolveJsonModule": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

And for a **front-end project built by a bundler** (Vite or Next.js), the typical differences are:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2023"],   // browser APIs
    "jsx": "react-jsx",                         // compile JSX (Vite) or "preserve" (Next.js)
    "module": "ESNext",
    "moduleResolution": "Bundler",               // imports without extensions, like bundlers
    "noEmit": true,                              // the bundler produces the output; tsc only checks
    "strict": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "paths": { "@/*": ["./src/*"] }              // import aliases: import x from '@/lib/x'
  },
  "include": ["src"]
}
```

Options worth remembering:

| Option | Purpose |
| --- | --- |
| `strict` | Enables the family of strict checks. Always on |
| `target` and `lib` | Which language level to emit and which built-in types exist |
| `module` and `moduleResolution` | How imports work: `NodeNext` for Node.js, `Bundler` for Vite and Next.js |
| `jsx` | `react-jsx` or `preserve` for React |
| `noEmit` | Only type-check, do not write files |
| `paths` | Import aliases (also configure the bundler to match) |
| `skipLibCheck` | Faster builds by skipping checks of declaration files |
| `allowJs` and `checkJs` | Mix JavaScript files in, and optionally check them |
| `verbatimModuleSyntax` | Forces explicit `import type` |
| `incremental` | Cache results for faster rebuilds |

Frameworks generate a good `tsconfig.json` for you, so you will mostly keep what the generator wrote and add strictness flags. TypeScript 7 and recent releases changed some defaults and deprecated a few old options, so when you upgrade, read the release notes and let the compiler's messages guide you.

### 5.4 Declaration files (.d.ts) and `@types`

A `.d.ts` file contains only types, no code. It describes the shape of JavaScript that has no types.

- Packages with built-in types ship them (look for a `types` field in their `package.json`).
- For others, install types from the community: `npm install -D @types/express`.
- For a package without any types, create `src/types/untyped-lib.d.ts`:

```ts
declare module 'untyped-lib' {
  export function doThing(input: string): number;
}
```

- To add your own properties to a library's type (for example `req.user` in Express), use **declaration merging**:

```ts
// src/types/express.d.ts
import 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: { id: string; role: 'user' | 'admin' };
    id?: string;
  }
}
```

Make sure the file is inside the `include` paths of `tsconfig.json`.

### 5.5 TypeScript with Express

Let us add types to the Books API of Book 1, Chapter 20.

```bash
$ npm install express zod
$ npm install -D typescript tsx @types/node @types/express
```

**Typed handlers.** Express's types let you describe route parameters, the response body, the request body and the query:

```ts
import express, { type Request, type Response, type NextFunction } from 'express';

const app = express();
app.use(express.json());

type Book = { id: number; title: string; author: string; year: number };
const books: Book[] = [];

// Request<Params, ResBody, ReqBody, Query>
app.get('/books/:id', (req: Request<{ id: string }>, res: Response<Book | { error: string }>) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: 'Not found' });
  res.json(book);
});

type CreateBookBody = Omit<Book, 'id'>;

app.post('/books', (req: Request<{}, Book, CreateBookBody>, res: Response<Book>) => {
  const book: Book = { id: books.length + 1, ...req.body };
  books.push(book);
  res.status(201).json(book);
});
```

But the type of `req.body` is only a **promise**: Express does not check that the client really sent that shape. So combine types with Zod validation, as in Book 1, Chapter 23:

```ts
import { z } from 'zod';
import type { RequestHandler } from 'express';

const CreateBookSchema = z.object({
  title: z.string().trim().min(1).max(200),
  author: z.string().trim().min(1),
  year: z.number().int().min(0).max(2100),
});

type CreateBook = z.infer<typeof CreateBookSchema>;

// A reusable, fully typed validation middleware
export const validateBody = <S extends z.ZodTypeAny>(schema: S): RequestHandler =>
  (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ error: 'Validation failed', issues: result.error.issues });
      return;
    }
    req.body = result.data;          // replace with the cleaned data
    next();
  };

app.post('/books', validateBody(CreateBookSchema), (req, res) => {
  const data = req.body as CreateBook;   // safe: the middleware verified it
  // ...
  res.status(201).json(data);
});
```

A nicer pattern is to parse inside the handler and get the type directly:

```ts
app.post('/books', async (req, res) => {
  const parsed = CreateBookSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Validation failed', issues: parsed.error.issues });
  }
  const book = await bookService.create(parsed.data);       // parsed.data is CreateBook
  res.status(201).json(book);
});
```

**Typed environment configuration**, so that a missing variable fails at startup and the rest of your code gets proper types:

```ts
// src/config/env.ts
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

export const env = EnvSchema.parse(process.env);     // env.PORT is a number
export type Env = z.infer<typeof EnvSchema>;
```

**Typed errors and an error handler**

```ts
import type { ErrorRequestHandler } from 'express';

export class HttpError extends Error {
  constructor(public readonly status: number, message: string, public readonly details?: unknown) {
    super(message);
    this.name = 'HttpError';
  }
}

export const errorHandler: ErrorRequestHandler = (err: unknown, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message, details: err.details });
    return;
  }
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
};
```

**Typing the layers** keeps a larger app consistent. Define the domain types once (derive them from Zod or from the database), then use them in the repository, service and controller:

```ts
// models/book.ts
export type Book = { id: string; title: string; author: string; year: number; tags: string[] };
export type NewBook = Omit<Book, 'id'>;
export type BookUpdate = Partial<NewBook>;

// repositories/bookRepository.ts
export interface BookRepository {
  findAll(filter?: { tag?: string }): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(data: NewBook): Promise<Book>;
  update(id: string, data: BookUpdate): Promise<Book | null>;
  remove(id: string): Promise<boolean>;
}

// services/bookService.ts: depends on the interface, not on a specific database
export function createBookService(repo: BookRepository) {
  return {
    async get(id: string): Promise<Book> {
      const book = await repo.findById(id);
      if (!book) throw new HttpError(404, 'Book not found');
      return book;
    },
    list: (tag?: string) => repo.findAll({ tag }),
    create: (data: NewBook) => repo.create(data),
  };
}
```

Because the service depends on an interface, tests can pass an in-memory repository (Book 1, Chapter 25), and the real app passes the MongoDB or PostgreSQL one.

### 5.6 Typed database access

- **Mongoose** generates types from schemas with `InferSchemaType`:

```ts
import { Schema, model, type InferSchemaType } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
}, { timestamps: true });

export type BookDoc = InferSchemaType<typeof bookSchema>;
export const BookModel = model('Book', bookSchema);
```

- **Prisma** (used in Chapter 19) generates a fully typed client from your schema, and it is one of the best reasons to use TypeScript with a database. Drizzle ORM is another TypeScript-first choice.

### 5.7 Running and building TypeScript for production

Development: `tsx watch src/index.ts` (fast, no type checking). Quality gate: `tsc --noEmit` in CI. Production options:

1. **Compile and run JavaScript:** `tsc` produces `dist/`, then `node dist/index.js`. The most common and robust approach.
2. **Bundle** with `tsup` or `esbuild` to a single file.
3. **Run TypeScript directly** with a recent Node.js that supports type stripping. Convenient for scripts, but compile for important services so the deployed code does not depend on this feature.

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
  "typecheck": "tsc --noEmit",
  "build": "tsc -p tsconfig.build.json",
  "start": "node dist/server.js",
  "test": "vitest run"
}
```

Use a separate `tsconfig.build.json` that excludes test files if you want them type-checked but not emitted.

### 5.8 Linting and formatting TypeScript

`typescript-eslint` adds rules that use type information: catching floating promises (`await` forgotten), unsafe `any` usage, unnecessary conditions and more. Install it with a recent ESLint flat config and Prettier (see the official setup guides). A few rules that save the most time: `@typescript-eslint/no-floating-promises`, `@typescript-eslint/no-explicit-any`, `@typescript-eslint/consistent-type-imports`.

### 5.9 Common mistakes

- Writing types for `req.body` and believing the client respects them. Validate at runtime.
- Forgetting `.js` in relative imports under `NodeNext` ESM, causing 'cannot find module' errors after compiling.
- Mixing `moduleResolution` settings with the wrong tool (using `NodeNext` in a Vite project, or `Bundler` for plain Node).
- Turning off checks in `tsconfig` instead of fixing code.
- Committing the `dist` folder.
- Using `tsx` or `ts-node` in production when a compile step is more predictable.
- Duplicating types by hand rather than deriving them from Zod or database schemas.

### Chapter 5 summary

- TypeScript classes add `public`, `private`, `protected`, `readonly`, parameter properties, abstract classes and `implements`.
- `import type` keeps type-only imports out of the output. Choose `moduleResolution` to match the tool: `NodeNext` for Node, `Bundler` for Vite and Next.js.
- `tsconfig.json` controls strictness and output; keep `strict` on and add the extra checks.
- Use `@types/*` and `.d.ts` files for libraries without types; merge declarations to add properties like `req.user`.
- Combine TypeScript types with Zod validation in Express; derive types from a single source of truth; build with `tsc` for production.

### Exercises

1. Convert the Books API from Book 1, Chapter 20 to TypeScript: types for the book, repository interface, service and controllers, validated with Zod.
2. Add the `req.user` declaration merge and a typed `requireAuth` middleware.
3. Create a typed `env.ts` that validates your environment variables at startup.
4. Set up `typecheck` and `build` scripts and run them. Introduce a type error and confirm CI would fail.
5. Write an in-memory implementation of `BookRepository` and a test of the service using it.
6. Install `typescript-eslint` in a project and fix the first ten warnings it reports.

### Part 1 project: typed utility library and CLI

Build a small, fully typed Node.js command-line tool, for example a **expense tracker CLI** (`add`, `list`, `summary`, `export`) that stores data in a JSON file. Requirements: strict mode, Zod validation of the file and of command arguments, a discriminated union for commands, generics in a small storage module, unit tests, and a `build` script. You will reuse the type-modelling skills in every React and Next.js chapter that follows.

# Part 2: React

## Chapter 6: React Fundamentals: Components, JSX and Props

In Book 1 you built interfaces by hand: select elements, create elements, update text, and call a `render` function. That works, but it gets complicated as an application grows. React gives you a better model: you describe **what the screen should look like for the current data**, and React updates the real page for you.

### 6.1 What is React and why use it?

**React** is a JavaScript library for building user interfaces, created at Facebook and now governed by the React Foundation under the Linux Foundation. It is the most widely used front-end library in the world.

The key idea:

```text
UI = function(state)
```

You write **components**: functions that take data and return a description of the UI. When the data (the **state**) changes, React calls your component again, compares the new description with the old one, and updates only the parts of the real DOM that changed. You never manually select elements or call `appendChild`.

Benefits:

- **Declarative code:** you say what you want, not the steps to get there.
- **Reusable components:** build a `Button` once, use it everywhere.
- **Predictable updates:** data flows in one direction, from parent to child.
- **A huge ecosystem:** routing, forms, data fetching, UI kits, testing tools, and frameworks such as Next.js.
- **Skills transfer:** React Native uses the same ideas for mobile apps.

### 6.2 Creating a project with Vite

**Vite** is a fast build tool and development server. It is the standard way to start a React single-page application (SPA) without a framework.

```bash
$ npm create vite@latest my-react-app -- --template react-ts
$ cd my-react-app
$ npm install
$ npm run dev
```

Open the address printed in the terminal (usually `http://localhost:5173`). Edit a file and the browser updates instantly (**hot module replacement**).

**Project structure**

```text
my-react-app/
  index.html            the single HTML page; contains <div id='root'></div>
  package.json
  tsconfig.json
  vite.config.ts
  public/               static files served as they are (favicon, images)
  src/
    main.tsx            entry point: starts React
    App.tsx             the root component
    index.css, App.css  styles
    assets/             images processed by Vite
```

**src/main.tsx**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

`createRoot` connects React to the `div` with id `root` in `index.html`. `StrictMode` is a development helper: it runs components twice and re-runs effects to expose hidden bugs. It does nothing in production. Keep it on.

Replace the contents of `src/App.tsx` with:

```tsx
export default function App() {
  return <h1>Hello, React!</h1>;
}
```

Save. The browser shows the heading. You just wrote your first component.

### 6.3 Components

A **component** is a JavaScript function that returns UI. Its name **must start with a capital letter** (so React can tell it from a normal HTML tag).

```tsx
function Greeting() {
  return <p>Welcome to my website.</p>;
}

export default function App() {
  return (
    <div>
      <h1>My Site</h1>
      <Greeting />
      <Greeting />
    </div>
  );
}
```

You use a component like an HTML tag: `<Greeting />`. Each use is an independent instance. Components can contain other components, and together they form a **tree**. The whole application is one component at the top (`App`) with many children.

One component per file is the usual convention: `Greeting.tsx` exports `Greeting`, and other files import it.

```tsx
// src/components/Greeting.tsx
export function Greeting() {
  return <p>Welcome to my website.</p>;
}

// src/App.tsx
import { Greeting } from './components/Greeting';
```

### 6.4 JSX: HTML-like syntax in JavaScript

The HTML-looking code in components is **JSX**. It is not HTML: a build tool turns it into JavaScript function calls. A few rules differ from HTML:

1. **Return one root element.** Wrap siblings in a parent `<div>` or in a **fragment** `<>...</>` that adds nothing to the DOM.
2. **Close every tag**, including `<img />`, `<input />`, `<br />`.
3. **Use `className` instead of `class`**, and `htmlFor` instead of `for`.
4. **camelCase for attributes and events:** `onClick`, `onChange`, `tabIndex`, `maxLength`.
5. **JavaScript inside curly braces `{ }`**, for values and expressions.
6. **Styles are objects:** `style={{ color: 'red', fontSize: 20 }}` (outer braces mean 'JS expression', inner braces are the object).

```tsx
export default function Profile() {
  const name = 'Asha';
  const skills = ['HTML', 'CSS', 'JavaScript'];
  const imageUrl = 'https://picsum.photos/100';

  return (
    <>
      <img className='avatar' src={imageUrl} alt={`Photo of ${name}`} width={100} />
      <h1>{name.toUpperCase()}</h1>
      <p>I know {skills.length} technologies.</p>
      <p>Next year I will be {2026 - 2004 + 1}.</p>
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' />
      <p style={{ color: 'tomato', fontWeight: 'bold' }}>Styled inline</p>
    </>
  );
}
```

**What goes inside `{ }`:** any JavaScript **expression** (a value): variables, calculations, function calls, ternaries, `map`. Not statements like `if` or `for`.

**Text is escaped automatically**, so JSX protects you from XSS by default (Book 1, Chapter 23). Rendering raw HTML requires the deliberately scary-named `dangerouslySetInnerHTML`, which you should avoid.

**Comments in JSX:** `{/* a comment */}`.

### 6.5 Props: giving data to components

**Props** (properties) are the inputs of a component, passed like HTML attributes. They make components reusable.

```tsx
type GreetingProps = {
  name: string;
  age?: number;           // optional
};

export function Greeting({ name, age }: GreetingProps) {
  return (
    <p>
      Hello, {name}! {age !== undefined && `You are ${age}.`}
    </p>
  );
}

// Usage
<Greeting name='Asha' age={22} />
<Greeting name='Ravi' />
```

The TypeScript pattern: define a `Props` type, destructure the props in the function parameter. Now the editor autocompletes prop names and errors if you forget a required prop or pass the wrong type.

**Props can be any value:** numbers and booleans need braces (`age={22}`, `disabled={true}`, or just `disabled`), as do arrays, objects and functions.

```tsx
type Product = { id: number; title: string; price: number; inStock: boolean };

type ProductCardProps = {
  product: Product;
  onAddToCart: (id: number) => void;      // a function prop: events flow UP through callbacks
  highlight?: boolean;
};

export function ProductCard({ product, onAddToCart, highlight = false }: ProductCardProps) {
  return (
    <article className={highlight ? 'card card-highlight' : 'card'}>
      <h3>{product.title}</h3>
      <p>{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
      <button disabled={!product.inStock} onClick={() => onAddToCart(product.id)}>
        {product.inStock ? 'Add to cart' : 'Out of stock'}
      </button>
    </article>
  );
}
```

**Props are read-only.** A component must never change its own props. Data flows **down** (parent to child through props), and events flow **up** (child calls a function the parent gave it). This one-way flow keeps large apps understandable.

**Spreading props** passes many at once: `<ProductCard {...product} />` (when the prop names match). Use it carefully, since it hides what is being passed.

### 6.6 The special prop: children

Whatever you place between a component's opening and closing tags arrives as `children`. This is how you build wrapper components such as cards, layouts and modals.

```tsx
import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;      // anything React can render: text, elements, arrays, null
};

export function Card({ title, children }: CardProps) {
  return (
    <section className='card'>
      <h2>{title}</h2>
      <div className='card-body'>{children}</div>
    </section>
  );
}

// Usage: any content can go inside
<Card title='About me'>
  <p>I build websites.</p>
  <a href='/contact'>Contact</a>
</Card>
```

This is **composition**: building complex UI by nesting simple components. React prefers composition over inheritance. You can also pass whole elements as props for 'slots':

```tsx
type LayoutProps = { header: ReactNode; sidebar: ReactNode; children: ReactNode };

function Layout({ header, sidebar, children }: LayoutProps) {
  return (
    <div className='layout'>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}
```

### 6.7 Typing component props the right way

```tsx
import type { ComponentProps, ReactNode } from 'react';

// 1. Plain props type (recommended)
type BadgeProps = { label: string; color?: 'green' | 'red' | 'gray' };
export function Badge({ label, color = 'gray' }: BadgeProps) {
  return <span className={`badge badge-${color}`}>{label}</span>;
}

// 2. Extend the props of a native element, so your component accepts all button attributes
type ButtonProps = ComponentProps<'button'> & { variant?: 'primary' | 'danger' };

export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button className={`btn btn-${variant} ${className}`} {...rest} />;
}

<Button variant='danger' onClick={() => console.log('x')} disabled>Delete</Button>

// 3. A component that returns something other than JSX has the type: () => ReactNode
```

You do not need `React.FC`. A plain function with a typed props parameter is simpler and is the modern convention.

### 6.8 Rendering lists and conditions (a first look)

Chapter 9 covers these in depth. You need a taste now.

```tsx
const products: Product[] = [
  { id: 1, title: 'Laptop', price: 55000, inStock: true },
  { id: 2, title: 'Mouse', price: 500, inStock: false },
];

export default function Shop() {
  return (
    <div>
      {products.length === 0 ? <p>No products.</p> : null}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={(id) => console.log('add', id)} />
      ))}
    </div>
  );
}
```

- `{products.map(...)}` turns an array into an array of elements, which React renders.
- **Every item in a list needs a stable, unique `key`** (an id from your data, never the array index if the list can change). React uses keys to track items.
- Conditions use `condition && <X />`, a ternary, or an early `return null`.

### 6.9 Components must be pure

A component should behave like a mathematical function: **same props and state in, same JSX out**, with no side effects while rendering.

```tsx
// BAD: changes something outside during render
let counter = 0;
function Bad() {
  counter++;                      // side effect during render: unpredictable
  return <p>{counter}</p>;
}

// GOOD: computes only from props
function Good({ items }: { items: number[] }) {
  const total = items.reduce((a, b) => a + b, 0);    // local variable: fine
  return <p>{total}</p>;
}
```

Things that change the outside world (fetching data, timers, updating the document title, subscribing) belong in **event handlers** or **effects** (Chapter 8), not in the render body. React can render a component more than once, or throw the result away, so purity is what keeps the app correct. This is also why `StrictMode` runs your components twice in development: it reveals impurities.

### 6.10 A complete small example: team page

```tsx
// src/components/MemberCard.tsx
type Member = { id: number; name: string; role: string; skills: string[]; online: boolean };

type MemberCardProps = { member: Member };

export function MemberCard({ member }: MemberCardProps) {
  const { name, role, skills, online } = member;

  return (
    <article className='member'>
      <header>
        <h3>{name}</h3>
        <span className={online ? 'dot dot-on' : 'dot dot-off'} aria-label={online ? 'Online' : 'Offline'} />
      </header>
      <p className='role'>{role}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

// src/App.tsx
import { MemberCard } from './components/MemberCard';

const team = [
  { id: 1, name: 'Asha', role: 'Frontend', skills: ['React', 'CSS'], online: true },
  { id: 2, name: 'Ravi', role: 'Backend', skills: ['Node', 'SQL'], online: false },
  { id: 3, name: 'Meera', role: 'Design', skills: ['Figma'], online: true },
];

export default function App() {
  return (
    <main className='container'>
      <h1>Our team</h1>
      <div className='grid'>
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </main>
  );
}
```

Add CSS in `index.css` using the Grid and Flexbox skills from Book 1.

### 6.11 React DevTools

Install the **React Developer Tools** browser extension. It adds 'Components' and 'Profiler' tabs to DevTools. In Components you see the tree, each component's props and state, and you can edit them live. Use it whenever something does not render as expected.

### 6.12 Project organisation (early habits)

```text
src/
  components/        reusable UI pieces (Button, Card, Modal)
  features/          groups of files for a feature (posts/, auth/)
  hooks/             custom hooks (Chapter 8)
  lib/               helpers, API client
  types/             shared types
  App.tsx
  main.tsx
```

Start simple. Move things into folders when a file gets long or a piece is reused. Keep components small: if a component needs a long name or does several unrelated things, split it.

### 6.13 Common mistakes

- Component names in lowercase (`<card />` is treated as an HTML tag).
- Returning two sibling elements without a wrapper or fragment.
- Using `class` instead of `className`.
- Forgetting `key` in lists, or using the array index as key in a changing list.
- Mutating props.
- Rendering `{0}` accidentally with `count && <X />` when `count` is 0 (it prints 0). Use `count > 0 && <X />`.
- Writing `onClick={handle()}` which calls the function during render. Write `onClick={handle}` or `onClick={() => handle(id)}`.
- Defining a component inside another component, which recreates it on every render and resets its state.

### Chapter 6 summary

- React builds UI from components: functions that take props and return JSX. When state changes, React re-renders and updates the DOM efficiently.
- Create projects with Vite (`react-ts` template). JSX has a few rules: one root, closed tags, `className`, camelCase, `{ }` for expressions.
- Props flow down; events flow up through callback props. Type props with a `Props` type; use `children` for composition.
- Lists need stable `key`s; components must be pure.

### Exercises

1. Create a Vite React TypeScript project and build `Avatar`, `Badge` and `Button` components with typed props.
2. Build a `Card` component with `title` and `children`, and use it to compose a profile page.
3. Render a list of 6 products with a `ProductCard`, showing an 'Out of stock' state.
4. Create a `Layout` component with `header`, `sidebar` and `children` slots.
5. Convert your Book 1 landing page (Chapter 2) into React components: `Navbar`, `Hero`, `MenuSection`, `Footer`.
6. Install React DevTools and inspect the props of a deeply nested component.

## Chapter 7: State and Events

Props are inputs from the parent. **State** is data that a component remembers itself and that can change over time: the text in a box, whether a menu is open, the items in a cart. When state changes, React re-renders the component. This chapter is the heart of React, so go slowly and run every example.

### 7.1 Why ordinary variables do not work

```tsx
export default function BrokenCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log(count);          // the variable changes...
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;   // ...but the screen does not
}
```

Two reasons it fails:

1. Local variables are **recreated every time the component function runs**, so they forget their value.
2. Changing a local variable does not tell React to render again.

The `useState` hook fixes both.

### 7.2 useState

```tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);        // initial value 0

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

`useState(0)` returns an array of two things (a tuple, Chapter 2):

1. The **current value** of the state (`count`).
2. A **setter function** (`setCount`) that updates it **and asks React to render again**.

The naming convention is `[thing, setThing]`. React keeps the value between renders, separately for each component instance. Two `<Counter />` on a page have independent counts.

**What a hook is.** Functions whose names start with `use` are **hooks**. They let components use React features (state, effects, context, refs). Two rules:

1. **Call hooks only at the top level** of a component or another hook: never inside `if`, loops, nested functions or after an early `return`.
2. **Call hooks only from React functions**: components and custom hooks.

The linter (`eslint-plugin-react-hooks`, included in the Vite template) enforces them.

### 7.3 TypeScript and useState

TypeScript infers the type from the initial value:

```tsx
const [count, setCount] = useState(0);              // number
const [name, setName] = useState('');               // string
const [open, setOpen] = useState(false);            // boolean
```

Provide the type explicitly when the initial value does not show every possibility:

```tsx
type User = { id: number; name: string };

const [user, setUser] = useState<User | null>(null);      // starts empty, later a User
const [items, setItems] = useState<string[]>([]);           // an empty array needs a type
const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
```

### 7.4 How state updates really work

Three behaviours that surprise beginners:

**1. State is a snapshot.** Each render has its own fixed values. Setting state does not change the variable in the code that is running now. It schedules a new render.

```tsx
function Demo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);        // still the OLD value (0): this render's snapshot
    setCount(count + 1);       // uses the same snapshot (0), so the final result is 1, not 2
  }

  return <button onClick={handleClick}>{count}</button>;
}
```

**2. Use the updater form when the new value depends on the old one.** Pass a function that receives the latest value:

```tsx
function handleClick() {
  setCount((c) => c + 1);
  setCount((c) => c + 1);      // now the result is 2
}
```

**3. Updates are batched.** React groups several `set` calls in one event handler into a single re-render, for performance.

**React compares with `Object.is`**: if you set the same value (same primitive or the same object reference), React skips re-rendering.

### 7.5 Never mutate state: update it immutably

This is the most important rule with objects and arrays. State must be treated as **read-only**. To change it, create a **new** object or array and pass it to the setter. (You practised this style in Book 1, Chapters 6 and 13.)

```tsx
const [user, setUser] = useState({ name: 'Asha', age: 22, address: { city: 'Pune' } });

// WRONG: mutates the existing object; React may not notice the change
user.age = 23;
setUser(user);

// RIGHT: new object with spread
setUser({ ...user, age: 23 });

// Nested objects: copy every level you change
setUser({ ...user, address: { ...user.address, city: 'Mumbai' } });
```

**Arrays:**

| Goal | Avoid (mutates) | Use (returns new array) |
| --- | --- | --- |
| Add | `push`, `unshift`, `splice` | `[...items, newItem]`, `[newItem, ...items]` |
| Remove | `pop`, `shift`, `splice` | `items.filter((i) => i.id !== id)` |
| Replace or update | `items[i] = x` | `items.map((i) => (i.id === id ? { ...i, done: true } : i))` |
| Sort or reverse | `sort`, `reverse` | `[...items].sort(...)` or `items.toSorted(...)` |

```tsx
type Todo = { id: number; title: string; done: boolean };

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  function addTodo() {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTodos((current) => [...current, { id: Date.now(), title: trimmed, done: false }]);
    setTitle('');
  }

  function toggleTodo(id: number) {
    setTodos((current) => current.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function removeTodo(id: number) {
    setTodos((current) => current.filter((t) => t.id !== id));
  }

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='New task' />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' checked={todo.done} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.title}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Compare this with your Book 1 task manager: no `querySelector`, no `createElement`, no manual `render`. You change state, and React redraws.

**Immer** (`npm install immer use-immer`) lets you write 'mutating' code that is converted to immutable updates, which helps with deeply nested state. You do not need it to start.

### 7.6 Handling events

React events use camelCase names and receive **functions**, not strings:

```tsx
<button onClick={handleClick}>Save</button>            // pass the function: React calls it
<button onClick={() => handleDelete(id)}>Delete</button>   // arrow function when you need arguments
// <button onClick={handleClick()}>   // WRONG: calls it during render
```

The handler receives a **synthetic event** (a wrapper that behaves the same in all browsers). TypeScript has types for each event:

```tsx
import type { ChangeEvent, FormEvent, MouseEvent, KeyboardEvent } from 'react';

function handleChange(event: ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();            // stop the page reload, as in Book 1
}

function handleClick(event: MouseEvent<HTMLButtonElement>) {
  console.log(event.currentTarget.textContent);
}

function handleKey(event: KeyboardEvent<HTMLInputElement>) {
  if (event.key === 'Enter') console.log('submit');
}
```

You rarely need to write those types, because writing the handler inline lets TypeScript infer them:

```tsx
<input onChange={(e) => setName(e.target.value)} />      // e is ChangeEvent<HTMLInputElement>
```

Useful events: `onClick`, `onDoubleClick`, `onChange`, `onInput`, `onSubmit`, `onKeyDown`, `onFocus`, `onBlur`, `onMouseEnter`, `onMouseLeave`, `onScroll`.

**Event propagation** works like Book 1 (bubbling): use `event.stopPropagation()` rarely, and `event.preventDefault()` to cancel defaults. React attaches events at the root, so event delegation is already done for you.

### 7.7 Lifting state up

When two components need the same data, move the state to their **closest common parent** and pass it down as props (with setter callbacks for changes). This is called **lifting state up**.

```tsx
type Filter = 'all' | 'active' | 'done';

function FilterBar({ filter, onChange }: { filter: Filter; onChange: (f: Filter) => void }) {
  const options: Filter[] = ['all', 'active', 'done'];
  return (
    <div role='group' aria-label='Filter'>
      {options.map((option) => (
        <button key={option} aria-pressed={filter === option} onClick={() => onChange(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>{todos.map((t) => <li key={t.id}>{t.title}</li>)}</ul>
  );
}

export default function Page() {
  const [filter, setFilter] = useState<Filter>('all');
  const [todos] = useState<Todo[]>([
    { id: 1, title: 'Learn state', done: true },
    { id: 2, title: 'Learn effects', done: false },
  ]);

  const visible = todos.filter((t) => filter === 'all' || (filter === 'done') === t.done);

  return (
    <>
      <FilterBar filter={filter} onChange={setFilter} />
      <TodoList todos={visible} />
    </>
  );
}
```

The parent owns the state (`filter`), and both children are driven by it. **Single source of truth:** each piece of data should live in exactly one place.

### 7.8 Deciding what belongs in state

Not every value should be state. Ask:

1. Does it **change over time**? If not, it is a constant, not state.
2. Is it **passed from a parent** as a prop? Then it is not your state.
3. Can it be **computed from other state or props**? Then **do not store it**; compute it during render.

```tsx
// BAD: redundant state that can get out of sync
const [todos, setTodos] = useState<Todo[]>([]);
const [doneCount, setDoneCount] = useState(0);      // must be updated every time todos changes

// GOOD: derive it
const [todos, setTodos] = useState<Todo[]>([]);
const doneCount = todos.filter((t) => t.done).length;
```

Other guidelines:

- **Avoid duplicated state.** Store an id (`selectedId`), not a copy of the selected object that can become stale.
- **Avoid contradictory state.** Prefer one `status` (`'idle' | 'loading' | 'error'`) to several booleans (Chapter 3 discriminated unions).
- **Avoid deeply nested state.** Flatten it, or use a reducer (Chapter 10).

### 7.9 Resetting state and the `key` prop

React keeps state as long as a component stays in the same position in the tree. Giving a component a different `key` makes React treat it as a new one and reset its state:

```tsx
<ProfileEditor key={user.id} user={user} />      // switching users resets the form inside
```

### 7.10 Controlled inputs (a first look)

A **controlled input** has its value stored in state, so React is the single source of truth:

```tsx
function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' />
      <p>You are searching for: {query || '(nothing yet)'}</p>
      <button onClick={() => setQuery('')}>Clear</button>
    </>
  );
}
```

If you set `value` without `onChange`, the input becomes read-only. Chapter 9 covers complete forms.

### 7.11 A complete example: product list with search, filter and cart count

```tsx
import { useState } from 'react';

type Product = { id: number; name: string; category: 'tech' | 'home'; price: number };

const PRODUCTS: Product[] = [
  { id: 1, name: 'Laptop', category: 'tech', price: 55000 },
  { id: 2, name: 'Mouse', category: 'tech', price: 500 },
  { id: 3, name: 'Lamp', category: 'home', price: 1200 },
  { id: 4, name: 'Chair', category: 'home', price: 4500 },
];

export default function Store() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | Product['category']>('all');
  const [cart, setCart] = useState<Record<number, number>>({});      // productId -> quantity

  const visible = PRODUCTS.filter(
    (p) => (category === 'all' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()),
  );

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartTotal = PRODUCTS.reduce((sum, p) => sum + p.price * (cart[p.id] ?? 0), 0);

  function add(id: number) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  }

  function remove(id: number) {
    setCart((c) => {
      const { [id]: _removed, ...rest } = c;       // copy without that key
      return rest;
    });
  }

  return (
    <main>
      <h1>Store ({cartCount} in cart, total {cartTotal})</h1>

      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search products' />
      <select value={category} onChange={(e) => setCategory(e.target.value as typeof category)}>
        <option value='all'>All</option>
        <option value='tech'>Tech</option>
        <option value='home'>Home</option>
      </select>

      <ul>
        {visible.map((p) => (
          <li key={p.id}>
            {p.name} ({p.price}) <button onClick={() => add(p.id)}>Add</button>
            {cart[p.id] ? <button onClick={() => remove(p.id)}>Remove ({cart[p.id]})</button> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
```

Notice that `visible`, `cartCount` and `cartTotal` are **derived** during render. Only `query`, `category` and `cart` are state.

### 7.12 Common mistakes

- Mutating state (`items.push(x); setItems(items)`).
- Reading state right after setting it and expecting the new value.
- Using `setCount(count + 1)` several times in a row instead of the updater form.
- Storing derived data in state.
- Calling hooks conditionally or inside loops.
- Using the array index as `key` for a list that can be reordered or filtered.
- Passing `onClick={handle(id)}` instead of `onClick={() => handle(id)}`.
- Putting state too high (everything in `App`) or too low (siblings cannot share it).

### Chapter 7 summary

- `useState` gives a component memory and triggers re-renders. State is a snapshot per render; use the updater function when the new value depends on the old.
- Never mutate state; create new objects and arrays with spread, `map` and `filter`.
- Handle events with function props; use typed event objects when needed.
- Lift state to the closest common parent; derive values instead of duplicating them; reset state with `key`.

### Exercises

1. Build a counter with increment, decrement, reset and a step selector.
2. Build a todo app with add, complete, delete, filter and a count of remaining tasks (compare with your Book 1 task manager).
3. Build a shopping cart where quantities can be increased and decreased, with a derived total.
4. Build an accordion where only one section can be open at a time (store the open id in the parent).
5. Build a tabs component with typed tab names and a keyboard-accessible tab list.
6. Build a quiz with questions in an array, a current index, a score and a results screen.

## Chapter 8: Effects, Data Fetching and Custom Hooks

Rendering must be pure (Chapter 6), but real applications need to talk to the world outside React: load data from a server, start a timer, listen to window events, change the document title, connect to a WebSocket. These are called **side effects**. React gives you the `useEffect` hook for effects that must run **because the component appeared on screen** or because some value changed.

### 8.1 What useEffect does

```tsx
import { useEffect, useState } from 'react';

export default function Title() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;      // synchronise the browser tab with our state
  }, [count]);                                      // dependencies

  return <button onClick={() => setCount(count + 1)}>Click ({count})</button>;
}
```

**The sequence:**

1. React renders the component and updates the screen.
2. **After** that, it runs your effect function.
3. On later renders, React compares the **dependency array** with the previous one. If any value changed, it runs the effect again.

**The dependency array** controls when it runs:

| Written | When the effect runs |
| --- | --- |
| `useEffect(fn)` (no array) | After every render (rarely what you want) |
| `useEffect(fn, [])` | Once after the first render (on mount) |
| `useEffect(fn, [a, b])` | After the first render, and whenever `a` or `b` changes |

**The golden rule: list every reactive value that the effect reads** (props, state and values computed from them) in the dependency array. The linter checks this for you. Never silence it by removing dependencies; fix the cause (see 8.6).

### 8.2 Cleanup functions

An effect can return a **cleanup function**. React runs it before running the effect again and when the component disappears. Use it to undo what the effect started.

```tsx
function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);   // start
    return () => clearInterval(id);                             // cleanup: stop it
  }, []);

  return <p>{now.toLocaleTimeString()}</p>;
}

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <p>Width: {width}px</p>;
}
```

Without cleanup you would leak timers and listeners every time the component re-renders or is removed.

**StrictMode and effects.** In development, React deliberately **mounts, unmounts and mounts again** each component to check that your cleanup works. If an effect 'runs twice' in development, that is the test. A correct effect (start plus matching cleanup) behaves the same either way. Do not remove StrictMode to hide the problem; fix the effect.

### 8.3 Fetching data in an effect

Here is the complete, correct pattern with loading, error and cancellation. (Later chapters show better tools for this job. Learn the manual way first so you understand what they do.)

```tsx
import { useEffect, useState } from 'react';

type User = { id: number; name: string; email: string };

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; users: User[] };

export default function UserList() {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal });
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const users: User[] = await res.json();     // validate with Zod in real code (Chapter 4)
        setState({ status: 'success', users });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;   // cancelled: ignore
        setState({ status: 'error', message: error instanceof Error ? error.message : 'Unknown error' });
      }
    }

    load();
    return () => controller.abort();               // cleanup: cancel the request
  }, []);

  switch (state.status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      return <p role='alert'>Could not load users: {state.message}</p>;
    case 'success':
      return (
        <ul>
          {state.users.map((u) => (
            <li key={u.id}>{u.name} ({u.email})</li>
          ))}
        </ul>
      );
  }
}
```

Notes:

- The effect callback itself cannot be `async` (it must return nothing or a cleanup function), so define an inner `async` function and call it.
- **Race conditions:** if the user changes a search term quickly, two requests are in flight and the older one might finish last and overwrite the newer data. Aborting the previous request in cleanup (or ignoring its result) prevents this.
- Always model **loading, error and success**, with a discriminated union (Chapter 3).

**Fetching that depends on props or state**

```tsx
function UserProfile({ userId }: { userId: number }) {
  const [state, setState] = useState<{ status: 'loading' } | { status: 'ready'; user: User } | { status: 'error' }>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: 'loading' });

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Failed'))))
      .then((user: User) => setState({ status: 'ready', user }))
      .catch((e) => { if (e.name !== 'AbortError') setState({ status: 'error' }); });

    return () => controller.abort();
  }, [userId]);                      // run again whenever userId changes

  if (state.status === 'loading') return <p>Loading...</p>;
  if (state.status === 'error') return <p>Error</p>;
  return <h2>{state.user.name}</h2>;
}
```

### 8.4 You might not need an effect

Effects are an **escape hatch for synchronising with external systems**. Many beginners overuse them. Before writing one, check:

| You want to... | Do this instead of an effect |
| --- | --- |
| Compute a value from props or state | Calculate it during render (`const total = items.reduce(...)`), or `useMemo` if it is truly expensive |
| Respond to a user action (click, submit) | Put the logic in the **event handler** |
| Reset state when a prop changes | Use a `key` on the component |
| Update state based on other state | Derive it during render; do not copy state with an effect |
| Notify a parent after a change | Call the parent's callback in the event handler |
| Fetch data in a framework | Use the framework's data loading (Next.js, Chapter 15) or a data library (TanStack Query, Chapter 11) |

```tsx
// BAD: an effect to keep derived data in sync causes an extra render
const [firstName, setFirstName] = useState('Albert');
const [lastName, setLastName] = useState('Smith');
const [fullName, setFullName] = useState('');
useEffect(() => { setFullName(`${firstName} ${lastName}`); }, [firstName, lastName]);

// GOOD: just compute it
const fullName2 = `${firstName} ${lastName}`;
```

```tsx
// BAD: reacting to a click with an effect
useEffect(() => { if (submitted) sendAnalytics(); }, [submitted]);

// GOOD: do it where the event happens
function handleSubmit() { sendAnalytics(); setSubmitted(true); }
```

**Legitimate uses of effects:** subscribing to browser APIs and events, timers, connecting to servers (WebSocket), controlling non-React widgets (maps, video players), fetching data when no better tool exists, and syncing with external stores.

### 8.5 Effect Events: reading the latest values without re-running

Sometimes an effect needs the *latest* props or state but should not re-run when they change. For example a chat room connection that shows a notification with the current theme. React 19.2 added **`useEffectEvent`** for this:

```tsx
import { useEffect, useEffectEvent } from 'react';

function ChatRoom({ roomId, theme }: { roomId: string; theme: 'light' | 'dark' }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);          // always sees the latest theme
  });

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.on('connected', () => onConnected());
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);                                   // theme is NOT a dependency: changing it does not reconnect
}
```

Effect Events must be called only from inside effects, and are not put in the dependency array. (Update `eslint-plugin-react-hooks` to a version that understands them.)

### 8.6 Dependency problems and how to fix them

When the linter says a dependency is missing, resist the urge to disable it. Options:

1. **Include it.** Often it is simply correct.
2. **Move the value inside the effect** if only the effect uses it.
3. **Move functions outside the component** if they do not use props or state, so they are not dependencies.
4. **Use the updater form** to avoid depending on state: `setCount((c) => c + 1)` instead of `setCount(count + 1)`.
5. **Use `useCallback` or `useMemo`** only when an object or function must stay stable (Chapter 10).
6. **Use `useEffectEvent`** for logic that must read the latest value without re-running.

```tsx
// Infinite loop: a new object is created every render, so the dependency always 'changes'
useEffect(() => { fetchData(options); }, [options]);     // options = { page: 1 } created inline in the component

// Fix: depend on primitive values
useEffect(() => { fetchData({ page }); }, [page]);
```

### 8.7 Custom hooks: reusing stateful logic

A **custom hook** is a function whose name starts with `use` and that calls other hooks. It lets you extract and share logic between components. Each component that uses it gets its **own separate state**.

**useLocalStorage**

```tsx
import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? (JSON.parse(raw) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage full or unavailable: ignore
    }
  }, [key, value]);

  return [value, setValue] as const;       // 'as const' gives a tuple type, not (T | Dispatch)[]
}

// Usage
const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
```

The function passed to `useState(() => ...)` is a **lazy initialiser**: it runs only on the first render, so the expensive `localStorage` read does not happen on every render.

**useDebounce**

```tsx
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

// Search box that calls the API only after the user pauses typing
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  // use debouncedQuery in a fetch effect
}
```

**useFetch**: a reusable, typed data-fetching hook

```tsx
import { useEffect, useState } from 'react';
import type { ZodType } from 'zod';

type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

export function useFetch<T>(url: string | null, schema: ZodType<T>): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ status: 'loading' });

  useEffect(() => {
    if (url === null) return;
    const controller = new AbortController();
    setState({ status: 'loading' });

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setState({ status: 'success', data: schema.parse(await res.json()) });
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;
        setState({ status: 'error', error: e instanceof Error ? e : new Error(String(e)) });
      }
    })();

    return () => controller.abort();
  }, [url, schema]);

  return state;
}
```

Use it with a schema defined outside the component (so it is stable):

```tsx
const PostsSchema = z.array(z.object({ id: z.number(), title: z.string() }));

function Posts() {
  const state = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5', PostsSchema);
  if (state.status === 'loading') return <p>Loading...</p>;
  if (state.status === 'error') return <p>{state.error.message}</p>;
  return <ul>{state.data.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

**useMediaQuery and useOnlineStatus** (with `useSyncExternalStore`, the correct hook for reading browser stores that change):

```tsx
import { useSyncExternalStore } from 'react';

export function useOnlineStatus(): boolean {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine,         // client snapshot
    () => true,                     // server snapshot (for server rendering)
  );
}
```

**Rules for custom hooks:** name them `useSomething`; keep each focused on one job; return what callers need (a value, a tuple, or an object); do not call them conditionally.

### 8.8 Other effect-related hooks, briefly

- **`useLayoutEffect`:** runs before the browser paints. Use only for measuring DOM sizes to avoid flicker.
- **`useInsertionEffect`:** for CSS-in-JS libraries.
- **`useId`:** generates stable unique ids for accessibility attributes (`htmlFor` and `id` pairs).
- **`use` (React 19):** reads a promise or context during render, with Suspense. It is central to Next.js server and client data flow (Chapters 15 and 18).

```tsx
import { useId } from 'react';

function EmailField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type='email' />
    </>
  );
}
```

### 8.9 Why not fetch in effects forever?

Fetching in `useEffect` works, but a production app needs more: caching so the same data is not re-downloaded, request de-duplication, background refresh, retries, pagination, optimistic updates, and avoiding 'waterfalls' (one request waiting for another). Libraries such as **TanStack Query** (Chapter 11) solve all of this, and frameworks such as **Next.js** let you fetch on the **server** before the page is sent (Chapter 15). Know the manual way, but use those tools in real projects.

### 8.10 Common mistakes

- Forgetting the dependency array, creating an infinite loop (`setState` in an effect without dependencies re-renders forever).
- Missing dependencies and getting stale values.
- Not cleaning up timers, listeners or requests.
- Making the effect callback `async`.
- Using effects to derive state or to respond to events.
- Creating objects or functions inline and listing them as dependencies.
- Not handling errors and loading states, so the interface shows nothing or crashes.
- Fetching without cancellation and getting race conditions.

### Chapter 8 summary

- Effects synchronise a component with something outside React. Rendering stays pure.
- Dependency arrays say when an effect re-runs; cleanup functions undo what the effect started; StrictMode double-runs them in development to test this.
- Fetch with `AbortController` and a loading, error, success union. Prefer derived values and event handlers over effects.
- Custom hooks reuse stateful logic. `useEffectEvent` reads the latest values without re-triggering effects.
- For serious data fetching use TanStack Query or framework features.

### Exercises

1. Build a `useWindowSize` hook and a component that displays a different layout under 700px.
2. Build a user search page with a debounced input, a loading state, an error state, and request cancellation.
3. Build `useLocalStorage` and use it for a dark-mode toggle and a persisted todo list.
4. Create a `useInterval` hook and a stopwatch with start, pause and reset.
5. Fetch posts and their authors with `Promise.all` in one effect and display both.
6. Take an effect that copies props into state and rewrite it without an effect.

## Chapter 9: Forms, Lists and Conditional Rendering

Forms and lists are the bread and butter of web applications: sign-up forms, search, tables, feeds, carts. This chapter shows the professional patterns, from classic controlled inputs to the newer React 19 form Actions.

### 9.1 Conditional rendering

JSX has no `if` statement inside the markup, but you have several ways to choose what to show:

```tsx
type Props = { user: { name: string } | null; unread: number; isAdmin: boolean };

export function Header({ user, unread, isAdmin }: Props) {
  // 1. Early return: best for 'whole component' decisions
  if (!user) {
    return <a href='/login'>Log in</a>;
  }

  return (
    <header>
      {/* 2. Ternary: choose between two things */}
      <p>{isAdmin ? 'Administrator' : 'Member'}</p>

      {/* 3. && : show something or nothing (beware of 0!) */}
      {unread > 0 && <span className='badge'>{unread}</span>}

      {/* 4. Store JSX in a variable for longer branches */}
      {renderGreeting(user.name)}
    </header>
  );
}

function renderGreeting(name: string) {
  return <h1>Hello, {name}</h1>;
}
```

**The `0` trap:** `{count && <Badge />}` renders the number `0` when `count` is 0, because `0` is a falsy value that React still prints. Use `count > 0 && ...` or a ternary.

`null`, `undefined`, `false` and `true` render nothing. Strings and numbers render as text. Arrays render each item.

**Mapping a status union to UI** with a lookup object keeps components tidy:

```tsx
type Status = 'draft' | 'published' | 'archived';

const STATUS_LABEL: Record<Status, string> = {
  draft: 'Draft',
  published: 'Published',
  archived: 'Archived',
};

function StatusBadge({ status }: { status: Status }) {
  return <span className={`badge badge-${status}`}>{STATUS_LABEL[status]}</span>;
}
```

### 9.2 Rendering lists in depth

You have used `map`. The full rules:

```tsx
type Post = { id: string; title: string; tags: string[] };

function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <ul>
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>      // keys need to be unique only among siblings
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
```

**Keys**

- A key tells React which item is which between renders, so it can move, add and remove DOM nodes correctly and **preserve each item's state**.
- Use a **stable unique id from your data** (database id, slug). Never `Math.random()` (it changes every render, so every item is recreated).
- The array **index** is acceptable only for static lists that are never reordered, filtered or edited. With a changing list, index keys cause bugs such as an input keeping the text of the wrong row.
- `key` goes on the **outermost element returned by `map`**. For a fragment use `<Fragment key={id}>...</Fragment>`.
- `key` is not a prop: the child cannot read it.

**Filtering, sorting and grouping** are done on the array before rendering, as derived values:

```tsx
const visible = posts
  .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
  .toSorted((a, b) => a.title.localeCompare(b.title));
```

**Large lists** (thousands of rows) need **virtualisation**: render only what is visible with a library such as TanStack Virtual or react-window.

### 9.3 Controlled inputs for every field type

A controlled input stores its value in state. This lets you validate on every keystroke, format, disable the button, and reset easily.

```tsx
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type FormValues = {
  name: string;
  email: string;
  country: string;
  plan: 'free' | 'pro';
  message: string;
  newsletter: boolean;
};

const INITIAL: FormValues = { name: '', email: '', country: 'in', plan: 'free', message: '', newsletter: false };

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  // One handler for all fields
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  }

  function validate(v: FormValues) {
    const next: typeof errors = {};
    if (v.name.trim().length < 2) next.name = 'Please enter your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) next.email = 'Enter a valid email';
    if (v.message.trim().length < 10) next.message = 'Message must have at least 10 characters';
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    console.log('Sending', values);       // here you would call your API
    setSubmitted(true);
    setValues(INITIAL);
  }

  if (submitted) return <p>Thank you! We will reply soon.</p>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Name
        <input name='name' value={values.name} onChange={handleChange} aria-invalid={!!errors.name} />
        {errors.name && <span role='alert' className='error'>{errors.name}</span>}
      </label>

      <label>
        Email
        <input name='email' type='email' value={values.email} onChange={handleChange} aria-invalid={!!errors.email} />
        {errors.email && <span role='alert' className='error'>{errors.email}</span>}
      </label>

      <label>
        Country
        <select name='country' value={values.country} onChange={handleChange}>
          <option value='in'>India</option>
          <option value='us'>United States</option>
        </select>
      </label>

      <fieldset>
        <legend>Plan</legend>
        {(['free', 'pro'] as const).map((plan) => (
          <label key={plan}>
            <input type='radio' name='plan' value={plan} checked={values.plan === plan} onChange={handleChange} />
            {plan}
          </label>
        ))}
      </fieldset>

      <label>
        Message
        <textarea name='message' rows={4} value={values.message} onChange={handleChange} />
        {errors.message && <span role='alert' className='error'>{errors.message}</span>}
      </label>

      <label>
        <input type='checkbox' name='newsletter' checked={values.newsletter} onChange={handleChange} />
        Send me news
      </label>

      <button type='submit'>Send</button>
    </form>
  );
}
```

Points to remember:

- `value` (or `checked` for checkboxes and radios) plus `onChange` makes an input controlled. `value` without `onChange` makes it read-only.
- In React, `<textarea>` and `<select>` also use `value` (not children or `selected`).
- Form input values are always strings; convert numbers yourself (`Number(value)`).
- Add `noValidate` if you want your own messages instead of the browser's.
- Accessibility: link labels to inputs, mark invalid fields with `aria-invalid`, and announce errors with `role='alert'`.

### 9.4 Uncontrolled inputs and FormData

If you do not need to react to every keystroke, let the DOM keep the value and read it on submit with `FormData`, exactly like Book 1. This needs less code and fewer re-renders.

```tsx
function SimpleForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');
    console.log({ email, message });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email' defaultValue='' required />
      <textarea name='message' defaultValue='' />
      <button>Send</button>
    </form>
  );
}
```

Use `defaultValue` for the initial value of uncontrolled inputs. Use `useRef` (Chapter 10) when you need to focus or read an input imperatively.

### 9.5 React 19 form Actions

React 19 added first-class support for submitting forms with **Actions**: you pass a function to the `<form action={...}>` prop. React calls it with the `FormData`, tracks whether it is **pending**, resets uncontrolled fields after success, and works the same for client functions and for server functions in Next.js (Chapter 18).

```tsx
import { useActionState } from 'react';

type FormState = { ok: boolean; message: string; errors?: Record<string, string> };

async function subscribeAction(previous: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get('email') ?? '').trim();

  if (!email.includes('@')) {
    return { ok: false, message: 'Please enter a valid email', errors: { email: 'Invalid email' } };
  }

  await new Promise((r) => setTimeout(r, 800));     // pretend to call an API
  return { ok: true, message: `Subscribed ${email}!` };
}

export default function Subscribe() {
  const [state, formAction, isPending] = useActionState(subscribeAction, { ok: false, message: '' });

  return (
    <form action={formAction}>
      <input name='email' type='email' placeholder='you@example.com' disabled={isPending} />
      <button disabled={isPending}>{isPending ? 'Subscribing...' : 'Subscribe'}</button>
      {state.message && <p role='status'>{state.message}</p>}
      {state.errors?.email && <p role='alert'>{state.errors.email}</p>}
    </form>
  );
}
```

`useActionState(action, initialState)` returns `[state, formAction, isPending]`. The action receives the **previous state** and the form data and returns the **next state**. Read `isPending` to show spinners.

**`useFormStatus`** lets a *child* component (for example a reusable submit button) know the status of its parent form without props:

```tsx
import { useFormStatus } from 'react-dom';

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return <button type='submit' disabled={pending}>{pending ? 'Please wait...' : children}</button>;
}
```

(It must be used inside a component rendered within the `<form>`.)

**`useOptimistic`** shows the expected result immediately while the server request is still running, and rolls back if it fails:

```tsx
import { useOptimistic, useState } from 'react';

type Message = { id: number; text: string; sending?: boolean };

export function Chat({ initial, send }: { initial: Message[]; send: (text: string) => Promise<Message> }) {
  const [messages, setMessages] = useState(initial);
  const [optimistic, addOptimistic] = useOptimistic(messages, (current, text: string) => [
    ...current,
    { id: -Date.now(), text, sending: true },
  ]);

  async function action(formData: FormData) {
    const text = String(formData.get('text') ?? '').trim();
    if (!text) return;
    addOptimistic(text);                       // appears at once, marked as sending
    const saved = await send(text);            // real request
    setMessages((m) => [...m, saved]);
  }

  return (
    <>
      <ul>
        {optimistic.map((m) => (
          <li key={m.id} style={{ opacity: m.sending ? 0.5 : 1 }}>{m.text}</li>
        ))}
      </ul>
      <form action={action}>
        <input name='text' />
        <button>Send</button>
      </form>
    </>
  );
}
```

**When to use which approach**

| Situation | Choice |
| --- | --- |
| Simple forms, submit only | Uncontrolled inputs with `FormData`, or form Actions |
| Live validation, dependent fields, formatting | Controlled inputs |
| Server round trips with pending and error state | `useActionState` with `<form action>` |
| Large, complex forms | A form library (below) |

### 9.6 Form libraries: React Hook Form with Zod

For big forms (many fields, nested data, arrays of fields, performance), **React Hook Form** keeps inputs mostly uncontrolled and fast, and integrates with **Zod** so that one schema provides validation and TypeScript types.

```bash
$ npm install react-hook-form zod @hookform/resolvers
```

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const SignupSchema = z
  .object({
    name: z.string().trim().min(2, 'Name is too short'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(8, 'At least 8 characters'),
    confirm: z.string(),
  })
  .refine((v) => v.password === v.confirm, { path: ['confirm'], message: 'Passwords do not match' });

type SignupValues = z.infer<typeof SignupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupValues>({ resolver: zodResolver(SignupSchema) });

  async function onSubmit(values: SignupValues) {
    await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input placeholder='Name' {...register('name')} />
      {errors.name && <p role='alert'>{errors.name.message}</p>}

      <input type='email' placeholder='Email' {...register('email')} />
      {errors.email && <p role='alert'>{errors.email.message}</p>}

      <input type='password' placeholder='Password' {...register('password')} />
      {errors.password && <p role='alert'>{errors.password.message}</p>}

      <input type='password' placeholder='Confirm password' {...register('confirm')} />
      {errors.confirm && <p role='alert'>{errors.confirm.message}</p>}

      <button disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'Create account'}</button>
    </form>
  );
}
```

The same Zod schema can run on your **server** to validate the request again. That is the strongest pattern: share one schema between client and server, and never trust only the client.

### 9.7 Practical project: a searchable, filterable, sortable table

Combine everything: controlled search input, a select for category, sortable column headers, derived data, empty state and a typed row model.

```tsx
type Employee = { id: number; name: string; role: 'dev' | 'design' | 'ops'; salary: number };
type SortKey = 'name' | 'salary';
type SortDir = 'asc' | 'desc';

export function EmployeeTable({ employees }: { employees: Employee[] }) {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState<'all' | Employee['role']>('all');
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({ key: 'name', dir: 'asc' });

  const rows = employees
    .filter((e) => (role === 'all' || e.role === role) && e.name.toLowerCase().includes(query.toLowerCase()))
    .toSorted((a, b) => {
      const result = sort.key === 'name' ? a.name.localeCompare(b.name) : a.salary - b.salary;
      return sort.dir === 'asc' ? result : -result;
    });

  function toggleSort(key: SortKey) {
    setSort((s) => (s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' }));
  }

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search by name' />
      <select value={role} onChange={(e) => setRole(e.target.value as typeof role)}>
        <option value='all'>All roles</option>
        <option value='dev'>Developers</option>
        <option value='design'>Designers</option>
        <option value='ops'>Operations</option>
      </select>

      <table>
        <thead>
          <tr>
            <th><button onClick={() => toggleSort('name')}>Name {sort.key === 'name' ? (sort.dir === 'asc' ? '▲' : '▼') : ''}</button></th>
            <th>Role</th>
            <th><button onClick={() => toggleSort('salary')}>Salary {sort.key === 'salary' ? (sort.dir === 'asc' ? '▲' : '▼') : ''}</button></th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={3}>No employees match your filters.</td></tr>
          ) : (
            rows.map((e) => (
              <tr key={e.id}><td>{e.name}</td><td>{e.role}</td><td>{e.salary.toLocaleString('en-IN')}</td></tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
```

### 9.8 Common mistakes

- Controlled input without `onChange` (cannot type) or switching between controlled and uncontrolled (value starting as `undefined`).
- Using the index as a key in an editable list.
- Forgetting `e.preventDefault()` in an `onSubmit` handler.
- Validating only in the browser; always validate on the server too.
- Using one state variable per field in a big form instead of one object or a form library.
- Storing derived data (filtered rows) in state.
- Using `&&` with numbers that can be 0.
- Not disabling the submit button while pending, causing double submissions.

### Chapter 9 summary

- Choose conditions with early returns, ternaries and `&&` (beware of `0`). Render lists with `map` and stable keys.
- Controlled inputs keep values in state; uncontrolled inputs use `FormData` and `defaultValue`.
- React 19 Actions (`<form action>`, `useActionState`, `useFormStatus`, `useOptimistic`) handle pending states, results and optimistic updates.
- Use React Hook Form with Zod for large forms, and share schemas with the server.

### Exercises

1. Build a signup form with live validation messages and a password strength meter.
2. Rebuild the form with React Hook Form and Zod, including a confirm-password rule.
3. Build a todo list with an inline edit mode (double-click to edit, Enter to save, Escape to cancel).
4. Build a multi-step form (3 steps) that keeps data across steps and shows a summary.
5. Build a 'like' button with `useOptimistic` and a fake API that fails 30 percent of the time.
6. Build the employee table with pagination (10 rows per page).

## Chapter 10: Advanced Hooks and Patterns

You now know the core of React. This chapter adds the rest of the everyday toolbox: refs, reducers, context, performance tools, Suspense, transitions and error boundaries. Most of these solve specific problems, so learn what each one is *for* and reach for it only when you meet that problem.

### 10.1 useRef: values that do not trigger renders, and DOM access

A **ref** is a box (`{ current: value }`) that React keeps between renders. Changing `ref.current` does **not** cause a re-render. It has two main uses.

**1. Accessing a DOM element** (focus, scroll, measure, play a video):

```tsx
import { useEffect, useRef } from 'react';

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);     // starts as null until React attaches the element

  useEffect(() => {
    inputRef.current?.focus();                          // focus when the component appears
  }, []);

  return (
    <>
      <input ref={inputRef} placeholder='Search...' />
      <button onClick={() => inputRef.current?.select()}>Select text</button>
    </>
  );
}
```

**2. Storing a mutable value that is not part of the UI** (timer ids, previous values, flags):

```tsx
function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);

  function start() {
    if (timerRef.current !== null) return;
    timerRef.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
  }

  function stop() {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = null;
  }

  useEffect(() => stop, []);      // stop on unmount

  return (
    <>
      <p>{seconds}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
```

**Rules:** do not read or write `ref.current` during rendering (except for initialisation); use it in event handlers and effects. Use state for anything that must appear on screen.

**Passing a ref to your own component:** in React 19 `ref` is an ordinary prop for function components (the old `forwardRef` wrapper is no longer needed):

```tsx
function TextField({ ref, label }: { ref?: React.Ref<HTMLInputElement>; label: string }) {
  return (
    <label>
      {label}
      <input ref={ref} />
    </label>
  );
}
```

### 10.2 useReducer: complex state in one place

When state has several related pieces and many ways to change, a **reducer** puts all the update logic in one function. It follows the pattern `newState = reducer(oldState, action)`. If you know Redux, this is the same idea.

```tsx
import { useReducer } from 'react';

type Todo = { id: number; title: string; done: boolean };

type State = { todos: Todo[]; filter: 'all' | 'active' | 'done' };

type Action =
  | { type: 'added'; title: string }
  | { type: 'toggled'; id: number }
  | { type: 'removed'; id: number }
  | { type: 'filterChanged'; filter: State['filter'] }
  | { type: 'completedCleared' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'added':
      return { ...state, todos: [{ id: Date.now(), title: action.title, done: false }, ...state.todos] };
    case 'toggled':
      return { ...state, todos: state.todos.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t)) };
    case 'removed':
      return { ...state, todos: state.todos.filter((t) => t.id !== action.id) };
    case 'filterChanged':
      return { ...state, filter: action.filter };
    case 'completedCleared':
      return { ...state, todos: state.todos.filter((t) => !t.done) };
  }
}

const initialState: State = { todos: [], filter: 'all' };

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'added', title: 'New task' })}>Add</button>
      <button onClick={() => dispatch({ type: 'completedCleared' })}>Clear done</button>
      {state.todos.map((t) => (
        <label key={t.id}>
          <input type='checkbox' checked={t.done} onChange={() => dispatch({ type: 'toggled', id: t.id })} />
          {t.title}
        </label>
      ))}
    </>
  );
}
```

Because `Action` is a **discriminated union** (Chapter 3), TypeScript checks every case, narrows each `action`, and (if you add `assertNever`) warns you when you forget one. Reducers are pure functions, so they are trivially easy to unit test.

**`useState` or `useReducer`?** Use `useState` for simple independent values. Use `useReducer` when updates are numerous, depend on each other, or when the next state depends on a complex rule.

### 10.3 Context: sharing data without passing props through every level

Passing a prop through five layers of components that do not use it (**prop drilling**) is tedious. **Context** lets a parent make a value available to **any descendant**.

```tsx
// ThemeContext.tsx
import { createContext, use, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const value: ThemeContextValue = {
    theme,
    toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
  };

  return <ThemeContext value={value}>{children}</ThemeContext>;    // React 19: the context itself is the provider
}

// A custom hook gives a friendly API and a helpful error
export function useTheme(): ThemeContextValue {
  const context = use(ThemeContext);              // or useContext(ThemeContext)
  if (context === null) throw new Error('useTheme must be used inside <ThemeProvider>');
  return context;
}
```

```tsx
// main.tsx
<ThemeProvider>
  <App />
</ThemeProvider>

// Anywhere deep in the tree
function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Theme: {theme}</button>;
}
```

(In React 18 and older you wrote `<ThemeContext.Provider value={...}>` and `useContext`. Both still work.)

**Guidelines for context**

- Good for **rarely changing, widely needed** values: theme, current user, language, feature flags.
- Every consumer re-renders when the context value changes. For frequently changing data (a big store, form state), keep context small, split it into several, or use a state library (Zustand in Chapter 11).
- Wrap the value in `useMemo` if you create a new object each render and many consumers exist (the React Compiler does this automatically, see 10.5).
- Context is **not** a replacement for props. Use props for direct parent-child data.

### 10.4 Performance: what really matters

React is fast by default. Most apps never need manual optimisation. The first rules:

1. **Measure first** with the React DevTools Profiler and browser Performance tools.
2. Fix **structural problems** first: avoid rendering huge lists (virtualise them), avoid doing heavy calculations in render, keep state close to where it is used (so that a keystroke does not re-render the whole page).
3. Only then use memoization.

A component re-renders when **its state changes, its parent re-renders, or a context it uses changes**. Re-rendering is not the same as updating the DOM: React only changes the DOM where the output differs.

**`memo`** skips re-rendering a component if its props did not change (shallow comparison):

```tsx
import { memo } from 'react';

const ExpensiveRow = memo(function ExpensiveRow({ item }: { item: Item }) {
  // ...heavy rendering
  return <li>{item.name}</li>;
});
```

**`useMemo`** caches the result of a calculation between renders:

```tsx
const sorted = useMemo(() => items.toSorted((a, b) => a.price - b.price), [items]);
```

**`useCallback`** caches a function so that its identity stays the same, which matters when it is passed to a `memo` component or used in a dependency array:

```tsx
const handleDelete = useCallback((id: number) => {
  setItems((current) => current.filter((i) => i.id !== id));
}, []);
```

Important: memoization has a cost and adds noise. Use it when a profiler shows a real problem: slow calculations, or expensive `memo` children receiving stable props. Do not wrap everything.

### 10.5 The React Compiler

The **React Compiler** (stable since v1.0) is a build-time tool that **automatically adds memoization** wherever it is safe, so you rarely write `memo`, `useMemo` and `useCallback` by hand. It works if your components follow the rules of React: pure rendering, immutable state, hooks at the top level.

- In a Vite project you add `babel-plugin-react-compiler` to the React plugin configuration.
- In Next.js 16 you enable it with `reactCompiler: true` in `next.config.ts` (Chapter 14).
- Install the matching ESLint rules, which also point out code that breaks the rules.

The lesson: write simple, pure, immutable code first. The compiler (or a profiler-guided fix) handles the performance. Existing code with manual memoization keeps working.

### 10.6 Suspense and lazy loading

**`Suspense`** lets a part of the UI **wait** for something (code, data) and show a fallback meanwhile:

```tsx
import { Suspense, lazy } from 'react';

// Code splitting: the Chart component is downloaded only when it is first rendered
const Chart = lazy(() => import('./Chart'));

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading chart...</p>}>
        <Chart />
      </Suspense>
    </main>
  );
}
```

Use `lazy` for big, rarely used parts: charts, editors, admin pages, modals. Routers can split code per route automatically.

**Data and `use`.** A component can read a promise with `use(promise)`. While it is pending, the nearest Suspense boundary shows its fallback. The promise must be created **outside** the component render (or cached), for example by a framework or a data library. Next.js uses this model heavily (Chapters 15 and 18):

```tsx
import { Suspense, use } from 'react';

function Comments({ commentsPromise }: { commentsPromise: Promise<string[]> }) {
  const comments = use(commentsPromise);       // suspends until resolved
  return <ul>{comments.map((c) => <li key={c}>{c}</li>)}</ul>;
}

function Post({ commentsPromise }: { commentsPromise: Promise<string[]> }) {
  return (
    <Suspense fallback={<p>Loading comments...</p>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

### 10.7 Transitions: keeping the UI responsive

Some updates are urgent (typing), others can wait (showing the filtered results of a huge list). **`useTransition`** marks an update as non-urgent, so React keeps the interface responsive and can interrupt it.

```tsx
import { useState, useTransition, useDeferredValue } from 'react';

function Search({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);                 // lags behind during heavy renders

  const results = items.filter((i) => i.includes(deferredQuery));

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>{query !== deferredQuery ? 'Updating...' : null}</p>
      <ul>{results.map((r) => <li key={r}>{r}</li>)}</ul>
    </>
  );
}

function Tabs() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  function select(next: string) {
    startTransition(() => setTab(next));         // the tab content can render in the background
  }

  return <nav aria-busy={isPending}>{/* ... */}</nav>;
}
```

### 10.8 Error boundaries

If a component throws during rendering, React removes the whole UI tree by default. An **error boundary** catches errors in its children and shows a fallback, so one broken widget does not take down the page. Error boundaries are written as class components (the one real use of classes in React), so most people use the small `react-error-boundary` package:

```bash
$ npm install react-error-boundary
```

```tsx
import { ErrorBoundary } from 'react-error-boundary';

function Fallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role='alert'>
      <p>Something went wrong: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

<ErrorBoundary FallbackComponent={Fallback} onError={(e) => reportToSentry(e)}>
  <Widget />
</ErrorBoundary>
```

Error boundaries catch **render** errors only. Errors in event handlers, async code and effects need `try...catch` (or `.catch`) and your own error state. Next.js has built-in `error.tsx` files that work as error boundaries per route (Chapter 17).

### 10.9 Portals, Activity and other tools

- **Portals** render a child into another place in the DOM (modals, tooltips, toasts) while keeping it in the React tree: `createPortal(<Modal />, document.body)` from `react-dom`.
- **`<Activity mode='hidden'>`** (React 19.2) hides a subtree while **preserving its state** and pausing its effects. It is useful for tabs and back navigation where you want state to survive.
- **`<ViewTransition>`** (stable in React 19.3) animates changes between UI states using the browser's View Transitions API.
- **`useImperativeHandle`** exposes a small API from a child to its parent through a ref (rare).
- **`startTransition`**, **`flushSync`**, **`Profiler`** and **`cache`** are specialised APIs for frameworks and advanced cases.

```tsx
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return createPortal(
    <div className='backdrop' onClick={onClose}>
      <div role='dialog' aria-modal='true' className='modal' onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body,
  );
}
```

For accessible dialogs consider the native `<dialog>` element or a headless UI library (Radix UI, React Aria), which handle focus trapping and keyboard support for you.

### 10.10 Composition patterns worth knowing

- **Compound components:** related components that share state through context (`<Tabs><Tabs.List /><Tabs.Panel /></Tabs>`).
- **Render props and children as functions:** pass a function that returns UI to customise rendering (less needed now that hooks exist).
- **Controlled and uncontrolled components:** let the parent control a component's value (`value` and `onChange`) or let the component manage itself (`defaultValue`).
- **Custom hooks** for logic reuse, **components** for UI reuse.
- **Container and presentational split:** one component fetches and holds state; another only renders from props. Easier to test and style.

### 10.11 Common mistakes

- Reading or writing refs during render, or using refs for data that belongs in state.
- Mutating state inside reducers.
- Putting rapidly changing values in a context that dozens of components consume.
- Wrapping everything in `useMemo` and `useCallback` without measuring.
- Creating a promise inside a component and passing it to `use`, which creates a new promise every render.
- Expecting error boundaries to catch errors from event handlers or async code.
- Prop drilling five levels deep when context or composition (passing elements as props) would be simpler.

### Chapter 10 summary

- `useRef` stores mutable values and DOM references without triggering renders. `useReducer` centralises complex updates with typed actions. Context shares data across the tree; wrap it in a custom hook.
- Measure before optimising. `memo`, `useMemo` and `useCallback` solve measured problems; the React Compiler automates most of it.
- Suspense with `lazy` and `use` handles loading of code and data; transitions keep the UI responsive; error boundaries isolate failures.

### Exercises

1. Build an auto-focusing search box and a 'scroll to top' button using refs.
2. Rewrite the todo app from Chapter 7 with `useReducer` and a typed `Action` union, and unit test the reducer.
3. Build a `ThemeProvider` with persistence (using your `useLocalStorage` hook) and a typed `useTheme` hook.
4. Build an authentication context holding the current user with `login` and `logout`, used by a navbar and a protected page.
5. Lazy load a heavy component and compare the initial bundle size with the Vite build output (`npm run build`).
6. Create an error boundary around a component that throws on a button click, with a retry button.

## Chapter 11: Routing, Server State and Global State

A real application has many pages, loads data from an API and shares some state across screens. Three libraries solve these needs in a Vite React app: **React Router** for pages, **TanStack Query** for data that lives on the server, and **Zustand** (or Context) for client-side global state. In Next.js (Part 3) the framework provides routing and server data loading itself, but the ideas here carry over directly.

### 11.1 Client-side routing with React Router

In a single-page application (SPA) the server sends one HTML page. A **router** changes what React shows when the URL changes, without reloading the page. URLs stay meaningful: the Back button works, links can be shared and bookmarked.

```bash
$ npm install react-router
```

**Defining routes**

```tsx
// src/router.tsx
import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,                 // shared layout: navbar, footer, <Outlet />
    children: [
      { index: true, element: <HomePage /> },                 // '/'
      { path: 'posts', element: <PostsPage /> },              // '/posts'
      { path: 'posts/:postId', element: <PostPage /> },       // '/posts/42'
      { path: '*', element: <NotFoundPage /> },               // everything else
    ],
  },
]);
```

```tsx
// src/main.tsx
import { RouterProvider } from 'react-router/dom';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

(React Router's package layout has changed between versions. If an import path above does not resolve, check the current docs at reactrouter.com for the exact entry points of the version you installed.)

**Layouts with `Outlet`**

```tsx
// src/layouts/RootLayout.tsx
import { NavLink, Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/' end>Home</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />          {/* the matching child route renders here */}
      </main>

      <footer>Copyright 2026</footer>
    </>
  );
}
```

- **`Link`** navigates without a page reload: `<Link to='/posts/42'>Read</Link>`. Never use a plain `<a href>` for internal navigation (it reloads the whole app).
- **`NavLink`** is a `Link` that knows whether it is active (adds an `active` class, useful for menus).

**Reading the URL**

```tsx
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router';

function PostPage() {
  const { postId } = useParams<{ postId: string }>();     // params are strings
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'content';       // /posts/42?tab=comments

  return (
    <>
      <h1>Post {postId}</h1>
      <button onClick={() => setSearchParams({ tab: 'comments' })}>Comments</button>
      <button onClick={() => navigate('/posts')}>Back to list</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
```

**Put UI state in the URL when it should be shareable**: the current page number, search text, filters and selected tab belong in search params. Then a refresh keeps them and users can share the link.

```tsx
function PostsPage() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, Number(params.get('page')) || 1);
  const q = params.get('q') ?? '';

  return (
    <>
      <input value={q} onChange={(e) => setParams({ q: e.target.value, page: '1' })} />
      <button disabled={page === 1} onClick={() => setParams({ q, page: String(page - 1) })}>Previous</button>
      <button onClick={() => setParams({ q, page: String(page + 1) })}>Next</button>
    </>
  );
}
```

**Protected routes**

```tsx
import { Navigate, Outlet, useLocation } from 'react-router';

function RequireAuth() {
  const { user } = useAuth();                 // your auth context (Chapter 10)
  const location = useLocation();

  if (!user) return <Navigate to='/login' replace state={{ from: location }} />;
  return <Outlet />;
}

// In the route config
{ element: <RequireAuth />, children: [{ path: 'dashboard', element: <Dashboard /> }] }
```

Remember (Book 1, Chapter 22): hiding a page in the browser is only a convenience. The **API** must check authorization on every request.

**Code splitting per route** with `lazy`:

```tsx
{ path: 'admin', lazy: async () => ({ Component: (await import('./pages/AdminPage')).default }) }
```

React Router also supports **loaders** and **actions** (functions attached to routes that load data and handle form submissions before rendering) and a full framework mode. In this book we use TanStack Query for data in the SPA, and Next.js for the framework approach.

**Deployment note:** with a SPA, the server must return `index.html` for every path (otherwise refreshing `/posts/42` gives 404). Vercel, Netlify and Cloudflare Pages have a setting for this ('SPA fallback' or rewrites). Express needs a catch-all route.

### 11.2 The problem with fetching in components

In Chapter 8 you fetched in `useEffect`. For real applications that leaves many problems:

- The same data is fetched again every time a component mounts. No **caching**.
- Two components that need the same data send two requests (no **de-duplication**).
- Data becomes **stale**; you must decide when to refresh.
- No built-in **retries**, **pagination** helpers, **optimistic updates**, or refetch when the user returns to the tab.
- Every component repeats loading and error logic.

**Server state** (data owned by the server, cached on the client) is fundamentally different from **client state** (open menus, form drafts). **TanStack Query** (formerly React Query) manages server state.

### 11.3 TanStack Query basics

```bash
$ npm install @tanstack/react-query
$ npm install -D @tanstack/react-query-devtools
```

**Setup:** one `QueryClient` for the app.

```tsx
// src/main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,            // data is considered fresh for 30 s (no refetch)
      retry: 1,
      refetchOnWindowFocus: true,   // refresh when the user returns to the tab
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
```

**A typed API layer** (separate from components):

```tsx
// src/lib/api.ts
import { z } from 'zod';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api';

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string().default(''),
  content: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string(),
});
export type Post = z.infer<typeof PostSchema>;

const PageSchema = z.object({
  items: z.array(PostSchema),
  meta: z.object({ page: z.number(), pages: z.number(), total: z.number() }),
});

async function request<T>(path: string, schema: z.ZodType<T>, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    credentials: 'include',
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error?.message ?? `Request failed (${res.status})`);
  }
  return schema.parse(await res.json());
}

export const postsApi = {
  list: (params: { page: number; q?: string }) =>
    request(`/posts?${new URLSearchParams({ page: String(params.page), ...(params.q && { q: params.q }) })}`, PageSchema),
  get: (id: string) => request(`/posts/${id}`, z.object({ data: PostSchema })).then((r) => r.data),
  create: (input: { title: string; content: string }) =>
    request('/posts', z.object({ data: PostSchema }), { method: 'POST', body: JSON.stringify(input) }).then((r) => r.data),
  remove: (id: string) => fetch(`${API}/posts/${id}`, { method: 'DELETE', credentials: 'include' }),
};
```

(Vite exposes environment variables that start with `VITE_` through `import.meta.env`. Never put secrets in them: they are visible in the browser bundle.)

**Reading data with `useQuery`**

```tsx
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { postsApi } from '../lib/api';

function PostsPage() {
  const [page, setPage] = useState(1);

  const { data, isPending, isError, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['posts', { page }],                   // the cache key: any change fetches or reads another entry
    queryFn: () => postsApi.list({ page }),
    placeholderData: keepPreviousData,               // keep showing the old page while the new one loads
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p role='alert'>Error: {error.message}</p>;

  return (
    <>
      <ul style={{ opacity: isPlaceholderData ? 0.6 : 1 }}>
        {data.items.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>

      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
      <span> Page {page} of {data.meta.pages} {isFetching && '(updating...)'} </span>
      <button disabled={page >= data.meta.pages} onClick={() => setPage((p) => p + 1)}>Next</button>
    </>
  );
}
```

**Key ideas**

- **`queryKey`** identifies the data. It is an array: `['posts']`, `['posts', postId]`, `['posts', { page, q }]`. Everything that changes the result must be in the key (like dependencies in `useEffect`).
- **`queryFn`** returns a promise of the data (and should throw on errors).
- Returned status values: `isPending` (no data yet), `isError`, `isFetching` (a request is in flight, even in the background), plus `data`, `error`, `refetch`.
- **Fresh and stale:** within `staleTime` the cached data is used without refetching. After that it is shown immediately **and** refreshed in the background ('stale while revalidate'), which makes apps feel instant.
- The data type is **inferred** from `queryFn`, so `data.items[0].title` is fully typed.

**Dependent and conditional queries**

```tsx
const { data: post } = useQuery({ queryKey: ['posts', postId], queryFn: () => postsApi.get(postId!), enabled: !!postId });
```

**Changing data with `useMutation`, then refreshing the cache**

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function NewPostForm() {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: postsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });   // mark all posts lists as stale: they refetch
    },
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    create.mutate({ title: String(form.get('title')), content: String(form.get('content')) });
  }

  return (
    <form onSubmit={onSubmit}>
      <input name='title' required />
      <textarea name='content' required />
      <button disabled={create.isPending}>{create.isPending ? 'Saving...' : 'Publish'}</button>
      {create.isError && <p role='alert'>{create.error.message}</p>}
      {create.isSuccess && <p>Saved!</p>}
    </form>
  );
}
```

**Optimistic update (delete a post instantly, roll back on failure)**

```tsx
const remove = useMutation({
  mutationFn: (id: string) => postsApi.remove(id),
  onMutate: async (id) => {
    await queryClient.cancelQueries({ queryKey: ['posts'] });
    const previous = queryClient.getQueriesData<PageData>({ queryKey: ['posts'] });
    queryClient.setQueriesData<PageData>({ queryKey: ['posts'] }, (old) =>
      old ? { ...old, items: old.items.filter((p) => p.id !== id) } : old,
    );
    return { previous };
  },
  onError: (_err, _id, context) => {
    context?.previous.forEach(([key, data]) => queryClient.setQueryData(key, data));   // roll back
  },
  onSettled: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
});
```

Other features you will use: `useInfiniteQuery` (load more and infinite scroll), `useSuspenseQuery` (works with Suspense), prefetching (`queryClient.prefetchQuery`), query key factories for large apps, and the devtools to see the cache.

**Organise queries by feature** with custom hooks, so components do not know about keys:

```tsx
export const postKeys = {
  all: ['posts'] as const,
  list: (filters: { page: number; q?: string }) => [...postKeys.all, 'list', filters] as const,
  detail: (id: string) => [...postKeys.all, 'detail', id] as const,
};

export function usePost(id: string) {
  return useQuery({ queryKey: postKeys.detail(id), queryFn: () => postsApi.get(id) });
}
```

### 11.4 Client state: when Context is not enough

After moving server data into TanStack Query, you will find that very little **client state** remains: UI state (modals, selected tab, theme), drafts, user preferences, a shopping cart. Keep most of it **local** in components or lift it only as far as needed. For genuinely global client state, use Context for small, rarely changing values and a store library for the rest.

**Zustand** is a tiny, popular store with almost no boilerplate:

```bash
$ npm install zustand
```

```tsx
// src/stores/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = { id: string; title: string; price: number; qty: number };

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, 'qty'>) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          return existing
            ? { items: state.items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)) }
            : { items: [...state.items, { ...item, qty: 1 }] };
        }),
      remove: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      clear: () => set({ items: [] }),
    }),
    { name: 'cart' },          // saved in localStorage automatically
  ),
);

// Usage: select only what you need, so the component re-renders only when that part changes
function CartBadge() {
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.qty, 0));
  return <span>{count}</span>;
}

function AddButton({ product }: { product: { id: string; title: string; price: number } }) {
  const add = useCartStore((s) => s.add);
  return <button onClick={() => add(product)}>Add to cart</button>;
}
```

Compare options:

| Tool | Best for |
| --- | --- |
| `useState` | Local component state |
| Context | Small, rarely changing global values (theme, user) |
| **TanStack Query** | **Server state**: API data and caching |
| **Zustand** | Simple global client state (cart, UI flags) |
| Redux Toolkit | Large teams, strict conventions, advanced devtools |
| Jotai, Valtio | Atomic or proxy-based alternatives |
| URL (search params) | State that should be shareable and survive refresh |

### 11.5 Putting it together: authentication in a SPA

A typical flow with your Book 1 API (cookie-based sessions or a refresh token in an `httpOnly` cookie):

```tsx
// src/features/auth/useAuth.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useCurrentUser() {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => authApi.me(),        // returns null when not logged in (handle 401 as null)
    staleTime: 5 * 60_000,
    retry: false,
  });
}

export function useLogin() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (user) => qc.setQueryData(['me'], user),
  });
}

export function useLogout() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => { qc.setQueryData(['me'], null); qc.clear(); },
  });
}
```

The current user is **server state** (it lives on the server), so TanStack Query holds it, and any component can call `useCurrentUser()`.

### 11.6 Common mistakes

- Copying query data into `useState` (you create a second, stale copy). Use the query result directly.
- Missing values in `queryKey`, so different inputs share one cache entry.
- Forgetting to invalidate queries after mutations.
- Using `<a href>` for internal links.
- Storing server data in Zustand or Context by hand, reimplementing caching badly.
- Putting everything in global state when most state is local.
- Selecting the whole store (`useStore()`) instead of a slice, causing unnecessary re-renders.
- Deploying a SPA without a fallback to `index.html` for client-side routes.

### Chapter 11 summary

- React Router maps URLs to components with nested layouts, params, search params and protected routes; use `Link` for navigation.
- TanStack Query manages server state with caching, background refresh, mutations and invalidation; keep API access in a typed layer validated by Zod.
- Keep client state local when possible; use Context for small global values and Zustand for a global store; put shareable state in the URL.

### Exercises

1. Build a three-page app (home, posts list, post detail) with a shared layout, active nav links and a 404 page.
2. Keep the post list's page number and search text in the URL, and make the Back button restore them.
3. Connect the app to your Book 1 Books or InkBlog API with TanStack Query: list, detail, create and delete with cache invalidation.
4. Add an optimistic like button and verify the rollback by making the API fail.
5. Build a cart with Zustand, persisted to localStorage, with quantity controls and a derived total.
6. Add login, logout and a protected `/dashboard` route using `useCurrentUser`.

## Chapter 12: Styling, Accessibility, Testing and Performance

A working app is not yet a good app. This chapter covers four things that separate hobby projects from professional ones: how to style components, how to make them usable by everyone, how to test them, and how to keep them fast.

### 12.1 Styling approaches in React

All of these work. Choose one per project and stay consistent.

| Approach | How | Good for |
| --- | --- | --- |
| Plain global CSS | One `.css` file imported in `main.tsx` | Small projects, resets, design tokens |
| **CSS Modules** | `Button.module.css`, class names are scoped automatically | Component-level styles with no new tools |
| **Tailwind CSS** | Utility classes in JSX: `className='px-4 py-2 rounded'` | Fast development, consistent design system |
| CSS-in-JS (styled-components, Emotion) | Styles written in JavaScript | Older codebases; less common with server components |
| Component libraries (shadcn/ui, Radix, MUI, Mantine) | Prebuilt accessible components | Speed and accessibility |

**Inline styles** (`style={{ ... }}`) are fine for dynamic values (a width from data) but cannot do hover states, media queries or pseudo-elements.

### 12.2 CSS Modules

Vite and Next.js support them without setup. Name the file `*.module.css`:

```css
/* Button.module.css */
.button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: var(--primary);
  color: white;
}
.button:hover { filter: brightness(1.1); }
.danger { background: var(--danger); }
```

```tsx
import styles from './Button.module.css';

type Props = React.ComponentProps<'button'> & { danger?: boolean };

export function Button({ danger, className, ...rest }: Props) {
  const classes = [styles.button, danger && styles.danger, className].filter(Boolean).join(' ');
  return <button className={classes} {...rest} />;
}
```

The class `.button` is renamed to something unique like `_button_x8d2f_1`, so it cannot clash with another file's `.button`. Use `clsx` (`npm install clsx`) for tidy conditional class names: `clsx(styles.button, danger && styles.danger)`.

Put shared design tokens (colours, spacing, fonts) as CSS variables in a global file, as you did in Book 1:

```css
:root { --primary: #4f46e5; --danger: #dc2626; --radius: 12px; }
@media (prefers-color-scheme: dark) { :root { --bg: #0f172a; --text: #e2e8f0; } }
```

### 12.3 Tailwind CSS

**Tailwind** provides small single-purpose classes (`flex`, `p-4`, `text-lg`, `rounded-xl`, `hover:bg-indigo-700`). You style directly in the markup, and the build removes unused classes, so the CSS file stays tiny. It is very popular with React and Next.js teams.

```bash
$ npm install tailwindcss @tailwindcss/vite       # Vite setup for Tailwind v4
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({ plugins: [react(), tailwindcss()] });
```

```css
/* src/index.css */
@import 'tailwindcss';

@theme {
  --color-brand: #4f46e5;       /* your own design tokens become utilities: bg-brand, text-brand */
  --font-display: 'Inter', sans-serif;
}
```

(Tailwind's setup has changed between major versions, and Next.js has its own `create-next-app` option that configures everything. Follow tailwindcss.com/docs for your framework.)

```tsx
export function PricingCard({ title, price, featured }: { title: string; price: number; featured?: boolean }) {
  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
        featured ? 'border-brand bg-brand/5' : 'border-gray-200 bg-white'
      }`}
    >
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='mt-2 text-3xl font-bold'>
        {price}<span className='text-base font-normal text-gray-500'>/month</span>
      </p>
      <button className='mt-6 w-full rounded-lg bg-brand px-4 py-2 font-medium text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2'>
        Choose plan
      </button>
    </article>
  );
}
```

**Responsive and state variants** are prefixes: `md:flex-row` (from the medium breakpoint up), `dark:bg-slate-900`, `hover:`, `focus-visible:`, `disabled:`, `group-hover:`.

**Keeping Tailwind tidy:**

- Extract **components**, not CSS: build `<Button>` once instead of repeating 12 classes everywhere.
- Use `clsx` and `tailwind-merge` (the `cn()` helper) to combine and override classes safely.
- Use **class-variance-authority** (`cva`) for components with variants.
- Let the editor plugin (Tailwind CSS IntelliSense) and Prettier plugin sort the classes.

```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// cn('px-2 py-1', isLarge && 'px-4', className): later classes win over earlier conflicting ones
```

**shadcn/ui** is not a package but a collection of beautiful, accessible components (built on Radix UI and Tailwind) that you copy into your project with a CLI and own completely. It is the most common starting point for modern Next.js apps.

### 12.4 Accessibility (a11y)

Accessibility means that **everyone** can use your site: people using screen readers, keyboards only, magnification, voice control, or in bright sunlight. It is also a legal requirement in many countries, improves SEO, and makes your product better for all users. Most of it is simply writing correct HTML.

**The essentials**

1. **Use semantic elements.** `button` for actions, `a` for navigation, `nav`, `main`, `header`, `footer`, `h1` to `h6` in order, `ul` for lists, `label` for inputs. A clickable `div` is not focusable, not announced as a button, and does not respond to Enter or Space.

```tsx
// Bad
<div onClick={save}>Save</div>

// Good
<button type='button' onClick={save}>Save</button>
```

2. **Everything works with a keyboard.** Try your whole site using only Tab, Shift+Tab, Enter, Space, Escape and arrow keys. Focus must be **visible** (never `outline: none` without a replacement) and follow a logical order.
3. **Label every form control**: `<label htmlFor>` or a wrapping label, and `aria-label` for icon-only buttons.

```tsx
<button aria-label='Close dialog' onClick={onClose}><XIcon aria-hidden='true' /></button>
```

4. **Text alternatives for images:** meaningful `alt` for content images, `alt=''` for decorative ones.
5. **Colour contrast:** text needs a contrast ratio of at least 4.5 to 1 (3 to 1 for large text) against its background. Do not use colour alone to convey meaning (add an icon or text for errors).
6. **Announce dynamic changes:** `role='alert'` for errors, `role='status'` or `aria-live='polite'` for non-urgent updates such as 'Item added'.
7. **Manage focus** in dialogs and route changes: move focus into a dialog when it opens, trap it inside, and return it to the trigger when it closes. After navigating to a new page, move focus to the main heading. (Use the native `<dialog>` or a library that does this.)
8. **Respect user preferences:** `prefers-reduced-motion` (reduce animations), `prefers-color-scheme`, and allow zoom.
9. **Page structure:** one `h1` per page, a skip link ('Skip to content') as the first focusable element, a descriptive `<title>`, and `lang` on `<html>`.

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
```

**ARIA** (`role`, `aria-*` attributes) adds meaning when no semantic element exists. The first rule of ARIA: **do not use ARIA if a native element does the job**. Wrong ARIA is worse than none.

**Tools**

- `eslint-plugin-jsx-a11y` flags many mistakes while you type.
- Chrome **Lighthouse** and the **axe DevTools** extension scan a page for issues.
- Try a screen reader (NVDA on Windows, VoiceOver on Mac and iOS, TalkBack on Android) for ten minutes. It is eye-opening.
- In tests, use `getByRole` and `getByLabelText` (below): if your test cannot find an element by role and name, a screen reader probably cannot either.

### 12.5 Testing React components

Test what the **user** experiences: they see text, click buttons, type into fields, and read results. They do not know your component's state variables or function names. **Testing Library** encourages exactly this.

```bash
$ npm install -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

```ts
// vite.config.ts (add a test section; use defineConfig from 'vitest/config')
test: {
  environment: 'jsdom',
  setupFiles: './src/test/setup.ts',
  globals: true,
}
```

```ts
// src/test/setup.ts
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => cleanup());
```

A component and its test:

```tsx
// Counter.tsx
export function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount(initial)}>Reset</button>
    </div>
  );
}
```

```tsx
// Counter.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
  it('starts at the initial value', () => {
    render(<Counter initial={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  it('increments and resets', async () => {
    const user = userEvent.setup();
    render(<Counter initial={2} />);

    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByText('Count: 4')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });
});
```

**Query priority** (most to least preferred): `getByRole` (with `name`), `getByLabelText`, `getByPlaceholderText`, `getByText`, `getByDisplayValue`, then `getByTestId` as a last resort. Variants: `getBy` (throws if missing), `queryBy` (returns null, for asserting absence), `findBy` (waits, for async content).

**Testing forms and async UI**

```tsx
it('shows validation errors and submits valid data', async () => {
  const onSubmit = vi.fn();
  const user = userEvent.setup();
  render(<ContactForm onSubmit={onSubmit} />);

  await user.click(screen.getByRole('button', { name: /send/i }));
  expect(await screen.findByText(/enter a valid email/i)).toBeInTheDocument();
  expect(onSubmit).not.toHaveBeenCalled();

  await user.type(screen.getByLabelText(/email/i), 'asha@example.com');
  await user.type(screen.getByLabelText(/message/i), 'Hello, this is a test message');
  await user.click(screen.getByRole('button', { name: /send/i }));

  expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ email: 'asha@example.com' }));
});
```

**Mocking the network with MSW** (Mock Service Worker) intercepts `fetch` calls with realistic handlers, so components and TanStack Query run unchanged:

```ts
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const server = setupServer(
  http.get('http://localhost:4000/api/posts', () =>
    HttpResponse.json({ items: [{ id: '1', title: 'Hello', excerpt: '', content: '', tags: [], createdAt: '2026-01-01' }], meta: { page: 1, pages: 1, total: 1 } }),
  ),
);
// in setup.ts: beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close());
```

When testing components that use TanStack Query, wrap them in a fresh `QueryClientProvider` with `retry: false` for every test.

**Testing custom hooks:** `renderHook` from Testing Library. **Testing reducers and utility functions:** plain unit tests. **End-to-end tests** (real browser, real flows) use **Playwright** (Chapter 21).

What to test: important user flows, conditional rendering (loading, error, empty, success), form validation, permissions. What not to test: React itself, third-party libraries, trivial markup, implementation details (state variable names, internal function calls).

### 12.6 Performance of React apps

Measure with **Lighthouse** (Chrome DevTools, Lighthouse tab), the **Performance** panel, and the React **Profiler**. The **Core Web Vitals** are the metrics that matter for users and search ranking:

| Metric | Meaning | Good value |
| --- | --- | --- |
| **LCP** (Largest Contentful Paint) | How quickly the main content appears | Under 2.5 s |
| **INP** (Interaction to Next Paint) | How quickly the page responds to input | Under 200 ms |
| **CLS** (Cumulative Layout Shift) | How much the layout jumps around | Under 0.1 |

**Practical checklist**

- **Ship less JavaScript:** code split by route (`lazy`), load heavy libraries only where used, avoid giant dependencies (check size on bundlephobia.com). Analyse the bundle with `rollup-plugin-visualizer` (Vite) or the Next.js bundle analyzer.
- **Optimise images:** correct dimensions, modern formats (WebP, AVIF), `loading='lazy'`, explicit `width` and `height` to prevent layout shift. (Next.js `next/image` does most of this for you, Chapter 17.)
- **Avoid layout shift:** reserve space for images, ads and async content; use skeletons that match the final size.
- **Fetch smartly:** cache with TanStack Query, avoid request waterfalls (fetch in parallel), prefetch the next page on hover.
- **Render efficiently:** keep state local, virtualise long lists, avoid creating huge objects in render, use the React Compiler.
- **Use production builds** when measuring (`npm run build && npm run preview`). Development mode is intentionally slower.
- **Fonts:** self-host, use `font-display: swap`, limit weights.
- **Caching and CDN:** hashed file names with long cache headers (Vite does this) and a CDN.
- **Render on the server** when SEO and first paint matter. That is a big part of why Next.js exists (Part 3).

### 12.7 SEO and the limits of SPAs

A classic SPA ships an almost empty HTML file and builds the page in the browser. Search engines can run JavaScript but may index slowly, and social media link previews usually do not run it. If your site needs good SEO or fast first paint (blogs, shops, marketing pages), prefer **server rendering or static generation**. That is the main reason to choose **Next.js** over plain Vite for public websites. Dashboards and internal tools behind a login are perfect for SPAs.

### 12.8 Common mistakes

- Mixing three styling approaches in one project.
- Using `div` and `span` for interactive elements, and removing focus outlines.
- Testing implementation details (`wrapper.state()`) instead of user-visible behaviour.
- Forgetting `await` with `userEvent` and `findBy` queries, causing flaky tests.
- Optimising before measuring; or never measuring.
- Using `getByTestId` everywhere instead of roles and labels.
- Loading a huge library for one tiny function.
- Testing with `retry` enabled in TanStack Query, so failing requests make tests slow and confusing.

### Chapter 12 summary

- Choose one styling approach: CSS Modules for scoped CSS or Tailwind for utility-first speed; use design tokens and `clsx` or `cn`.
- Accessibility is mostly semantic HTML, labels, keyboard support, visible focus, contrast and announcements; check it with linters, Lighthouse and a screen reader.
- Test user-visible behaviour with Vitest and Testing Library, mock the network with MSW.
- Measure Core Web Vitals; reduce JavaScript, optimise images, avoid layout shift, and use server rendering where SEO matters.

### Exercises

1. Build a reusable `Button` component with variants and sizes, styled once with CSS Modules and once with Tailwind. Compare.
2. Audit your project with Lighthouse and axe; fix every accessibility issue they report.
3. Navigate your whole app using only the keyboard and list the problems you find.
4. Write tests for a login form: validation errors, successful submit, and the loading state.
5. Write a test for a component that fetches posts, using MSW to cover loading, success and error.
6. Analyse the bundle of your app, find the three biggest dependencies, and lazy load one.

## Chapter 13: Project: InkBlog Client with React and TypeScript

In this project you build a modern single-page application that talks to a JSON API: **InkBlog Client**. It uses everything from Part 2: components, state, effects, forms, routing, TanStack Query, Zod, accessibility and tests. The back end is the InkBlog server from Book 1, Chapter 26, which you expose as a JSON API (section 13.2). If you prefer, use the Books API from Book 1, Chapter 20 and adapt the types.

### 13.1 Features

- Browse posts with search, tag filter and pagination (all in the URL).
- Read a post (Markdown rendered safely), like it (optimistic update), read and add comments.
- Register, log in, log out; current user available everywhere.
- Create, edit and delete your own posts with a validated form and a Markdown preview.
- Loading, error and empty states everywhere; accessible and responsive.
- Tests for the critical parts.

### 13.2 The API contract

The client expects these endpoints (add them to the Book 1 server under `/api`, reusing your services). All JSON. Session cookie `httpOnly`; mutating requests must send the header `X-Requested-With: fetch` (the server rejects mutating requests without it, a simple CSRF defence for JSON APIs on top of `SameSite` cookies).

| Method and path | Purpose | Response |
| --- | --- | --- |
| `POST /api/auth/register` | Create account | `{ data: User }` |
| `POST /api/auth/login` | Log in | `{ data: User }` |
| `POST /api/auth/logout` | Log out | `204` |
| `GET /api/auth/me` | Current user | `{ data: User }` or `401` |
| `GET /api/posts?page=&q=&tag=` | List posts | `{ data: Post[], meta: { page, pages, total } }` |
| `GET /api/posts/:slug` | One post | `{ data: Post }` |
| `POST /api/posts` | Create | `{ data: Post }` |
| `PATCH /api/posts/:slug` | Update (owner or admin) | `{ data: Post }` |
| `DELETE /api/posts/:slug` | Delete (owner or admin) | `204` |
| `POST /api/posts/:slug/like` | Toggle like | `{ data: { liked, count } }` |
| `GET /api/posts/:slug/comments` | List comments | `{ data: Comment[] }` |
| `POST /api/posts/:slug/comments` | Add comment | `{ data: Comment }` |

No server yet? Use **MSW** or `json-server` to fake these endpoints while you build the interface, then switch to the real API.

### 13.3 Setup

```bash
$ npm create vite@latest inkblog-client -- --template react-ts
$ cd inkblog-client
$ npm install
$ npm install react-router @tanstack/react-query zod react-hook-form @hookform/resolvers clsx react-markdown rehype-sanitize
$ npm install -D @tanstack/react-query-devtools vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom msw
```

**Vite dev proxy**, so the browser talks to one origin and cookies and CORS are no problem during development:

```ts
// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://localhost:3000' } },      // your Express server
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', globals: true },
});
```

In production, serve the built SPA and the API from the same site (for example behind one reverse proxy), or enable CORS with credentials for your exact origin.

**Folder structure (by feature)**

```text
src/
  main.tsx
  App.tsx                 router and providers
  lib/
    http.ts               fetch wrapper
    schemas.ts            Zod schemas and inferred types
  features/
    auth/   api.ts  hooks.ts  LoginPage.tsx  RegisterPage.tsx  RequireAuth.tsx
    posts/  api.ts  hooks.ts  PostsPage.tsx  PostPage.tsx  PostForm.tsx  EditPostPage.tsx  NewPostPage.tsx
    comments/  api.ts  hooks.ts  Comments.tsx
  components/             Button, Spinner, ErrorMessage, Pagination, Layout
  test/                   setup.ts, server.ts (MSW), utils.tsx
```

### 13.4 Schemas and the HTTP layer

```ts
// src/lib/schemas.ts
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['user', 'admin']),
});
export type User = z.infer<typeof UserSchema>;

export const PostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  author: z.object({ id: z.string(), name: z.string() }),
  likeCount: z.number(),
  likedByMe: z.boolean().default(false),
  commentCount: z.number(),
  createdAt: z.string(),
});
export type Post = z.infer<typeof PostSchema>;

export const CommentSchema = z.object({
  id: z.string(),
  body: z.string(),
  author: z.object({ id: z.string(), name: z.string() }),
  createdAt: z.string(),
});
export type Comment = z.infer<typeof CommentSchema>;

export const MetaSchema = z.object({ page: z.number(), pages: z.number(), total: z.number() });

// Input schemas double as form validation
export const PostInputSchema = z.object({
  title: z.string().trim().min(3, 'Title must have at least 3 characters').max(120),
  excerpt: z.string().trim().max(300).default(''),
  content: z.string().trim().min(10, 'Write at least 10 characters'),
  tags: z.string().default(''),     // comma separated in the form
});
export type PostInput = z.input<typeof PostInputSchema>;
```

```ts
// src/lib/http.ts
import type { z } from 'zod';

export class ApiError extends Error {
  constructor(public status: number, message: string, public details?: unknown) {
    super(message);
    this.name = 'ApiError';
  }
}

type Options = Omit<RequestInit, 'body'> & { body?: unknown };

export async function http<T>(path: string, schema: z.ZodType<T> | null, { body, headers, ...init }: Options = {}): Promise<T> {
  const res = await fetch(`/api${path}`, {
    credentials: 'include',
    ...init,
    headers: {
      'X-Requested-With': 'fetch',
      ...(body !== undefined && { 'Content-Type': 'application/json' }),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (res.status === 204) return undefined as T;

  const json: unknown = await res.json().catch(() => null);

  if (!res.ok) {
    const message = (json as { error?: { message?: string } } | null)?.error?.message ?? `Request failed (${res.status})`;
    throw new ApiError(res.status, message, json);
  }
  return schema ? schema.parse(json) : (json as T);
}
```

### 13.5 Auth feature

```ts
// src/features/auth/api.ts
import { z } from 'zod';
import { http, ApiError } from '../../lib/http';
import { UserSchema } from '../../lib/schemas';

const Envelope = z.object({ data: UserSchema });

export const authApi = {
  me: async () => {
    try {
      return (await http('/auth/me', Envelope)).data;
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) return null;     // not logged in is a normal state
      throw e;
    }
  },
  login: async (input: { email: string; password: string }) =>
    (await http('/auth/login', Envelope, { method: 'POST', body: input })).data,
  register: async (input: { name: string; email: string; password: string }) =>
    (await http('/auth/register', Envelope, { method: 'POST', body: input })).data,
  logout: () => http<void>('/auth/logout', null, { method: 'POST' }),
};
```

```tsx
// src/features/auth/hooks.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from './api';

export const authKeys = { me: ['auth', 'me'] as const };

export function useCurrentUser() {
  return useQuery({ queryKey: authKeys.me, queryFn: authApi.me, staleTime: 5 * 60_000, retry: false });
}

export function useLogin() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: authApi.login, onSuccess: (user) => qc.setQueryData(authKeys.me, user) });
}

export function useRegister() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: authApi.register, onSuccess: (user) => qc.setQueryData(authKeys.me, user) });
}

export function useLogout() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => { qc.clear(); qc.setQueryData(authKeys.me, null); },
  });
}
```

```tsx
// src/features/auth/RequireAuth.tsx
import { Navigate, Outlet, useLocation } from 'react-router';
import { useCurrentUser } from './hooks';

export function RequireAuth() {
  const { data: user, isPending } = useCurrentUser();
  const location = useLocation();

  if (isPending) return <p aria-busy='true'>Checking your session...</p>;
  if (!user) return <Navigate to='/login' replace state={{ from: location.pathname }} />;
  return <Outlet />;
}
```

```tsx
// src/features/auth/LoginPage.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useLocation, useNavigate } from 'react-router';
import { useLogin } from './hooks';

const Schema = z.object({ email: z.string().email('Enter a valid email'), password: z.string().min(1, 'Password is required') });
type Values = z.infer<typeof Schema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const from = (useLocation().state as { from?: string } | null)?.from ?? '/';
  const login = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(Schema) });

  return (
    <form onSubmit={handleSubmit((v) => login.mutate(v, { onSuccess: () => navigate(from, { replace: true }) }))} noValidate>
      <h1>Log in</h1>

      <label htmlFor='email'>Email</label>
      <input id='email' type='email' autoComplete='email' aria-invalid={!!errors.email} {...register('email')} />
      {errors.email && <p role='alert'>{errors.email.message}</p>}

      <label htmlFor='password'>Password</label>
      <input id='password' type='password' autoComplete='current-password' {...register('password')} />
      {errors.password && <p role='alert'>{errors.password.message}</p>}

      {login.isError && <p role='alert'>{login.error.message}</p>}

      <button disabled={login.isPending}>{login.isPending ? 'Logging in...' : 'Log in'}</button>
      <p>No account? <Link to='/register'>Sign up</Link></p>
    </form>
  );
}
```

Build `RegisterPage` the same way, with name, email and password fields.

### 13.6 Posts feature: API, hooks and list page

```ts
// src/features/posts/api.ts
import { z } from 'zod';
import { http } from '../../lib/http';
import { MetaSchema, PostSchema, type PostInput } from '../../lib/schemas';

const ListSchema = z.object({ data: z.array(PostSchema), meta: MetaSchema });
const OneSchema = z.object({ data: PostSchema });
const LikeSchema = z.object({ data: z.object({ liked: z.boolean(), count: z.number() }) });

export type ListParams = { page: number; q: string; tag: string };

export const postsApi = {
  list: ({ page, q, tag }: ListParams) => {
    const params = new URLSearchParams({ page: String(page) });
    if (q) params.set('q', q);
    if (tag) params.set('tag', tag);
    return http(`/posts?${params}`, ListSchema);
  },
  get: async (slug: string) => (await http(`/posts/${slug}`, OneSchema)).data,
  create: async (input: PostInput) => (await http('/posts', OneSchema, { method: 'POST', body: input })).data,
  update: async (slug: string, input: Partial<PostInput>) =>
    (await http(`/posts/${slug}`, OneSchema, { method: 'PATCH', body: input })).data,
  remove: (slug: string) => http<void>(`/posts/${slug}`, null, { method: 'DELETE' }),
  like: async (slug: string) => (await http(`/posts/${slug}/like`, LikeSchema, { method: 'POST' })).data,
};
```

```tsx
// src/features/posts/hooks.ts
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postsApi, type ListParams } from './api';
import type { Post } from '../../lib/schemas';

export const postKeys = {
  all: ['posts'] as const,
  list: (p: ListParams) => ['posts', 'list', p] as const,
  detail: (slug: string) => ['posts', 'detail', slug] as const,
};

export const usePosts = (params: ListParams) =>
  useQuery({ queryKey: postKeys.list(params), queryFn: () => postsApi.list(params), placeholderData: keepPreviousData });

export const usePost = (slug: string) => useQuery({ queryKey: postKeys.detail(slug), queryFn: () => postsApi.get(slug) });

export function useCreatePost() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postsApi.create,
    onSuccess: (post) => {
      qc.setQueryData(postKeys.detail(post.slug), post);
      qc.invalidateQueries({ queryKey: [...postKeys.all, 'list'] });
    },
  });
}

export function useDeletePost() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postsApi.remove,
    onSuccess: () => qc.invalidateQueries({ queryKey: postKeys.all }),
  });
}

// Optimistic like: update the UI at once, roll back if the server refuses
export function useToggleLike(slug: string) {
  const qc = useQueryClient();
  const key = postKeys.detail(slug);

  return useMutation({
    mutationFn: () => postsApi.like(slug),
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: key });
      const previous = qc.getQueryData<Post>(key);
      if (previous) {
        qc.setQueryData<Post>(key, {
          ...previous,
          likedByMe: !previous.likedByMe,
          likeCount: previous.likeCount + (previous.likedByMe ? -1 : 1),
        });
      }
      return { previous };
    },
    onError: (_e, _v, ctx) => { if (ctx?.previous) qc.setQueryData(key, ctx.previous); },
    onSettled: () => qc.invalidateQueries({ queryKey: key }),
  });
}
```

```tsx
// src/features/posts/PostsPage.tsx
import { Link, useSearchParams } from 'react-router';
import { usePosts } from './hooks';

export default function PostsPage() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, Number(params.get('page')) || 1);
  const q = params.get('q') ?? '';
  const tag = params.get('tag') ?? '';

  const { data, isPending, isError, error, isPlaceholderData } = usePosts({ page, q, tag });

  function update(next: Partial<{ page: number; q: string; tag: string }>) {
    const merged = { page, q, tag, ...next };
    const out = new URLSearchParams();
    if (merged.q) out.set('q', merged.q);
    if (merged.tag) out.set('tag', merged.tag);
    if (merged.page > 1) out.set('page', String(merged.page));
    setParams(out);
  }

  return (
    <section>
      <h1>Posts</h1>

      <input type='search' aria-label='Search posts' placeholder='Search...' value={q}
        onChange={(e) => update({ q: e.target.value, page: 1 })} />
      {tag && <p>Tag: #{tag} <button onClick={() => update({ tag: '', page: 1 })}>Clear</button></p>}

      {isPending && <p aria-busy='true'>Loading posts...</p>}
      {isError && <p role='alert'>Could not load posts: {error.message}</p>}

      {data && (
        <>
          {data.data.length === 0 ? <p>No posts found.</p> : (
            <ul className='cards' style={{ opacity: isPlaceholderData ? 0.6 : 1 }}>
              {data.data.map((post) => (
                <li key={post.id}>
                  <article className='card'>
                    <h2><Link to={`/posts/${post.slug}`}>{post.title}</Link></h2>
                    <p className='meta'>{post.author.name} &middot; {new Date(post.createdAt).toLocaleDateString('en-IN')} &middot; {post.likeCount} likes</p>
                    <p>{post.excerpt}</p>
                    <p>{post.tags.map((t) => <button key={t} className='chip' onClick={() => update({ tag: t, page: 1 })}>#{t}</button>)}</p>
                  </article>
                </li>
              ))}
            </ul>
          )}

          <nav aria-label='Pagination'>
            <button disabled={page <= 1} onClick={() => update({ page: page - 1 })}>Previous</button>
            <span> Page {data.meta.page} of {data.meta.pages} </span>
            <button disabled={page >= data.meta.pages} onClick={() => update({ page: page + 1 })}>Next</button>
          </nav>
        </>
      )}
    </section>
  );
}
```

### 13.7 Post page with safe Markdown, like and comments

```tsx
// src/features/posts/PostPage.tsx
import { Link, useNavigate, useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import { usePost, useDeletePost, useToggleLike } from './hooks';
import { useCurrentUser } from '../auth/hooks';
import { Comments } from '../comments/Comments';

export default function PostPage() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const { data: post, isPending, isError, error } = usePost(slug);
  const { data: user } = useCurrentUser();
  const like = useToggleLike(slug);
  const remove = useDeletePost();

  if (isPending) return <p aria-busy='true'>Loading...</p>;
  if (isError) return <p role='alert'>{error.message}</p>;

  const canEdit = user && (user.role === 'admin' || user.id === post.author.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p className='meta'>By {post.author.name} on {new Date(post.createdAt).toLocaleDateString('en-IN')}</p>

      {/* ReactMarkdown does not render raw HTML by default, and rehype-sanitize adds a second safety layer */}
      <div className='content'>
        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{post.content}</ReactMarkdown>
      </div>

      <div className='actions'>
        {user ? (
          <button aria-pressed={post.likedByMe} onClick={() => like.mutate()}>
            {post.likedByMe ? 'Liked' : 'Like'} ({post.likeCount})
          </button>
        ) : (
          <p><Link to='/login'>Log in</Link> to like and comment. {post.likeCount} likes.</p>
        )}

        {canEdit && (
          <>
            <Link to={`/posts/${post.slug}/edit`}>Edit</Link>
            <button
              onClick={() => {
                if (confirm('Delete this post?')) remove.mutate(post.slug, { onSuccess: () => navigate('/') });
              }}
              disabled={remove.isPending}
            >
              Delete
            </button>
          </>
        )}
      </div>

      <Comments slug={post.slug} />
    </article>
  );
}
```

The `Comments` component uses `useQuery` for the list and `useMutation` for adding a comment (with `invalidateQueries`), and shows a form only to logged-in users. Write it using the patterns above.

### 13.8 The post form (create and edit)

One form component serves both pages. React Hook Form plus the shared Zod schema validate input; a live Markdown preview helps writers.

```tsx
// src/features/posts/PostForm.tsx
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import { PostInputSchema, type PostInput } from '../../lib/schemas';

type Props = {
  defaultValues?: Partial<PostInput>;
  submitLabel: string;
  isSubmitting: boolean;
  serverError?: string;
  onSubmit: (values: PostInput) => void;
};

export function PostForm({ defaultValues, submitLabel, isSubmitting, serverError, onSubmit }: Props) {
  const { register, handleSubmit, control, formState: { errors, isDirty } } = useForm<PostInput>({
    resolver: zodResolver(PostInputSchema),
    defaultValues: { title: '', excerpt: '', content: '', tags: '', ...defaultValues },
  });

  const content = useWatch({ control, name: 'content' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className='post-form'>
      <label htmlFor='title'>Title</label>
      <input id='title' aria-invalid={!!errors.title} {...register('title')} />
      {errors.title && <p role='alert'>{errors.title.message}</p>}

      <label htmlFor='excerpt'>Short summary (optional)</label>
      <input id='excerpt' {...register('excerpt')} />

      <label htmlFor='tags'>Tags (comma separated, up to 5)</label>
      <input id='tags' {...register('tags')} />

      <div className='editor'>
        <div>
          <label htmlFor='content'>Content (Markdown)</label>
          <textarea id='content' rows={14} aria-invalid={!!errors.content} {...register('content')} />
          {errors.content && <p role='alert'>{errors.content.message}</p>}
        </div>
        <div aria-label='Preview'>
          <h2>Preview</h2>
          <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{content || '*Nothing to preview yet*'}</ReactMarkdown>
        </div>
      </div>

      {serverError && <p role='alert'>{serverError}</p>}
      <button disabled={isSubmitting || !isDirty}>{isSubmitting ? 'Saving...' : submitLabel}</button>
    </form>
  );
}
```

```tsx
// src/features/posts/NewPostPage.tsx
export default function NewPostPage() {
  const navigate = useNavigate();
  const create = useCreatePost();

  return (
    <>
      <h1>Write a post</h1>
      <PostForm
        submitLabel='Publish'
        isSubmitting={create.isPending}
        serverError={create.error?.message}
        onSubmit={(values) => create.mutate(values, { onSuccess: (post) => navigate(`/posts/${post.slug}`) })}
      />
    </>
  );
}
```

The edit page loads the post with `usePost`, passes it as `defaultValues` (turning `tags` into a comma-separated string), and calls `postsApi.update`. Remember: the **server** checks ownership. The button hiding is only a convenience.

### 13.9 App, router and layout

```tsx
// src/App.tsx
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { RequireAuth } from './features/auth/RequireAuth';
import PostsPage from './features/posts/PostsPage';
import PostPage from './features/posts/PostPage';
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';

const NewPostPage = lazy(() => import('./features/posts/NewPostPage'));      // the editor is big: load on demand
const EditPostPage = lazy(() => import('./features/posts/EditPostPage'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <p role='alert'>Something went wrong.</p>,
    children: [
      { index: true, element: <PostsPage /> },
      { path: 'posts/:slug', element: <PostPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      {
        element: <RequireAuth />,
        children: [
          { path: 'new', element: <Suspense fallback={<p>Loading editor...</p>}><NewPostPage /></Suspense> },
          { path: 'posts/:slug/edit', element: <Suspense fallback={<p>Loading editor...</p>}><EditPostPage /></Suspense> },
        ],
      },
      { path: '*', element: <p>Page not found.</p> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

The `Layout` component renders a skip link, the header (logo, search link, and a user menu that shows Log in and Sign up or the user's name and a Log out button using `useCurrentUser` and `useLogout`), `<main id='main'><Outlet /></main>` and a footer. Set the document title on each page (React 19 allows `<title>` inside components).

### 13.10 Tests to write

- **PostsPage**: with MSW returning two posts, the titles render; with an empty result the 'No posts found' message appears; with a 500 the error message appears.
- **LoginPage**: empty submit shows validation messages; a wrong password shows the server error; success navigates away.
- **RequireAuth**: redirects to `/login` when `GET /api/auth/me` returns 401.
- **useToggleLike**: the count changes immediately, and rolls back when the server fails.
- **PostForm**: shows the live preview, blocks short content, and calls `onSubmit` with trimmed values.

A reusable test helper renders any UI with the router and a fresh `QueryClient`:

```tsx
// src/test/utils.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import type { RouteObject } from 'react-router';

export function renderWithProviders(routes: RouteObject[], initialEntries = ['/']) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const router = createMemoryRouter(routes, { initialEntries });
  return render(
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}
```

### 13.11 Build, deploy and polish

```bash
$ npm run build      # type-checks and creates dist/
$ npm run preview    # test the production build locally
```

Deploy `dist/` to Netlify, Vercel, Cloudflare Pages or any static host, with a rewrite of all paths to `index.html`. Point the API requests to your deployed server (same site, or CORS with credentials for your exact origin and `SameSite=None; Secure` cookies if the sites differ).

**Polish checklist:** keyboard navigation works everywhere, focus moves to the page heading after navigation, skeleton loaders match final sizes, every list has an empty state, errors are friendly, the page title changes per route, images have alt text, Lighthouse accessibility score above 90, and the bundle analyser shows no surprises.

### 13.12 Extensions

1. Infinite scrolling with `useInfiniteQuery`.
2. Draft autosave to localStorage with the `useLocalStorage` hook and a 'restore draft' prompt.
3. A dark mode toggle that respects `prefers-color-scheme` (Context plus CSS variables).
4. Image upload for covers with a progress bar and preview.
5. Skeleton screens and view transitions between the list and the post page.
6. Replace the Vite SPA with Next.js in Part 3, reusing your components, schemas and types.

### Chapter 13 summary

- You built a complete typed SPA: feature folders, Zod-validated API layer, TanStack Query for server state, React Router with protected routes, forms with React Hook Form, optimistic updates, lazy loading and tests.
- The same patterns scale to any size of application, and most of them carry over to Next.js.

### Part 2 project exercises

1. Build InkBlog Client end to end and deploy it.
2. Write at least ten tests covering the flows in 13.10.
3. Add three extensions from 13.12.
4. Run Lighthouse, fix all accessibility findings, and document your scores in the README.
5. Write a README with architecture notes, a folder diagram and the API contract.

# Part 3: Next.js

## Chapter 14: Introduction to Next.js and the App Router

You can now build rich interfaces with React. But a real public website needs much more: URLs for every page, fast first load, good SEO, data from a database, forms that work, authentication, image optimisation, and simple deployment. With plain React you assemble all of that yourself from separate libraries. **Next.js** is a framework that gives you all of it in one coherent package.

### 14.1 What is Next.js?

Next.js is a **full-stack React framework** by Vercel. React is the library for the UI; Next.js adds:

| Feature | What it gives you |
| --- | --- |
| **File-system routing** | A folder and file structure becomes your URLs. No router configuration |
| **Server rendering** | Pages are rendered on the server (or at build time), so users and search engines get real HTML immediately |
| **React Server Components** | Components that run only on the server, can read your database directly, and send zero JavaScript to the browser |
| **Data fetching and caching** | Fetch where you need data, with explicit caching and revalidation |
| **Server Actions** | Call server functions from forms and buttons without writing API endpoints |
| **Route Handlers** | Real HTTP endpoints (`GET`, `POST`) when you need an API |
| **Layouts and loading UI** | Nested layouts, streaming, instant loading states and error boundaries per route |
| **Optimisation** | Images, fonts, scripts, bundling (Turbopack), prefetching |
| **SEO** | A metadata API, sitemaps, Open Graph images |
| **Deployment** | One-command deployment on Vercel, or run it anywhere with Node.js or Docker |

Why choose it? For marketing sites, blogs, shops, SaaS products and dashboards it is the most popular choice in the React world. You write one TypeScript codebase for the front end **and** the back end, and you can still keep a separate API (like your Express server) when you want one.

**The big idea of this part:** you decide for every piece of UI whether it runs on the **server** or in the **browser**. The server is the default. You add JavaScript to the browser only for interactivity. That is the key to fast sites.

### 14.2 Version note

This book uses **Next.js 16** (current: 16.3) with the **App Router** and React 19. Important points of this generation:

- **Turbopack** is the default bundler for dev and build.
- `proxy.ts` replaces `middleware.ts` (Chapter 20).
- **Cache Components** (`'use cache'`) make caching explicit and opt-in (Chapter 16). Code is dynamic by default.
- `params`, `searchParams`, `cookies()`, `headers()` are **asynchronous**: you `await` them.
- `next lint` no longer exists: you run ESLint directly, and `next build` does not lint.
- Minimum versions: Node.js 20.9 and TypeScript 5.1.

Older tutorials (and old AI answers) show Pages Router code (`pages/`, `getServerSideProps`) or Next 13 to 15 behaviours. When something looks different, check the version and the official docs at nextjs.org/docs.

> **Important for new projects (Cache Components).** According to the Next.js 16.3 documentation, projects created with the recommended `create-next-app` already have **Cache Components** and **Partial Prefetching** enabled in `next.config.ts`. In such a project, a page that awaits uncached data, `searchParams`, `cookies()` or unknown `params` **outside a `<Suspense>` boundary** (and outside a `'use cache'` function) triggers a **blocking-route** error in the dev overlay and in `next build`. Some examples in Chapters 14 and 15 are written in the simplest form to teach the ideas. If you see that error, do not panic: wrap the data component in `<Suspense>` or cache the data function with `'use cache'`. Chapter 16 explains exactly why and shows the patterns, and each example below can be fixed in a few lines.

### 14.3 Creating a project

```bash
$ npx create-next-app@latest inkblog-next
```

The installer asks questions (the exact wording changes between versions). Recommended answers for this book:

- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes** (keeps code separate from config files)
- App Router: **Yes**
- React Compiler: **Yes** (automatic memoization; Chapter 10)
- Import alias `@/*`: **Yes**

Then:

```bash
$ cd inkblog-next
$ npm run dev
```

Open `http://localhost:3000`. Edit `src/app/page.tsx`, save, and the page updates instantly.

**Scripts** in `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

`npm run build` creates an optimised production build and prints a table of your routes showing which are static and which are dynamic. `npm run start` serves that build.

### 14.4 Project structure

```text
inkblog-next/
  next.config.ts          framework configuration
  tsconfig.json
  package.json
  .env.local              local environment variables (never commit)
  public/                 static files served from the root: /logo.svg, /robots.txt
  src/
    app/                  the App Router: folders here become URLs
      layout.tsx          the root layout (required): wraps every page, contains <html> and <body>
      page.tsx            the home page, URL: /
      globals.css
      favicon.ico
    components/           your own shared components
    lib/                  helpers, database client, utilities
```

**`src/app/layout.tsx`** (the root layout)

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'InkBlog', template: '%s | InkBlog' },
  description: 'A blog platform built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header>{/* navbar */}</header>
        <main>{children}</main>
        <footer>{/* footer */}</footer>
      </body>
    </html>
  );
}
```

The root layout is the only place where you write `<html>` and `<body>`. It stays mounted when you navigate, so state in it is preserved.

**`src/app/page.tsx`**

```tsx
export default function HomePage() {
  return (
    <section>
      <h1>Welcome to InkBlog</h1>
      <p>This page was rendered on the server.</p>
    </section>
  );
}
```

Notice: no `'use client'`, no `useState`. This is a **Server Component**, the default in the App Router (explained fully in Chapter 15).

### 14.5 File-system routing

Every **folder** inside `app/` is a **route segment**. A route becomes publicly accessible only when the folder contains a **`page.tsx`** file.

```text
src/app/
  page.tsx                       ->  /
  about/
    page.tsx                     ->  /about
  blog/
    page.tsx                     ->  /blog
    [slug]/
      page.tsx                   ->  /blog/hello-world   (dynamic segment)
  dashboard/
    layout.tsx                   ->  layout shared by everything under /dashboard
    page.tsx                     ->  /dashboard
    settings/
      page.tsx                   ->  /dashboard/settings
  shop/
    [...segments]/page.tsx       ->  /shop/a, /shop/a/b/c  (catch-all)
    [[...segments]]/page.tsx     ->  also matches /shop (optional catch-all)
```

**Special files** (each has one job):

| File | Purpose |
| --- | --- |
| `page.tsx` | The UI of a route; makes the URL accessible |
| `layout.tsx` | Shared UI that wraps child routes; preserved across navigation |
| `template.tsx` | Like layout but re-created on every navigation |
| `loading.tsx` | Instant loading UI (a Suspense fallback) for the segment |
| `error.tsx` | Error boundary for the segment (a Client Component) |
| `not-found.tsx` | UI for `notFound()` and unknown URLs |
| `route.ts` | An API endpoint (Route Handler) instead of a page |
| `default.tsx` | Fallback for parallel routes |
| `proxy.ts` (project root or `src/`) | Code that runs before a request is completed (Chapter 20) |

Because only `page.tsx` and `route.ts` make a route public, you can safely keep components, tests and helpers **next to** the routes that use them (colocation).

**Organising without changing URLs**

- **Route groups** `(name)`: a folder in parentheses is not part of the URL. Use it to organise or to give different layouts to sections: `app/(marketing)/about/page.tsx` is `/about`, `app/(app)/dashboard/page.tsx` is `/dashboard`.
- **Private folders** `_name`: a folder starting with an underscore is excluded from routing: `app/_components/`.

**Advanced routing, briefly:** **parallel routes** `@slot` render several pages in one layout at once (dashboards), and **intercepting routes** `(.)photo` show a route inside a modal while keeping a shareable URL. Learn them when you need them.

### 14.6 Dynamic routes and async params

A segment in square brackets receives its value as a **parameter**. In Next.js 16 `params` is a **Promise**, so you `await` it in a Server Component:

```tsx
// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const POSTS = [
  { slug: 'hello-world', title: 'Hello World', body: 'My first post.' },
  { slug: 'learning-next', title: 'Learning Next.js', body: 'It is fun.' },
];

export default async function BlogPostPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { preview } = await searchParams;          // e.g. /blog/hello-world?preview=true

  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();                            // renders the closest not-found.tsx with a 404 status

  return (
    <article>
      <h1>{post.title}</h1>
      {preview === 'true' && <p>Preview mode</p>}
      <p>{post.body}</p>
    </article>
  );
}
```

> **With Cache Components enabled**, awaiting `searchParams` (and a `params` value that `generateStaticParams` does not list) at the top of the page makes the whole page request-time work, so Next.js reports a blocking route. The fix is to keep the page itself synchronous, pass the promises down, and `await` them inside a `<Suspense>` boundary (Chapter 16, section 16.6 and 16.9). For `params` that **are** listed by `generateStaticParams`, awaiting at the top is fine because the values are known at build time.

In a **Client Component** you read params with the `use` API or the `useParams()` hook (see below). Recent Next.js versions can also generate global helper types for page props (`PageProps<'/blog/[slug]'>`) when you run `next dev`, `next build` or `next typegen`. They save you from writing the types above by hand; check the docs of your version for the exact names.

**Pre-generating dynamic pages:** `generateStaticParams` tells Next.js which slugs exist at build time so those pages can be static (Chapter 16):

```tsx
export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}
```

### 14.7 Navigation

**`Link`** is the main way to navigate. It prefetches linked routes when they enter the viewport and navigates on the client without a full page reload:

```tsx
import Link from 'next/link';

<Link href='/about'>About</Link>
<Link href={`/blog/${post.slug}`}>{post.title}</Link>
<Link href={{ pathname: '/blog', query: { tag: 'react' } }}>React posts</Link>
<Link href='/dashboard' prefetch={false}>Dashboard</Link>
<Link href='/blog' replace scroll={false}>Replace history, keep scroll</Link>
```

**Navigation hooks** (Client Components only, from `next/navigation`):

```tsx
'use client';

import { usePathname, useRouter, useSearchParams, useParams } from 'next/navigation';

export function NavExample() {
  const pathname = usePathname();               // '/blog/hello-world'
  const router = useRouter();
  const searchParams = useSearchParams();       // read-only URLSearchParams
  const params = useParams<{ slug: string }>();

  return (
    <>
      <p>You are at {pathname}</p>
      <button onClick={() => router.push('/dashboard')}>Go to dashboard</button>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.refresh()}>Refresh server data</button>
    </>
  );
}
```

**Server-side navigation** (Server Components, Server Actions, Route Handlers):

```tsx
import { redirect, permanentRedirect, notFound } from 'next/navigation';

redirect('/login');            // 307: temporary
permanentRedirect('/new');     // 308
notFound();                    // 404 page
```

**An active-link navbar** needs `usePathname`, so it is a Client Component:

```tsx
// src/components/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link href={href} aria-current={active ? 'page' : undefined} className={clsx('px-3 py-2', active && 'font-bold underline')}>
      {children}
    </Link>
  );
}
```

The 16.x routing improvements (layout deduplication and incremental prefetching) make links cheap, so you can use many of them.

### 14.8 Nested layouts

Layouts nest automatically. A dashboard section can have its own sidebar while the root layout provides the site header:

```tsx
// src/app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-[220px_1fr] gap-6'>
      <aside>
        <nav aria-label='Dashboard'>
          <Link href='/dashboard'>Overview</Link>
          <Link href='/dashboard/posts'>My posts</Link>
          <Link href='/dashboard/settings'>Settings</Link>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
```

When you navigate between `/dashboard/posts` and `/dashboard/settings`, only the page part changes. The sidebar and root layout keep their state and do not re-render. This makes navigation fast.

### 14.9 Not found and error pages

```tsx
// src/app/not-found.tsx  (global 404)
import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href='/'>Go home</Link>
    </section>
  );
}
```

```tsx
// src/app/error.tsx  (error boundary: MUST be a Client Component)
'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section role='alert'>
      <h1>Something went wrong</h1>
      <p>We have been notified. You can try again.</p>
      <button onClick={reset}>Try again</button>
    </section>
  );
}
```

In production, error messages from the server are hidden from the client for safety (only a `digest` id is shown, which you can find in your server logs). Chapter 17 covers `loading.tsx`, `error.tsx` and `global-error.tsx` fully.

### 14.10 Configuration, environment variables and aliases

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.example.com' }],   // allowed external image hosts
  },
  // cacheComponents: true,     // opt in to Cache Components (Chapter 16)
};

export default nextConfig;
```

In a project created with a recent `create-next-app`, `cacheComponents` and `partialPrefetching` are normally already set to `true`, so the commented line above is only needed for older projects. Check your own `next.config.ts`; Chapter 16 explains both options.

**Environment variables** live in `.env.local` (local, never committed) and `.env` (shared defaults). Next.js loads them automatically.

```text
# .env.local
DATABASE_URL=postgresql://user:password@localhost:5432/inkblog
AUTH_SECRET=a-long-random-string-of-at-least-32-characters
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- Variables **without** a prefix are available **only on the server**. Use them for secrets.
- Variables starting with **`NEXT_PUBLIC_`** are **inlined into the browser JavaScript at build time**. Everyone can read them. Never put secrets there.
- `process.env.X` is read on the server; changing a public variable requires a new build.

Validate env vars once at startup with Zod (Book 1, Chapter 23) in `src/lib/env.ts` and import `env` instead of using `process.env` directly.

**Import alias:** `@/*` maps to `src/*` (set in `tsconfig.json`), so you write `import { db } from '@/lib/db'` instead of `'../../../lib/db'`.

### 14.11 Static assets, fonts and metadata (first look)

- Files in `public/` are served from the site root: `public/logo.svg` is `/logo.svg`.
- **`next/image`** and **`next/font`** optimise images and fonts (Chapter 17).
- The **`metadata`** export sets titles and descriptions per page (Chapter 17).

### 14.12 Practice project: a small multi-page site

Build a portfolio or company website to practise routing:

```text
src/app/
  layout.tsx                  header with NavLink, footer
  page.tsx                    home with hero and featured projects
  about/page.tsx
  projects/
    page.tsx                  list of projects from a local array
    [slug]/page.tsx           project detail, notFound() for unknown slugs
  contact/page.tsx            a contact page (the form comes in Chapter 18)
  not-found.tsx
  error.tsx
```

Requirements: dynamic route with `generateStaticParams`, typed data in `src/lib/projects.ts`, active navigation links, metadata on every page, responsive Tailwind layout. Run `npm run build` and read the route table: which routes are static (a circle symbol) and which are dynamic?

### 14.13 Common mistakes

- Following Pages Router tutorials (`pages/` folder, `getServerSideProps`) in an App Router project.
- Forgetting to `await params` and `searchParams` in Next.js 16.
- Using `<a href>` for internal links instead of `Link`.
- Putting secrets in `NEXT_PUBLIC_` variables.
- Using `useRouter` from `next/router` (Pages Router) instead of `next/navigation`.
- Adding `'use client'` to everything. Server Components are the default for good reason (Chapter 15).
- Forgetting that only `page.tsx` or `route.ts` creates a URL.
- Defining `<html>` and `<body>` in more than one layout.

### Chapter 14 summary

- Next.js is a full-stack React framework: file-system routing, server rendering, Server Components, Server Actions, Route Handlers, optimisation, SEO and easy deployment.
- Create projects with `create-next-app`; the `app/` folder defines routes; `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx` and `route.ts` are the special files.
- Dynamic segments use `[slug]`; in Next.js 16 `params` and `searchParams` are Promises.
- Navigate with `Link`, the `next/navigation` hooks and `redirect`; use route groups and private folders to organise.
- Secrets stay in non-public environment variables.

### Exercises

1. Create a Next.js project and build the multi-page site from 14.12.
2. Add a nested dashboard layout with a sidebar and three pages; verify that the sidebar keeps its state while navigating.
3. Create a route group `(marketing)` with its own layout and a second group `(app)` with a different layout.
4. Add a global `not-found.tsx` and an `error.tsx` and trigger each on purpose.
5. Read the build output of `npm run build` and write down which of your routes are static and which are dynamic.
6. Add `NEXT_PUBLIC_SITE_NAME` to `.env.local`, display it in the footer, and confirm that a server-only variable is not available in a Client Component.

## Chapter 15: Server Components, Client Components and Data Fetching

This is the most important chapter of Part 3. The App Router is built on **React Server Components**, and once you understand the split between server and client code, everything else in Next.js fits together.

### 15.1 The mental model

In the React you wrote in Part 2 (Vite), **every** component ran in the browser. The browser downloaded all the JavaScript, ran it, fetched data, and drew the page. That means big bundles, a blank screen while loading, waterfalls of requests and secrets that must stay on a separate server.

In the App Router, components are **Server Components by default**:

- They run **only on the server** (at build time or at request time).
- They can be **`async`** and read data directly: a database, the file system, a private API with secret keys.
- Their code and their dependencies are **never sent to the browser**. A Markdown library used in a Server Component adds zero bytes to the client bundle.
- They produce a special serialised output (the RSC payload) that React in the browser turns into UI.

When you need **interactivity** (state, effects, event handlers, browser APIs) you mark a component as a **Client Component** with the `'use client'` directive. Client Components are still rendered once on the server for the first HTML (so users see content immediately), and then **hydrated** in the browser to become interactive.

```text
Server Component   runs on the server only.  Fetches data. No JavaScript shipped.
Client Component   runs on the server (first HTML) AND in the browser. Interactive. JavaScript shipped.
```

**What each can do**

|  | Server Component (default) | Client Component (`'use client'`) |
| --- | --- | --- |
| `async` / `await` in the component | Yes | No |
| Read a database, file system, secrets | Yes | No (never) |
| `useState`, `useReducer`, `useEffect`, `useRef` | No | Yes |
| Event handlers (`onClick`, `onChange`) | No | Yes |
| Browser APIs (`window`, `localStorage`) | No | Yes |
| Context providers and consumers | No (cannot use `useContext`) | Yes |
| Counts towards the JavaScript the user downloads | No | Yes |
| Can render the other kind as a child | Yes, both | Only Client Components imported by it; Server Components only as `children` or props |

**Rule of thumb:** keep components on the server unless they need interactivity, and push the `'use client'` boundary **as far down the tree as possible**, into small leaf components.

### 15.2 A Server Component that fetches data

```tsx
// src/app/posts/page.tsx  (a Server Component: no directive)
import Link from 'next/link';

type Post = { id: number; title: string; body: string };

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) throw new Error('Failed to load posts');      // caught by the nearest error.tsx
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();            // async component: just await

  return (
    <section>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Compare with Chapter 8: no `useEffect`, no loading state variables, no client-side fetch. The HTML arrives with the data already in it. Search engines see real content, and the user sees it immediately.

> **Cache Components note.** In a new Next.js 16.3 project, Cache Components is on by default (Chapter 16). The simple page above awaits uncached data directly in the page, which that mode reports as a **blocking route**. The one-minute fix is to move the data work into a component and wrap it in `<Suspense>`, so the heading and fallback form the static shell and the posts stream in:
>
> ```tsx
> import { Suspense } from 'react';
> import Link from 'next/link';
> 
> export default function PostsPage() {          // no longer async
>   return (
>     <section>
>       <h1>Posts</h1>
>       <Suspense fallback={<p>Loading posts...</p>}>
>         <PostList />
>       </Suspense>
>     </section>
>   );
> }
> 
> async function PostList() {
>   const posts = await getPosts();             // uncached data: allowed inside Suspense
>   return (
>     <ul>
>       {posts.map((post) => (
>         <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
>       ))}
>     </ul>
>   );
> }
> ```
>
> If the same data is fine to share for an hour, mark `getPosts` with `'use cache'` and `cacheLife('hours')` instead; then it becomes part of the static shell. The same two fixes apply to every example in this chapter that awaits data, `searchParams` or `cookies()` directly in a page: the search page in 15.7 (await `searchParams` inside a Suspense boundary) and the blog pages in 15.12 (stream the list, cache the post functions).

**Direct database access** works the same way (Chapter 19):

```tsx
import { db } from '@/lib/db';

export default async function UsersPage() {
  const users = await db.user.findMany({ orderBy: { createdAt: 'desc' }, take: 20 });
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

Because this code never reaches the browser, the connection string and queries stay private. **No API endpoint is needed** just to feed your own pages.

### 15.3 Client Components and the boundary

Add `'use client'` as the very first line of a file. That file and everything it imports becomes part of the client bundle.

```tsx
// src/components/LikeButton.tsx
'use client';

import { useState } from 'react';

export function LikeButton({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  return (
    <button
      aria-pressed={liked}
      onClick={() => {
        setLiked(!liked);
        setCount((c) => c + (liked ? -1 : 1));
      }}
    >
      {liked ? 'Liked' : 'Like'} ({count})
    </button>
  );
}
```

```tsx
// src/app/posts/[id]/page.tsx  (Server Component)
import { LikeButton } from '@/components/LikeButton';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);                 // server-side data

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton initialCount={post.likes} />       {/* only this small piece ships JavaScript */}
    </article>
  );
}
```

The `'use client'` line marks a **boundary**. You do not need to add it to files imported by a Client Component; they are already on the client side.

**Props crossing the boundary must be serialisable:** strings, numbers, booleans, `null`, plain objects and arrays, `Date`, `Map`, `Set`, promises, and Server Actions. You cannot pass ordinary functions, class instances or event handlers from a Server Component to a Client Component. (A Client Component can pass functions to other Client Components.)

```tsx
// WRONG in a Server Component
<LikeButton onLike={() => console.log('liked')} />     // Error: functions cannot be passed to Client Components
```

### 15.4 Composition: mixing server and client

A Client Component **cannot import** a Server Component (it would become client code). But it can **receive Server Components as `children` or other props**. The server renders them and the client component just places them. This keeps most of the page on the server.

```tsx
// src/components/Tabs.tsx
'use client';

import { useState, type ReactNode } from 'react';

export function Tabs({ tabs }: { tabs: { id: string; label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div>
      <div role='tablist'>
        {tabs.map((t) => (
          <button key={t.id} role='tab' aria-selected={active === t.id} onClick={() => setActive(t.id)}>{t.label}</button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role='tabpanel' hidden={active !== t.id}>{t.content}</div>
      ))}
    </div>
  );
}
```

```tsx
// Server Component: the tab contents are rendered on the server, even though Tabs is a client component
export default async function ProfilePage() {
  const [posts, comments] = await Promise.all([getPosts(), getComments()]);

  return (
    <Tabs
      tabs={[
        { id: 'posts', label: 'Posts', content: <PostList posts={posts} /> },
        { id: 'comments', label: 'Comments', content: <CommentList comments={comments} /> },
      ]}
    />
  );
}
```

**Context providers** must be Client Components. Put them in a small wrapper and render it in the root layout with `children`:

```tsx
// src/components/Providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { useState, type ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}

// layout.tsx:  <body><Providers>{children}</Providers></body>   <- children stay Server Components
```

**Third-party components** that use hooks or browser APIs but have no `'use client'` in their code must be wrapped in your own Client Component:

```tsx
'use client';
export { Carousel } from 'some-carousel-library';      // re-export from a client file
```

### 15.5 Protecting server-only code

A mistake can accidentally import a database module into a Client Component and expose secrets. Two safeguards:

```bash
$ npm install server-only
```

```ts
// src/lib/db.ts
import 'server-only';                // build error if any Client Component imports this file
import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();
```

- Use `import 'server-only'` in files with database access, secrets or business logic that must stay private.
- Use `import 'client-only'` for code that must never run on the server.
- Only `NEXT_PUBLIC_` variables reach the browser; other `process.env` values are `undefined` in client code.
- Structure your code with a **data access layer** (Chapter 19): all database queries and authorization live in server-only functions.

### 15.6 Fetching patterns on the server

**1. Fetch where the data is needed.** You do not have to fetch everything at the top of the page and pass it down. Each Server Component can fetch what it needs. The same request made twice in one render is de-duplicated if you use `fetch` or React's `cache()`:

```tsx
import { cache } from 'react';
import { db } from '@/lib/db';

export const getUser = cache(async (id: string) => {
  return db.user.findUnique({ where: { id } });        // called in several components: runs once per request
});
```

**2. Avoid waterfalls: fetch in parallel.** Sequential `await`s make each request wait for the previous one even when they are independent:

```tsx
// Slow: 300 ms + 300 ms
const user = await getUser(id);
const posts = await getPosts(id);

// Fast: both start at once, about 300 ms
const [user, posts] = await Promise.all([getUser(id), getPosts(id)]);
```

Only wait sequentially when the second request truly depends on the first.

**3. Start a request early and wait for it later** by creating the promise without `await`, then awaiting it where needed (often passed to a child that reads it with `use`).

**4. Handle errors:** throw in the data function to trigger `error.tsx`; call `notFound()` when a record is missing; for expected failures return a result object.

**5. `fetch` options:**

```ts
await fetch(url);                                         // dynamic by default in Next.js 16: runs per request
await fetch(url, { cache: 'no-store' });                  // explicitly never cache
await fetch(url, { next: { revalidate: 3600, tags: ['posts'] } });    // cache with time-based and tag-based revalidation
```

Caching in Next.js 16 is **explicit**. The full story, with the `'use cache'` directive, is Chapter 16.

### 15.7 Dynamic data: cookies, headers and search params

These values exist only per request, so reading them makes a route **dynamic**. In Next.js 16 all of them are async:

```tsx
import { cookies, headers } from 'next/headers';

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q = '', page = '1' } = await searchParams;
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value ?? 'light';
  const userAgent = (await headers()).get('user-agent');

  const results = await searchPosts({ q, page: Number(page) });
  return <Results items={results} theme={theme} />;
}
```

**A search box that updates the URL** (a Client Component) and a server page that reads it. This is the standard Next.js pattern for search, filters and pagination:

```tsx
// src/components/SearchBox.tsx
'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function SearchBox({ placeholder = 'Search...' }: { placeholder?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) params.set('q', term); else params.delete('q');
    replace(`${pathname}?${params.toString()}`);     // the server page re-renders with new searchParams
  }, 300);

  return (
    <input
      type='search'
      aria-label='Search'
      placeholder={placeholder}
      defaultValue={searchParams.get('q') ?? ''}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
```

### 15.8 Streaming with Suspense and loading.tsx

A slow data source should not block the whole page. **Streaming** sends the page in pieces: the fast parts appear immediately, and slow parts show a fallback and are filled in when ready.

**1. `loading.tsx`**: a file next to `page.tsx` that Next.js shows instantly while the page's data loads (it wraps the page in a Suspense boundary for you):

```tsx
// src/app/posts/loading.tsx
export default function Loading() {
  return (
    <div aria-busy='true' aria-label='Loading posts'>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className='h-16 animate-pulse rounded bg-gray-200' />
      ))}
    </div>
  );
}
```

**2. `<Suspense>` around individual slow components** (finer control):

```tsx
import { Suspense } from 'react';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);                   // fast: needed for the main content

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Suspense fallback={<p>Loading comments...</p>}>
        <Comments postId={id} />                      {/* slow: streams in later */}
      </Suspense>

      <Suspense fallback={<p>Loading recommendations...</p>}>
        <Recommendations postId={id} />
      </Suspense>
    </article>
  );
}

async function Comments({ postId }: { postId: string }) {
  const comments = await getComments(postId);       // can take 2 seconds without blocking the article
  return <ul>{comments.map((c) => <li key={c.id}>{c.body}</li>)}</ul>;
}
```

The user sees the article at once; comments and recommendations pop in independently. This is the modern answer to 'loading spinners everywhere'.

**3. Passing a promise to a Client Component** that reads it with `use`:

```tsx
// Server Component
export default function Page() {
  const commentsPromise = getComments();                 // do not await
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CommentsClient commentsPromise={commentsPromise} />
    </Suspense>
  );
}

// Client Component
'use client';
import { use } from 'react';
export function CommentsClient({ commentsPromise }: { commentsPromise: Promise<Comment[]> }) {
  const comments = use(commentsPromise);
  return <ul>{comments.map((c) => <li key={c.id}>{c.body}</li>)}</ul>;
}
```

### 15.9 Hydration and client-only code

After the server sends HTML, React in the browser **hydrates** it: it attaches event handlers and state. The HTML that the server produced and the first client render must **match**. If they differ you see a **hydration mismatch** warning. Common causes:

- Using `Date.now()`, `Math.random()`, or `new Date().toLocaleString()` during render (server and browser differ in time and time zone).
- Reading `window` or `localStorage` during render (not available on the server).
- Invalid HTML nesting (a `div` inside a `p`).
- Browser extensions modifying the page.

Fixes:

```tsx
'use client';
import { useEffect, useState } from 'react';

export function LocalTime({ iso }: { iso: string }) {
  const [text, setText] = useState('');                // same on server and first client render
  useEffect(() => { setText(new Date(iso).toLocaleString()); }, [iso]);   // set after hydration
  return <time dateTime={iso}>{text}</time>;
}
```

For values that legitimately differ, use `suppressHydrationWarning` on that single element. To render something only in the browser, use `useEffect` or a dynamic import with `ssr: false` (inside a Client Component):

```tsx
'use client';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('./Map'), { ssr: false, loading: () => <p>Loading map...</p> });
```

### 15.10 When to use which: a decision guide

| You need... | Use |
| --- | --- |
| To show data from a database or API | Server Component |
| Secrets, tokens, private logic | Server Component or Server Action |
| A button with a click handler, a toggle, a dropdown | Small Client Component |
| Form with live validation or controlled fields | Client Component (or a form with Server Actions, Chapter 18) |
| `useState`, `useEffect`, refs, browser APIs | Client Component |
| A big library used only for rendering (Markdown, syntax highlighting, charts' data prep) | Server Component, so it never reaches the browser |
| A context provider | Client Component wrapper around `children` |
| Search or filter state that should be shareable | URL search params, read on the server |
| Real-time updates or polling | Client Component (or TanStack Query / SWR) |

### 15.11 TanStack Query, SWR and the App Router

You no longer need a client data library for most pages: Server Components fetch data and Server Actions change it. Client data libraries still make sense for **highly interactive** widgets (live dashboards, infinite scroll, polling, optimistic mutations across many components). You can combine both: fetch the first data on the server and hand it to the client library as initial data (hydration), or let the client fetch from a Route Handler.

### 15.12 A complete example: the blog list and post page

```tsx
// src/lib/posts.ts
import 'server-only';
import { cache } from 'react';

export type Post = { id: number; title: string; body: string; userId: number };

const BASE = 'https://jsonplaceholder.typicode.com';

export const getPosts = cache(async (page = 1, limit = 6): Promise<Post[]> => {
  const res = await fetch(`${BASE}/posts?_page=${page}&_limit=${limit}`);
  if (!res.ok) throw new Error('Could not load posts');
  return res.json();
});

export const getPost = cache(async (id: string): Promise<Post | null> => {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Could not load the post');
  return res.json();
});

export async function getComments(postId: string) {
  const res = await fetch(`${BASE}/posts/${postId}/comments`);
  if (!res.ok) throw new Error('Could not load comments');
  return (await res.json()) as { id: number; name: string; body: string }[];
}
```

```tsx
// src/app/blog/page.tsx
import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export const metadata = { title: 'Blog' };

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const page = Math.max(1, Number((await searchParams).page) || 1);
  const posts = await getPosts(page);

  return (
    <section>
      <h1>Blog</h1>
      <ul className='grid gap-4 md:grid-cols-2'>
        {posts.map((p) => (
          <li key={p.id} className='rounded border p-4'>
            <h2><Link href={`/blog/${p.id}`}>{p.title}</Link></h2>
            <p>{p.body.slice(0, 80)}...</p>
          </li>
        ))}
      </ul>
      <nav aria-label='Pagination'>
        {page > 1 && <Link href={`/blog?page=${page - 1}`}>Previous</Link>}
        <Link href={`/blog?page=${page + 1}`}>Next</Link>
      </nav>
    </section>
  );
}
```

```tsx
// src/app/blog/[id]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getPost, getComments } from '@/lib/posts';
import { LikeButton } from '@/components/LikeButton';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const post = await getPost((await params).id);          // same request as below: de-duplicated by cache()
  return { title: post?.title ?? 'Post not found' };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton initialCount={0} />
      <Suspense fallback={<p>Loading comments...</p>}>
        <Comments postId={id} />
      </Suspense>
    </article>
  );
}

async function Comments({ postId }: { postId: string }) {
  const comments = await getComments(postId);
  return (
    <section aria-label='Comments'>
      <h2>Comments ({comments.length})</h2>
      {comments.map((c) => <p key={c.id}><strong>{c.name}</strong>: {c.body}</p>)}
    </section>
  );
}
```

### 15.13 Common mistakes

- Adding `'use client'` at the top of every file, losing all the benefits of server rendering.
- Marking a whole page as a Client Component because one button needs state. Extract the button instead.
- Trying to use `useState` or `onClick` in a Server Component (the error message tells you to add `'use client'` to the right file).
- Passing functions or class instances from Server to Client Components.
- Importing a Server Component into a Client Component. Pass it as `children`.
- Fetching sequentially when requests are independent (waterfalls).
- Fetching your own API route from a Server Component, when you can call the data function directly.
- Exposing secrets through `NEXT_PUBLIC_` variables or by importing server code into client code (use `server-only`).
- Hydration mismatches caused by dates, random values and `window` access during render.

### Chapter 15 summary

- Components are **Server Components by default**: they can be async, read data directly, keep secrets safe, and ship no JavaScript.
- Add `'use client'` only to small interactive leaves; props crossing the boundary must be serialisable; pass Server Components to Client Components as `children`.
- Fetch on the server, in parallel, where the data is needed; de-duplicate with `cache()`; protect server code with `server-only`.
- Stream slow parts with `loading.tsx` and `<Suspense>`; read request data (`cookies`, `headers`, `searchParams`) asynchronously; keep search and filters in the URL.
- Hydration requires server and client output to match; move browser-only values into effects.

### Exercises

1. Build a blog list and detail page with data from JSONPlaceholder (or your Book 1 API), with a Suspense-streamed comments section.
2. Add a `SearchBox` that updates the URL and a server page that filters results from `searchParams`.
3. Create a `Tabs` Client Component that receives Server Component content as props.
4. Intentionally import a `server-only` module into a Client Component and read the build error.
5. Make two independent fetches first sequentially and then with `Promise.all`; measure the difference with `console.time`.
6. Cause a hydration mismatch with `new Date().toLocaleTimeString()` and fix it two ways.

## Chapter 16: Rendering and Caching with Cache Components

Caching is the part of Next.js that changed the most between versions, and the part that confuses people the most. The good news: the current model (Cache Components, introduced in Next.js 16) is far simpler than the old one. The rule is: **everything is dynamic by default, and you opt in to caching explicitly with the `'use cache'` directive.**

This chapter is based on the Next.js 16.3 documentation. Caching APIs are still evolving, so use the official docs (nextjs.org/docs, section 'Caching') as the final reference for exact names and options.

### 16.1 Why caching and pre-rendering matter

The fastest page is one that is already built and sits on a CDN near the user. The most flexible page is one that is built for each request with fresh, personalised data. Real pages need both: a blog page has a header and article text that are the same for everyone, a list that changes hourly, and a 'welcome back, Albert' bar that is different for every user.

Cache Components lets you mix them **in one page**:

```text
+----------------------------------------------------+
|  Header, navigation (static)                       |  <- prerendered at build time
|----------------------------------------------------|
|  Latest posts (cached for 1 hour: 'use cache')     |  <- prerendered and refreshed in the background
|----------------------------------------------------|
|  Welcome back, Albert (reads cookies)  [Suspense]  |  <- streamed at request time
+----------------------------------------------------+
```

The static and cached parts are combined into a **static shell** that can be served instantly from a CDN. The dynamic parts stream in behind a loading fallback. This approach is called **Partial Prerendering (PPR)**, and with Cache Components it is the default behaviour.

### 16.2 Enabling Cache Components

In the Next.js 16.3 documentation, new projects created with the recommended `create-next-app` already have Cache Components (and **Partial Prefetching**) switched on. Check your `next.config.ts`:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
};

export default nextConfig;
```

For an older project, add the options yourself. If you must stay on the previous caching model temporarily (an app written for Next.js 13 to 15), the docs have a 'Caching without Cache Components' guide; do not mix the two models in one app. The documentation says both features will be enabled everywhere in the next major release, so learning this model is learning the future of the framework.

### 16.3 Three kinds of content

With Cache Components, Next.js looks at every component during the build and sorts what it does into three groups:

| Kind | Example | What happens |
| --- | --- | --- |
| **Static (predictable)** | JSX, props, module imports, pure calculations, reading a local file synchronously | Rendered at build time into the static shell. Nothing to configure |
| **Cached** | An async data function marked `'use cache'` | Computed once, stored, reused. Included in the shell if its lifetime allows. Refreshed by time or on demand |
| **Dynamic (runtime)** | `cookies()`, `headers()`, `searchParams`, uncached `fetch`, uncached database queries, `Math.random()`, `Date.now()` | Must happen at request time. Wrapped in `<Suspense>`; the fallback is in the shell and the content streams in |

This is where the **blocking-route** message comes from. If a component does something dynamic **outside** a `<Suspense>` boundary and without `'use cache'`, Next.js has nothing to put in the static shell. In development you get an error overlay (and the build fails) telling you to fix it, because otherwise visitors would wait for a blank page. This is a feature: it forces you to decide what is cached and what streams.

**The three ways to fix a blocking route:**

1. **Stream it:** wrap the component in `<Suspense fallback={...}>`.
2. **Cache it:** add `'use cache'` (with `cacheLife`) to the data function or component.
3. **Move the dynamic access deeper** in the tree so more of the page can be prerendered.

### 16.4 The `use cache` directive

Put `'use cache'` at the top of an async **function** (data-level) or an async **component, page or layout** (UI-level). Pair it with `cacheLife` to say how long the result stays fresh.

```tsx
// src/lib/posts.ts: data-level caching
import { cacheLife, cacheTag } from 'next/cache';
import { db } from '@/lib/db';

export async function getPosts() {
  'use cache';
  cacheLife('hours');
  cacheTag('posts');

  return db.post.findMany({ orderBy: { createdAt: 'desc' }, take: 20 });
}

export async function getPost(slug: string) {
  'use cache';
  cacheLife('hours');
  cacheTag('posts', `post-${slug}`);          // several tags: invalidate one post or all posts

  return db.post.findUnique({ where: { slug }, include: { author: true } });
}
```

```tsx
// UI-level: cache a whole component's rendered output
export default async function FeaturedPosts() {
  'use cache';
  cacheLife('minutes');

  const posts = await getPosts();
  return <ul>{posts.slice(0, 3).map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

**Cache keys are automatic.** Arguments and any values the function captures become part of the cache key, so `getPost('a')` and `getPost('b')` are separate entries. Arguments must be serialisable (strings, numbers, plain objects and arrays...).

**Placing the directive at the top of a file** caches every exported async function in that file.

**What you must not do inside a cached function:** read `cookies()`, `headers()` or `searchParams` directly (they are per-request). Read them **outside**, and pass the value in as an argument (it becomes part of the key):

```tsx
async function ProfileContent() {                         // not cached: reads request data
  const session = (await cookies()).get('session')?.value;
  if (!session) redirect('/login');
  return <CachedProfile sessionId={session} />;
}

async function CachedProfile({ sessionId }: { sessionId: string }) {
  'use cache';                                            // cached per sessionId
  cacheLife('minutes');
  const profile = await getProfileFor(sessionId);
  return <div>{profile.name}</div>;
}
```

(For cached data that depends on request values you can also use the variants `'use cache: private'`, which caches per user in the browser, and `'use cache: remote'`, which uses a durable store shared across server instances. Start with plain `'use cache'`.)

### 16.5 cacheLife: how long is the data fresh?

Built-in profiles are named by time scale: `'seconds'`, `'minutes'`, `'hours'`, `'days'`, `'weeks'` and `'max'`. Pick the one that matches how often the data really changes. The docs recommend always pairing a cache directive with a `cacheLife`; without one, a default profile applies.

A profile has three timing values, in seconds:

| Value | Meaning |
| --- | --- |
| `stale` | How long the **browser** may reuse the data without asking the server |
| `revalidate` | After this time the server serves the cached copy but **refreshes it in the background** (stale-while-revalidate) |
| `expire` | After this time with no traffic the entry is discarded and the next request waits for fresh data |

You can use an inline object, or define reusable profiles in the config:

```ts
// inline
cacheLife({ stale: 300, revalidate: 900, expire: 86400 });

// next.config.ts: a reusable named profile (check the cacheLife docs for the exact option location in your version)
const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    products: { stale: 300, revalidate: 900, expire: 86400 },
  },
};

// then:  cacheLife('products');
```

Very short lifetimes (a few seconds) cannot be part of the static shell; Next.js treats them as dynamic. Choose a lifetime that genuinely reflects your data.

### 16.6 Streaming dynamic data with Suspense

For data that must be fresh on every request, do **not** cache it. Wrap the component in `Suspense`:

```tsx
import { Suspense } from 'react';

async function LiveStats() {
  const res = await fetch('https://api.example.com/stats');      // uncached: runs per request
  const stats = await res.json();
  return <p>Online now: {stats.online}</p>;
}

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>                                             {/* static shell */}
      <Suspense fallback={<p>Loading stats...</p>}>                  {/* fallback is in the shell */}
        <LiveStats />                                                  {/* streams in at request time */}
      </Suspense>
    </>
  );
}
```

**Runtime APIs** (`cookies`, `headers`, `searchParams`, and `params` that are not known at build time) follow the same rule:

```tsx
import { cookies } from 'next/headers';

async function Greeting() {
  const name = (await cookies()).get('name')?.value ?? 'friend';
  return <p>Welcome back, {name}</p>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Suspense fallback={<p>...</p>}><Greeting /></Suspense>     {/* only this small part is dynamic */}
      </header>
      {children}
    </>
  );
}
```

**Maximise the static shell by awaiting as deep as possible.** Instead of `await params` or `await searchParams` at the top of a page (which makes the whole page dynamic), pass the promise down and `await` it inside a `Suspense` boundary near where the value is used:

```tsx
export default function SearchPage(props: PageProps<'/search'>) {
  return (
    <>
      <h1>Search</h1>                         {/* static */}
      <SearchBox />                           {/* static client component */}
      <Suspense fallback={<p>Loading results...</p>}>
        <Results searchParams={props.searchParams} />       {/* awaits inside the boundary */}
      </Suspense>
    </>
  );
}

async function Results({ searchParams }: { searchParams: PageProps<'/search'>['searchParams'] }) {
  const { q = '' } = await searchParams;
  const results = await searchPosts(q);        // a function marked 'use cache': same q, same cached result
  return <ul>{results.map((r) => <li key={r.id}>{r.title}</li>)}</ul>;
}
```

`PageProps<'/search'>` and `LayoutProps<'/shop/[slug]'>` are typed helpers Next.js generates for you (run `next dev`, `next build` or `next typegen`). Under Cache Components, **pages and layouts that do not need dynamic values should not be `async`**.

### 16.7 Random values and the current time

`Math.random()`, `Date.now()`, `new Date()` and `crypto.randomUUID()` give different results each time, so they cannot be part of a prebuilt shell. Choose what you mean:

```tsx
import { connection } from 'next/server';

// Different on every request: opt in to request-time rendering
async function RequestId() {
  await connection();                         // 'wait for a real request'
  return <p>Request: {crypto.randomUUID()}</p>;
}
// ... and render it inside <Suspense>

// The same for everyone until the cache refreshes
async function BuildStamp() {
  'use cache';
  cacheLife('hours');
  return <p>Generated at {new Date().toISOString()}</p>;
}
```

For timestamps that you only display in the browser (for example 'posted 3 minutes ago') render them in a Client Component after hydration (Chapter 15).

### 16.8 Revalidating on demand

Time-based freshness is not enough after a user publishes a post or edits a profile. You **tag** cached data (`cacheTag`) and **invalidate by tag** in the code that changes the data (a Server Action or Route Handler). Three functions from `next/cache`:

| Function | Where | Behaviour |
| --- | --- | --- |
| `updateTag(tag)` | Server Actions only | Expires the tag and **refreshes immediately** within the same request ('read your writes'). The user who just saved sees their change at once |
| `revalidateTag(tag, 'max')` | Server Actions and Route Handlers | Marks the tag stale; visitors get the cached copy while a fresh one is built in the background (stale-while-revalidate). The second argument is a `cacheLife` profile. The one-argument form is deprecated |
| `refresh()` | Server Actions only | Refreshes **uncached** (dynamic) data on the page. Does not touch the cache |

```ts
// src/app/actions/posts.ts
'use server';

import { revalidateTag, updateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

export async function publishPost(formData: FormData) {
  const title = String(formData.get('title'));
  const post = await db.post.create({ data: { title, slug: slugify(title), content: String(formData.get('content')) } });

  updateTag('posts');                  // the author sees the new post in the list immediately
  redirect(`/blog/${post.slug}`);
}

export async function deletePost(slug: string) {
  await db.post.delete({ where: { slug } });
  updateTag('posts');
  updateTag(`post-${slug}`);
}

// In a webhook Route Handler from a CMS, eventual consistency is fine:
// revalidateTag('posts', 'max');
```

Also available: `revalidatePath('/blog')` to invalidate by URL path. Use tags when you can: they describe **data**, which is more precise than URLs.

The client-side `router.refresh()` re-fetches the current route's server data without losing client state.

### 16.9 Dynamic routes, generateStaticParams and ISR

For a route like `/blog/[slug]`:

```tsx
// src/app/blog/[slug]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getPost, getAllSlugs } from '@/lib/posts';

export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));     // these pages are built at build time
}

export default function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  return (
    <Suspense fallback={<ArticleSkeleton />}>
      <Article params={props.params} />
    </Suspense>
  );
}

async function Article({ params }: { params: PageProps<'/blog/[slug]'>['params'] }) {
  const { slug } = await params;
  const post = await getPost(slug);                 // 'use cache' function
  if (!post) notFound();
  return <article><h1>{post.title}</h1><div>{post.content}</div></article>;
}
```

Slugs returned by `generateStaticParams` are prerendered at build time. Any other slug gets the reusable **App Shell** instantly, then Next.js builds and caches the concrete page in the background after the first visit (**Incremental Static Regeneration**, ISR). Visitors of known pages get HTML from the CDN with no work done on your server.

### 16.10 Prefetching and instant navigation

`Link` prefetches the destination when it appears on screen. With **Partial Prefetching** (enabled in new apps) the router prefetches each route's static shell and session-derived parts, so clicking feels instant: the shell appears at once and dynamic parts stream in. To also prefetch cached content that depends on the link's own URL data (`searchParams` or dynamic params), use `<Link prefetch={true}>` on important links; this costs a server call per such link, so use it deliberately.

The Next.js DevTools has an **Instant Navigations** inspector (16.3) that previews the shell a user will see when they navigate and points out blocking navigations. Use it when a route feels slow.

### 16.11 Debugging caching

- Run `npm run build` and read the **route table**: it shows which routes are prerendered (static shell), and which are partially or fully dynamic.
- In development, the **dev overlay** names the component that causes a blocking route and offers the three fixes.
- If data is 'not updating', check: is it inside a `'use cache'` function? What is its `cacheLife`? Did the mutation call `updateTag` or `revalidateTag` with the **same tag**? Remember that `use cache` entries are stored **in memory** per server instance by default, so on serverless platforms or with several instances they may not be shared. For durable shared caching consider `'use cache: remote'` and your platform's cache handler.
- Cache entries are scoped to one deployment: a new deploy starts with an empty cache.
- Log inside the cached function: if you see the log on every request, it is not being cached (maybe its arguments change every time, or the lifetime is too short).

### 16.12 The previous model, for reading old code

Before Next.js 16 you will find these concepts in tutorials and older projects:

- `export const dynamic = 'force-dynamic' | 'force-static'`, `export const revalidate = 60`, `export const fetchCache`.
- `fetch(url, { next: { revalidate: 60, tags: ['x'] } })` and `unstable_cache`.
- Implicit caching rules in Next.js 13 and 14 where `fetch` was cached by default.
- Pages that became 'dynamic' automatically as soon as they read `cookies()`.

In the Cache Components model these are replaced by `'use cache'`, `cacheLife`, `cacheTag`, Suspense and `connection()`. If you see old route segment options producing errors in a new project, follow the message in the error and the official migration notes. When you read an older tutorial, translate: 'revalidate every 60 seconds' becomes `'use cache'` plus `cacheLife({ revalidate: 60, ... })`.

### 16.13 Example: a blog with all three kinds of content

```tsx
// src/app/blog/page.tsx
import { Suspense } from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { cacheLife, cacheTag } from 'next/cache';
import { db } from '@/lib/db';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>                                   {/* static */}
      <Suspense fallback={<p>Loading your reading list...</p>}>
        <ReadingList />                                {/* dynamic: depends on the user's cookie */}
      </Suspense>
      <LatestPosts />                                  {/* cached: shared by everyone */}
    </>
  );
}

async function LatestPosts() {
  'use cache';
  cacheLife('hours');
  cacheTag('posts');

  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' }, take: 10, select: { slug: true, title: true, excerpt: true } });

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link><p>{p.excerpt}</p></li>
      ))}
    </ul>
  );
}

async function ReadingList() {
  const userId = (await cookies()).get('uid')?.value;
  if (!userId) return <p><Link href='/login'>Log in</Link> to see your reading list.</p>;
  const items = await db.readingListItem.findMany({ where: { userId }, include: { post: true } });
  return <ul>{items.map((i) => <li key={i.id}>{i.post.title}</li>)}</ul>;
}
```

When this page is built, the heading and fallback, plus the cached post list, are in the static shell. A visitor receives that HTML from the CDN immediately; the personal reading list streams in a moment later.

### 16.14 Common mistakes

- Awaiting `params`, `searchParams`, `cookies()` at the top of a page and wondering why the whole route is dynamic. Move the `await` deeper, inside Suspense.
- Ignoring the blocking-route message by switching off Cache Components rather than understanding it.
- Using `'use cache'` on functions that read cookies or headers directly (pass values as arguments).
- Caching per-user data in the shared cache without making the user part of the key, which leaks one user's data to another. Treat this as a security issue.
- Forgetting to tag cached data and then having no way to invalidate it.
- Using the same tag name in `cacheTag` and a different one in `updateTag`.
- Assuming in-memory cache entries are shared across serverless instances.
- Setting tiny `cacheLife` values and expecting a static shell.
- Following Next.js 13 or 14 caching advice for a Next.js 16 project.

### Chapter 16 summary

- In Next.js 16 everything is dynamic by default; caching is explicit with `'use cache'`, a `cacheLife` lifetime and optional `cacheTag`s.
- Pages combine a **static shell** (static plus cached content) with dynamic parts streamed behind `<Suspense>`: Partial Prerendering.
- Dynamic work outside Suspense or a cache causes the blocking-route error. Fix it by streaming, caching or moving the access deeper.
- Invalidate with `updateTag` (read-your-writes, Server Actions), `revalidateTag(tag, 'max')` (background refresh) and `refresh()` (uncached data).
- `generateStaticParams` plus ISR prebuilds known pages and fills in the rest on demand; use the dev overlay and build table to see what is static.

### Exercises

1. Take the blog from Chapter 15 and make it work under Cache Components: cache the post functions with `use cache` and `cacheLife`, and stream the comments in Suspense.
2. Add a cookie-based greeting in the layout inside its own Suspense boundary. Confirm in the build table that the rest of the page remains static.
3. Create a Server Action that adds a post and calls `updateTag('posts')`. Check that the list updates immediately for the author.
4. Deliberately create a blocking route (await `searchParams` at the top of a page without Suspense) and read the overlay. Fix it in two different ways.
5. Add logging inside a cached function and prove how many times it runs for 20 requests.
6. Draw a diagram of one of your pages marking static, cached and streamed regions.

## Chapter 17: Layouts, Loading and Error UI, Metadata, Images, Fonts and SEO

This chapter covers the details that make a Next.js site feel finished: shared layouts, graceful loading and error states, search-engine optimisation, social sharing previews, optimised images and fonts. These are the features that make a Next.js site noticeably better than a hand-assembled React setup.

### 17.1 Layouts and templates in depth

A `layout.tsx` wraps all pages below it and **does not re-render when you navigate between its children**: its state is preserved. Layouts nest from the root down.

```text
app/
  layout.tsx                     root layout: <html>, <body>, site header and footer
  page.tsx
  (marketing)/
    layout.tsx                   marketing layout: wide hero style, no sidebar
    about/page.tsx
    pricing/page.tsx
  (app)/
    layout.tsx                   app layout: sidebar, requires a login
    dashboard/page.tsx
    settings/page.tsx
```

Because route groups `(marketing)` and `(app)` do not appear in URLs, you get completely different page structures for different parts of the site with clean URLs: `/about`, `/pricing`, `/dashboard`.

**Multiple root layouts:** if you delete the top `app/layout.tsx` and give each route group its own `layout.tsx` that includes `<html>` and `<body>`, each group can have a different root (for example a marketing site and an admin app with different fonts). Navigating between them does a full page load.

**Layout rules**

- A layout receives `children` (and `params` for dynamic segments, as a Promise).
- Layouts **cannot read the URL path or search params directly** (they do not re-render on navigation). Put active-link logic in a small Client Component with `usePathname`.
- Data fetched in a layout is shared by its children; use `React.cache` or `'use cache'` functions so that pages and layouts calling the same function do not repeat the query.
- **`template.tsx`** is like a layout but creates a **new instance on every navigation** (state resets, effects re-run). Use it for enter animations, page-view tracking per navigation, or forms that must reset.

```tsx
// app/(app)/layout.tsx
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { Sidebar } from '@/components/Sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen grid-cols-[240px_1fr]'>
      <Sidebar />
      <div className='p-6'>
        <Suspense fallback={<p aria-busy='true'>Loading...</p>}>
          <AuthGate>{children}</AuthGate>
        </Suspense>
      </div>
    </div>
  );
}

async function AuthGate({ children }: { children: React.ReactNode }) {
  const session = await getSession();          // reads cookies: dynamic, inside Suspense
  if (!session) redirect('/login');             // a convenience; real checks belong next to the data (Chapter 20)
  return <>{children}</>;
}
```

### 17.2 Loading UI

A `loading.tsx` file next to a `page.tsx` (or in a parent folder) is shown **instantly** while that segment's content loads. Next.js wraps your page in a `<Suspense>` boundary with `loading.tsx` as the fallback, and keeps the layout interactive.

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div role='status' aria-label='Loading dashboard' className='space-y-4'>
      <div className='h-8 w-1/3 animate-pulse rounded bg-gray-200' />
      <div className='grid grid-cols-3 gap-4'>
        {[0, 1, 2].map((i) => <div key={i} className='h-28 animate-pulse rounded bg-gray-200' />)}
      </div>
    </div>
  );
}
```

Guidelines:

- Make skeletons **match the final layout** (same heights and widths) to avoid layout shift.
- `loading.tsx` covers the whole segment. For finer control, wrap only the slow component in its own `<Suspense>` (Chapter 15) so the rest of the page appears at once.
- With Cache Components, think in terms of the **static shell**: what can be prerendered goes in the shell; the fallback of each Suspense boundary is part of it.

### 17.3 Error handling: error.tsx, global-error.tsx and not-found.tsx

**Expected errors** (a form field is invalid, a record is missing) are handled as data: return a result from a Server Action, or call `notFound()`. **Unexpected errors** (a bug, a database outage) are caught by the nearest **`error.tsx`** error boundary.

```tsx
// app/dashboard/error.tsx   (must be a Client Component)
'use client';

import { useEffect } from 'react';

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    reportError(error);                                // send to Sentry or your logger
  }, [error]);

  return (
    <div role='alert' className='rounded border border-red-300 bg-red-50 p-4'>
      <h2>Something went wrong</h2>
      <p>Please try again. Reference: {error.digest ?? 'n/a'}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

- The boundary wraps the **segment** and its children, but **not the layout in the same folder** (the layout stays on screen, so the user can navigate away). Place `error.tsx` at the level you want to contain failures.
- `reset()` tries to re-render the segment.
- In production the original error message and stack from **server** code are **not sent** to the client (to avoid leaking details). Only a generic message and a `digest` id appear. Search your server logs for the digest to find the real error. This is a security feature.
- **`global-error.tsx`** (in `app/`) replaces the whole root layout when the root layout itself fails. It must define its own `<html>` and `<body>`.
- **`not-found.tsx`** renders when you call `notFound()` or when no route matches. Put one in a segment to customise 404 pages for that area.

```tsx
// app/blog/[slug]/not-found.tsx
import Link from 'next/link';

export default function PostNotFound() {
  return (
    <section>
      <h1>We could not find that post</h1>
      <Link href='/blog'>Back to all posts</Link>
    </section>
  );
}
```

An error boundary only catches errors during **rendering** (and data fetching in Server Components). Errors in event handlers and async callbacks need `try...catch` (and Server Actions return error state, Chapter 18).

### 17.4 Metadata and SEO

**SEO** (search engine optimisation) means helping search engines understand and rank your pages. The basics are: useful content, fast pages, correct HTML, unique titles and descriptions per page, readable URLs, structured data and a sitemap. Next.js has a built-in **Metadata API** that generates the `<head>` tags for you.

**Static metadata** (export an object from a layout or page):

```tsx
// app/layout.tsx
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),   // needed to build absolute URLs
  title: { default: 'InkBlog', template: '%s | InkBlog' },                                // child pages fill the %s
  description: 'Read and publish articles about web development.',
  applicationName: 'InkBlog',
  keywords: ['blog', 'Next.js', 'TypeScript'],
  openGraph: {
    type: 'website',
    siteName: 'InkBlog',
    title: 'InkBlog',
    description: 'Read and publish articles about web development.',
    images: ['/og-default.png'],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = { themeColor: '#4f46e5', width: 'device-width', initialScale: 1 };
```

**Dynamic metadata** per page with `generateMetadata` (it receives the same `params` Promise):

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { getPost } from '@/lib/posts';           // a 'use cache' function, so metadata and page share one cached query

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post not found', robots: { index: false } };

  return {
    title: post.title,                               // becomes 'My title | InkBlog'
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.createdAt.toISOString(),
      authors: [post.author.name],
      images: [{ url: `/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
  };
}
```

Under Cache Components, uncached data and runtime values inside `generateMetadata` surface the same blocking-route insights as pages, so call cached data functions there. Metadata can be dynamic while the rest of the page is prerendered; the shell is served first and the metadata streams in (Next.js serves bots and crawlers a fully rendered page, so SEO is not affected).

**Metadata files** (put in `app/` and Next.js wires them up):

| File | Purpose |
| --- | --- |
| `favicon.ico`, `icon.png`, `apple-icon.png` | Site icons |
| `opengraph-image.tsx` / `.png`, `twitter-image.*` | Social preview images (can be generated dynamically) |
| `robots.ts` | `robots.txt` rules for crawlers |
| `sitemap.ts` | `sitemap.xml` listing your URLs |
| `manifest.ts` | Web app manifest (installable PWA) |

```ts
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/dashboard', '/api/'] }],
    sitemap: `${base}/sitemap.xml`,
  };
}
```

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getAllPostSummaries } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  const posts = await getAllPostSummaries();

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.updatedAt, priority: 0.7 })),
  ];
}
```

**Generated social images** with `ImageResponse`:

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/posts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);

  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', padding: 80, background: '#111827', color: 'white' }}>
        <div style={{ fontSize: 28, color: '#a5b4fc' }}>InkBlog</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24 }}>{post?.title ?? 'InkBlog'}</div>
      </div>
    ),
    size,
  );
}
```

**Structured data (JSON-LD)** helps search engines show rich results:

```tsx
export default async function PostPage(props: PageProps<'/blog/[slug]'>) {
  const post = await getPost((await props.params).slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.createdAt.toISOString(),
    author: { '@type': 'Person', name: post.author.name },
  };

  return (
    <article>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <h1>{post.title}</h1>
    </article>
  );
}
```

(The `replace` of `<` prevents a post title containing `</script>` from breaking out: always escape data placed inside a script tag.)

**SEO checklist for every public page**

1. A unique, descriptive `<title>` (about 50 to 60 characters) and meta description (about 150 to 160 characters).
2. One `h1`; headings in order; meaningful link text ('Read the pricing guide', not 'click here').
3. Clean, readable URLs (`/blog/nextjs-caching`, not `/post?id=847`).
4. Canonical URL to avoid duplicate-content problems.
5. Fast Core Web Vitals (Chapter 12).
6. A sitemap and robots rules; submit the sitemap in Google Search Console.
7. Open Graph and Twitter images for link previews.
8. Alt text for images; semantic HTML; mobile friendly.
9. HTTPS, no broken links, proper 404 status for missing pages (`notFound()` returns 404).

### 17.5 Images with next/image

Images are usually the heaviest part of a page. The `Image` component gives you resizing, modern formats (WebP and AVIF), lazy loading, and prevents layout shift, automatically.

```tsx
import Image from 'next/image';
import heroPic from '@/../public/hero.jpg';      // static import: width, height and blur placeholder are detected

// Local static import
<Image src={heroPic} alt='A developer working at a desk' placeholder='blur' />

// Public folder path: you must give dimensions
<Image src='/logo.svg' alt='InkBlog logo' width={160} height={40} />

// Remote image: the host must be allowed in next.config.ts
<Image src={post.coverUrl} alt='' width={1200} height={630} sizes='(min-width: 768px) 50vw, 100vw' />

// Fill a positioned parent (unknown dimensions): the parent needs position: relative and a size
<div className='relative h-64 w-full'>
  <Image src={user.avatarUrl} alt={`${user.name}'s avatar`} fill sizes='256px' className='object-cover' />
</div>
```

Key props:

- `alt`: required. Use `alt=''` for purely decorative images.
- `width` and `height` (or `fill`): reserve space so the layout does not jump (good CLS).
- `sizes`: tells the browser how wide the image will be at different screen sizes so it downloads the right file. **Always set it with `fill` or responsive layouts.**
- `preload` (older versions: `priority`): preload the **one** image that is the Largest Contentful Paint element, such as a hero. Check the `Image` docs for the exact prop name in your version.
- `placeholder='blur'` with `blurDataURL` for a smooth load effect.
- `quality`: the default configuration in Next.js 16 uses 75 only; allow more values with `images.qualities` if you need them.

```ts
// next.config.ts: allow remote images only from hosts you trust
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/my-account/**' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
  ],
},
```

Security and cost notes: only allow the hosts you need (the optimiser would otherwise be an open proxy). Next.js 16 changed some image defaults (a longer default cache time of four hours, fewer default sizes, local IP blocking), so if you rely on special behaviour, read the upgrade notes. If you use a CDN image service such as Cloudinary or Imgix, you can use a custom loader instead of the built-in optimiser.

For a plain `<img>`-style SVG or tiny icon, a normal `img` is fine; the optimiser does not process SVG by default.

### 17.6 Fonts with next/font

`next/font` downloads Google Fonts **at build time**, self-hosts them with your site, and removes layout shift. No requests go to Google at runtime (good for privacy and speed).

```tsx
// app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${firaCode.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}
```

Then use the CSS variables in your styles (for Tailwind v4 map them in `@theme`: `--font-sans: var(--font-inter);`). For your own font files use `next/font/local`:

```tsx
import localFont from 'next/font/local';

const brand = localFont({ src: [{ path: './fonts/Brand-Regular.woff2', weight: '400' }, { path: './fonts/Brand-Bold.woff2', weight: '700' }], variable: '--font-brand' });
```

Use at most two font families and few weights; variable fonts (one file, many weights) are ideal.

### 17.7 Scripts, third-party code and analytics

```tsx
import Script from 'next/script';

<Script src='https://www.googletagmanager.com/gtag/js?id=G-XXXX' strategy='afterInteractive' />
```

`strategy` controls loading: `afterInteractive` (default, after hydration), `lazyOnload` (when the browser is idle), `beforeInteractive` (critical scripts only), `worker` (experimental). Third-party scripts are a top cause of slow pages: add only what you need, and measure. For Google Analytics, Google Tag Manager and YouTube embeds, `@next/third-parties` provides optimised components.

### 17.8 Putting it together: a polished blog shell

Tasks for the practice project of this chapter:

1. Root layout with `next/font` (Inter), metadata template, `viewport`, skip link, header with `NavLink` and footer.
2. A `(marketing)` group (home, about) and an `(app)` group (dashboard) with different layouts.
3. `loading.tsx`, `error.tsx` and `not-found.tsx` for the blog segment, with skeletons that match the real layout.
4. `generateMetadata` for posts, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, JSON-LD.
5. Cover images with `next/image`, `sizes` and `remotePatterns`.
6. Run Lighthouse on a built site (`npm run build && npm run start`) and aim for 90+ in performance, accessibility, best practices and SEO.

### 17.9 Common mistakes

- Forgetting `metadataBase`, so Open Graph image URLs are relative and break previews.
- Putting `error.tsx` without `'use client'`.
- Expecting `error.tsx` to catch errors thrown in the layout of the same folder.
- Using `next/image` without `sizes` on responsive or `fill` images, so the browser downloads huge files.
- Marking many images as high priority; only the LCP image should be.
- Allowing every remote host in `remotePatterns`.
- Loading fonts through a `<link>` to Google Fonts, adding a network request and layout shift.
- Skipping the sitemap, canonical URLs or unique titles.
- Putting unescaped user data into JSON-LD script tags.

### Chapter 17 summary

- Layouts persist across navigation; route groups give different layouts without changing URLs; templates reset on every navigation.
- `loading.tsx` and `<Suspense>` provide instant loading states; `error.tsx` (a Client Component), `global-error.tsx` and `not-found.tsx` handle failures; server error details are hidden in production.
- The Metadata API, metadata files, `ImageResponse`, sitemaps and JSON-LD handle SEO and sharing.
- `next/image` and `next/font` optimise images and fonts automatically; always give `alt`, dimensions or `fill`, and `sizes`.

### Exercises

1. Build route groups with two layouts and verify that a layout's state survives navigation while a template's does not.
2. Add error, loading and not-found UI to a blog segment and trigger each.
3. Add dynamic metadata and a generated Open Graph image for posts, and test the preview with a social-card debugger.
4. Add `sitemap.ts` and `robots.ts` and open `/sitemap.xml` and `/robots.txt`.
5. Replace all `img` tags in a page with `next/image`, set `sizes`, and compare the network panel before and after.
6. Add Inter with `next/font` and check that no request to Google Fonts is made at runtime.

## Chapter 18: Forms, Server Actions and Route Handlers

Until now your Next.js pages only **read** data. Real applications also **change** data: sign-ups, new posts, comments, settings, deletions. In the old React world you wrote a form, a `fetch` call, an API endpoint, validation, error handling and cache refreshing, in separate places. Next.js lets you do it with a single function that runs on the server: a **Server Action**.

### 18.1 What is a Server Action?

A **Server Action** is an asynchronous function marked with the `'use server'` directive. It runs **only on the server**, but you can call it from the browser (from a form or a button) as if it were a normal function. Next.js turns the call into a secure POST request behind the scenes.

```tsx
// app/contact/page.tsx  (Server Component)
export default function ContactPage() {
  async function sendMessage(formData: FormData) {
    'use server';                                   // this function runs on the server

    const email = String(formData.get('email'));
    const message = String(formData.get('message'));
    await saveMessage({ email, message });          // database, email service...
  }

  return (
    <form action={sendMessage}>
      <input name='email' type='email' required />
      <textarea name='message' required />
      <button>Send</button>
    </form>
  );
}
```

Points to notice:

- `<form action={fn}>` accepts a **function** (React 19 Actions, Chapter 9). The function receives the form's `FormData`.
- No API route, no `fetch`, no `JSON.stringify`.
- The form works **even before JavaScript loads** (progressive enhancement). It submits as a normal HTML form and the page updates; once JavaScript has loaded, it submits without a full reload.
- After the action finishes, Next.js can **refresh the page's data** in the same round trip (Chapter 16 explains cache invalidation).

**Where to define actions**

1. **Inline** inside a Server Component, as above. Convenient for small things.
2. **In a separate file** with `'use server'` at the top. Every exported async function in that file becomes a Server Action. This is the usual choice, because Client Components can import actions only from such files.

```ts
// app/actions/posts.ts
'use server';

export async function createPost(formData: FormData) { /* ... */ }
export async function deletePost(id: string) { /* ... */ }
```

**Security fact you must remember:** every Server Action is a **public HTTP endpoint**. Anyone can call it directly with any data, even if your UI never shows the button. So **inside every action you must: validate the input, check that the user is logged in, and check that they are allowed to do this specific thing.** Never rely on hidden form fields or on the UI hiding a button. (Next.js adds protections such as encrypted closed-over variables and an Origin-header check against cross-site request forgery, but your own authorization is essential.)

### 18.2 A complete pattern: validate, return state, show errors

The professional pattern has four parts: a Zod schema, an action that returns a typed **state**, a Client Component form that uses `useActionState`, and revalidation after success.

**1. Types and schema (shared by client and server)**

```ts
// src/lib/validation/post.ts
import { z } from 'zod';

export const PostSchema = z.object({
  title: z.string().trim().min(3, 'Title must have at least 3 characters').max(120),
  excerpt: z.string().trim().max(300).optional().default(''),
  content: z.string().trim().min(10, 'Write at least 10 characters').max(50_000),
  tags: z
    .string()
    .default('')
    .transform((s) => [...new Set(s.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean))].slice(0, 5)),
});

export type ActionState =
  | { status: 'idle' }
  | { status: 'error'; message: string; fieldErrors?: Record<string, string[] | undefined>; values?: Record<string, string> }
  | { status: 'success'; message: string };
```

**2. The action**

```ts
// src/app/actions/posts.ts
'use server';

import { redirect } from 'next/navigation';
import { updateTag } from 'next/cache';
import { db } from '@/lib/db';
import { requireUser } from '@/lib/auth';          // throws or redirects when not logged in (Chapter 20)
import { slugify } from '@/lib/slug';
import { PostSchema, type ActionState } from '@/lib/validation/post';

export async function createPost(prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();                 // 1. authentication, on the server, every time

  const raw = Object.fromEntries(formData);         // 2. validate untrusted input
  const parsed = PostSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields.',
      fieldErrors: parsed.error.flatten().fieldErrors,
      values: Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, String(v)])),    // refill the form
    };
  }

  let slug: string;
  try {
    const post = await db.post.create({            // 3. mutate (author comes from the session, never from the form)
      data: { ...parsed.data, slug: slugify(parsed.data.title), authorId: user.id },
    });
    slug = post.slug;
  } catch (error) {
    console.error('createPost failed', error);       // log details on the server...
    return { status: 'error', message: 'Could not save the post. Please try again.' };   // ...and return a safe message
  }

  updateTag('posts');                                // 4. refresh cached lists immediately for this user
  redirect(`/blog/${slug}`);                         // 5. navigate; call redirect OUTSIDE try/catch (it works by throwing)
}
```

**3. The form (a Client Component, because it uses hooks)**

```tsx
// src/components/PostForm.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createPost } from '@/app/actions/posts';
import type { ActionState } from '@/lib/validation/post';

const initialState: ActionState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button type='submit' disabled={pending}>{pending ? 'Publishing...' : 'Publish'}</button>;
}

export function PostForm() {
  const [state, formAction] = useActionState(createPost, initialState);
  const errors = state.status === 'error' ? state.fieldErrors ?? {} : {};
  const values = state.status === 'error' ? state.values ?? {} : {};

  return (
    <form action={formAction} className='space-y-4' noValidate>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' name='title' defaultValue={values.title} aria-invalid={!!errors.title} aria-describedby='title-error' />
        <p id='title-error' role='alert'>{errors.title?.[0]}</p>
      </div>

      <div>
        <label htmlFor='tags'>Tags (comma separated)</label>
        <input id='tags' name='tags' defaultValue={values.tags} />
      </div>

      <div>
        <label htmlFor='content'>Content (Markdown)</label>
        <textarea id='content' name='content' rows={12} defaultValue={values.content} aria-invalid={!!errors.content} aria-describedby='content-error' />
        <p id='content-error' role='alert'>{errors.content?.[0]}</p>
      </div>

      {state.status === 'error' && <p role='alert' className='text-red-700'>{state.message}</p>}
      <SubmitButton />
    </form>
  );
}
```

How the pieces connect: `useActionState(action, initial)` returns `[state, formAction, isPending]`. React calls your action with `(previousState, formData)`. Whatever it returns becomes the new `state`, and the component re-renders with errors. If you `redirect`, the page navigates. Forms in React 19 reset **uncontrolled** fields after a successful action; that is why we refill `defaultValue` from `state.values` on errors.

Two more notes:

- When an action has `useActionState`'s signature `(prevState, formData)`, it cannot also be used as a plain `<form action>` without it, since the first argument differs. Keep two kinds of actions in mind: **state actions** (`prev, formData`) and **simple actions** (`formData` only).
- The page that renders `<PostForm />` can stay a Server Component. Only the form is a Client Component.

### 18.3 Buttons, arguments and event handlers

Actions are not only for forms. For a delete button, **bind** the argument on the server so the id travels in a protected way, and use a `<form>` so it works without JavaScript:

```tsx
// Server Component
import { deletePost } from '@/app/actions/posts';

export function DeletePostButton({ id }: { id: string }) {
  const deleteWithId = deletePost.bind(null, id);        // pre-fills the first argument
  return (
    <form action={deleteWithId}>
      <button type='submit'>Delete</button>
    </form>
  );
}
```

```ts
// app/actions/posts.ts
export async function deletePost(id: string) {
  const user = await requireUser();
  const post = await db.post.findUnique({ where: { id }, select: { authorId: true, slug: true } });
  if (!post) return;
  if (post.authorId !== user.id && user.role !== 'admin') throw new Error('Forbidden');   // authorization: ownership check

  await db.post.delete({ where: { id } });
  updateTag('posts');
  redirect('/dashboard/posts');
}
```

From a **Client Component event handler**, call actions inside a transition to get a pending state:

```tsx
'use client';

import { useTransition } from 'react';
import { toggleLike } from '@/app/actions/likes';

export function LikeButton({ postId, initialLiked, initialCount }: { postId: string; initialLiked: boolean; initialCount: number }) {
  const [isPending, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useOptimistic({ liked: initialLiked, count: initialCount }, (state, _action: 'toggle') => ({
    liked: !state.liked,
    count: state.count + (state.liked ? -1 : 1),
  }));

  return (
    <button
      aria-pressed={optimistic.liked}
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          setOptimistic('toggle');                // update the UI immediately
          await toggleLike(postId);               // server confirms; on failure the UI returns to the real state
        })
      }
    >
      {optimistic.liked ? 'Liked' : 'Like'} ({optimistic.count})
    </button>
  );
}
```

(Import `useOptimistic` from `react` as well.) Server Actions called this way run **one at a time per client** (queued), which is intentional: they are for mutations. They are not meant for data fetching; use Server Components for reading.

### 18.4 Refreshing data after a mutation

After changing data, the UI must show the new state. Your tools (Chapter 16):

| Situation | Use |
| --- | --- |
| Data is cached and tagged, the user must see their change at once | `updateTag('tag')` inside the action |
| Data is cached, slightly late updates are fine (webhooks, other people's changes) | `revalidateTag('tag', 'max')` |
| A dynamic (uncached) part of the page must refresh | `refresh()` |
| Invalidate by URL rather than by tag | `revalidatePath('/blog')` |
| Leave to another page | `redirect('/somewhere')` |

### 18.5 Other things Server Actions can do

**Cookies and headers**

```ts
'use server';
import { cookies } from 'next/headers';

export async function setTheme(theme: 'light' | 'dark') {
  (await cookies()).set('theme', theme, { httpOnly: true, sameSite: 'lax', secure: true, maxAge: 60 * 60 * 24 * 365, path: '/' });
}
```

**File uploads**: a file input arrives as a `File` object in `FormData`:

```ts
export async function uploadAvatar(prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();
  const file = formData.get('avatar');

  if (!(file instanceof File) || file.size === 0) return { status: 'error', message: 'Choose an image' };
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return { status: 'error', message: 'Only JPEG, PNG or WebP' };
  if (file.size > 2 * 1024 * 1024) return { status: 'error', message: 'Maximum size is 2 MB' };

  const bytes = Buffer.from(await file.arrayBuffer());
  const url = await storage.upload(`avatars/${user.id}.webp`, await resizeToWebp(bytes));   // S3, R2, Cloudinary...
  await db.user.update({ where: { id: user.id }, data: { avatarUrl: url } });
  updateTag(`user-${user.id}`);
  return { status: 'success', message: 'Avatar updated' };
}
```

The default body size limit for Server Actions is small (1 MB); raise it carefully in `next.config.ts` (`experimental.serverActions.bodySizeLimit`; check the docs for the current option location) or use presigned URLs for large files (Book 1, Chapter 24).

**Rate limiting and abuse protection:** actions are public endpoints, so protect sensitive ones (login, sign-up, contact forms, password reset) with rate limiting by IP or user (for example Upstash Ratelimit or your own Redis counters) and, for public forms, a bot check such as Cloudflare Turnstile or a honeypot field.

### 18.6 Route Handlers: real HTTP endpoints

Sometimes you need an actual URL that speaks HTTP: a webhook from Stripe or GitHub, a JSON API for a mobile app or another website, a file download, an image or feed, a health check. For these, use a **Route Handler**: a `route.ts` file that exports functions named after HTTP methods.

```ts
// app/api/posts/route.ts   ->  /api/posts
import { NextResponse, type NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { PostSchema } from '@/lib/validation/post';
import { getSessionUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = Math.max(1, Number(searchParams.get('page')) || 1);
  const limit = Math.min(50, Math.max(1, Number(searchParams.get('limit')) || 10));

  const [items, total] = await Promise.all([
    db.post.findMany({ orderBy: { createdAt: 'desc' }, skip: (page - 1) * limit, take: limit, select: { id: true, slug: true, title: true, excerpt: true, createdAt: true } }),
    db.post.count(),
  ]);

  return NextResponse.json({ data: items, meta: { page, limit, total, pages: Math.ceil(total / limit) } });
}

export async function POST(request: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body: unknown = await request.json().catch(() => null);
  const parsed = PostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const post = await db.post.create({ data: { ...parsed.data, slug: slugify(parsed.data.title), authorId: user.id } });
  return NextResponse.json({ data: post }, { status: 201, headers: { Location: `/api/posts/${post.slug}` } });
}
```

**Dynamic Route Handlers** receive the route context with `params` as a Promise:

```ts
// app/api/posts/[slug]/route.ts
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(_req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const post = await db.post.findUnique({ where: { slug } });
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ data: post });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const user = await getSessionUser();
  const { slug } = await ctx.params;
  // authenticate, authorise (owner or admin), delete...
  return new NextResponse(null, { status: 204 });
}
```

**Things you can do in a handler:** read cookies and headers (`await cookies()`, `request.headers`), return JSON, text, streams or files (`new Response(stream)`), redirect (`NextResponse.redirect`), set headers (CORS), and handle `OPTIONS`.

**A webhook example (verify the signature!)**

```ts
// app/api/webhooks/payments/route.ts
import crypto from 'node:crypto';

export async function POST(request: Request) {
  const raw = await request.text();                               // verify against the RAW body, not parsed JSON
  const signature = request.headers.get('x-signature') ?? '';
  const expected = crypto.createHmac('sha256', process.env.WEBHOOK_SECRET!).update(raw).digest('hex');

  const valid = signature.length === expected.length && crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!valid) return new Response('Invalid signature', { status: 401 });

  const event = JSON.parse(raw);
  // handle event.type idempotently: providers retry deliveries
  return Response.json({ received: true });
}
```

**Caching of Route Handlers:** with Cache Components, `GET` handlers follow the same prerendering model as pages: a handler that only does static work can be prerendered; a handler that reads the request or uncached data runs at request time. Keep API handlers that need fresh data dynamic, and wrap shared reads in `'use cache'` functions when appropriate.

### 18.7 Server Action or Route Handler?

| You need... | Use |
| --- | --- |
| A form in your own Next.js app that changes data | **Server Action** |
| A button in your UI that triggers a mutation | **Server Action** |
| Reading data for your own pages | **Server Component** (not an action or handler) |
| An API for a mobile app, another website or third-party services | **Route Handler** |
| A webhook receiver | **Route Handler** |
| A file download, image, RSS, sitemap or streaming response | **Route Handler** |
| Client-side polling or infinite scroll with a library (TanStack Query) | **Route Handler** (as the data source) |
| Sharing logic between both | A plain **server-only function** in `lib/` (the data access layer) called by either |

The last row is the key architectural habit: put business logic and database access in **plain functions** in a data layer, and keep actions and handlers thin (authenticate, validate, call the function, return a response). Then you can expose the same capability as an action for your UI and a handler for external clients.

### 18.8 Calling your Express API from Next.js (or the reverse)

You may keep your Book 1 Express API as the back end and use Next.js as the front end and a 'backend for frontend'. Patterns:

- **Server Components and Server Actions call the Express API** with `fetch` (server to server, with your API key or the user's token). Browser never sees the API URL or secrets. Good for authentication cookies (forward them) and for hiding the API.
- **Client Components call a Route Handler** which proxies to Express, to avoid CORS and to keep tokens on the server.
- If you rebuild everything in Next.js, the Express API becomes unnecessary: the data layer talks directly to the database.

### 18.9 Common mistakes

- Trusting the UI for security (hidden buttons, hidden fields) and not checking authentication and authorization inside the action.
- Reading the author or user id from `formData` instead of the session.
- Calling `redirect()` inside `try`, where the thrown redirect is caught by your `catch`.
- Returning raw database errors (leaks internals). Log them and return a friendly message.
- Using Server Actions to fetch data for rendering. Use Server Components.
- Forgetting to revalidate after a mutation, so lists show stale data.
- Returning non-serialisable values (class instances) from actions.
- No rate limiting on public actions and endpoints.
- Verifying webhook signatures against parsed JSON instead of the raw body.
- Writing a Route Handler when a Server Action would do, duplicating validation in two places.

### Chapter 18 summary

- Server Actions are server functions you can call from forms and event handlers; they are public endpoints, so every action must validate input and check authentication and authorization.
- The standard pattern: Zod schema, action returning typed state, `useActionState` form, `updateTag` or `revalidateTag`, `redirect` outside `try`.
- Use `bind` for arguments, `useOptimistic` and transitions for instant feedback, and handle file uploads with size and type checks.
- Route Handlers (`route.ts`) provide real HTTP endpoints for webhooks, external clients and files; keep logic in shared server-only functions.

### Exercises

1. Build the create-post form with `useActionState`, Zod validation, field errors and a redirect.
2. Add a delete button with a bound action and an ownership check; try calling the action with another user's post id and confirm it is refused.
3. Build a contact form action that rate limits by IP (use an in-memory map to learn the idea) and returns a success message.
4. Add an optimistic like button using `useOptimistic` and `useTransition`.
5. Build `/api/posts` and `/api/posts/[slug]` Route Handlers and test them with Thunder Client.
6. Write a webhook handler that verifies an HMAC signature and ignores duplicate event ids.

## Chapter 19: Databases in Next.js with PostgreSQL and Prisma

Server Components and Server Actions can talk to a database directly. In Book 1 you used MongoDB with Mongoose and learned the basics of SQL. In this chapter you build a typed data layer with **PostgreSQL** and **Prisma ORM**. Prisma generates a fully typed client from your schema, so queries are checked by TypeScript, which is one of the best reasons to use TypeScript at all.

### 19.1 Why PostgreSQL and Prisma?

- **PostgreSQL** is the most popular open-source relational database: reliable, rich in features, with strong guarantees (transactions, constraints, foreign keys). It is the default recommendation for serious applications with related data (users, posts, comments, orders).
- **Prisma ORM** describes your data in a readable **schema file**, creates and tracks **migrations**, and generates a **type-safe client**. You write `db.post.findMany({ where: { published: true } })` and TypeScript knows the exact shape of the result.
- **Alternatives:** **Drizzle ORM** (SQL-like, TypeScript-first, lightweight), Kysely (a typed query builder), or raw SQL with `pg`. The ideas in this chapter (schema, migrations, data access layer) transfer to all of them. You may keep using MongoDB with Mongoose if your data suits documents.

**Where to get a PostgreSQL database**

| Option | Notes |
| --- | --- |
| **Local with Docker** | `docker run --name pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:17`. Great for development |
| **Neon**, **Supabase**, **Prisma Postgres**, **Railway**, **Render** | Managed PostgreSQL with free tiers (check current limits). Easy for production, backups included |
| **Vercel Marketplace** | Databases you can attach to a Vercel project with environment variables set for you |
| **Your own server** | Full control, full responsibility |

You receive a **connection string** like `postgresql://USER:PASSWORD@HOST:5432/DBNAME`. Put it in `.env` as `DATABASE_URL` (never in Git).

### 19.2 Setting up Prisma 7 in a Next.js project

```bash
$ npm install prisma @types/pg --save-dev
$ npm install @prisma/client @prisma/adapter-pg pg dotenv server-only
$ npx prisma init --output ../src/generated/prisma
```

(Prisma changes its setup between major versions. These steps follow Prisma 7, which uses the new ESM-first `prisma-client` generator, a required output path and a **driver adapter**. If something differs, follow the quickstart at prisma.io/docs for your version.)

`prisma init` creates `prisma/schema.prisma`, a `prisma.config.ts` and an `.env` file with a `DATABASE_URL` placeholder. Edit them:

```text
# .env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/inkblog
```

```ts
// prisma.config.ts: configuration for the Prisma CLI (migrate, studio, generate)
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',          // command run by `prisma db seed` (needs: npm i -D tsx)
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
```

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}
```

Add the generated folder to `.gitignore` (`src/generated`) and generate the client as part of install and build:

```json
"scripts": {
  "postinstall": "prisma generate",
  "build": "prisma generate && next build",
  "db:migrate": "prisma migrate dev",
  "db:studio": "prisma studio",
  "db:seed": "prisma db seed"
}
```

### 19.3 The Prisma schema: modelling InkBlog

```prisma
// prisma/schema.prisma (models)
enum Role {
  USER
  ADMIN
}

model User {
  id           String    @id @default(cuid())
  name         String
  email        String    @unique
  passwordHash String
  role         Role      @default(USER)
  bio          String    @default("")
  avatarUrl    String?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  posts        Post[]
  comments     Comment[]
  likes        Like[]
}

model Post {
  id           String    @id @default(cuid())
  slug         String    @unique
  title        String
  excerpt      String    @default("")
  content      String
  coverUrl     String?
  tags         String[]                                  // PostgreSQL array
  published    Boolean   @default(true)
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  author       User      @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId     String
  comments     Comment[]
  likes        Like[]

  @@index([authorId])
  @@index([createdAt])
  @@index([published, createdAt])
}

model Comment {
  id        String   @id @default(cuid())
  body      String
  createdAt DateTime @default(now())

  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId  String

  @@index([postId, createdAt])
}

model Like {
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    String
  createdAt DateTime @default(now())

  @@id([userId, postId])                                 // composite key: a user can like a post once
}
```

What you see:

- **Fields and types:** `String`, `Int`, `Boolean`, `DateTime`, `Json`, `Decimal`, enums; `?` makes a field optional; `[]` makes a list.
- **`@id`, `@default(...)`, `@unique`, `@updatedAt`:** key, defaults (`cuid()` and `uuid()` generate ids, `now()` the current time), unique constraint, automatic update timestamp.
- **Relations:** the `@relation(fields: [authorId], references: [id])` side holds the foreign key. The other side (`posts Post[]`) is just a convenient list. `onDelete: Cascade` deletes children with the parent.
- **Many-to-many:** `Like` is an explicit join table between `User` and `Post`, with a composite primary key `@@id([userId, postId])`, which also prevents duplicates at the database level.
- **Indexes:** `@@index` speeds up the queries you run most (by author, by date). **Constraints in the database are your last line of defence**: uniqueness, foreign keys and required fields protect data even when application code has bugs.

### 19.4 Migrations

A **migration** is a versioned SQL script that changes the database structure. Prisma compares your schema with the database and writes the SQL for you.

```bash
$ npx prisma migrate dev --name init         # create and apply a migration (development), regenerate the client
$ npx prisma migrate dev --name add_post_cover
$ npx prisma migrate deploy                  # apply existing migrations (production and CI): never creates new ones
$ npx prisma migrate status                  # what is applied?
$ npx prisma studio                          # a web UI to browse and edit data
```

The migrations live in `prisma/migrations/` and **are committed to Git**. They are the history of your database.

Good practices:

- One small migration per change, with a clear name.
- **Never edit a migration that has been applied elsewhere.** Create a new one.
- For production, run `prisma migrate deploy` during deployment (Chapter 22) before the new code starts.
- **Backward-compatible changes** (expand and contract): to rename or remove a column in a live system, first add the new column and deploy code that writes to both, migrate the data, switch reads, and only later delete the old column. A single step that drops a column breaks the running old version.
- `prisma db push` applies the schema without creating a migration. Useful for quick prototypes only.
- `prisma migrate reset` wipes and rebuilds the development database. Never run it against production.

### 19.5 The Prisma client instance

Create **one** client and reuse it. In development, Next.js reloads modules often, which would create many connections, so keep the instance on `globalThis`.

```ts
// src/lib/db.ts
import 'server-only';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/generated/prisma/client';

function createClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
  });
}

const globalForPrisma = globalThis as unknown as { prisma?: ReturnType<typeof createClient> };

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
```

`import 'server-only'` guarantees this file can never be bundled into client code (Chapter 15). **Connection pooling:** serverless platforms start many short-lived instances, each opening database connections. Use your provider's **pooled** connection string for the app (and a direct one for migrations if the provider requires it), or a pooler such as PgBouncer. Many managed providers document the exact setup for Prisma.

### 19.6 Querying data

**Create**

```ts
const user = await db.user.create({
  data: { name: 'Asha', email: 'asha@example.com', passwordHash: hash },
  select: { id: true, name: true, email: true },        // never return the password hash
});

// Nested write: create a post together with tags and connect to the author
const post = await db.post.create({
  data: { title: 'Hello', slug: 'hello-a1b2', content: '# Hi', tags: ['intro'], author: { connect: { id: user.id } } },
});

await db.post.createMany({ data: [/* ... */], skipDuplicates: true });
```

**Read**

```ts
// One record
const post = await db.post.findUnique({ where: { slug: 'hello-a1b2' }, include: { author: { select: { id: true, name: true } } } });

// Many, with filters, sorting and pagination
const posts = await db.post.findMany({
  where: {
    published: true,
    tags: { has: 'nextjs' },                                          // array contains
    OR: [
      { title: { contains: 'cache', mode: 'insensitive' } },
      { content: { contains: 'cache', mode: 'insensitive' } },
    ],
    createdAt: { gte: new Date('2026-01-01') },
  },
  orderBy: [{ createdAt: 'desc' }],
  skip: (page - 1) * pageSize,
  take: pageSize,
  select: { id: true, slug: true, title: true, excerpt: true, createdAt: true, author: { select: { name: true } }, _count: { select: { likes: true, comments: true } } },
});

const total = await db.post.count({ where: { published: true } });
```

- **`select`** lists exactly the fields you want. **`include`** adds relations to the default fields. Prefer `select`: smaller queries, and you cannot accidentally leak a field such as `passwordHash`.
- Filter operators: `equals`, `not`, `in`, `notIn`, `lt`, `lte`, `gt`, `gte`, `contains`, `startsWith`, `endsWith`, `has` (arrays), `AND`, `OR`, `NOT`, relation filters `some`, `every`, `none`.
- `_count` counts related records in the same query.

**Update, upsert, delete**

```ts
await db.post.update({ where: { id }, data: { title: 'New title', tags: { set: ['a', 'b'] } } });

await db.user.upsert({ where: { email }, update: { name }, create: { name, email, passwordHash } });

await db.comment.delete({ where: { id } });
await db.comment.deleteMany({ where: { createdAt: { lt: oneYearAgo } } });
```

**Aggregations**

```ts
const stats = await db.post.groupBy({
  by: ['authorId'],
  _count: { _all: true },
  orderBy: { _count: { authorId: 'desc' } },
  take: 5,
});
```

**Transactions** make several operations succeed or fail together:

```ts
const [post, likeCount] = await db.$transaction([
  db.post.update({ where: { id }, data: { title } }),
  db.like.count({ where: { postId: id } }),
]);

// Interactive transaction for logic that depends on earlier results
await db.$transaction(async (tx) => {
  const existing = await tx.like.findUnique({ where: { userId_postId: { userId, postId } } });
  if (existing) await tx.like.delete({ where: { userId_postId: { userId, postId } } });
  else await tx.like.create({ data: { userId, postId } });
});
```

**Raw SQL (parameterised, safe)** when you need something Prisma does not express:

```ts
const rows = await db.$queryRaw<{ tag: string; n: bigint }[]>`
  SELECT unnest(tags) AS tag, count(*) AS n FROM "Post" GROUP BY tag ORDER BY n DESC LIMIT 10`;
```

The tagged template sends values as parameters, so it is protected against SQL injection. Never build raw SQL by concatenating strings (Book 1, Chapter 21).

**Handling known errors** (unique violation, missing record):

```ts
import { Prisma } from '@/generated/prisma/client';

try {
  await db.user.create({ data });
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
    return { status: 'error', message: 'That email is already registered' };     // unique constraint failed
  }
  throw e;
}
// P2025: record to update or delete not found. P2003: foreign key constraint failed.
```

### 19.7 A data access layer (DAL)

Do not scatter `db.` calls across components, actions and handlers. Create **one server-only module per domain** that exposes small, intention-revealing functions. This gives you one place for queries, caching, authorization and the shape of returned data (a *DTO*, data transfer object).

```ts
// src/lib/data/posts.ts
import 'server-only';
import { cacheLife, cacheTag } from 'next/cache';
import { db } from '@/lib/db';

const PAGE_SIZE = 8;

const postSummary = {
  id: true, slug: true, title: true, excerpt: true, tags: true, createdAt: true, coverUrl: true,
  author: { select: { id: true, name: true, avatarUrl: true } },
  _count: { select: { likes: true, comments: true } },
} as const;

export async function listPosts({ page = 1, q = '', tag = '' }: { page?: number; q?: string; tag?: string }) {
  'use cache';
  cacheLife('minutes');
  cacheTag('posts');                                              // invalidated by updateTag('posts') in actions

  const where = {
    published: true,
    ...(tag && { tags: { has: tag.toLowerCase() } }),
    ...(q && { title: { contains: q, mode: 'insensitive' as const } }),
  };

  const [items, total] = await Promise.all([
    db.post.findMany({ where, orderBy: { createdAt: 'desc' }, skip: (page - 1) * PAGE_SIZE, take: PAGE_SIZE, select: postSummary }),
    db.post.count({ where }),
  ]);

  return { items, total, pages: Math.max(1, Math.ceil(total / PAGE_SIZE)), page };
}

export async function getPostBySlug(slug: string) {
  'use cache';
  cacheLife('hours');
  cacheTag('posts', `post-${slug}`);

  return db.post.findFirst({
    where: { slug, published: true },
    select: { ...postSummary, content: true, updatedAt: true },
  });
}

export async function getAllSlugs() {
  'use cache';
  cacheLife('hours');
  cacheTag('posts');
  return (await db.post.findMany({ where: { published: true }, select: { slug: true } })).map((p) => p.slug);
}
```

Note that these cached functions do **not** read cookies or the user: they return public data. Per-user data (did I like this post?) goes into separate, uncached functions that receive the user id as an argument and are rendered inside `Suspense`.

```ts
// src/lib/data/likes.ts
import 'server-only';
import { db } from '@/lib/db';

export async function hasLiked(userId: string, postId: string) {
  return (await db.like.count({ where: { userId, postId } })) > 0;
}
```

**Authorization belongs in the DAL too.** For functions that expose private data or perform writes, check the user inside the function, so no caller can forget:

```ts
export async function getMyDrafts(user: { id: string }) {
  return db.post.findMany({ where: { authorId: user.id, published: false }, select: postSummary });
}
```

### 19.8 Seeding and testing data

```ts
// prisma/seed.ts
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }) });

async function main() {
  const admin = await db.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: { name: 'Admin', email: 'admin@example.com', role: 'ADMIN', passwordHash: await bcrypt.hash('change-me-please', 12) },
  });

  for (let i = 1; i <= 25; i++) {
    await db.post.upsert({
      where: { slug: `sample-post-${i}` },
      update: {},
      create: { slug: `sample-post-${i}`, title: `Sample post ${i}`, excerpt: 'A seeded post.', content: `# Post ${i}\n\nSome *Markdown*.`, tags: i % 2 ? ['nextjs'] : ['typescript'], authorId: admin.id },
    });
  }
}

main().finally(() => db.$disconnect());
```

Run `npm run db:seed`. For **tests**, use a separate database (for example a Docker PostgreSQL on another port, or a database per test run), apply migrations with `prisma migrate deploy`, and clean tables between tests. Never run tests against development or production data.

### 19.9 Performance and reliability habits

- **Select only what you need** (`select`), and paginate everything (`take`, `skip` or cursor pagination for large tables).
- **Avoid N+1 queries:** do not run a query per row inside a loop. Use `include` or `select` with relations, or one query with `in`.
- **Index** columns you filter and sort by; check slow queries with `EXPLAIN ANALYZE` or the query log.
- **Cursor pagination** (`cursor: { id }`, `skip: 1`) is more efficient than large offsets and stable when data changes.
- **Cache read-heavy public data** with `'use cache'` and tags, as above. Do not cache private data in shared caches.
- **Keep transactions short** and avoid network calls inside them.
- **Connection limits:** use pooling in serverless and set sensible pool sizes.
- **Backups:** automated backups with tested restores (Book 1, Chapter 27).
- **Soft deletes** (`deletedAt`) when you need recovery; hard deletes (with cascades) when you must truly remove personal data.
- **Money:** store as integers (smallest unit) or `Decimal`, never floating point.
- **Time:** store UTC timestamps; format in the user's time zone in the UI.

### 19.10 Using MongoDB or an existing Express API instead

- **MongoDB:** keep Mongoose (Book 1, Chapter 21) in a server-only data layer with the same structure, or use Prisma with MongoDB. Document shapes validated with Zod at the boundaries.
- **Existing Express API:** a data layer function calls `fetch` to the API (server to server) and validates the response with Zod. The rest of your Next.js code does not care whether data comes from a database or an API: that is the benefit of the data access layer.

### 19.11 Common mistakes

- Creating a new `PrismaClient` in every file or request, exhausting connections.
- Returning full user objects (with `passwordHash`) from the data layer instead of `select`ing safe fields.
- Forgetting to commit migrations, or editing an applied migration.
- Running `migrate dev` against production. Use `migrate deploy` there.
- N+1 queries inside components and loops.
- Using `contains` on large unindexed text columns for search (use PostgreSQL full-text search or a search service when you outgrow it).
- Trusting ids from the client without checking ownership in the data layer.
- Putting database access in Client Components (impossible and unsafe), or importing the DAL without `server-only`.
- Caching per-user data in a shared `'use cache'` function.

### Chapter 19 summary

- PostgreSQL plus Prisma gives you a typed, migration-based data layer. Prisma 7 uses the `prisma-client` generator with an output path, `prisma.config.ts` and a driver adapter.
- Model data in `schema.prisma` with relations, constraints and indexes; evolve it with migrations committed to Git; use `migrate dev` locally and `migrate deploy` in production.
- Use one shared client; query with `select`, filters, pagination and transactions; use parameterised raw SQL when needed.
- Centralise queries, caching and authorization in a server-only data access layer that returns safe DTOs.

### Exercises

1. Set up PostgreSQL (Docker or a managed free tier) and Prisma, create the InkBlog schema, run the first migration and open Prisma Studio.
2. Write a seed script with an admin and 25 posts, then build the blog list page from the data layer with pagination, search and tag filter.
3. Add a `Like` toggle using an interactive transaction, and a `hasLiked` function rendered inside Suspense.
4. Add a migration that adds `readingMinutes Int @default(1)` to `Post`, backfill it with a script, and explain how you would deploy it without downtime.
5. Find an N+1 problem on purpose (a loop with one query per post) and fix it with `include`.
6. Write tests for the data layer using a separate test database.

## Chapter 20: Authentication and Authorization in Next.js

In Book 1, Chapter 22 you learned the foundations: password hashing, sessions and tokens, roles, and ownership checks. Next.js changes **where** each check lives, because code runs in several places (Proxy, Server Components, Server Actions, Route Handlers). This chapter shows a complete, secure design, then compares the libraries you can use instead of building it yourself.

A warning first: authentication is easy to get subtly wrong. Building it once is the best way to understand it, but for a real product with real users, consider a well-maintained library or hosted provider (section 20.9) and always follow the official Next.js authentication guide for the current recommendations.

### 20.1 The three concepts

1. **Authentication:** proving who the user is (email and password, social login, passkey).
2. **Session management:** remembering that proof across requests (a cookie).
3. **Authorization:** deciding what this user may see or do.

The Next.js team recommends **defence in depth**: several layers of checks, each with a different purpose.

| Layer | Purpose | What it may do |
| --- | --- | --- |
| **Proxy** (`proxy.ts`) | Fast, **optimistic** redirects | Only look at the session **cookie** (exists or not). No database calls: it runs on every request, including prefetches |
| **Data Access Layer (DAL)** | **Secure** checks next to the data | Verify the session against the database, check roles and ownership, return only allowed fields |
| **Server Actions and Route Handlers** | Protect mutations and APIs | Treat them as public endpoints: authenticate, authorise and validate in every one |
| **UI** | Convenience | Hide buttons and links the user cannot use. **Never a security boundary** |

The golden rule from the Next.js documentation: **perform the majority of security checks as close as possible to your data source.** A layout check alone is not enough, because pages, actions and handlers can be reached independently of the layout.

### 20.2 Session design: database sessions with an opaque cookie

Two common designs (Book 1, Chapter 22):

- **Stateless (signed or encrypted token in the cookie):** simple and fast, but hard to revoke before expiry. Libraries: `jose`, `iron-session`.
- **Database sessions:** the cookie holds only a random, unguessable identifier; the session data lives in your database. Easy to revoke (log out everywhere, ban a user), a bit more database work.

We will build **database sessions**. The cookie contains a random token. The database stores only a **hash** of that token (so a database leak does not leak usable sessions).

**Prisma model** (add to `schema.prisma`, then run a migration):

```prisma
model Session {
  id         String   @id @default(cuid())
  tokenHash  String   @unique
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId     String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  userAgent  String?

  @@index([userId])
  @@index([expiresAt])
}

// and in model User:  sessions Session[]
```

**Passwords**

```ts
// src/lib/auth/password.ts
import 'server-only';
import bcrypt from 'bcryptjs';

const COST = 12;
// A real hash of a random string, used to equalise timing when the email is unknown
const DUMMY_HASH = bcrypt.hashSync('dummy-password-for-timing', COST);

export const hashPassword = (plain: string) => bcrypt.hash(plain, COST);

export async function verifyPassword(plain: string, hash: string | undefined) {
  return bcrypt.compare(plain, hash ?? DUMMY_HASH).then((ok) => ok && Boolean(hash));
}
```

**Session functions**

```ts
// src/lib/auth/session.ts
import 'server-only';
import crypto from 'node:crypto';
import { cookies, headers } from 'next/headers';
import { db } from '@/lib/db';

export const SESSION_COOKIE = 'session';
const SESSION_DAYS = 14;

const sha256 = (value: string) => crypto.createHash('sha256').update(value).digest('hex');

export async function createSession(userId: string) {
  const token = crypto.randomBytes(32).toString('base64url');          // 256 bits of randomness
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  await db.session.create({
    data: { userId, tokenHash: sha256(token), expiresAt, userAgent: (await headers()).get('user-agent')?.slice(0, 200) },
  });

  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,                                  // not readable by JavaScript: protects against XSS theft
    secure: process.env.NODE_ENV === 'production',   // HTTPS only in production
    sameSite: 'lax',                                 // not sent on cross-site POSTs: protects against CSRF
    expires: expiresAt,
    path: '/',
  });
}

export async function readSessionUser() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await db.session.findUnique({
    where: { tokenHash: sha256(token) },
    select: { id: true, expiresAt: true, user: { select: { id: true, name: true, email: true, role: true, avatarUrl: true } } },
  });

  if (!session || session.expiresAt < new Date()) return null;
  return session.user;
}

export async function destroySession() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) await db.session.deleteMany({ where: { tokenHash: sha256(token) } });
  jar.delete(SESSION_COOKIE);
}

export const destroyAllSessions = (userId: string) => db.session.deleteMany({ where: { userId } });
```

Notes: for extra safety in production you can name the cookie `__Host-session` (the browser then enforces `Secure`, `path=/` and no `Domain`). Extend the expiry of active sessions occasionally (sliding expiration), and delete expired rows with a scheduled job.

### 20.3 The Data Access Layer for auth

The DAL holds the **secure** checks. Wrap the lookup in React's `cache()` so it runs at most once per request, no matter how many components ask.

```ts
// src/lib/auth/dal.ts
import 'server-only';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { readSessionUser } from './session';

// The current user or null. Reading the cookie makes this DYNAMIC (see 20.7 for Cache Components)
export const getCurrentUser = cache(readSessionUser);

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== 'ADMIN') throw new Error('Forbidden');       // or call forbidden() if you enabled authInterrupts
  return user;
}
```

(Next.js also offers experimental `forbidden()` and `unauthorized()` functions behind the `authInterrupts` flag, which render `forbidden.tsx` and `unauthorized.tsx` pages. Use them if you enable that option; otherwise return or redirect as shown.)

In route handlers (APIs) you return JSON errors instead of redirecting:

```ts
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  // ...
}
```

### 20.4 Registration, login and logout actions

```ts
// src/app/actions/auth.ts
'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { db } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/auth/password';
import { createSession, destroySession } from '@/lib/auth/session';
import { rateLimit } from '@/lib/rate-limit';
import { Prisma } from '@/generated/prisma/client';

export type AuthState = { error?: string; fieldErrors?: Record<string, string[] | undefined>; values?: { email?: string; name?: string } };

const RegisterSchema = z.object({
  name: z.string().trim().min(2, 'Name must have at least 2 characters').max(60),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  password: z.string().min(8, 'At least 8 characters').max(72, 'At most 72 characters'),
});

const LoginSchema = z.object({ email: z.string().trim().toLowerCase().email(), password: z.string().min(1).max(72) });

// Only allow redirects to paths inside our own site (prevents open redirect attacks)
function safeNext(value: FormDataEntryValue | null): string {
  const next = typeof value === 'string' ? value : '';
  return next.startsWith('/') && !next.startsWith('//') && !next.startsWith('/\\') ? next : '/dashboard';
}

export async function register(_prev: AuthState, formData: FormData): Promise<AuthState> {
  await rateLimit('register', 5);                       // per IP; throws or returns when exceeded (see your limiter)

  const parsed = RegisterSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors, values: { email: String(formData.get('email') ?? ''), name: String(formData.get('name') ?? '') } };
  }

  const { name, email, password } = parsed.data;

  let userId: string;
  try {
    const user = await db.user.create({ data: { name, email, passwordHash: await hashPassword(password) }, select: { id: true } });
    userId = user.id;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
      return { error: 'An account with that email already exists.', values: { email, name } };
    }
    throw e;
  }

  await createSession(userId);
  redirect('/dashboard');
}

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  await rateLimit('login', 10);

  const parsed = LoginSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: 'Invalid email or password.' };      // same message as a wrong password

  const { email, password } = parsed.data;
  const user = await db.user.findUnique({ where: { email }, select: { id: true, passwordHash: true } });

  const ok = await verifyPassword(password, user?.passwordHash);              // runs bcrypt even for unknown emails
  if (!user || !ok) return { error: 'Invalid email or password.', values: { email } };

  await createSession(user.id);                                                // a NEW token on every login
  redirect(safeNext(formData.get('next')));
}

export async function logout() {
  await destroySession();
  redirect('/');
}
```

Security details to notice: the **same generic error** for unknown email and wrong password; bcrypt runs in both cases so response time does not reveal whether an email exists; `redirect()` is outside any `try`; the redirect target is checked to stay on your site; the unique constraint in the database catches duplicate emails even with two simultaneous registrations; `rateLimit` slows brute force attacks. A basic limiter (a Redis counter keyed by IP and action, for example with Upstash Ratelimit) is mandatory before launch.

**The login form** (Client Component with `useActionState`, like Chapter 18):

```tsx
// src/components/LoginForm.tsx
'use client';

import { useActionState } from 'react';
import { login, type AuthState } from '@/app/actions/auth';

export function LoginForm({ next }: { next?: string }) {
  const [state, action, pending] = useActionState<AuthState, FormData>(login, {});

  return (
    <form action={action} className='space-y-4'>
      <input type='hidden' name='next' value={next ?? ''} />

      <label htmlFor='email'>Email</label>
      <input id='email' name='email' type='email' autoComplete='email' defaultValue={state.values?.email} required />

      <label htmlFor='password'>Password</label>
      <input id='password' name='password' type='password' autoComplete='current-password' required />

      {state.error && <p role='alert' className='text-red-700'>{state.error}</p>}
      <button disabled={pending}>{pending ? 'Logging in...' : 'Log in'}</button>
    </form>
  );
}
```

The login page itself reads `searchParams` (`?next=/dashboard`), so remember to pass it down inside a `Suspense` boundary (Chapter 16).

### 20.5 Proxy: optimistic checks at the edge of your app

`proxy.ts` (called `middleware.ts` before Next.js 16) runs before a request is completed, on the Node.js runtime. Use it only for **cheap, cookie-based** decisions: redirect visitors without a session cookie away from private pages, and logged-in users away from the login page.

```ts
// proxy.ts (project root, or src/ if you use a src folder)
import { NextResponse, type NextRequest } from 'next/server';

const PRIVATE_PREFIXES = ['/dashboard', '/settings', '/posts/new'];
const AUTH_PAGES = ['/login', '/register'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSessionCookie = request.cookies.has('session');     // existence only: NOT proof of a valid session

  const isPrivate = PRIVATE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (isPrivate && !hasSessionCookie) {
    const url = new URL('/login', request.url);
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  if (hasSessionCookie && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // run on pages, skip static assets and Next.js internals
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico)$).*)'],
};
```

Important:

- The file is `proxy.ts` and the exported function is named `proxy` (or a default export). Old tutorials show `middleware.ts` and `export function middleware`; that still works but is deprecated. A codemod exists: `npx @next/codemod@canary middleware-to-proxy .`.
- Proxy runs on **every** matching request, **including prefetches**, so do **not** query the database here.
- A cookie that exists may be expired, forged or revoked. That is why the real check happens in the DAL.
- Proxy is also handy for redirects, rewrites, setting headers (CSP nonces) and A/B routing.

### 20.6 Protecting pages, data and mutations

**Pages and layouts: check in the DAL, near the data.**

```tsx
// src/app/(app)/dashboard/page.tsx
import { Suspense } from 'react';
import { requireUser } from '@/lib/auth/dal';
import { db } from '@/lib/db';

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>
      <Suspense fallback={<p aria-busy='true'>Loading your posts...</p>}>
        <MyPosts />
      </Suspense>
    </>
  );
}

async function MyPosts() {
  const user = await requireUser();                               // dynamic: reads cookies, inside Suspense
  const posts = await db.post.findMany({ where: { authorId: user.id }, orderBy: { createdAt: 'desc' }, select: { id: true, slug: true, title: true, published: true } });

  return <ul>{posts.map((p) => <li key={p.id}>{p.title}{!p.published && ' (draft)'}</li>)}</ul>;
}
```

**A layout check is not enough.** Next.js layouts do not re-render on every navigation and pages can be rendered independently, so never rely on a layout alone to protect a page's data. Put `requireUser()` (or the data function that calls it) in the code that reads the protected data.

**Mutations: every action authenticates, authorises and validates** (Chapter 18). A reusable **policy** function keeps rules in one place:

```ts
// src/lib/auth/policies.ts
import 'server-only';

type User = { id: string; role: 'USER' | 'ADMIN' };

export const can = {
  editPost: (user: User, post: { authorId: string }) => user.role === 'ADMIN' || post.authorId === user.id,
  deleteComment: (user: User, comment: { authorId: string }, post: { authorId: string }) =>
    user.role === 'ADMIN' || comment.authorId === user.id || post.authorId === user.id,
  viewAdminPanel: (user: User) => user.role === 'ADMIN',
};
```

```ts
export async function updatePost(id: string, formData: FormData) {
  const user = await requireUser();
  const post = await db.post.findUnique({ where: { id }, select: { authorId: true } });
  if (!post || !can.editPost(user, post)) throw new Error('Not allowed');      // same error for missing and forbidden: do not leak existence
  // validate, update, updateTag(...)
}
```

**Never trust the client for identity or roles:** take the user id from the session, never from a form field or URL. Missing ownership checks (IDOR) are the most common real-world authorization bug.

### 20.7 Auth and Cache Components

Reading the session means reading `cookies()`, which is **dynamic** (Chapter 16). Practical consequences:

- Anything that depends on the current user must run **inside a `<Suspense>` boundary** (or in a Server Action or Route Handler). Put the user menu, 'Welcome back' bar and personalised lists in small Suspense boundaries so the rest of the page stays in the static shell.
- **Never read the session inside a shared `'use cache'` function.** A cache entry is shared by everyone who produces the same key; caching per-user data with a missing user in the key would leak one user's data to another. Read the session **outside**, pass the **user id as an argument** (it becomes part of the cache key), or keep personal data uncached.
- Public pages (blog posts, marketing) should not touch the session at all, so they can be prerendered.
- The navigation bar is a typical example: render a static bar shell and a small `<Suspense><UserMenu /></Suspense>` for the dynamic part.

```tsx
// src/components/UserMenu.tsx  (Server Component)
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/dal';
import { logout } from '@/app/actions/auth';

export async function UserMenu() {
  const user = await getCurrentUser();
  if (!user) return <Link href='/login'>Log in</Link>;

  return (
    <div className='flex items-center gap-3'>
      <Link href='/dashboard'>{user.name}</Link>
      <form action={logout}><button>Log out</button></form>
    </div>
  );
}

// In the layout header:  <Suspense fallback={<span className='w-24' />}><UserMenu /></Suspense>
```

### 20.8 More things a real system needs

- **Password reset and email verification:** random tokens stored as hashes with an expiry and single use; always respond with the same message whether the email exists (Book 1, Chapters 22 and 24). Send email from a background job or `after()` so the user does not wait.
- **Logout everywhere and session lists:** `destroyAllSessions(userId)` after a password change; show 'active sessions' with device names and a revoke button.
- **Sliding expiration and rotation:** refresh the expiry of active sessions; create a new session id on login and privilege changes.
- **Rate limiting and lockouts:** per IP and per account, with exponential delay. Add bot protection (Turnstile, hCaptcha) on public forms.
- **Multi-factor authentication (MFA):** time-based one-time passwords (TOTP) or passkeys (WebAuthn), which are phishing-resistant. Libraries and hosted providers include them.
- **CSRF:** `SameSite=Lax` cookies plus Next.js's built-in origin checks for Server Actions cover most cases. For custom Route Handlers that accept cookie-authenticated POSTs, verify the `Origin` header or use CSRF tokens (Book 1, Chapter 23).
- **Audit logs:** record sign-ins, password changes and admin actions.
- **Security headers and CSP:** Chapter 21.

### 20.9 Using a library or provider

Building authentication yourself teaches you how it works. For a production product, consider these options (the landscape changes; compare current documentation before choosing):

| Option | Type | Notes |
| --- | --- | --- |
| **Better Auth** | Open-source TypeScript library, your database | Email and password, social login, sessions, MFA, passkeys and organisations through plugins. In September 2025 the **Auth.js project joined Better Auth**, and the Auth.js maintainers point new projects to Better Auth |
| **Auth.js (NextAuth v5)** | Open-source library | Widely used; now maintained by the Better Auth team in a security-patch mode. Existing apps keep working. On Next.js 16 export `proxy` instead of `middleware` |
| **Clerk** | Hosted service | Pre-built UI components, social login, MFA, organisations. Users live in Clerk's platform |
| **Auth0, WorkOS, Okta** | Hosted identity platforms | Enterprise features: single sign-on (SAML), directories |
| **Supabase Auth, Firebase Auth** | Backend platform auth | Convenient if you already use that platform |
| **Your own (this chapter)** | Custom | Full control; full responsibility |

A typical Better Auth setup with Next.js and Prisma looks like this (check the current documentation for exact option names, because libraries evolve):

```ts
// src/lib/auth.ts
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { db } from '@/lib/db';

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: 'postgresql' }),
  emailAndPassword: { enabled: true },
  socialProviders: {
    github: { clientId: process.env.GITHUB_CLIENT_ID!, clientSecret: process.env.GITHUB_CLIENT_SECRET! },
  },
  plugins: [nextCookies()],           // lets Server Actions set cookies
});

// src/app/api/auth/[...all]/route.ts
import { toNextJsHandler } from 'better-auth/next-js';
import { auth } from '@/lib/auth';
export const { GET, POST } = toNextJsHandler(auth);

// In a Server Component or DAL function:
import { headers } from 'next/headers';
const session = await auth.api.getSession({ headers: await headers() });
```

Even with a library, **keep your DAL and policies**: the library answers 'who is this?'; your code still decides 'may they do this?', next to the data.

### 20.10 Social login (OAuth) in one picture

OAuth lets users sign in with GitHub, Google and others without a new password. The flow: your site redirects to the provider, the user approves, the provider redirects back with a one-time **code**, your server exchanges the code for tokens and fetches the user's profile, then **you create your own session** as above. Use a library for this: the details (state parameter, PKCE, token verification, account linking by verified email) are easy to get wrong. Always request the minimum scopes, store provider tokens only if you really need them, and encrypt them if you do.

### 20.11 Testing authentication and authorization

- Unit-test policies (`can.editPost`) with a table of users and posts.
- Integration-test actions: logged-out call is rejected; user A cannot edit user B's post; admin can; expired sessions are rejected; logout deletes the session row.
- End-to-end test (Playwright) the full flows: register, log in, access a private page, log out, try again, and the redirect with `next`.
- Try attacks on purpose: call an action with another user's id, send a forged cookie, replay a logged-out cookie, open `/dashboard` without a session.

### 20.12 Common mistakes

- Protecting only the UI or only the layout. Check next to the data and in every action and handler.
- Querying the database in `proxy.ts`, slowing every navigation.
- Treating the existence of a cookie as proof of a valid session.
- Reading the session inside a shared `'use cache'` function (data leak risk) or outside Suspense (blocking-route error).
- Taking `userId` or `role` from the client.
- Different error messages and response times for 'unknown email' and 'wrong password'.
- Open redirects through an unchecked `next` parameter.
- Long-lived, non-revocable tokens in localStorage.
- No rate limiting on login, registration and password reset.
- Storing passwords with fast hashes (use bcrypt, scrypt or argon2) or logging passwords and tokens.

### Chapter 20 summary

- Use layers: Proxy for cheap optimistic cookie checks; the Data Access Layer for secure checks next to the data; authentication and authorization inside every Server Action and Route Handler; UI hiding only as convenience.
- Database sessions with a random opaque cookie (hash stored in the database, `httpOnly`, `secure`, `sameSite`) are revocable and simple; wrap the lookup in `cache()`.
- Registration and login actions validate with Zod, rate limit, give generic errors, rotate the session on login and validate redirect targets.
- With Cache Components, keep user-specific reads inside Suspense and never in shared caches.
- Libraries (Better Auth, Auth.js, Clerk and others) can replace the plumbing, but your data-layer checks stay.

### Exercises

1. Add the `Session` model, password and session helpers, DAL, and register, login and logout actions to your project.
2. Add `proxy.ts` with optimistic redirects, then log in, copy the cookie value, log out, paste the old cookie back, and confirm that the DAL rejects it even though the proxy lets you through.
3. Write `can` policies and use them in post update, delete and comment-delete actions; test them with a user table.
4. Make the navigation bar show the user menu inside Suspense, and confirm in the build output that public pages stay static.
5. Implement a password reset flow with hashed, single-use, expiring tokens.
6. Add a 'sessions' page that lists active sessions and lets the user revoke each one.
7. (Optional) Replace the custom code with Better Auth and compare what you had to write.

## Chapter 21: Security, Testing and Performance for Next.js Apps

A Next.js application mixes server code and browser code in one project, which is powerful and also easy to get wrong. This chapter covers the habits that keep your app safe, verified and fast. It builds on Book 1, Chapter 23 (security), Chapter 25 (testing) and this book's Chapter 12 (performance).

### 21.1 The server and client boundary is your main security boundary

Everything that reaches the browser is **public**: client JavaScript bundles, `NEXT_PUBLIC_` variables, and **every prop you pass from a Server Component to a Client Component** (props are serialised into the page's payload and visible in the browser's network tab and HTML source).

```tsx
// DANGEROUS: the whole user object, including the password hash, is sent to the browser
const user = await db.user.findUnique({ where: { id } });
return <ProfileCard user={user} />;          // ProfileCard is a Client Component

// SAFE: pass only what the UI needs (a DTO)
const user = await db.user.findUnique({ where: { id }, select: { id: true, name: true, avatarUrl: true } });
return <ProfileCard user={user} />;
```

Rules:

1. **Select only the fields you need** in the data layer, so sensitive fields never leave it.
2. Import `server-only` in modules with secrets, database clients and private logic (Chapter 15).
3. Only `NEXT_PUBLIC_` variables may contain non-secret configuration. Treat every other `process.env` value as server-only, and validate them all at startup.
4. Do not pass secrets, tokens or full database rows as props.
5. React offers an experimental **taint** API (`experimental_taintObjectReference`) that marks objects as not allowed to reach the client; consider it as an extra safety net, not a replacement for DTOs.

**Validated environment variables**

```ts
// src/lib/env.ts
import 'server-only';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  DATABASE_URL: z.string().url(),
  SESSION_SECRET: z.string().min(32),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  SMTP_URL: z.string().url().optional(),
});

export const env = schema.parse(process.env);       // fails fast at startup with a clear message
```

The `@t3-oss/env-nextjs` package offers a ready-made version that also checks the server and client split.

### 21.2 Security headers and Content Security Policy

Set protective HTTP headers for every response. The simplest way is `headers()` in `next.config.ts`:

```ts
import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },                                  // stop clickjacking
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

export default nextConfig;
```

**Content Security Policy (CSP)** limits which scripts, styles, images and connections the browser allows, and is the strongest second line of defence against XSS. Next.js needs inline scripts for its own bootstrapping, so a strict CSP uses a **nonce**: a random value generated per request that is added to the header and to allowed scripts. The Next.js documentation shows how to generate the nonce in `proxy.ts` and set the header there. A nonce-based CSP forces **dynamic rendering** of pages (a nonce must be unique per request), which conflicts with a fully static shell; weigh the trade-off, and use a static CSP (without nonces, allowing `'self'` and specific hosts) for mostly static sites. Test the policy in 'report only' mode first (`Content-Security-Policy-Report-Only`) and read the reports before enforcing it.

```ts
// A pragmatic static CSP (adjust to the services you use)
const csp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https://res.cloudinary.com",
  "style-src 'self' 'unsafe-inline'",                 // many CSS-in-JS and Tailwind setups need this
  "script-src 'self' 'unsafe-inline'",                 // weaker: use nonces when you can
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');
```

### 21.3 Server Actions and Route Handlers security checklist

Every Server Action and Route Handler is a public endpoint. For each one, ask:

- **Authentication:** who is calling? (`requireUser()`)
- **Authorization:** may *this* user do *this* to *this* record? (policies, ownership)
- **Validation:** is every input checked with a schema, including ids, enums and file uploads?
- **Rate limiting:** can it be abused (login, registration, contact, password reset, expensive queries)?
- **Output:** do I return only the fields the caller may see, and safe error messages?
- **Idempotency:** can a retried request cause double charges or duplicates? (idempotency keys, unique constraints)
- **Logging:** do I record important actions without logging secrets?

**Next.js built-ins for actions:** closed-over variables in inline actions are encrypted; the `Origin` header is compared to the `Host` (CSRF defence); `serverActions.allowedOrigins` lets you list extra trusted origins (for example behind a proxy). If you deploy several server instances you must set the **same** `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` environment variable on all of them so that actions and encrypted values keep working across instances and deployments (see the self-hosting guide).

**Route Handlers** that use cookie authentication need CSRF consideration for state-changing methods (check `Origin`, use `SameSite` cookies or tokens). Handlers that use `Authorization` headers (API tokens) are not CSRF-prone. Add **CORS** headers deliberately and narrowly:

```ts
const ALLOWED = new Set(['https://app.example.com']);

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin') ?? '';
  if (!ALLOWED.has(origin)) return new Response(null, { status: 403 });
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'GET,POST', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', Vary: 'Origin' },
  });
}
```

### 21.4 Other web security areas that still matter

- **XSS:** React escapes by default. The danger is `dangerouslySetInnerHTML`, user-provided URLs (`javascript:`), and unsanitised Markdown or HTML. Sanitise with a library, allow only `http` and `https` URLs, and keep a CSP.
- **SQL injection:** use Prisma's query API or parameterised raw queries (Chapter 19).
- **SSRF** (server-side request forgery): if your server fetches a URL supplied by a user (image proxy, link preview, webhook test), allow-list hosts and block private IP ranges. Configure `images.remotePatterns` narrowly.
- **Uploads:** limit size and type, re-encode images, store outside the app server, never trust file names (Book 1, Chapter 24).
- **Dependencies:** run `npm audit`, enable Dependabot or Renovate, and keep Next.js, React and your auth library **updated**. Next.js now ships scheduled security releases and announces them in advance on its blog, so subscribe to the announcements and apply patches promptly. Pin versions with the lockfile and run `npm ci` in CI and production builds.
- **Secrets:** use your platform's secret store; rotate on leaks; enable secret scanning in GitHub; never log secrets.
- **Bots and abuse:** rate limiting and bot protection (Cloudflare Turnstile, Vercel BotID or Firewall) for public forms and expensive routes.
- **Cookies:** `httpOnly`, `secure`, `sameSite`; short lifetimes for sensitive sessions.
- **Clickjacking:** `frame-ancestors` in CSP or `X-Frame-Options`.
- **Open redirects:** validate redirect targets.
- **Privacy and compliance:** collect only what you need; honour deletion requests; add a privacy policy and cookie consent where laws (GDPR, DPDP, CCPA) require it.

### 21.5 Logging, monitoring and error tracking

- **Structured logs** with `pino` on the server (Book 1, Chapter 23). Log request ids, user ids (not emails or secrets), durations and error stacks.
- **`instrumentation.ts`** is a file at the project root (or `src/`) whose `register()` function runs once when the server starts. Use it to initialise **OpenTelemetry** tracing or Sentry:

```ts
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');       // e.g. Sentry.init({ dsn: process.env.SENTRY_DSN, tracesSampleRate: 0.1 })
  }
}

export const onRequestError = async (err: unknown, request: { path: string; method: string }, context: unknown) => {
  // forward server errors to your monitoring tool
};
```

- **Error tracking:** Sentry (or similar) for server and browser errors with source maps and release tracking. Use the `digest` shown to users (Chapter 17) to find the matching server log.
- **Web Vitals from real users:** `useReportWebVitals` from `next/web-vitals`, or Vercel Speed Insights, send LCP, INP and CLS from real visitors to your analytics.
- **Uptime and health checks:** a lightweight `/api/health` Route Handler (database ping optional), watched by an uptime service.

### 21.6 Testing a Next.js application

A balanced test strategy for the App Router:

| Level | Tool | What to test |
| --- | --- | --- |
| **Unit** | Vitest | Pure functions, validation schemas, policies (`can.*`), slugify, formatters, reducers |
| **Integration (data layer)** | Vitest with a test database | DAL functions and Server Action logic: queries, transactions, authorization rules |
| **Component (client)** | Vitest + Testing Library | Interactive Client Components: forms, toggles, tabs (Chapter 12) |
| **End-to-end** | **Playwright** | Whole flows in a real browser, including async Server Components, Suspense, redirects, auth |

**Important limitation:** unit-testing `async` **Server Components** directly is not well supported by the usual React testing tools at the time of writing. The recommended approach is to keep components thin, move logic into plain functions you can unit test, and cover the rendered pages with **end-to-end tests**.

**Vitest for logic**

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';        // makes the '@/...' alias work in tests

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: { environment: 'jsdom', setupFiles: ['./vitest.setup.ts'], globals: true, exclude: ['e2e/**', 'node_modules/**'] },
});
```

```ts
// src/lib/auth/policies.test.ts
import { describe, it, expect } from 'vitest';
import { can } from './policies';

const admin = { id: 'a', role: 'ADMIN' as const };
const alice = { id: 'u1', role: 'USER' as const };
const bob = { id: 'u2', role: 'USER' as const };

describe('can.editPost', () => {
  it('lets owners edit', () => expect(can.editPost(alice, { authorId: 'u1' })).toBe(true));
  it('blocks other users', () => expect(can.editPost(bob, { authorId: 'u1' })).toBe(false));
  it('lets admins edit anything', () => expect(can.editPost(admin, { authorId: 'u1' })).toBe(true));
});
```

If a module imports `server-only`, alias it to an empty module in the test config, otherwise importing it in tests throws. Mock `next/navigation` and `next/headers` where needed (`vi.mock('next/navigation', ...)`) when testing components or actions that use them.

**Playwright for end-to-end**

```bash
$ npm init playwright@latest
```

```ts
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html'], ['list']],
  use: { baseURL: 'http://localhost:3000', trace: 'on-first-retry' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }, { name: 'mobile', use: { ...devices['Pixel 7'] } }],
  webServer: {
    command: 'npm run build && npm run start',          // test the production build, like your users
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
```

```ts
// e2e/auth-and-posts.spec.ts
import { test, expect } from '@playwright/test';

test('visitors are redirected to log in, then back to the page they wanted', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page).toHaveURL(/\/login\?next=%2Fdashboard/);

  await page.getByLabel('Email').fill('admin@example.com');
  await page.getByLabel('Password').fill('change-me-please');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('a user can publish a post and see it in the list', async ({ page }) => {
  await loginAs(page, 'admin@example.com', 'change-me-please');
  await page.goto('/posts/new');
  await page.getByLabel('Title').fill('Playwright post');
  await page.getByLabel('Content (Markdown)').fill('# Hello\n\nThis post was written by a test.');
  await page.getByRole('button', { name: 'Publish' }).click();

  await expect(page.getByRole('heading', { name: 'Playwright post' })).toBeVisible();
  await page.goto('/blog');
  await expect(page.getByRole('link', { name: 'Playwright post' })).toBeVisible();
});
```

Tips for stable end-to-end tests: use accessible locators (`getByRole`, `getByLabel`), never fixed `sleep`s (Playwright auto-waits), reset the test database before the run (seed script), reuse a logged-in state with `storageState`, and run against a production build. Add **axe** for accessibility checks (`@axe-core/playwright`): `const results = await new AxeBuilder({ page }).analyze(); expect(results.violations).toEqual([]);`.

**Continuous integration:** run lint, `tsc --noEmit`, unit tests, a build, and Playwright on every pull request (GitHub Actions workflow from Book 1, Chapter 27, plus a PostgreSQL service container).

### 21.7 Performance in Next.js

The framework already does a lot (code splitting per route, prefetching, image and font optimisation, streaming, the static shell). Your job is to **not undo it** and to measure.

**1. Measure with the production build.** `npm run build && npm run start`, then Lighthouse in Chrome, plus real-user metrics. The build output lists routes and their types. The Next.js DevTools overlay and (since 16.3) the **Instant Navigations** inspector show blocking navigations.

**2. Maximise the static shell** (Chapter 16): cache shared data with `'use cache'`, keep dynamic parts in small Suspense boundaries, avoid awaiting `params`, `searchParams` and `cookies()` high in the tree.

**3. Ship less JavaScript.**

- Keep components on the server; make **small** Client Components at the leaves.
- Import heavy libraries only where used, and prefer **server-side** use (Markdown rendering, syntax highlighting, date formatting) so they never reach the browser.
- Use `next/dynamic` (or `React.lazy`) for big, rarely used client components (charts, editors, maps); `ssr: false` only inside Client Components.
- Analyse the bundle. Next.js 16 with Turbopack provides a built-in bundle analyzer (check the docs for the current command, for example `next experimental-analyze`), and `@next/bundle-analyzer` works for webpack builds. Look for large dependencies that could be replaced (`date-fns` instead of `moment`, native `Intl`, smaller icon imports).
- Enable the **React Compiler** (`reactCompiler: true`) to reduce re-render work.

**4. Optimise assets.** `next/image` with correct `sizes`, one `preload` image for LCP, `next/font` with few weights, avoid layout shift, load third-party scripts with `next/script` strategies or `@next/third-parties`, and remove scripts you do not need.

**5. Optimise data.** Select only needed fields, paginate, index database columns, avoid N+1 queries, fetch in parallel, cache with tags, and co-locate your database with your server region (a distant database makes every request slow, even if the page is on a global CDN).

**6. Navigation feel.** Prefetching is on by default for `Link`s in the viewport; with Partial Prefetching, shells are prefetched. Provide `loading.tsx` or Suspense fallbacks that match the final layout. Consider View Transitions (React 19.3) for polished page changes.

**7. Caching at the edges.** Static assets are immutable and cached for a year automatically. For dynamic responses set sensible `Cache-Control` headers in Route Handlers. A CDN in front (Vercel, Cloudflare) serves prerendered shells globally.

**8. Budget and monitor.** Set a performance budget (for example LCP under 2.5 seconds, INP under 200 milliseconds, JavaScript under 200 KB on key routes) and check it in CI with Lighthouse CI. Watch real-user metrics after each release.

### 21.8 A pre-launch checklist for a Next.js app

**Security**

- Every action and handler authenticates, authorises and validates; policies are tested.
- No secrets in client code; only safe DTOs cross to Client Components; `server-only` on private modules.
- Security headers and a tested CSP; cookies are `httpOnly`, `secure`, `sameSite`.
- Rate limiting on auth and public forms; bot protection where needed.
- Dependencies updated; audit reviewed; Next.js patched to the latest security release.

**Quality**

- `tsc --noEmit`, ESLint, unit and end-to-end tests pass in CI.
- Error pages (`error.tsx`, `global-error.tsx`, `not-found.tsx`) work; error tracking is connected.
- Accessibility checks pass (axe, keyboard test, screen-reader smoke test).

**Performance and SEO**

- Build output reviewed; important pages have a static shell; Lighthouse scores above 90.
- Metadata, sitemap, robots, canonical URLs and Open Graph images in place.
- Images and fonts optimised; no unnecessary third-party scripts.

**Operations**

- Environment variables validated; database migrations tested; backups on.
- Health check and uptime monitoring; logs searchable; alerts configured.
- Rollback plan; the same `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` on all instances when scaling horizontally.

### 21.9 Common mistakes

- Passing whole database rows (with sensitive fields) into Client Components.
- Treating a layout check or hidden button as security.
- Setting a nonce-based CSP and not realising it makes every page dynamic.
- Trying to unit-test async Server Components with browser-oriented tools instead of end-to-end tests.
- Testing against the development server, whose performance and behaviour differ from production.
- Ignoring security release announcements and staying on a vulnerable Next.js version.
- Adding large client-side libraries for things the server can do.
- Measuring performance only on a fast laptop and fast network (throttle CPU and network in DevTools).
- Hosting the app close to users but the database far away.

### Chapter 21 summary

- The server and client boundary is a security boundary: return DTOs, keep `server-only` on private code, and never expose secrets.
- Add security headers and a CSP, treat every action and handler as a public endpoint, rate limit, keep dependencies patched and monitor errors.
- Unit-test logic with Vitest, integration-test the data layer with a test database, and cover real flows (including Server Components) with Playwright against a production build.
- Performance comes from a large static shell, little client JavaScript, optimised assets, efficient queries and measurement with real tools.

### Exercises

1. Audit your app for props passed to Client Components. Replace any full records with DTOs.
2. Add security headers in `next.config.ts` and check them with a header-scanning tool. Add a CSP in report-only mode and fix violations.
3. Write Vitest tests for your policies and slug function, and integration tests for two DAL functions using a test database.
4. Write three Playwright tests: protected redirect and login, create and delete a post, and a permission test where user A cannot edit user B's post.
5. Run Lighthouse on the production build; improve the worst metric and record the before and after.
6. Add `instrumentation.ts` with error tracking and trigger a test error to confirm it arrives.

## Chapter 22: Deployment: Vercel, Self-Hosting, Docker and CI/CD

A Next.js app is more than static files: it has a server part (rendering, Server Actions, Route Handlers, image optimisation, caching). Deployment means giving it a place where that server part can run, with a database, secrets, a domain, HTTPS and a safe way to release new versions. This chapter shows the main options. (Platform screens and prices change often, so use each provider's current documentation for exact steps.)

### 22.1 Understanding what you deploy

`npm run build` produces an optimised **production build** in the `.next` folder. It contains:

- **Static assets** (JavaScript, CSS, fonts, images) that can live on a CDN with long cache lifetimes.
- **Prerendered static shells** (HTML and RSC payloads) for routes that can be built ahead of time.
- **Server code** for dynamic rendering, Server Actions, Route Handlers, the proxy and the image optimiser, which needs a Node.js runtime (or a platform that emulates it).
- A **cache** for `'use cache'` entries and ISR pages.

Your choices therefore are:

| Option | Best for | Trade-offs |
| --- | --- | --- |
| **Vercel** (the company behind Next.js) | Most projects, fastest start | All Next.js features work out of the box; costs grow with usage; some lock-in to platform features |
| **Self-hosting on a Node.js server or container** (VPS, Docker, Kubernetes, Fly.io, Railway, Render, AWS ECS and others) | Control, predictable cost, existing infrastructure | You manage scaling, caching across instances, CDN and security |
| **Other serverless platforms** (Netlify, Cloudflare, AWS Amplify, SST/OpenNext) | When you already use them | Support depends on adapters; verify each feature you rely on |
| **Static export** (`output: 'export'`) | Pure static sites (docs, landing pages) | No server features: no Server Actions, no dynamic rendering, no image optimiser by default |

Next.js has a **Build Adapters API** (alpha in 16.x) that lets platforms plug in their own deployment logic. This is making non-Vercel hosting easier over time.

### 22.2 Before you deploy: checklist

1. `npm run build` succeeds locally and `npm run start` works. Read the route table.
2. `tsc --noEmit`, ESLint and tests pass.
3. Environment variables are listed in `.env.example` and validated by code (Chapter 21).
4. Database migrations are committed (`prisma/migrations`) and a plan exists to run `prisma migrate deploy`.
5. The production database exists, with backups and a restricted user.
6. `NEXT_PUBLIC_SITE_URL` is set to the final domain (used for metadata, sitemaps, canonical links).
7. Remote image hosts are listed in `images.remotePatterns`.
8. Cookies are `secure` in production and your session code works behind HTTPS.
9. Error tracking and a health endpoint are ready.
10. You know your Node.js version (Next.js 16 requires Node.js 20.9 or newer). Specify it in `package.json` (`engines`) or in the platform settings.

### 22.3 Deploying to Vercel

Vercel's workflow is built around Git:

1. Push your project to GitHub (or GitLab, Bitbucket).
2. Create a Vercel account and **import** the repository. Vercel detects Next.js and chooses the build settings.
3. Add **environment variables** (Project settings, Environment Variables). You can set different values for **Production**, **Preview** and **Development**.
4. Deploy. You get a URL such as `inkblog.vercel.app`.

From then on:

- **Every push to the production branch (`main`) deploys to production.**
- **Every pull request and branch gets a Preview Deployment** with its own URL, so reviewers can click through the change before it merges. Use a separate **preview database** (for example a database branch per preview, which providers such as Neon support) so previews never touch production data.
- **Instant rollback:** you can promote a previous deployment to production in one click if a release is bad.
- **Domains:** add your domain in project settings, then create the DNS records Vercel shows (Book 1, Chapter 27). HTTPS certificates are automatic.

**Build command and Prisma.** The client must be generated at build time, and migrations must be applied to the production database. A common setup:

```json
"scripts": {
  "postinstall": "prisma generate",
  "build": "next build",
  "vercel-build": "prisma migrate deploy && next build"
}
```

Running `migrate deploy` during the build is simple for small projects. For larger ones, apply migrations in a separate, controlled CI step **before** deploying the new code, and make migrations backward compatible (Chapter 19), because the old version keeps serving traffic while the new one builds.

**Regions.** Put your functions in the **same region as your database** (project settings, Functions region). A function in one continent talking to a database in another adds hundreds of milliseconds to every query.

**Storage and services.** Vercel's Marketplace offers PostgreSQL, Redis and blob storage integrations that set the environment variables for you. Remember that local disk is ephemeral in serverless environments: store uploads in object storage (Book 1, Chapter 24).

**Other Vercel features you will meet:** Analytics and Speed Insights (real-user performance), Cron Jobs (scheduled calls to Route Handlers, for cleanup and reports), the Firewall and bot protection, Edge Config and feature flags, and logs. Limits (function duration, memory, body size) depend on your plan; read them before designing long-running work. For long tasks use background jobs (queues such as Inngest, Trigger.dev, QStash or your own worker) rather than a request that waits.

### 22.4 Self-hosting with Node.js

Next.js runs anywhere Node.js runs.

```bash
$ npm ci
$ npm run build
$ npm run start            # starts the production server on port 3000 (set PORT to change it)
```

Then put a **reverse proxy** (Nginx or Caddy) in front for HTTPS and compression, and use a process manager (PM2, systemd) to keep it running, exactly as in Book 1, Chapter 27. Important differences when self-hosting:

- **Run the build on the same Node.js version** as production, and run `npm run build` in an environment that has all the build-time variables (`NEXT_PUBLIC_` values are inlined into the browser bundle at build time).
- **Image optimisation:** install `sharp` (recommended for production) so image processing is fast.
- **Caching:** by default `'use cache'` entries and ISR output are stored on **one server's** memory and disk. With **several instances** behind a load balancer each has its own cache, so tags invalidated on one instance are not invalidated on the others. For multiple instances configure a **shared cache handler** (for example backed by Redis); Next.js supports custom cache handlers (`cacheHandler` and, for `use cache`, `cacheHandlers` in `next.config.ts`; read the self-hosting guide for the current options).
- **Server Actions encryption key:** set the same `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` (a base64 key of 32 bytes) on every instance, otherwise actions created by one build or instance may fail on another. Also keep a **deployment id** stable if you run rolling deployments with long-lived pages (check the 'version skew' notes in the documentation).
- **Reverse proxy settings:** forward `Host` and `X-Forwarded-*` headers; disable response buffering for streaming (`proxy_buffering off` in Nginx) so Suspense streaming works as intended; allow enough request body size for uploads.
- **CDN:** put a CDN (Cloudflare, Fastly) in front for `/_next/static/*` assets, which are immutable and safe to cache for a year.

### 22.5 Docker

The `standalone` output traces the files your app needs and produces a minimal server, which makes small images.

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'standalone',
  // ...
};
```

```dockerfile
# Dockerfile (multi-stage)
FROM node:22-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_ values are baked into the browser bundle here, so pass them as build arguments
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npx prisma generate && npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
$ docker build --build-arg NEXT_PUBLIC_SITE_URL=https://inkblog.com -t inkblog .
$ docker run -p 3000:3000 --env-file .env.production inkblog
```

How it works: the first stage installs dependencies (cached while `package-lock.json` is unchanged), the second builds, and the last copies only the standalone server, static assets and `public/`. Secrets such as `DATABASE_URL` are passed **at runtime** (`--env-file` or your platform's secret store), never baked into the image.

Pair it with a compose file for local development with PostgreSQL, and run **migrations as a separate one-off command or job**: `npx prisma migrate deploy` with the same image (make sure the Prisma CLI is available in a stage you use for that job).

### 22.6 Static export and when to use it

If your site has no server needs (a documentation site, a portfolio with no forms), you can export plain HTML:

```ts
const nextConfig: NextConfig = { output: 'export', images: { unoptimized: true } };
```

`next build` then writes a static site to `out/`, which any static host can serve (GitHub Pages, Cloudflare Pages, S3 and CloudFront). You lose server features: Server Actions, request-time rendering, Route Handlers that read the request, the proxy, ISR and the default image optimiser. Choose this only when you truly do not need them.

### 22.7 Continuous integration and deployment

Automate checks so that only tested code reaches production (Book 1, Chapter 27, extended for Next.js):

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  verify:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: inkblog_test
        ports: ['5432:5432']
        options: >-
          --health-cmd pg_isready --health-interval 5s --health-timeout 5s --health-retries 10
    env:
      DATABASE_URL: postgresql://postgres:postgres@localhost:5432/inkblog_test
      SESSION_SECRET: ci-only-secret-with-at-least-thirty-two-characters
      NEXT_PUBLIC_SITE_URL: http://localhost:3000
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npx prisma migrate deploy
      - run: npx prisma db seed
      - run: npx tsc --noEmit
      - run: npm run lint
      - run: npm test
      - run: npm run build
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test --project=chromium
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

Then protect `main` so that this check must pass before merging. With Vercel connected to the repository, a merge to `main` deploys automatically; with self-hosting, add a job that builds and pushes the Docker image to a registry and tells your server (or orchestrator) to pull it.

**Release strategy for teams:** short-lived branches, preview deployments for review, feature flags to ship unfinished work safely, a staging environment that mirrors production for final checks, and small, frequent releases. Tag releases and write a short changelog.

### 22.8 Environments, secrets and configuration

- Keep **development**, **preview/staging** and **production** separate: databases, secrets, third-party keys, domains.
- Store secrets in the platform's secret manager; never in Git. Rotate when people leave or a leak is suspected.
- Public (`NEXT_PUBLIC_`) variables are fixed at **build time**. Changing one means a new build.
- Use different OAuth apps and email credentials per environment, and test emails with a sandbox provider outside production.
- Document every variable in `.env.example` with a description and an example value.

### 22.9 Keeping Next.js up to date (including security releases)

A framework running on the public internet needs maintenance. Next.js now follows a **scheduled security release process**: patches are published regularly, sometimes with advance notice on the Next.js blog, and affect supported lines (the current major and the previous one at the time of writing).

- Subscribe to the Next.js blog and GitHub security advisories, and enable **Dependabot** or **Renovate** for automatic update pull requests.
- Update promptly:

```bash
$ npm install next@latest react@latest react-dom@latest
$ npx @next/codemod@canary upgrade latest        # applies automated code changes for major upgrades
```

- Run your tests and a preview deployment before promoting an update to production.
- Do not stay on an old major version indefinitely: security patches are only guaranteed for supported versions.
- Update the dependencies that sit in the request path too: your auth library, ORM, Zod, and the Node.js version (use an LTS release and plan upgrades before its end of life).

### 22.10 Observability and operations after launch

- **Logs, errors and uptime** (Chapter 21): alerts to a channel someone reads.
- **Real-user performance:** Web Vitals per route; watch regressions after each release.
- **Costs:** serverless pricing depends on usage (function time, bandwidth, image optimisation, database). Set spending limits and alerts, cache aggressively, and look at the usage dashboards monthly.
- **Backups and restore drills** for the database (Book 1, Chapter 27).
- **Scaling:** managed platforms scale automatically; self-hosted setups need multiple instances behind a load balancer, a shared cache handler, shared session storage (your database already provides it) and shared file storage (object storage).
- **Incident habits:** a rollback procedure, a status page for customers, and short written post-mortems.

### 22.11 Troubleshooting deployments

| Symptom | Likely cause and fix |
| --- | --- |
| Build passes locally but fails in CI or on the platform | Different Node.js version, missing environment variable, or a case-sensitive file name (macOS is case-insensitive, Linux is not) |
| `PrismaClient` errors or 'Cannot find module generated/prisma' | The client was not generated: run `prisma generate` in `postinstall` and before `next build` |
| Blocking-route error only in the build | A page awaits dynamic data outside Suspense or a cache (Chapter 16) |
| Cannot connect to the database | Wrong connection string, database not reachable from the platform (allow-list, SSL options), too many connections without pooling |
| Works, but every request is slow | Function region far from the database; queries without indexes; waterfalls |
| Users are logged out randomly | Different `SESSION_SECRET` per instance, cookies without `secure` behind HTTPS, or sessions deleted by cleanup jobs |
| Server Actions fail after deploying | Missing or different `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` across instances, or users on an old page after a deploy (version skew) |
| Images do not load | Host missing from `images.remotePatterns`, or `sharp` not installed when self-hosting |
| Stale data after a mutation | Missing `updateTag` or `revalidateTag`, mismatched tag names, or multiple instances with separate caches |
| Streaming seems not to work behind Nginx | Response buffering enabled: turn it off for the Next.js location |

### 22.12 Common mistakes

- Deploying without running the production build locally first.
- Using the development database for production, or preview deployments that write to the production database.
- Forgetting that `NEXT_PUBLIC_` variables are baked in at build time.
- Running `prisma migrate dev` in production instead of `migrate deploy`.
- Running several self-hosted instances without a shared cache handler and a common encryption key.
- Storing uploads on the container's disk.
- No staging environment, no rollback plan, no monitoring.
- Falling behind on security updates.

### Chapter 22 summary

- A Next.js build has static assets, prerendered shells and server code; choose a platform that can run the server part (Vercel, Node.js hosting, Docker) or export purely static sites.
- On Vercel, Git pushes deploy, pull requests get previews, environment variables are per environment, and rollbacks are one click; put functions near the database and run migrations safely.
- Self-hosting needs a reverse proxy, a shared cache handler for several instances, the same Server Actions key everywhere, `sharp`, and unbuffered streaming; Docker with `output: 'standalone'` gives small, portable images.
- Automate lint, type-check, tests and end-to-end checks in CI; keep environments separate; update Next.js and dependencies promptly, including security releases.

### Exercises

1. Deploy your Next.js app to Vercel with a managed PostgreSQL database, set environment variables for production and preview, and verify a preview deployment.
2. Write the Dockerfile with `output: 'standalone'`, run it locally with a PostgreSQL container, and apply migrations with a one-off command.
3. Add the GitHub Actions workflow with a PostgreSQL service and Playwright, and make it a required check.
4. Break the build on purpose with a blocking route and with a missing environment variable; read each error and fix it.
5. Write a short runbook: how to deploy, how to roll back, how to rotate a secret, how to restore the database, and who to contact.
6. Set up Dependabot, then update `next` to the latest release in a branch and review the preview deployment before merging.

# Part 4: Capstone and Next Steps

## Chapter 23: Capstone Project: InkBlog, a Full-Stack Next.js Application

In Book 1 you built InkBlog with Express and EJS. In Part 2 you built a React client for it. Now you rebuild it as one modern, full-stack **Next.js** application with TypeScript, PostgreSQL and Prisma, secure authentication, Server Actions, Cache Components, SEO and deployment. It is the project to show employers: it demonstrates everything in this book in one coherent codebase.

Work through it in milestones, running and committing after each one. Code in this chapter is complete where the idea is new, and refers back to earlier chapters where you already wrote the code (for example the authentication files from Chapter 20).

### 23.1 What you are building

**Public visitors**

- Home page and blog list with search, tag filter and pagination (state in the URL).
- Post pages with server-rendered, sanitised Markdown, author info, like count and comments.
- Fast pages from a static shell with cached data; fully accessible; great SEO (metadata, Open Graph, sitemap).

**Registered users**

- Register, log in, log out (database sessions).
- Create, edit, publish or save as draft, and delete their own posts, with tags and a Markdown preview.
- Like posts (optimistic), comment, delete own comments.
- A dashboard listing their posts.

**Admins**

- Can edit or delete any post and remove any comment.

**Engineering requirements**

- TypeScript in strict mode; Zod validation at every boundary.
- Data Access Layer with `server-only`, DTOs, authorization policies.
- Cache Components: `'use cache'` with `cacheLife` and `cacheTag` for public data; Suspense for personal data; `updateTag` after mutations.
- Security: hashed passwords, `httpOnly` cookies, rate limiting, security headers, input validation, ownership checks.
- Tests: unit tests for policies and utilities, a few data-layer integration tests, and Playwright end-to-end tests.
- Deployment with CI.

### 23.2 Architecture and folder structure

```text
inkblog-next/
  prisma/
    schema.prisma
    seed.ts
  prisma.config.ts
  proxy.ts                         optimistic auth redirects (Chapter 20)
  next.config.ts
  e2e/                             Playwright tests
  src/
    app/
      layout.tsx                   root layout: fonts, header, footer
      globals.css
      page.tsx                     home
      not-found.tsx  error.tsx  sitemap.ts  robots.ts
      blog/
        page.tsx                   list with search, tags, pagination
        [slug]/
          page.tsx                 post page
          opengraph-image.tsx
      (auth)/
        login/page.tsx
        register/page.tsx
      (app)/
        layout.tsx                 private area layout
        dashboard/
          page.tsx                 my posts
          posts/new/page.tsx
          posts/[id]/edit/page.tsx
      actions/
        auth.ts  posts.ts  comments.ts  likes.ts
    components/
      Header.tsx  UserMenu.tsx  SearchBox.tsx  Pagination.tsx
      PostCard.tsx  Markdown.tsx  PostForm.tsx
      LikeButton.tsx  CommentForm.tsx  DeleteButton.tsx
    lib/
      db.ts  env.ts  slug.ts  rate-limit.ts
      auth/        password.ts  session.ts  dal.ts  policies.ts
      data/        posts.ts  comments.ts  likes.ts
      validation/  post.ts  comment.ts
    generated/prisma/              generated by Prisma (not committed)
```

**Data flow:** pages (Server Components) call the **data layer**; forms call **Server Actions**; Server Actions authenticate with the **DAL**, validate with **Zod**, mutate with Prisma, call `updateTag`, and redirect. Client Components are tiny and interactive: `SearchBox`, `LikeButton`, `PostForm`, `DeleteButton`.

### 23.3 Milestone 1: Project setup

```bash
$ npx create-next-app@latest inkblog-next        # TypeScript, ESLint, Tailwind, src/, App Router, React Compiler, @/*
$ cd inkblog-next
$ git init   # create-next-app usually does this

$ npm install @prisma/client @prisma/adapter-pg pg dotenv zod bcryptjs server-only \
    react-markdown remark-gfm rehype-sanitize use-debounce clsx
$ npm install -D prisma @types/pg @types/bcryptjs tsx vitest @vitejs/plugin-react vite-tsconfig-paths \
    jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom @playwright/test @tailwindcss/typography

$ npx prisma init --output ../src/generated/prisma
```

Add `src/generated` to `.gitignore`. Create `.env.local` (and a committed `.env.example`):

```text
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/inkblog
SESSION_SECRET=replace-with-at-least-32-random-characters-please
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Start PostgreSQL (`docker run --name inkblog-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=inkblog -p 5432:5432 -d postgres:17`). Then complete the Prisma configuration from Chapter 19 (`prisma.config.ts`, generator output, scripts).

**Milestone check:** `npm run dev` shows the starter page; `npx prisma -v` works.

### 23.4 Milestone 2: Database schema, client and seed

Use the schema from Chapter 19 (`User`, `Post`, `Comment`, `Like`) plus the `Session` model from Chapter 20. Run:

```bash
$ npx prisma migrate dev --name init
$ npx prisma generate
$ npm run db:seed        # admin user and 25 sample posts (Chapter 19)
$ npx prisma studio      # look at your data
```

Create `src/lib/db.ts` (Chapter 19, section 19.5) and `src/lib/env.ts` (Chapter 21, section 21.1).

### 23.5 Milestone 3: Configuration, layout and the app shell

**next.config.ts**

```ts
import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  poweredByHeader: false,
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

export default nextConfig;
```

**globals.css** (Tailwind v4 with typography for rendered Markdown)

```css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';

@theme {
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --color-brand: #4f46e5;
  --color-brand-dark: #4338ca;
}

body { @apply bg-gray-50 text-gray-900 antialiased; }
:focus-visible { outline: 2px solid var(--color-brand); outline-offset: 2px; }
```

**Root layout** with font, skip link, header, footer. The user menu is dynamic, so it sits in its own Suspense boundary and the rest of every page can stay in the static shell:

```tsx
// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { UserMenu } from '@/components/UserMenu';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'InkBlog', template: '%s | InkBlog' },
  description: 'Read and publish articles about web development.',
  openGraph: { type: 'website', siteName: 'InkBlog' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#4f46e5' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='font-sans'>
        <a href='#main' className='sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-white focus:p-2'>
          Skip to content
        </a>

        <header className='border-b bg-white'>
          <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3'>
            <Link href='/' className='text-xl font-bold text-brand'>InkBlog</Link>
            <nav aria-label='Main' className='flex items-center gap-4'>
              <Link href='/blog'>Blog</Link>
              <Suspense fallback={<span className='inline-block h-6 w-28' aria-hidden='true' />}>
                <UserMenu />
              </Suspense>
            </nav>
          </div>
        </header>

        <main id='main' className='mx-auto max-w-5xl px-4 py-8'>{children}</main>

        <footer className='border-t py-8 text-center text-sm text-gray-600'>
          InkBlog, built with Next.js, TypeScript and PostgreSQL.
        </footer>
      </body>
    </html>
  );
}
```

Create `UserMenu` from Chapter 20, section 20.7. Add `src/app/not-found.tsx` and `src/app/error.tsx` from Chapters 14 and 17.

**Milestone check:** a styled shell with header and footer renders; `npm run build` passes (no blocking route errors).

### 23.6 Milestone 4: Utilities

```ts
// src/lib/slug.ts
import crypto from 'node:crypto';

export function slugify(title: string): string {
  const base = title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')          // remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return `${base || 'post'}-${crypto.randomBytes(3).toString('hex')}`;   // random suffix keeps slugs unique
}
```

```tsx
// src/components/Markdown.tsx: a Server Component. The Markdown library never reaches the browser
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export function Markdown({ source }: { source: string }) {
  return (
    <div className='prose prose-gray max-w-none'>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
```

```ts
// src/lib/rate-limit.ts: a minimal in-memory limiter to learn the idea.
// In production with several instances use a shared store such as Redis (for example Upstash Ratelimit).
import 'server-only';
import { headers } from 'next/headers';

const hits = new Map<string, { count: number; resetAt: number }>();

export async function rateLimit(action: string, limit: number, windowMs = 15 * 60_000) {
  const ip = (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  const key = `${action}:${ip}`;
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }
  entry.count += 1;
  if (entry.count > limit) throw new Error('Too many attempts. Please wait a few minutes and try again.');
}
```

**Validation schemas** (shared by forms and actions):

```ts
// src/lib/validation/post.ts
import { z } from 'zod';

export const PostSchema = z.object({
  title: z.string().trim().min(3, 'Title must have at least 3 characters').max(120),
  excerpt: z.string().trim().max(300).default(''),
  content: z.string().trim().min(10, 'Write at least 10 characters').max(50_000),
  tags: z
    .string()
    .default('')
    .transform((s) => [...new Set(s.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean))].slice(0, 5)),
  published: z.preprocess((v) => v === 'on' || v === 'true', z.boolean()),     // checkbox
});

export type ActionState =
  | { status: 'idle' }
  | { status: 'error'; message: string; fieldErrors?: Record<string, string[] | undefined>; values?: Record<string, string> }
  | { status: 'success'; message: string };

// src/lib/validation/comment.ts
export const CommentSchema = z.object({ body: z.string().trim().min(1, 'Write something first').max(1000) });
```

### 23.7 Milestone 5: The data layer

Use `src/lib/data/posts.ts` from Chapter 19 (`listPosts`, `getPostBySlug`, `getAllSlugs`) with `'use cache'`, `cacheLife` and tags. Add the remaining functions:

```ts
// src/lib/data/comments.ts
import 'server-only';
import { cacheLife, cacheTag } from 'next/cache';
import { db } from '@/lib/db';

export async function listComments(postId: string) {
  'use cache';
  cacheLife('minutes');
  cacheTag(`comments-${postId}`);

  return db.comment.findMany({
    where: { postId },
    orderBy: { createdAt: 'asc' },
    select: { id: true, body: true, createdAt: true, author: { select: { id: true, name: true, avatarUrl: true } } },
  });
}

// src/lib/data/likes.ts  (personal: NOT cached; receives the user id)
export async function getLikeState(postId: string, userId: string | null) {
  const [count, mine] = await Promise.all([
    db.like.count({ where: { postId } }),
    userId ? db.like.count({ where: { postId, userId } }) : Promise.resolve(0),
  ]);
  return { count, liked: mine > 0 };
}

// src/lib/data/dashboard.ts
export async function listMyPosts(userId: string) {
  return db.post.findMany({
    where: { authorId: userId },
    orderBy: { updatedAt: 'desc' },
    select: { id: true, slug: true, title: true, published: true, updatedAt: true, _count: { select: { comments: true, likes: true } } },
  });
}

export async function getPostForEdit(id: string, userId: string, role: 'USER' | 'ADMIN') {
  const post = await db.post.findUnique({ where: { id } });
  if (!post) return null;
  return post.authorId === userId || role === 'ADMIN' ? post : null;     // ownership check inside the data layer
}
```

Pay attention to the **split**: public data (`listPosts`, `getPostBySlug`, `listComments`) is cached and tagged, so a page can be prerendered; personal data (`getLikeState`, `listMyPosts`) is not cached and is rendered inside Suspense.

### 23.8 Milestone 6: Authentication

Copy and adapt from Chapter 20:

1. `lib/auth/password.ts`, `session.ts`, `dal.ts`, `policies.ts`.
2. `actions/auth.ts` with `register`, `login`, `logout`.
3. `proxy.ts` with optimistic redirects for `/dashboard`.
4. The `LoginForm` and a `RegisterForm`, and the pages `(auth)/login/page.tsx` and `(auth)/register/page.tsx`. Because these pages read `searchParams` (`next`), keep the page non-async and read it inside a `Suspense`:

```tsx
// src/app/(auth)/login/page.tsx
import { Suspense } from 'react';
import Link from 'next/link';
import { LoginForm } from '@/components/LoginForm';

export const metadata = { title: 'Log in', robots: { index: false } };

export default function LoginPage(props: PageProps<'/login'>) {
  return (
    <section className='mx-auto max-w-sm'>
      <h1 className='mb-4 text-2xl font-bold'>Log in</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <LoginFormWithNext searchParams={props.searchParams} />
      </Suspense>
      <p className='mt-4 text-sm'>No account? <Link href='/register' className='text-brand underline'>Sign up</Link></p>
    </section>
  );
}

async function LoginFormWithNext({ searchParams }: { searchParams: PageProps<'/login'>['searchParams'] }) {
  const { next } = await searchParams;
  return <LoginForm next={typeof next === 'string' ? next : undefined} />;
}
```

**Milestone check:** register, log out, log in, visit `/dashboard` while logged out (redirected to `/login?next=/dashboard`), then log in and return to it. Verify in the database that a `Session` row appears and disappears.

### 23.9 The build plan: what you do in Part B of this chapter

| Milestone | Deliverable |
| --- | --- |
| 7 | Home page and blog list with search, tags and pagination |
| 8 | Post page with Markdown, likes and comments (static shell plus streamed personal parts) |
| 9 | Dashboard and the post editor (create, edit, delete) with Server Actions |
| 10 | SEO: metadata, Open Graph images, sitemap, robots, JSON-LD |
| 11 | Tests: policies, data layer, Playwright flows |
| 12 | CI and deployment |
| 13 | Hardening, performance check and extensions |

### 23.10 Milestone 7: Home page and blog list

**Shared components**

```tsx
// src/components/PostCard.tsx
import Link from 'next/link';

type Props = {
  post: { slug: string; title: string; excerpt: string; tags: string[]; createdAt: Date; author: { name: string }; _count: { likes: number; comments: number } };
};

export function PostCard({ post }: Props) {
  return (
    <article className='rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md'>
      <h2 className='text-xl font-semibold'>
        <Link href={`/blog/${post.slug}`} className='hover:text-brand'>{post.title}</Link>
      </h2>
      <p className='mt-1 text-sm text-gray-600'>
        By {post.author.name} &middot; <time dateTime={post.createdAt.toISOString()}>{post.createdAt.toLocaleDateString('en-IN')}</time>
        &middot; {post._count.likes} likes &middot; {post._count.comments} comments
      </p>
      {post.excerpt && <p className='mt-3'>{post.excerpt}</p>}
      <p className='mt-3 flex flex-wrap gap-2'>
        {post.tags.map((t) => (
          <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className='rounded-full bg-indigo-50 px-3 py-1 text-sm text-brand'>#{t}</Link>
        ))}
      </p>
    </article>
  );
}

export function PostListSkeleton() {
  return (
    <div className='space-y-4' aria-busy='true' aria-label='Loading posts'>
      {[0, 1, 2].map((i) => <div key={i} className='h-32 animate-pulse rounded-lg bg-gray-200' />)}
    </div>
  );
}
```

Because `createdAt` is a `Date` and the card is a Server Component, no serialisation problem arises. (If you pass posts to a Client Component, convert dates to strings first.)

**Home page:** static hero plus a cached list of the latest posts.

```tsx
// src/app/page.tsx
import Link from 'next/link';
import { listPosts } from '@/lib/data/posts';
import { PostCard } from '@/components/PostCard';

export default function HomePage() {
  return (
    <>
      <section className='rounded-2xl bg-gradient-to-br from-brand to-purple-600 p-10 text-white'>
        <h1 className='text-4xl font-bold'>Write. Share. Learn.</h1>
        <p className='mt-3 max-w-xl text-lg'>InkBlog is a place for developers to publish what they learn.</p>
        <Link href='/blog' className='mt-6 inline-block rounded-lg bg-white px-5 py-2 font-semibold text-brand'>Read the blog</Link>
      </section>

      <section className='mt-10'>
        <h2 className='mb-4 text-2xl font-bold'>Latest posts</h2>
        <LatestPosts />
      </section>
    </>
  );
}

async function LatestPosts() {
  const { items } = await listPosts({ page: 1 });           // a 'use cache' function: part of the static shell
  return <div className='grid gap-4 md:grid-cols-2'>{items.slice(0, 4).map((p) => <PostCard key={p.id} post={p} />)}</div>;
}
```

**Blog list:** search, tag filter and pagination in the URL. The page itself stays synchronous; `searchParams` are read inside Suspense, so the heading and search box are part of the static shell.

```tsx
// src/app/blog/page.tsx
import { Suspense } from 'react';
import { listPosts } from '@/lib/data/posts';
import { PostCard, PostListSkeleton } from '@/components/PostCard';
import { SearchBox } from '@/components/SearchBox';
import { Pagination } from '@/components/Pagination';

export const metadata = { title: 'Blog', description: 'All articles on InkBlog.' };

export default function BlogPage(props: PageProps<'/blog'>) {
  return (
    <section>
      <h1 className='mb-4 text-3xl font-bold'>Blog</h1>
      <Suspense fallback={<div className='h-10' />}>
        <SearchBox placeholder='Search posts...' />        {/* uses useSearchParams: needs Suspense */}
      </Suspense>
      <div className='mt-6'>
        <Suspense fallback={<PostListSkeleton />}>
          <Results searchParams={props.searchParams} />
        </Suspense>
      </div>
    </section>
  );
}

async function Results({ searchParams }: { searchParams: PageProps<'/blog'>['searchParams'] }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const q = typeof sp.q === 'string' ? sp.q.slice(0, 60) : '';
  const tag = typeof sp.tag === 'string' ? sp.tag.slice(0, 30) : '';

  const { items, pages } = await listPosts({ page, q, tag });      // cached per combination of arguments

  if (items.length === 0) return <p className='text-gray-600'>No posts found. Try another search.</p>;

  return (
    <>
      <div className='grid gap-4'>{items.map((p) => <PostCard key={p.id} post={p} />)}</div>
      <Pagination page={page} pages={pages} params={{ q, tag }} basePath='/blog' />
    </>
  );
}
```

`SearchBox` is the Client Component from Chapter 15. `Pagination` builds links:

```tsx
// src/components/Pagination.tsx
import Link from 'next/link';

export function Pagination({ page, pages, params, basePath }: { page: number; pages: number; params: Record<string, string>; basePath: string }) {
  if (pages <= 1) return null;

  const href = (p: number) => {
    const sp = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) if (v) sp.set(k, v);
    if (p > 1) sp.set('page', String(p));
    const qs = sp.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };

  return (
    <nav aria-label='Pagination' className='mt-8 flex items-center justify-between'>
      {page > 1 ? <Link href={href(page - 1)} rel='prev'>Previous</Link> : <span />}
      <span>Page {page} of {pages}</span>
      {page < pages ? <Link href={href(page + 1)} rel='next'>Next</Link> : <span />}
    </nav>
  );
}
```

**Milestone check:** search, tag links and pagination work; refreshing keeps the state; `npm run build` shows the home page and `/blog` as prerendered with a dynamic part streaming in.

### 23.11 Milestone 8: The post page, likes and comments

```tsx
// src/app/blog/[slug]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllSlugs, getPostBySlug } from '@/lib/data/posts';
import { Markdown } from '@/components/Markdown';
import { PostActions } from '@/components/PostActions';
import { Comments } from '@/components/Comments';

export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));       // needs a seeded database at build time
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const post = await getPostBySlug((await props.params).slug);   // same cached function as the page
  if (!post) return { title: 'Post not found', robots: { index: false } };
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, publishedTime: post.createdAt.toISOString(), authors: [post.author.name] },
  };
}

export default async function PostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;                      // known at build time via generateStaticParams
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className='mx-auto max-w-3xl'>
      <h1 className='text-4xl font-bold'>{post.title}</h1>
      <p className='mt-2 text-gray-600'>
        By {post.author.name} &middot; <time dateTime={post.createdAt.toISOString()}>{post.createdAt.toLocaleDateString('en-IN', { dateStyle: 'long' })}</time>
      </p>

      <div className='mt-8'><Markdown source={post.content} /></div>

      <Suspense fallback={<div className='mt-8 h-10 animate-pulse rounded bg-gray-200' />}>
        <PostActions postId={post.id} slug={post.slug} authorId={post.author.id} />
      </Suspense>

      <Suspense fallback={<p className='mt-10'>Loading comments...</p>}>
        <Comments postId={post.id} slug={post.slug} postAuthorId={post.author.id} />
      </Suspense>
    </article>
  );
}
```

The article body, title and metadata come from cached data and are part of the **static shell**. The personal parts (am I logged in, did I like it, can I edit it) stream in behind small Suspense boundaries.

**PostActions (dynamic Server Component)**

```tsx
// src/components/PostActions.tsx
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/dal';
import { can } from '@/lib/auth/policies';
import { getLikeState } from '@/lib/data/likes';
import { LikeButton } from '@/components/LikeButton';
import { DeleteButton } from '@/components/DeleteButton';
import { deletePost } from '@/app/actions/posts';

export async function PostActions({ postId, slug, authorId }: { postId: string; slug: string; authorId: string }) {
  const user = await getCurrentUser();
  const like = await getLikeState(postId, user?.id ?? null);

  return (
    <div className='mt-8 flex flex-wrap items-center gap-3 border-t pt-4'>
      <LikeButton postId={postId} initialLiked={like.liked} initialCount={like.count} canLike={Boolean(user)} />
      {user && can.editPost(user, { authorId }) && (
        <>
          <Link href={`/dashboard/posts/${postId}/edit`} className='rounded border px-3 py-1'>Edit</Link>
          <DeleteButton action={deletePost.bind(null, postId)} label='Delete post' confirm='Delete this post for good?' />
        </>
      )}
    </div>
  );
}
```

**LikeButton (Client Component with an optimistic update)**

```tsx
// src/components/LikeButton.tsx
'use client';

import { useOptimistic, useTransition } from 'react';
import Link from 'next/link';
import { toggleLike } from '@/app/actions/likes';

export function LikeButton({ postId, initialLiked, initialCount, canLike }: { postId: string; initialLiked: boolean; initialCount: number; canLike: boolean }) {
  const [pending, startTransition] = useTransition();
  const [state, flip] = useOptimistic({ liked: initialLiked, count: initialCount }, (s, _: 'toggle') => ({
    liked: !s.liked,
    count: s.count + (s.liked ? -1 : 1),
  }));

  if (!canLike) return <p><Link href='/login' className='text-brand underline'>Log in</Link> to like this post ({state.count} likes)</p>;

  return (
    <button
      aria-pressed={state.liked}
      disabled={pending}
      className='rounded border px-3 py-1 aria-pressed:border-brand aria-pressed:bg-indigo-50'
      onClick={() => startTransition(async () => { flip('toggle'); await toggleLike(postId); })}
    >
      {state.liked ? 'Liked' : 'Like'} ({state.count})
    </button>
  );
}
```

**Server Actions for likes and comments**

```ts
// src/app/actions/likes.ts
'use server';

import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';
import { requireUser } from '@/lib/auth/dal';
import { rateLimit } from '@/lib/rate-limit';

export async function toggleLike(postId: string) {
  const user = await requireUser();
  await rateLimit('like', 60, 60_000);

  await db.$transaction(async (tx) => {
    const key = { userId_postId: { userId: user.id, postId } };
    const existing = await tx.like.findUnique({ where: key });
    if (existing) await tx.like.delete({ where: key });
    else await tx.like.create({ data: { userId: user.id, postId } });
  });

  // Counts shown in cached lists may be a little late: eventual consistency is fine for likes
  revalidateTag('posts', 'max');
}
```

```ts
// src/app/actions/comments.ts
'use server';

import { revalidateTag, updateTag } from 'next/cache';
import { db } from '@/lib/db';
import { requireUser } from '@/lib/auth/dal';
import { can } from '@/lib/auth/policies';
import { rateLimit } from '@/lib/rate-limit';
import { CommentSchema } from '@/lib/validation/comment';
import type { ActionState } from '@/lib/validation/post';

export async function addComment(postId: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();
  await rateLimit('comment', 20);

  const parsed = CommentSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { status: 'error', message: parsed.error.issues[0]?.message ?? 'Invalid comment' };

  const post = await db.post.findUnique({ where: { id: postId }, select: { id: true } });
  if (!post) return { status: 'error', message: 'This post no longer exists.' };

  await db.comment.create({ data: { body: parsed.data.body, postId, authorId: user.id } });

  updateTag(`comments-${postId}`);                // the commenter sees the new comment immediately
  revalidateTag('posts', 'max');                  // comment counts in lists can follow shortly
  return { status: 'success', message: 'Comment added.' };
}

export async function deleteComment(commentId: string) {
  const user = await requireUser();
  const comment = await db.comment.findUnique({ where: { id: commentId }, select: { id: true, postId: true, authorId: true, post: { select: { authorId: true } } } });
  if (!comment || !can.deleteComment(user, comment, comment.post)) throw new Error('Not allowed');

  await db.comment.delete({ where: { id: commentId } });
  updateTag(`comments-${comment.postId}`);
  revalidateTag('posts', 'max');
}
```

**The Comments component** reads the (public, cached) comments and the (personal) current user, so it is a dynamic component inside Suspense:

```tsx
// src/components/Comments.tsx
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/dal';
import { can } from '@/lib/auth/policies';
import { listComments } from '@/lib/data/comments';
import { CommentForm } from '@/components/CommentForm';
import { DeleteButton } from '@/components/DeleteButton';
import { deleteComment } from '@/app/actions/comments';

export async function Comments({ postId, slug, postAuthorId }: { postId: string; slug: string; postAuthorId: string }) {
  const [user, comments] = await Promise.all([getCurrentUser(), listComments(postId)]);

  return (
    <section id='comments' className='mt-10' aria-labelledby='comments-title'>
      <h2 id='comments-title' className='text-2xl font-bold'>Comments ({comments.length})</h2>

      <ul className='mt-4 space-y-4'>
        {comments.map((c) => (
          <li key={c.id} className='rounded border bg-white p-4'>
            <p className='text-sm text-gray-600'><strong>{c.author.name}</strong> &middot; {c.createdAt.toLocaleString('en-IN')}</p>
            <p className='mt-1 whitespace-pre-wrap'>{c.body}</p>      {/* plain text: React escapes it */}
            {user && can.deleteComment(user, { authorId: c.author.id }, { authorId: postAuthorId }) && (
              <DeleteButton action={deleteComment.bind(null, c.id)} label='Delete' confirm='Delete this comment?' small />
            )}
          </li>
        ))}
      </ul>

      <div className='mt-6'>
        {user ? <CommentForm postId={postId} /> : <p><Link href='/login' className='text-brand underline'>Log in</Link> to join the discussion.</p>}
      </div>
    </section>
  );
}
```

The `CommentForm` is a small Client Component with `useActionState(addComment.bind(null, postId), { status: 'idle' })`, a textarea named `body`, and a submit button using `useFormStatus` (Chapter 18). `DeleteButton` wraps a `<form action={action}>` and asks `confirm()` before submitting:

```tsx
// src/components/DeleteButton.tsx
'use client';

export function DeleteButton({ action, label, confirm: message, small }: { action: () => Promise<void>; label: string; confirm: string; small?: boolean }) {
  return (
    <form action={action} onSubmit={(e) => { if (!window.confirm(message)) e.preventDefault(); }} className='inline'>
      <button className={small ? 'mt-2 text-sm text-red-700 underline' : 'rounded border border-red-300 px-3 py-1 text-red-700'}>{label}</button>
    </form>
  );
}
```

**Milestone check:** like and unlike (instant feedback), post comments, delete your own comment, and verify that another user cannot delete yours (try calling the action with the wrong id in a test).

### 23.12 Milestone 9: Post actions, dashboard and editor

```ts
// src/app/actions/posts.ts
'use server';

import { redirect } from 'next/navigation';
import { updateTag } from 'next/cache';
import { db } from '@/lib/db';
import { requireUser } from '@/lib/auth/dal';
import { can } from '@/lib/auth/policies';
import { slugify } from '@/lib/slug';
import { rateLimit } from '@/lib/rate-limit';
import { PostSchema, type ActionState } from '@/lib/validation/post';

function invalid(formData: FormData, issues: ReturnType<typeof PostSchema.safeParse> & { success: false }): ActionState {
  return {
    status: 'error',
    message: 'Please fix the highlighted fields.',
    fieldErrors: issues.error.flatten().fieldErrors,
    values: Object.fromEntries([...formData.entries()].filter(([, v]) => typeof v === 'string').map(([k, v]) => [k, String(v)])),
  };
}

export async function createPost(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();
  await rateLimit('create-post', 20);

  const parsed = PostSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return invalid(formData, parsed);

  const post = await db.post.create({ data: { ...parsed.data, slug: slugify(parsed.data.title), authorId: user.id }, select: { slug: true, published: true } });

  updateTag('posts');
  redirect(post.published ? `/blog/${post.slug}` : '/dashboard');
}

export async function updatePost(id: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();
  const existing = await db.post.findUnique({ where: { id }, select: { authorId: true, slug: true } });
  if (!existing || !can.editPost(user, existing)) throw new Error('Not allowed');

  const parsed = PostSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return invalid(formData, parsed);

  const post = await db.post.update({ where: { id }, data: parsed.data, select: { slug: true, published: true } });

  updateTag('posts');
  updateTag(`post-${existing.slug}`);
  redirect(post.published ? `/blog/${post.slug}` : '/dashboard');
}

export async function deletePost(id: string) {
  const user = await requireUser();
  const post = await db.post.findUnique({ where: { id }, select: { authorId: true, slug: true } });
  if (!post || !can.editPost(user, post)) throw new Error('Not allowed');

  await db.post.delete({ where: { id } });
  updateTag('posts');
  updateTag(`post-${post.slug}`);
  redirect('/dashboard');
}
```

**PostForm** is the Client Component pattern from Chapter 18 with fields `title`, `excerpt`, `tags`, `content` (Markdown textarea), and a `published` checkbox. It receives an `action` (either `createPost` or `updatePost.bind(null, id)`) and optional `defaultValues`, runs `useActionState(action, { status: 'idle' })`, shows field errors and uses `useFormStatus` for the button.

**Private area layout** with an auth gate in Suspense (the DAL check stays next to the data, too):

```tsx
// src/app/(app)/layout.tsx
import { Suspense } from 'react';
import { requireUser } from '@/lib/auth/dal';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<p aria-busy='true'>Loading...</p>}>
      <Gate>{children}</Gate>
    </Suspense>
  );
}

async function Gate({ children }: { children: React.ReactNode }) {
  await requireUser();            // redirects to /login if not signed in
  return <>{children}</>;
}
```

**Dashboard page**

```tsx
// src/app/(app)/dashboard/page.tsx
import Link from 'next/link';
import { requireUser } from '@/lib/auth/dal';
import { listMyPosts } from '@/lib/data/dashboard';

export const metadata = { title: 'Dashboard', robots: { index: false } };

export default async function DashboardPage() {
  const user = await requireUser();
  const posts = await listMyPosts(user.id);

  return (
    <section>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Your posts</h1>
        <Link href='/dashboard/posts/new' className='rounded bg-brand px-4 py-2 text-white'>New post</Link>
      </div>

      {posts.length === 0 ? <p className='mt-6'>You have not written anything yet.</p> : (
        <ul className='mt-6 divide-y rounded border bg-white'>
          {posts.map((p) => (
            <li key={p.id} className='flex items-center justify-between p-4'>
              <div>
                <Link href={p.published ? `/blog/${p.slug}` : `/dashboard/posts/${p.id}/edit`} className='font-medium hover:text-brand'>{p.title}</Link>
                <p className='text-sm text-gray-600'>{p.published ? 'Published' : 'Draft'} &middot; {p._count.likes} likes &middot; {p._count.comments} comments</p>
              </div>
              <Link href={`/dashboard/posts/${p.id}/edit`} className='text-brand underline'>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
```

Because this page reads the session (cookies) at the top, it is dynamic. The layout's Suspense boundary provides the fallback, so the shell is still served instantly. The **new** and **edit** pages render `PostForm`; the edit page loads the post with `getPostForEdit(id, user.id, user.role)` and calls `notFound()` when it returns `null`, so users cannot see other people's drafts.

**Milestone check:** create a draft, publish it, edit it, delete it; confirm the public list updates immediately for you; try editing another user's post URL and confirm a 404.

### 23.13 Milestone 10: SEO and social sharing

- `generateMetadata` for posts (done above), plus the root metadata.
- `src/app/blog/[slug]/opengraph-image.tsx` with `ImageResponse` (Chapter 17) using `getPostBySlug`.
- A sitemap and robots file:

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/data/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  const slugs = await getAllSlugs();
  return [
    { url: base, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/blog`, changeFrequency: 'daily', priority: 0.9 },
    ...slugs.map((slug) => ({ url: `${base}/blog/${slug}`, priority: 0.7 })),
  ];
}
```

- JSON-LD `BlogPosting` data on post pages (Chapter 17), with `<` escaped.
- `robots: { index: false }` on login, register and dashboard pages; `robots.ts` disallowing `/dashboard`.
- Run Lighthouse on `/` and a post page. Target: SEO 100, accessibility 95+, performance 90+.

### 23.14 Milestone 11: Tests

**Unit tests (Vitest)**

- `can.*` policies with a table of users and posts (Chapter 21).
- `slugify`: accents, symbols, long titles, uniqueness suffix pattern.
- Zod schemas: `PostSchema` trims, limits tags to five, parses the `published` checkbox, rejects short content.

**Integration tests (data layer and actions, against a test database)**

- `listPosts` filters by tag and search and paginates correctly.
- `toggleLike` twice returns to the original state (call the transaction logic through a plain function that the action wraps).
- `deleteComment` is refused for a user who is neither the comment author, post author nor admin.
- A deleted post removes its comments (cascade).

**End-to-end tests (Playwright)**

1. Visitor browses the blog, searches, filters by tag and opens a post (assert title, Markdown rendering, no script execution for a post containing `<script>`).
2. Visitor opens `/dashboard`: is redirected to `/login?next=...`; after login lands on the dashboard.
3. User registers, creates a post, sees it on the public list, edits its title, then deletes it.
4. User likes a post (count changes) and comments; comment appears; a second user cannot see delete buttons on it.
5. Admin can delete another user's comment.
6. Accessibility scan with axe on the home page, a post page and the login page.

```ts
// e2e/comments.spec.ts (sketch)
import { test, expect } from '@playwright/test';

test('logged-in user can comment', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('admin@example.com');
  await page.getByLabel('Password').fill('change-me-please');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.goto('/blog/sample-post-1');
  await page.getByLabel(/comment/i).fill('Great post from a Playwright test');
  await page.getByRole('button', { name: /add comment|post comment/i }).click();

  await expect(page.getByText('Great post from a Playwright test')).toBeVisible();
});
```

### 23.15 Milestone 12: CI and deployment

1. Add the GitHub Actions workflow from Chapter 22 (PostgreSQL service, migrate, seed, type-check, lint, unit tests, build, Playwright).
2. Create a production PostgreSQL database (Neon, Supabase, Prisma Postgres or similar) and a separate preview database.
3. Deploy to Vercel: import the repository, set `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`, run `prisma migrate deploy` (build step or CI), and place functions in the database's region.
4. Create the first admin user **manually in production** (a one-off script or an SQL statement with a bcrypt hash you generate yourself). Do not ship the seed admin with a known password.
5. Add your domain, check HTTPS, `robots.txt` and `sitemap.xml`, and submit the sitemap to Google Search Console.
6. Add error tracking, an uptime check on `/api/health` (a small Route Handler), and Vercel Speed Insights or your own Web Vitals reporting.

### 23.16 Milestone 13: Hardening and review

**Security review (go through each item and note where it is implemented)**

- Passwords hashed with bcrypt; sessions in the database; cookie flags correct; session rotated on login.
- Every action: authenticate, authorise, validate, rate limit; no ids or roles taken from forms.
- DTOs only: no `passwordHash` anywhere in props or JSON.
- Markdown sanitised and rendered on the server; comments rendered as text.
- Security headers present; `NEXT_PUBLIC_` contains no secrets; dependencies audited and Next.js up to date.

**Performance review**

- `npm run build`: which routes are prerendered with a static shell? Which are dynamic and why?
- Bundle analysis: only `SearchBox`, `LikeButton`, `PostForm`, `CommentForm` and `DeleteButton` ship client JavaScript (and the framework itself).
- Lighthouse and Web Vitals under throttled network and CPU.
- Database: indexes confirmed with `EXPLAIN` on the list query.

**Quality review**

- README with screenshots, architecture diagram, setup, environment variables, scripts, testing and deployment instructions, and a list of design decisions and trade-offs.
- Clean commit history with meaningful messages and pull requests.

### 23.17 Extensions

1. **Cover image uploads** with presigned URLs (S3 or Cloudflare R2) and `next/image` (Book 1, Chapter 24).
2. **Live Markdown preview** in the editor, loaded lazily with `next/dynamic` so only editor pages ship it.
3. **Full-text search** with PostgreSQL (`tsvector` and a GIN index) or Meilisearch.
4. **Email:** welcome email, password reset and email verification; notify authors of new comments in a background job.
5. **OAuth login** with Better Auth (GitHub or Google).
6. **Author profile pages** `/authors/[id]` with their posts, and RSS feeds `/rss.xml`.
7. **Bookmarks and reading lists** (personal, uncached, in Suspense).
8. **Internationalisation** with locale routes and translated UI strings.
9. **View Transitions** between list and post pages (React 19.3).
10. **Admin moderation panel** with reports, bans and an audit log.
11. **Rate limiting with Redis** and bot protection on forms.
12. **A public JSON API** with token authentication, documented with OpenAPI, so mobile apps can use it.

### Chapter 23 summary

- You built a complete full-stack application: Prisma and PostgreSQL, a typed data layer with `'use cache'` for public data, Suspense for personal data, secure session authentication, Server Actions with validation, authorisation and rate limiting, SEO, tests and deployment.
- The patterns repeat: split public cached data from personal dynamic data; check permissions next to the data; validate at every boundary; invalidate by tag after mutations.
- A project like this, deployed, documented and tested, is the best evidence of the skills in this book.

### Capstone exercises

1. Complete milestones 1 to 13 with a Git commit and a short note after each.
2. Write a README that a stranger could follow to run, test and deploy the project in under 15 minutes.
3. Implement at least three extensions from 23.17.
4. Record the Lighthouse scores and bundle sizes before and after one optimisation you make.
5. Ask a friend to try to break the app (permissions, validation, XSS) and fix whatever they find.
6. Write a one-page architecture overview explaining your server and client boundary, caching strategy and security layers.

## Chapter 24: Best Practices and Your Next Steps

You now know TypeScript, React and Next.js, and you have built a full-stack application with them. This final chapter collects the decisions and habits that matter most in real projects, shows how to choose tools wisely, and gives you a roadmap for the next stage of your career.

### 24.1 Choosing the right tool: a decision guide

| Your situation | Good choice |
| --- | --- |
| Public website where SEO and first load matter (blog, shop, marketing, documentation, SaaS landing and app) | **Next.js** (App Router, Cache Components) |
| Highly interactive application behind a login, no SEO needs (admin panel, internal tool, editor, dashboard) | **Vite + React SPA** (or Next.js if you want one framework) |
| Mostly static content with a little interactivity | **Next.js static** or an islands-style framework such as Astro (with React components inside) |
| Mobile app that shares skills and logic | **React Native with Expo** |
| A separate API that many clients use (web, mobile, partners) | **Express or another API framework** (Book 1), or Next.js Route Handlers if the API belongs to one site |
| Heavy back-end processing, queues, long jobs | A separate **worker service** (Node.js, a queue like BullMQ) |
| Content managed by non-developers | **A headless CMS** (Sanity, Contentful, Payload, Strapi) plus Next.js |

Questions to ask for each decision: Who are the users? Does it need search-engine visibility? How interactive is it? Who maintains it and how big is the team? What does hosting cost? What is the simplest option that works? **Prefer boring, well-supported technology** and add complexity only when a real problem demands it.

### 24.2 Architecture habits for React and Next.js

**1. Keep the server and client boundary deliberate.** Server Components by default; small Client Components at the leaves; DTOs across the boundary; `server-only` on private modules.

**2. One place for each kind of logic.**

```text
UI (components)          renders data and handles interaction
Actions / handlers       the HTTP boundary: authenticate, validate, call the domain, respond
Data access layer        queries, caching, authorization, DTO shaping
Domain / utils           pure functions: calculations, formatting, policies (easy to test)
Schemas (Zod)            the shapes of data at every boundary, with types inferred from them
```

**3. Colocate by feature as the app grows.** Instead of one `components` folder with 200 files, group by feature:

```text
src/features/posts/
  components/   PostCard.tsx  PostForm.tsx
  data.ts       queries (server-only)
  actions.ts    Server Actions
  schema.ts     Zod schemas and types
  policies.ts   authorization rules
  posts.test.ts
```

Shared, generic building blocks (Button, Input, Modal) stay in `src/components/ui`.

**4. Derive state; do not duplicate it.** From Chapter 7: if you can compute it, do not store it. In Next.js, the URL is state too: search, filters and pagination belong in `searchParams`.

**5. Single source of truth for types.** Infer types from Zod schemas, Prisma models or API specs. Do not write the same shape three times.

**6. Make illegal states unrepresentable.** Use discriminated unions for loading, error and success; use enums or literal unions for statuses; use `never` checks in switches.

**7. Fail loudly at the boundaries, trust inside.** Validate environment variables, request bodies, form data and external API responses once, where they enter. Inside, rely on types.

**8. Small, pure, testable functions.** Business rules in plain functions without React or Next.js imports.

**9. Prefer composition over configuration.** Components that accept `children` and small pieces beat components with twenty props and boolean flags.

### 24.3 TypeScript habits

- Keep `strict: true`, add `noUncheckedIndexedAccess`, and treat `any` as a bug to be explained in a comment.
- Use `unknown` for untrusted data and narrow it; use `satisfies` instead of assertions to check shapes; use `as const` for literal tables.
- Prefer `type` for unions and utility types and `interface` for object contracts that may be extended, but be consistent.
- Name types by meaning: `UserId`, `PostSummary`, `CreatePostInput`. Consider **branded types** for ids when mixing them would be dangerous.
- Let inference work; annotate public function signatures and exported values.
- Run `tsc --noEmit` in CI and fix errors, never silence them wholesale. A `@ts-expect-error` needs a reason.
- Use `typescript-eslint` rules that catch real mistakes (floating promises, misused promises, unnecessary conditions).

### 24.4 React and Next.js anti-patterns to avoid

| Anti-pattern | Better |
| --- | --- |
| `useEffect` to fetch data in a Next.js app | Fetch in Server Components; use TanStack Query only for truly client-driven data |
| `useEffect` to derive state or to react to a click | Compute during render; do the work in the event handler |
| `'use client'` at the top of every file | Server Components by default; extract small interactive leaves |
| Storing server data in global client state | Server Components, cache tags, or TanStack Query |
| Passing full database records to Client Components | `select` DTOs |
| Context for rapidly changing values | Local state, Zustand, or a reducer in a smaller subtree |
| Index as `key` in a changing list | A stable id |
| Huge components with mixed concerns | Split by responsibility; extract hooks and pure functions |
| Prop drilling through five levels | Composition (pass elements as children or props), context for truly global values |
| Optimising with `useMemo` everywhere | Measure first; enable the React Compiler |
| Mutating state or props | Immutable updates |
| Trusting the UI for permissions | Check next to the data and in every action |
| Awaiting `searchParams` or `cookies()` at the top of a page | Await deep inside Suspense; keep the static shell large |
| Caching personal data in a shared cache | Pass the user as an argument or keep it uncached |

### 24.5 Code quality: the toolchain

- **Prettier** for formatting and **ESLint** (with `typescript-eslint`, `eslint-plugin-react-hooks`, `jsx-a11y`, and the Next.js plugin) for correctness.
- **Husky and lint-staged** (or a pre-commit tool) to run checks on changed files before each commit.
- **Conventional commit messages** (`feat:`, `fix:`, `docs:`) if your team wants automated changelogs.
- **CI** that runs type-check, lint, tests and build on every pull request (Chapter 22).
- **Dependabot or Renovate** for dependency updates; read changelogs for majors.
- **Absolute imports** (`@/lib/...`) and consistent file naming (`PostCard.tsx` for components, `kebab-case` or `camelCase` for others; pick one rule).
- **Comments explain why**, types explain what. Keep a short `README` and, for big decisions, an **ADR** (architecture decision record): a one-page note with the context, the options considered, the decision and its consequences.

### 24.6 Working with others

- Make pull requests small and focused, with a clear description and screenshots for UI changes.
- Review code kindly and specifically: ask questions, suggest alternatives, praise good work. Review your own diff first.
- Write down decisions, and keep the docs next to the code.
- Estimate honestly, communicate early when something is late, and ask for help after a reasonable amount of trying.
- Learn the product and the users. The best engineers solve problems, not tickets.

### 24.7 Using AI tools well

AI coding assistants are now part of normal development. They are good at boilerplate, explanations, test ideas, refactoring suggestions and exploring unfamiliar APIs. They are not a replacement for understanding.

- **Understand before you accept.** Read generated code line by line; if you cannot explain it, do not ship it.
- **Verify against official documentation**, especially for fast-moving APIs such as Next.js caching, React 19 features and library setup. Generated code often reflects older versions (for example middleware instead of `proxy.ts`, or implicit caching rules that no longer exist).
- **Check security-sensitive code with extra care:** authentication, authorization, validation, SQL, file handling and cryptography. Test it with hostile input.
- **Write tests** for generated code, and run linters and the type-checker.
- **Never paste secrets, private keys or customer data** into any tool.
- Use them to learn: ask 'why' questions, ask for alternatives and trade-offs, ask for a review of your own solution, and then try to explain the answer in your own words.

The fundamentals in these two books are what let you tell good output from bad.

### 24.8 The ecosystem map (what to learn when you need it)

| Area | Popular choices |
| --- | --- |
| UI components | shadcn/ui, Radix UI, React Aria, Mantine, MUI, Headless UI |
| Styling | Tailwind CSS, CSS Modules, vanilla-extract, Panda CSS |
| Forms | React Hook Form, TanStack Form, Conform (with Server Actions) |
| Tables and virtual lists | TanStack Table, TanStack Virtual |
| Charts | Recharts, visx, Chart.js, ECharts |
| Animation | Motion (Framer Motion), CSS animations, View Transitions |
| Data fetching on the client | TanStack Query, SWR |
| State | Zustand, Jotai, Redux Toolkit |
| Validation and parsing | Zod, Valibot, ArkType |
| ORMs and databases | Prisma, Drizzle, Kysely; PostgreSQL, SQLite, Redis |
| Authentication | Better Auth, Auth.js, Clerk, Auth0, WorkOS, Supabase Auth |
| Payments | Stripe, Razorpay, Lemon Squeezy, Paddle |
| Email | Resend, Postmark, SendGrid, Amazon SES, React Email for templates |
| File storage and images | S3, Cloudflare R2, Cloudinary, UploadThing, Vercel Blob |
| Search | PostgreSQL full-text search, Meilisearch, Typesense, Algolia |
| Background jobs | Inngest, Trigger.dev, BullMQ, QStash |
| Content management | Sanity, Contentful, Payload, Strapi, MDX |
| Analytics and monitoring | Plausible, PostHog, Sentry, OpenTelemetry, Grafana |
| Testing | Vitest, Testing Library, Playwright, MSW |
| Monorepos and tooling | Turborepo, pnpm workspaces, Nx, Biome |

You do not need to learn all of them. Learn the ones your next project needs, one at a time, by building something small.

### 24.9 Keeping up without burning out

The JavaScript ecosystem changes fast, which can feel overwhelming. A sustainable approach:

- **Follow a few reliable sources:** the official blogs and release notes of React, Next.js and TypeScript; the MDN blog; one or two newsletters (for example JavaScript Weekly, React Status, Node Weekly); conference talks.
- **Learn principles, then APIs.** HTTP, the browser, data modelling, security, accessibility and performance outlast any framework version.
- **Upgrade deliberately.** Read the migration guide, update in a branch, run the test suite and a preview deployment.
- **Build to learn.** A weekend project with a new tool teaches more than ten videos.
- **Be skeptical of hype.** Ask what problem a new tool solves for *you* and what it costs to adopt.
- **Revisit the basics regularly.** Re-read your notes on closures, the event loop, promises, HTTP and SQL.

### 24.10 Your roadmap

**Weeks 1 to 4: consolidate**

- Finish and deploy the capstone. Write the README and an architecture note.
- Rebuild one small thing from scratch without looking at the book: a todo app with Next.js, Prisma and Server Actions.
- Review Chapters 3, 4, 7, 10, 15, 16 and 20 once more.

**Months 2 to 3: broaden**

- Build a second, different product: for example a SaaS with subscriptions (Stripe), teams and roles, or a marketplace with search and image uploads.
- Add a skill each month: Playwright end-to-end testing; a second database (Redis) for caching and rate limits; background jobs; a headless CMS; internationalisation.
- Read the source of one library you use.

**Months 4 to 6: deepen and specialise** (pick a direction)

| Direction | Learn next |
| --- | --- |
| **Front-end specialist** | Advanced CSS and animation, design systems, accessibility in depth (WCAG), performance engineering (Core Web Vitals, profiling), complex client state, WebGL or Canvas |
| **Full-stack product engineer** | System design basics, PostgreSQL in depth (indexes, transactions, query plans), queues and events, payments, multi-tenancy, observability, security |
| **Back-end and platform** | Node.js internals, API design (REST, GraphQL, gRPC), Docker, Kubernetes basics, cloud (AWS, GCP), infrastructure as code, CI/CD |
| **Mobile** | React Native with Expo and TypeScript, native modules, offline-first design |
| **AI-enabled products** | Calling model APIs, streaming responses in the UI, retrieval over your own data, evaluation and safety, cost control |
| **Computer science foundations** | Data structures and algorithms, operating systems, networks, databases, distributed systems (valuable for every direction and for interviews) |

### 24.11 Portfolio, applications and interviews

**Portfolio**

- Three or four finished, deployed projects with clear READMEs: the problem, a screenshot or short demo video, the stack, the architecture, how to run and test, trade-offs and what you would improve.
- Show range: a full-stack app with authentication and a database (your capstone), a polished interface, an API or library with tests, and something that shows your own interests.
- A simple personal site with links to the projects and your GitHub. Keep your GitHub tidy: pin your best repositories and write meaningful commit messages.

**Interview preparation**

| Topic | Be able to explain |
| --- | --- |
| JavaScript | Closures, `this`, prototypes, the event loop, promises and `async/await`, modules, immutability |
| TypeScript | Structural typing, unions and narrowing, generics, utility types, `unknown` versus `any`, runtime validation |
| React | Rendering and re-rendering, state versus props, effects and their cleanup, keys, controlled inputs, context, memoization and the Compiler, error boundaries, Suspense |
| Next.js | Server versus Client Components, caching model, streaming, Server Actions, route handlers, authentication layers, deployment |
| Web fundamentals | HTTP, cookies and sessions, CORS, REST, caching headers, accessibility, Core Web Vitals |
| Security | XSS, CSRF, injection, authentication and authorization, secrets, dependency risk |
| Databases | Indexes, relations, transactions, N+1, migrations |
| Practice | Small coding exercises (arrays, strings, hash maps), building a small component under time pressure, reading and reviewing code, explaining a project you built and a mistake you made |

**Habits for the search**

- Apply with a tailored message and a link to a relevant project.
- Learn to talk about trade-offs: SPA or server rendering, SQL or NoSQL, library or custom code. Explain **why**.
- Contribute to open source in small steps: improve documentation, fix a small bug, write a test.
- Keep learning in public: short posts about what you built and learned. Teaching deepens understanding and builds your reputation.
- Look for internships, freelance projects, hackathons and community events. Experience compounds.

### 24.12 Project ideas (for the next stage)

1. **Team task manager** with workspaces, roles, invitations, comments, notifications and real-time updates.
2. **Online store** with products, cart, Stripe or Razorpay checkout, order history, inventory and an admin panel.
3. **Learning platform** with courses, lessons, quizzes, progress tracking and certificates.
4. **Job board** with company accounts, applications, search and email alerts.
5. **Booking system** with availability calendars, time zones, confirmations and reminders.
6. **Personal finance tracker** with imports (CSV), categories, charts and budgets.
7. **Collaborative notes app** with rich text, sharing, version history and real-time editing.
8. **A developer tool** (a design-token generator, an API playground, a status page) published as an open-source project.

For each: write requirements and a data model first, build the thinnest vertical slice end to end (database, server, interface), deploy it early, then add features. Keep tests and documentation alive as you go.

### 24.13 Final words

You began Book 1 learning what a browser is. You now understand the whole stack of a modern web application: the language (JavaScript and TypeScript), the browser and the DOM, the server and HTTP, databases, authentication, React's component model, Next.js's server-first architecture, caching, security, testing and deployment. More important, you have the habits that let you keep learning: reading documentation, reading errors, building small things, measuring before optimising and checking your work.

Tools will change. React and Next.js will keep evolving, and in two years some APIs in this book will have new names. The principles will not: separate concerns, validate at boundaries, check permissions next to the data, keep things simple, make state explicit, measure, test, and ship small changes often.

Build things that help real people. Share what you learn. Be patient with yourself, and be kind to the next developer who reads your code (it might be you).

### Chapter 24 summary

- Choose tools by the problem: Next.js for public, SEO-sensitive and full-stack sites; SPAs for private interactive tools; separate APIs and workers where it makes sense.
- Keep the server and client boundary deliberate, one source of truth for types and state, validation at the edges, and small testable functions; avoid the common React and Next.js anti-patterns.
- Use AI assistants as tutors and pair programmers while verifying everything against official docs and protecting secrets.
- Grow by building projects, specialising by interest, practising fundamentals and presenting your work well.

### Final exercises

1. Write a one-page architecture decision record for your capstone: why Next.js, why Prisma and PostgreSQL, why database sessions, and what you would change at ten times the traffic.
2. Audit your capstone against the anti-pattern table in 24.4 and fix three findings.
3. Create a 90-day learning plan with weekly goals, one new project and one deepening topic.
4. Prepare answers to ten interview questions from the table in 24.11 and explain two of them to a friend without code.
5. Publish a short blog post (on InkBlog!) about the most important thing you learned from these two books.
6. Pick a project idea from 24.12, write its requirements and data model, and build the first vertical slice this week.

## Appendices

### Appendix A: TypeScript Cheat Sheet

**Basic types and annotations**

```ts
let a: string = 'x';  let b: number = 1;  let c: boolean = true;
let d: string[] = [];  let e: Array<number> = [];  let f: [string, number] = ['a', 1];
let g: unknown;  let h: any;  let i: null = null;  let j: undefined;
function fn(x: number, y?: string, z = 10, ...rest: number[]): void {}
const arrow = (x: number): number => x * 2;
async function load(): Promise<string> { return 'ok'; }
```

**Object types**

```ts
type User = { readonly id: number; name: string; email?: string };
interface Admin extends User { permissions: string[] }
type WithTimestamps = User & { createdAt: Date };
type Dict = Record<string, number>;
type Role = 'user' | 'admin';                         // literal union
const ROLES = ['user', 'admin'] as const;
type RoleFromList = (typeof ROLES)[number];
```

**Unions, narrowing and discriminated unions**

```ts
type Shape = { kind: 'circle'; r: number } | { kind: 'square'; side: number };
function area(s: Shape) {
  switch (s.kind) {
    case 'circle': return Math.PI * s.r ** 2;
    case 'square': return s.side ** 2;
    default: { const _exhaustive: never = s; return _exhaustive; }
  }
}
typeof x === 'string';  x instanceof Date;  'key' in obj;  Array.isArray(x);
function isUser(v: unknown): v is User { /* checks */ return true; }
```

**Generics**

```ts
function first<T>(items: readonly T[]): T | undefined { return items[0]; }
function pick<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }
type ApiResponse<T> = { data: T; error?: string };
class Box<T> { constructor(public value: T) {} }
```

**Utility types**

| Utility | Meaning |
| --- | --- |
| `Partial<T>`, `Required<T>`, `Readonly<T>` | All optional, all required, all readonly |
| `Pick<T, K>`, `Omit<T, K>` | Keep or remove keys |
| `Record<K, V>` | Object with keys K and values V |
| `Exclude<U, X>`, `Extract<U, X>`, `NonNullable<T>` | Filter union members |
| `ReturnType<F>`, `Parameters<F>`, `Awaited<T>` | Function and promise helpers |
| `keyof T`, `T[K]`, `typeof value` | Keys, indexed access, type of a value |

**Other useful features**

```ts
const config = { port: 3000 } satisfies Record<string, number>;
import type { User } from './types';
export type { User };
const el = document.querySelector<HTMLInputElement>('#name');
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };   // mapped type
type ElementOf<T> = T extends (infer U)[] ? U : never;                                  // conditional type
```

**Zod**

```ts
const Schema = z.object({ name: z.string().min(1), age: z.coerce.number().int().optional() });
type Input = z.infer<typeof Schema>;
const result = Schema.safeParse(data);   // { success, data } or { success: false, error }
```

**tsconfig essentials:** `strict`, `noUncheckedIndexedAccess`, `noImplicitReturns`, `skipLibCheck`, `isolatedModules`, `moduleResolution` (`NodeNext` for Node, `Bundler` for Vite and Next.js), `jsx`, `paths`.

### Appendix B: React Hooks and Patterns Cheat Sheet

| Hook or API | Use it for |
| --- | --- |
| `useState(initial)` | Local state. Use the updater form `set(c => c + 1)` when the new value depends on the old |
| `useReducer(reducer, init)` | Complex state with many transitions; typed action unions |
| `useEffect(fn, deps)` | Synchronise with external systems; return a cleanup function |
| `useEffectEvent(fn)` | Read the latest props and state inside an effect without re-running it |
| `useRef(initial)` | DOM access, timers, mutable values that do not trigger renders |
| `useContext(Ctx)` or `use(Ctx)` | Read context (React 19 allows `<Ctx value=...>` as provider) |
| `useMemo`, `useCallback`, `memo` | Cache values, functions and components when measured. The React Compiler automates most of this |
| `useId` | Stable ids for accessibility attributes |
| `useSyncExternalStore` | Subscribe to external stores correctly |
| `useTransition`, `useDeferredValue` | Keep the UI responsive during heavy updates |
| `use(promise)` | Read a promise during render (with Suspense) |
| `useActionState(action, init)` | State, form action and pending flag for form submissions |
| `useFormStatus()` | Pending state of the parent form (inside a child component) |
| `useOptimistic(state, reducer)` | Show the expected result while a request is running |
| `Suspense`, `lazy` | Loading boundaries and code splitting |
| `ErrorBoundary` (react-error-boundary) | Contain render errors |
| `createPortal` | Render modals and tooltips outside their parent |
| `Activity` | Hide UI while preserving state |
| `ViewTransition` | Animate between UI states |

**Rules of hooks:** call them only at the top level of components and custom hooks; never conditionally, in loops or after an early return. **Rules of components:** keep rendering pure; never mutate props or state; use stable keys; put side effects in events or effects.

**Common patterns**

```tsx
// Controlled input
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />

// Immutable updates
setItems((items) => [...items, item]);
setItems((items) => items.map((i) => (i.id === id ? { ...i, done: true } : i)));
setItems((items) => items.filter((i) => i.id !== id));

// Custom hook
function useDebounce<T>(value: T, delay = 300) { /* useState + useEffect */ }

// Typing props
type Props = { title: string; children: React.ReactNode; onSave: (id: number) => void };
type ButtonProps = React.ComponentProps<'button'> & { variant?: 'primary' | 'danger' };
```

### Appendix C: Next.js (App Router) Cheat Sheet

**File conventions**

| File | Purpose |
| --- | --- |
| `layout.tsx` | Shared UI that persists across navigation (root layout has `<html>` and `<body>`) |
| `page.tsx` | The UI of a route; makes it public |
| `template.tsx` | Like layout but re-created on every navigation |
| `loading.tsx` | Instant loading UI (Suspense fallback) |
| `error.tsx` | Error boundary for the segment (Client Component) |
| `global-error.tsx` | Error boundary for the root layout |
| `not-found.tsx` | UI for `notFound()` and unknown routes |
| `route.ts` | HTTP endpoint (`GET`, `POST`, ...) |
| `proxy.ts` | Code that runs before requests complete (formerly `middleware.ts`) |
| `instrumentation.ts` | Startup hook for monitoring |
| `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, `manifest.ts`, `icon.png` | Metadata files |
| `default.tsx`, `@slot`, `(.)route` | Parallel and intercepting routes |

**Route segments:** `app/blog/[slug]` (dynamic), `[...segments]` (catch-all), `[[...segments]]` (optional catch-all), `(group)` (organisation without URL), `_folder` (private).

**Server and client**

```tsx
// Server Component (default): async, direct data access, no hooks or handlers
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
}
'use client';           // top of a file: Client Component (state, effects, handlers, browser APIs)
'use server';           // top of a file or function: Server Action
import 'server-only';   // fail the build if imported into client code
```

**Navigation:** `Link` from `next/link`; hooks from `next/navigation`: `useRouter`, `usePathname`, `useSearchParams`, `useParams`; functions: `redirect()`, `permanentRedirect()`, `notFound()`.

**Request data (async in Next.js 16):** `await params`, `await searchParams`, `await cookies()`, `await headers()` (from `next/headers`), `connection()` (from `next/server`).

**Caching with Cache Components**

```tsx
import { cacheLife, cacheTag, updateTag, revalidateTag, revalidatePath, refresh } from 'next/cache';

async function getData() {
  'use cache';                       // cache this function or component
  cacheLife('hours');                // seconds | minutes | hours | days | weeks | max, or { stale, revalidate, expire }
  cacheTag('posts');                 // name the data for on-demand invalidation
}

// in a Server Action
updateTag('posts');                  // expire and refresh immediately (read your writes)
revalidateTag('posts', 'max');       // stale-while-revalidate in the background
refresh();                           // refresh uncached data on the page
```

In `next.config.ts`: `cacheComponents: true`, `partialPrefetching: true`, `reactCompiler: true`. Dynamic work (uncached data, `cookies()`, `searchParams`) belongs inside `<Suspense>`; shared data belongs in `'use cache'` functions; never cache per-user data in a shared cache.

**Metadata and assets**

```tsx
export const metadata: Metadata = { title: 'Page', description: '...' };
export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> { /* ... */ }
import Image from 'next/image';      // alt, width and height or fill, sizes, remotePatterns in config
import { Inter } from 'next/font/google';
import Script from 'next/script';
import dynamic from 'next/dynamic';
```

**Mutations**

```tsx
// Server Action: authenticate, authorise, validate, mutate, invalidate, redirect
'use server';
export async function createPost(prev: State, formData: FormData): Promise<State> { /* ... */ }

// Client form
const [state, action, pending] = useActionState(createPost, { status: 'idle' });
<form action={action}>...</form>
```

**Commands**

```bash
npx create-next-app@latest     npm run dev     npm run build     npm run start
npx @next/codemod@canary upgrade latest
npx prisma migrate dev | migrate deploy | generate | studio | db seed
```

### Appendix D: Glossary

| Term | Meaning |
| --- | --- |
| **Action (React)** | A function passed to a form or transition; tracked for pending state and errors |
| **App Router** | The Next.js routing system based on the `app/` folder, layouts and Server Components |
| **Cache Components** | The Next.js 16 caching model: dynamic by default, opt-in `'use cache'`, partial prerendering |
| **Client Component** | A component marked `'use client'` that runs in the browser (and is prerendered on the server) |
| **Closure** | A function that remembers the variables of the scope where it was created |
| **Controlled input** | A form field whose value is stored in React state |
| **CSR / SSR / SSG / ISR** | Client-side rendering, server-side rendering, static generation, incremental static regeneration |
| **DAL** | Data access layer: the server-only module where queries, caching and authorization live |
| **DTO** | Data transfer object: the safe shape of data sent to the UI |
| **Discriminated union** | A union of object types distinguished by a literal field, such as `status` |
| **Effect** | Code that synchronises a component with something outside React (`useEffect`) |
| **Generic** | A type with a parameter, such as `Array<T>` or `Promise<T>` |
| **Hydration** | React attaching interactivity to server-generated HTML in the browser |
| **JSX / TSX** | HTML-like syntax in JavaScript or TypeScript files |
| **Middleware / Proxy** | Code that runs before a request is completed; named `proxy.ts` since Next.js 16 |
| **Narrowing** | Refining a union type with checks such as `typeof` or `in` |
| **ORM** | Object-relational mapper, such as Prisma |
| **PPR** | Partial Prerendering: a static shell with dynamic parts streamed in |
| **Props** | Inputs passed to a component |
| **RSC** | React Server Components |
| **Server Action** | An async server function callable from forms and event handlers (`'use server'`) |
| **State** | Data a component remembers between renders |
| **Static shell** | The prerendered part of a route served instantly from a CDN |
| **Streaming** | Sending a page in pieces, so fast parts appear before slow ones |
| **Suspense** | A React boundary that shows a fallback while children wait for code or data |
| **Type guard** | A function or check that narrows a type |
| **Zod** | A library for runtime validation that infers TypeScript types |

### Appendix E: Recommended Resources

- **typescriptlang.org** (handbook and playground), **Total TypeScript** tutorials, and the `type-challenges` repository for practice.
- **react.dev**: the official React documentation, with interactive examples and the 'You Might Not Need an Effect' guide.
- **nextjs.org/docs**: the official Next.js documentation, including the Caching, Authentication and Upgrading guides. Check its version selector, and the blog for release and security announcements.
- **tanstack.com/query**, **zod.dev**, **prisma.io/docs**, **tailwindcss.com/docs**, **playwright.dev**, **testing-library.com**: reference documentation for the main libraries used in this book.
- **web.dev** and **developer.mozilla.org**: web platform, performance and accessibility.
- **owasp.org**: security guidance, including the Top 10 and cheat sheets.
- **roadmap.sh**: visual learning paths for frontend, backend and DevOps.

*End of Book 2. Congratulations on finishing both books.*
