import React from 'react'
import ReactDom from 'react-dom'
import useCounter from '../hooks/useCounter';

const Main = () => {
  const { count, add } = useCounter(5);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => { add(3); }}>++</button>
    </div>
  );
};


ReactDom.render(<Main />, document.getElementById('root'));
