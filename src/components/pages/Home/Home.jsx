import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from './../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSIdeNav from './../Shared/RightSideNav/RightSIdeNav';
import BreakinNews from './BreakinNews';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <BreakinNews></BreakinNews>
        <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>

           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
             <div className="border">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className=" lg:col-span-2 border">
                <h2 className="text-3xl">News coming soon..!</h2>
            </div>
            <div className="border">
                <RightSIdeNav></RightSIdeNav>
            </div>

           </div>
        
      </div>
    );
};

export default Home;