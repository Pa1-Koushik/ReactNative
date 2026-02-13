# 📱 React Native & Expo: Comprehensive Reference Guide

This repository serves as a master reference for modern React Native development, covering Expo Router, component architecture, state management, and the underlying JavaScript engine. 🚀

---

## 1. 🚀 Getting Started

**Initialize new project in current directory:**
```bash
npx create-expo-app@latest --template blank ./
Note: ./ = current directory

2. 🗺️ Routing vs. Navigation
Routing	Navigation
Decides which screen renders (/profile)	Moving between screens
File paths (Expo Router)	Transitions, history
Expo Router: File-based routing layer built on React Navigation

text
✅ No manual navigator config
✅ Full React Navigation hooks access
File Naming: lowercase (routes), PascalCase (components)

Safe Event Handlers:

javascript
❌ Wrong: onPress={router.push('/profile')}  // Executes immediately
✅ Correct: onPress={() => router.push('/profile')}  // Callback
3. 🏗️ Component Architecture
Components = Self-contained, reusable UI building blocks

Type	Characteristics
Core	Built-in: View, Text, Image, Pressable
Custom	Your code + core components + logic
Functional vs Class Components
Feature	Functional (Recommended)	Class (Legacy)
State	useState()	this.state
Lifecycle	useEffect()	componentDidMount()
Code Length	Short & Concise	Longer Boilerplate
4. 🔄 Lifecycle Behavior
Three phases: Mount → Update → Unmount

Phase	Class Method	Functional Hook
Mount	componentDidMount	useEffect(() => {}, [])
Update	componentDidUpdate	useEffect(() => {}, [deps])
Unmount	componentWillUnmount	return () => cleanup
5. 💾 State & Props
Props	State
Parent → Child	Component owns
✅ Read-only	✅ Mutable
Fixed	Changes → Re-render
Prev State Pattern:

javascript
setCounter(prev => prev + 1);  // React provides 'prev' automatically
6. ⚙️ Compiler vs. Runtime
Phase	Tool	Responsibility	Errors Caught
Compile Time	Babel	JSX → Plain JS	Syntax, TypeScript
Runtime	JS Engine	Execute code	Undefined, Network
7. 🎨 Styling & UI
StyleSheet (Recommended)
javascript
StyleSheet.create({
  container: { flex: 1 }
});
SafeAreaProvider
Prevents UI hiding behind:

❌ Notches (iPhone)

❌ Status bars

❌ Home indicators

❌ Rounded corners

8. 📂 Project Structure
File/Folder	Purpose
app/	Expo Router (file-based routing)
assets/	Images, fonts
package.json	Dependencies & scripts
app.json	Expo config
node_modules/	Libraries (NEVER commit)
9. 📦 Modules (Import/Export)
Type	Export	Import
Named	export const MyStyles	import { MyStyles }
Default	export default MyStyles	import MyStyles
10. ⌨️ Developer Shortcuts (VS Code)
Action	Shortcut
Multi-cursor	Ctrl + D
Select all	Ctrl + Shift + L
Rename everywhere	F2
Quick fix	Ctrl + .
Suggestions	Ctrl + Space
