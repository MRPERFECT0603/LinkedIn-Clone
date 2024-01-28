import React from 'react'
import "./feedOption.scss"
function FeedOption({Icon , title , colour }) {
  return (
        <div className='feedOption'>
            {Icon && <Icon className="feedOptionIcon" style={{ color: colour }}/>}
            <h3 className='feedOptionTitle'>{title}</h3>
        </div>
  )
}

export default FeedOption