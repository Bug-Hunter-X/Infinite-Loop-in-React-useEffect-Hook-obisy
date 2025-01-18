# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrectly using the `useEffect` hook.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

The bug arises from updating the state variable (`count`) within the `useEffect` hook's callback without a proper dependency array. This creates an infinite loop because each state change triggers a re-render, which in turn re-executes the `useEffect` hook, leading to another state update. 

The solution involves ensuring that the dependency array (`[]`) correctly reflects the variables used within the `useEffect` function.  If no external variables are needed, an empty array prevents unnecessary re-renders.  Alternatively, dependencies can be listed if the effect needs to run only when specific values change.