"use client"
import React, { useReducer } from 'react';

const initialState = {
  react: 0,
  vue: 0,
  angular: 0,
};

function voteReducer(state, action) {

  switch (action.type) {
    case 'VOTE_REACT':
      return { ...state, react: state.react + 1 };

    case 'VOTE_VUE':
      return { ...state, vue: state.vue + 1 };

    case 'VOTE_ANGULAR':
      return { ...state, angular: state.angular + 1 };
    
    case 'RESET':
      return initialState;

    default:
      
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function VotingApp() {
  
  const [state, dispatch] = useReducer(voteReducer, initialState);

  return (
    <div style={{ border: '2px solid skyblue', padding: '20px', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h2>Framework Voting App</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Current Results:</h3>
        <p style={{ fontSize: '1.2em' }}>React: {state.react}</p>
        <p style={{ fontSize: '1.2em' }}>Vue: {state.vue}</p>
        <p style={{ fontSize: '1.2em' }}>Angular: {state.angular}</p>
      </div>

      <div>
        <h3>Vote Here:</h3>
        <button onClick={() => dispatch({ type: 'VOTE_REACT' })}>Vote for React</button>
        <button onClick={() => dispatch({ type: 'VOTE_VUE' })} style={{ margin: '0 10px' }}>Vote for Vue</button>
        <button onClick={() => dispatch({ type: 'VOTE_ANGULAR' })}>Vote for Angular</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch({ type: 'RESET' })} style={{ backgroundColor: '#ff6b6b' }}>Reset All Votes</button>
      </div>
    </div>
  );
}

export default VotingApp;