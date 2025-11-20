import React from 'react';
import Navber from '../Components/Navber';
import Banner from '../Components/Banner';
import ParfactHome from '../Components/ParfactHome';
import Feacured from '../Components/Feacured';
import Descover from '../Components/Descover';
import TakeALoot from '../Components/TakeALoot';
import FindsPopertis from '../Components/FindsPopertis';
import WithUs from '../Components/WithUs';
import MeetOurTeam from '../Components/MeetOurTeam';
import Footer from '../Components/Footer';


const Layout = () => {
    return (
        <div>
            
            <Navber></Navber>
            <Banner></Banner>
            <ParfactHome></ParfactHome>
            <Feacured></Feacured>
            <Descover></Descover>
            <TakeALoot></TakeALoot>
            <FindsPopertis></FindsPopertis>
            <MeetOurTeam></MeetOurTeam>
            <WithUs></WithUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;