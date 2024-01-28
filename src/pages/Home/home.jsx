import React from 'react'
import Header from '../../components/Navbar/header';
import LeftBar from '../../components/LeftBar/leftBar';
import RightBar from '../../components/RightBar/rightBar';
import Feed from '../../components/Feed/feed';
import "./home.scss"
function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='appBody'>
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </div>
    )
}

export default Home;