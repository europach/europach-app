import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <ul>
      <li><Link to='/germany'>Germany: Prison Context</Link></li>
      <li><Link to='/uk'>Uk: Protective Masks for Police</Link></li>
    </ul>
  )
}

export default Home;