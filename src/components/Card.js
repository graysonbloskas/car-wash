import React from 'react';
import CardItem from './CardItem';
import { Element } from 'react-scroll';
import './Card.css';
import WheelClean from '../assets/images/wheel-clean.jpg';
import UnderCar from '../assets/images/car-undercarriage.jpg';
import CarWax from '../assets/images/car-wax.jpg';
import WheelPolish from '../assets/images/polish-wheel.jpg';
import Dusting from '../assets/images/auto-detailing-of-car-interior-on-carwash-service-PVRFD2K.jpg'
import Dashboard from '../assets/images/detailing-cleaning-salon-with-polishing-spray-SNMF3J5.jpg'
import Shampoo from '../assets/images/professional-dry-cleaning-of-car-seats-YP8VS7U.jpg'

function Card() {
  return (
    <Element id='services'>
      <div className='cards bg-white w-full pt-10'>
        <h1 className="home-h1">Check out Our <span className="font-bold text-2xl underline span" >Exterior</span> <br></br>  Packages</h1>
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

      
      <div className='cards elite bg-white w-full'>
        <h1 className="home-h1">Check out Our <span className="font-bold text-2xl underline span" >ELITE DETAIL</span> <br></br>Packages</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={Dusting}
                text='Platinum Package + Interior Detail, Dusting, Vaccuming, and Conditioning'
                label='Interior Package'
                path='/contact'
              />
              <CardItem
                src={Dashboard}
                text='Interior Detail Package + Dashboard Conditioning'
                label='Interior Plus Package'
                path='/contact'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={Shampoo}
                text='Interior Plus Package + Floor Shampoo and Seat Shampoo'
                label='Elite Interior Package'
                path='/contact'
              />
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Card;
