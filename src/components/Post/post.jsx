import { Avatar } from '@mui/material';
import React from 'react';
import "./post.scss";
import FeedOption from '../FeedOption/feedOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function Post({ name, desc, time, message, img }) {
  return (
    <div className='post'>
      <div className="postinfo">
        <Avatar className='postAvatar' />
        <div className="postOwner">
          <p className='row1'>{name}</p>
          <p className='row2'>{desc}</p>
          <p className='row2'>{time}</p>
        </div>
      </div>
      <div className="postBody">
        <p className='postMessage'>{message}</p>
        <img className="postImg" src={img} alt="Post" />
        <div className="postOption">
          <FeedOption Icon={ThumbUpIcon} title='Like' colour="gray" />
          <FeedOption Icon={CommentRoundedIcon} title='Comment' colour="gray" />
          <FeedOption Icon={RepeatRoundedIcon} title='Repost' colour="gray" />
          <FeedOption Icon={SendRoundedIcon} title='Send' colour="gray" />
        </div>
      </div>
    </div>
  )
}

export default Post