```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: The effect runs only once on mount.
    // If you need to perform an effect that depends on props or state,
    // include them in the dependency array. 
    console.log('Effect runs only once on mount');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```