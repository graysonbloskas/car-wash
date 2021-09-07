import React from 'react';
import CardItem from './CardItem';
import './Card.css';
import WheelClean from '../assets/images/wheel-clean.jpg';
import UnderCar from '../assets/images/car-undercarriage.jpg';
import CarWax from '../assets/images/car-wax.jpg';
import WheelPolish from '../assets/images/polish-wheel.jpg';

function Card() {
    return (
        <div className='cards'>
          <h1>Check out Our Exterior Packages</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src={WheelClean}
                  text='Rejuvenating T3 Conditioner and Wheel Cleaning'
                  label='Basic Package'
                  path='/contact'
                />
                <CardItem
                  src={UnderCar}
                  text='Basic Package + Repel Shield, Tire Shine, Underbody Wash'
                  label='Basic Plus Package'
                  path='/contact'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src={CarWax}
                  text='Basic Plus Package + Hot-Shine Wax'
                  label='Hot Shine Package'
                  path='/contact'
                />
                <CardItem
                  src={WheelPolish}
                  text='Hot Shine Package + Wheel Polish'
                  label='Platinum Package'
                  path='/contact'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Card;