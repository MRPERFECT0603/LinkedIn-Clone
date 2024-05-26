import React from 'react'
import './leftBar.scss'
import { Avatar } from '@mui/material';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
function leftBar() {
  const recentItem = (topic) => (
      <div className="recent">
        <span className='leftBar_hash'>#</span>
        <p>{topic}</p>
      </div>
  );
  return (
    <div className='leftBar'>
      <div className="leftbar_up">
        <div className="leftbar_pic">
          <img className="bgimg" src="./1.png" alt="" />
          <Avatar className="avatar" src='./story7.jpeg' />
        </div>
        <div className="leftbar_info">
          <div className="leftbar_name">
            <h3>Vivek Shaurya</h3>
          </div>
          <div className="leftbar_desc">
            <span>vivekshaurya62@gmail.com</span>
          </div>
        </div>
        <div className="leftbar_stats">
          <div className="stat1">
            <span>Profile viewers</span>
            <span className='statnum'>143</span>
          </div>
          <div className="stat2">
            <span>Post impressions</span>
            <span className='statnum'>143</span>
          </div>
        </div>
        <div className="myItems">
          <BookmarkOutlinedIcon  style={{ fontSize: '16px' }}/>
          <h5>My items</h5>
        </div>
      </div>
      <div className="leftbar_down">
        <span>Recent</span>
        {recentItem('ReactJs')}
        {recentItem('NodeJs')}
        {recentItem('FullStack')}
        {recentItem('Developer')}
        {recentItem('Coding')}
      </div>
    </div>
  )
}

export default leftBar;