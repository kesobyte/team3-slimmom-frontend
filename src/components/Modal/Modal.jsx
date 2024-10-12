import ProhibitedProducts from 'components/ProhibitedProducts/ProhibitedProducts'
import React from 'react'


const Modal = () => {
  return (
    <div>
        <span>
            <button>
              {/* close */}
            </button>
        </span>
        <div>
            <h2>Your recommeded daily calorie intake is</h2>
            <h1>Kcal</h1>
        </div>
        <div>
            <h3>Foods you should not eat</h3>
            <ProhibitedProducts/>
        </div>
        <button></button>
    </div>
  )
}

export default Modal