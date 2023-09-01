## Quick Start

Run the following commands:

```
npm install
npm start
```

This will install dependencies, then start the app and mock API.

## Starter Project Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I made the following enhancements:

1. Added a mock API using [json-server](https://github.com/typicode/json-server). Configured `npm start` to run the app and mock API at the same time using [npm-run-all](https://www.npmjs.com/package/npm-run-all). See [Building Applications with React and Flux](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) for details on how to set this up from scratch.
1. Installed [react-router-dom](https://www.npmjs.com/package/react-router-dom), [history](https://www.npmjs.com/package/history) (React Router peer dependency), and [cross-env](https://www.npmjs.com/search?q=cross-env) for declaring environment variables.
1. Added some React components to help us get started: Header, Footer, Spinner
1. Added styles to App.css
1. Added `/public/images`.
1. Added data fetching functions in `/src/services`.
1. Added db.json to root as json-server's mock database
1. Overwrote App.css with custom styles
1. Simplified index.js (removed service worker)
1. Deleted from src: index.css, logo.svg, serviceWorker.js, App.test.js
1. Deleted from public: logo files, manifest.json, robots.txt
1. Customized App.js and renamed to App.jsx


# Learnings
## Synthetic Events:
- Similar to browser's native event system.
- Assures events operate consistently cross-browser.
- Improves performance.

Rerenders happen when:
    - State changes.
    - prop changes.
    - Parent renders.
    - Context changes.


## Handling Immutable Data in JS
We are trying to chaneg the role to "admin":
1. Object assign
- create an empty object then add theproperties
    ```Object.assign({}, state, {role: "admin"});```
        
2. Object spread 
- Whatever you place on the right is shallow copied. Values on the right override values on the left.
    ```const newState = { ...state, role: "admin" };```
- Can be used to copy and array as well. It requires less code than (1.)
    ```const newUsers = [...state.users]```

3. 
    ```.map```


By Shallow we mean nested objects are not coppied eg address in the bellow:
```
const user = {
    name: 'Cory',
    address: {
        state: 'California'
    }
}
```
```
// Does not clone address object!
const userCopy = { ...user };
```
```
// Clones address object as well.
const usercopy = { ...user, address: {...user.address}}; 
```
### Only Clone What Changes
Deep cloning can be done using [clone-deep]() or [lodash.merge]() which need to be avoided because:
1. Deep cloning is expensive.(Slows the app)
2. Deep cloning is wasteful.(You only need to clone changing objects)
3. Deep cloning causes unnecessary renders.

## Web Storage
1. Cookie
2. [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
3. Session Storrage
4. Indexed DB(more complex)
5. Cache Storage(useful offline)


## Nullish coalescing operator (??)
- If the left-hand side is null or undefined, use the value on the right.
```
    return JSON.parse(localStorage.getItem("cart")) ?? [];
```