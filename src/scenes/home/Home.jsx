import React from 'react';
import MainCarousal from '../global/MainCarousal';
import ShoppingList from './ShoppingList';

const Home = () => {
     return (
          <div>
               <MainCarousal/>
               <ShoppingList/>
               {/* <Footer/> */}
          </div>
     );
};

export default Home;