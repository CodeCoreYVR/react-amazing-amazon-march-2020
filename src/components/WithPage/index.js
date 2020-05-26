import React from 'react';
import './index.css';

function WithPage(props) {
  console.log(props);
  return(
    <main className="page">
      {props.children}
    </main>
  )
}

export default WithPage