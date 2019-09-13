import React from 'react';
import {Link} from 'react-router-dom'
const StartPage = () => {
  return (
    <div>
        <h1>Start Page</h1>
        <Link to="./avsnitt">Avsnitt</Link>
    </div>
  );
}

export default StartPage;
