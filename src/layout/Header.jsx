import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <nav>
          <Link to="/">Главная</Link>
          <Link to="/pokeball">Покебол</Link>
        </nav>
  )
}

export default Header