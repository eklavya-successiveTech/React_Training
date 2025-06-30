const Child = ({ count, onIncrement, onReset }) => {
  console.log('Child component is rendering...');

  return (
    <div style={{ border: '2px solid #61DAFB', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
      <h3>I am the Child Component</h3>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>The count is: {count}</p>
     
      <button onClick={onIncrement}>Increment Count</button>
      
      <button onClick={onReset} style={{ marginLeft: '10px' }}>Reset Count</button>
    </div>
  );
};
export default Child;