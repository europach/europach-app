import React from 'react';
import { Link } from 'react-router-dom';
import TimeLine from '../components/TimeLine';

const GermanyPrisionContext = (props) => {
  const Events = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
    },
    {
      name: 'React.js',
      id: 'reactjs',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    }
  ]

  return (
    <div>
      <Link to='/'>Back Home</Link>
      <h1>
        GermanyPrisionContext
      </h1>

      <TimeLine Events={Events} />
    </div>
  )
}

export default GermanyPrisionContext;