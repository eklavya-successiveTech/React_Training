"use client"
import { useReducer } from "react";

const initialState = {
  react: 0,
  vue: 0,
  angular: 0,
};

function reducer( state, action){

  switch(action.type){
    case 'VOTE':
      const option = action.payload;
      return{
        ...state,
        [option]: state[option] +1,
      };
      default:
        throw new Error("Unknown action type");
  }
}

export default function VotingApp(){
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleVote = (option) =>{
    dispatch({type:'VOTE', payload: option});
  }

  return(
    <div>
      <h1>Voting App</h1>
      <h3>React: {state.react}</h3>
      <h3>Angular: {state.angular}</h3>
      <h3>Vue: {state.vue}</h3>
      <div>
        <button onClick={()=> handleVote('react')}>Vote React</button>
        <button onClick={()=> handleVote('angular')}>Vote Angular</button>
        <button onClick={()=> handleVote('vue')}>Vote Vue</button>
      </div>
    </div>
  )
}