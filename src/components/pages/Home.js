import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <ul>
      <li><Link to='/germany-prision-context'>Germany: Prison Context</Link></li>
      <li><Link to='/uk-protective-masks-for-police'>Uk: Protective Masks for Police</Link></li>
    </ul>
  )
}

export default Home;