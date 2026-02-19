# 🚀 React Native Core Concepts

---

# 📦 Creating an Expo Project

```bash
npx create-expo-app@latest --template blank ./
```

- Creates a new Expo project
- `./` → creates the project in the current directory

---

# 🧭 Routing vs Navigation

## Routing
Routing decides **which screen to render** based on a path.

Example:
```
/profile
```

## Navigation
Navigation moves between screens.

Example:
```js
navigation.navigate("profile")
```

---

# 📂 Expo Router

Expo Router is a **file-based routing layer built on top of React Navigation**.

It:

- Removes manual navigator setup
- Uses file-based routing
- Still gives access to React Navigation hooks:
  - `useNavigation`
  - `useRoute`
  - `useFocusEffect`

### Difference

| Routing | Navigation |
|----------|------------|
| Decides what screen to render | Moves between screens |
| Based on file paths | Manages transitions & history |

---

# 📱 SafeAreaProvider

Prevents UI from being hidden behind:

- Notch
- Status bar
- Home indicator
- Rounded corners

---

# 🖱 Pressable vs Button

`onPress` expects a **callback function**.

❌ Wrong:
```js
onPress={router.push('/profile')}
```

✅ Correct:
```js
onPress={() => router.push('/profile')}
```

## Pressable

Pros:

- Full UI control
- Supports:
  - `onPressIn`
  - `onPressOut`
  - `onLongPress`
- Custom styling when pressed

---

# 🔧 Babel

Babel is a **JavaScript compiler (transpiler)**.

It converts:
- Modern JavaScript
- JSX

Into:
- Plain JavaScript

---

# ⏳ Compile Time vs Runtime

## Compile Time
- Code transformation phase
- JSX → JS
- Errors caught:
  - Syntax errors
  - TypeScript errors

## Runtime
- When app is running
- Errors caught:
  - Undefined values
  - Network errors
  - Logic errors

### Flow

```
Write JSX
   ↓
Babel transforms JSX → JS (compile time)
   ↓
JS engine executes code (runtime)
   ↓
User presses button
   ↓
Callback executes
```

---

# 🧩 JSX

JSX (JavaScript XML) allows writing HTML-like syntax inside JavaScript.

It is transformed by Babel before execution.

---

# 🧱 Components in React Native

A component is a **reusable building block** of UI.

## Built-in Components

- View
- Text
- Image
- Pressable
- ScrollView
- TextInput

## Custom Components

User-defined components created using built-in components + custom logic.

---

# 🔄 Props vs State

## Props

- Passed from parent to child
- Read-only
- Immutable
- Follow one-way data flow

## State

- Owned by component
- Can change
- When state changes → component re-renders
- Managed using:
  - `useState`
  - `useReducer`

---

# ⚛ Functional vs Class Components

| Feature        | Functional          | Class             |
|---------------|--------------------|------------------|
| Syntax        | Function           | Class            |
| State         | useState           | this.state       |
| Lifecycle     | useEffect          | Lifecycle methods |
| this keyword  | ❌ No              | ✅ Yes            |
| Modern usage  | ✅ Recommended     | ❌ Legacy         |

---

# 🔁 Lifecycle

Phases:

```
Mount → Update → Unmount
```

## Class Components

- componentDidMount
- componentDidUpdate
- componentWillUnmount

## Functional Components

Handled using:

- `useEffect`
- `useLayoutEffect`

Hooks replace lifecycle methods.

---

# 🧠 useEffect

Runs after render.

- If no dependency → runs after every render
- If empty array `[]` → runs once on mount
- If `[deps]` → runs when dependencies change

---

# 🧵 useState Internal Working

- State stored in React Fiber
- Not stored inside function
- React tracks state by hook order
- setState schedules re-render

---

# 🎨 Styling in React Native

Uses JavaScript objects.

## StyleSheet (Recommended)

```js
StyleSheet.create({})
```

Benefits:

- Better performance
- Cleaner code
- Reusable
- Style validation

## Inline Styles

❌ Not reusable  
❌ Recreated every render  

✅ Use for dynamic or conditional styles

---

# 📦 Project Structure (Expo)

## package.json
- Dependencies
- Scripts
- Entry point

## package-lock.json
- Exact dependency versions

## node_modules/
- Installed packages
- ❌ Do not edit
- ❌ Do not commit

## app/
- File-based routing (Expo Router)

## assets/
- Images
- Fonts
- Icons

## styles/
- Reusable styles

## app.json
Controls:
- App name
- Icon
- Splash screen
- Permissions

## babel.config.js
Configures Babel

## metro.config.js
Configures Metro bundler

## .gitignore
Files Git should ignore

---

# 🌳 DOM (Document Object Model)

The DOM is a **tree-like structure created by the browser from HTML**.

JavaScript uses the DOM API to manipulate it.

## Problems with Direct DOM

- Slow updates
- Reflows
- Repaints

---

# ⚛ Virtual DOM

Virtual DOM is an **in-memory representation of the real DOM**.

## How It Works

1. React creates initial Virtual DOM
2. State/props change
3. New Virtual DOM created
4. React compares old vs new
5. Only changed nodes update real DOM

---

# 🔄 Reconciliation

Process of comparing:

Old Virtual DOM vs New Virtual DOM

React performs:

- Diffing
- Minimal updates
- Avoids full re-render

---

# 📦 Batch Updates

React groups multiple state updates into one render cycle for performance.

---

