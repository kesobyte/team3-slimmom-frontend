import React, { useState } from 'react';
import svg from '../../images/vector.svg';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const BurgerMenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      <button onClick={toggleMenu}>
        <svg width={22} height={22}>
          <use
            href={`${svg}${isMenuOpen ? '#close-icon' : '#burger-icon'}`}
          ></use>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute w-full">
          <BurgerMenu onClose={toggleMenu} />
        </div>
      )}
    </div>
  );
};
