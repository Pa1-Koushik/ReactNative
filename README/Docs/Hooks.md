# ⚛️ React Hooks & Core Concepts

---

## 🧠 What Are Hooks?

Hooks are special React functions that allow functional components to:

- Manage state
- Handle side effects
- Access lifecycle features
- Avoid class components

### Why Hooks Are Powerful

- Removed the need for classes
- Made components simpler
- Made logic reusable
- Improved performance control
- Reduced boilerplate

---

## 🧠 useState

### Definition
State is any piece of information that changes over time across renders.

We use `useState` to manage and manipulate state in functional components.

When state changes:
- Component re-runs
- Virtual DOM updates
- UI updates accordingly

---

## 🧠 useEffect

`useEffect` runs **after the render phase** and is used for side effects.

### Runs On Every Render

```js
useEffect(() => {
  console.log("Runs on every render");
});
```

### Runs Only Once (On Mount)

```js
useEffect(() => {
  console.log("Runs only once");
}, []);
```

### Runs When Specific Value Changes

```js
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

---

## 🧠 useRef

`useRef` is a hook that stores a mutable value that does not cause re-render when changed.

### Use Cases

- Counting clicks without re-render
- Accessing DOM / Native element
- Auto focus input
- Storing timer ID
- Storing previous value

### When To Use

✔ You need to store a value  
✔ That value should NOT trigger re-render  
✔ You want to access DOM / native element  
✔ You want to persist value between renders  

### useState vs useRef

| useState | useRef |
|----------|--------|
| Triggers re-render | Does NOT trigger re-render |
| Used for UI state | Used for mutable storage |
| React tracks changes | React ignores changes |
| Value change → component runs again | Value change → component does NOT run again |

---

## 🧠 useMemo

`useMemo` is used to cache a computed value to avoid recalculating it on every render.

### Key Points

- Runs during render
- Runs on first render
- Runs again only when dependency changes
- Prevents heavy recalculation

### Why Needed?

In React:
Component re-renders → everything runs again.

If calculation is heavy (e.g., factorial of 100) → performance issue.

`useMemo` caches result and reuses it if dependencies don't change.

### Cache Definition

Cache is a temporary storage used to store frequently accessed or expensive-to-compute data to improve performance.

---

## 🧠 useMemo vs useCallback

| useMemo | useCallback |
|----------|-------------|
| Memoizes (caches) a **value** | Memoizes (caches) a **function** |
| Returns computed result | Returns a function |
| Used for expensive calculations | Used to prevent function re-creation |

### When To Use useMemo

- Heavy calculation
- Filtering large list
- Derived data

### When To Use useCallback

- Passing function to memoized child
- Function used in dependency array
- Prevent unnecessary re-renders

Both are performance optimizers.

---

## 🧠 useContext

`useContext` solves the problem of **Prop Drilling**.

### What is Prop Drilling?

Manually passing props:

Component A → Component B → Component C

Even if intermediate components don’t use the prop.

### Solution

- Use `.Provider` in parent component
- Use `useContext()` in any child component

### Parent Component

```js
<MyContext.Provider value={data}>
  <Child />
</MyContext.Provider>
```

### Child Component

```js
const value = useContext(MyContext);
```

### Used For

- Theme
- Auth user
- Language
- Global settings

---

# ✅ Final Summary

React Hooks:

- `useState` → Manage UI state
- `useEffect` → Handle side effects
- `useRef` → Store mutable values without re-render
- `useMemo` → Cache computed values
- `useCallback` → Cache functions
- `useContext` → Avoid prop drilling

---

🚀 These hooks make functional components powerful, clean, and efficient.