import React from 'react'
import './rightBar.scss'
import InfoIcon from '@mui/icons-material/Info';
function rightBar() {
  const News = (topic , time) => (
    <div className="linkedinNews">
      <span className='rightBarDot'>.</span>
      <div className="desc">
      <p className='topic'>{topic}</p>
      <p className='date'>{time}</p>
      </div>
      
    </div>
);
  return (
    
    <div className='rightBar'>
      <div className="newsTitle">
        <span className='newsheader'>LinkedIn News</span>
         <InfoIcon className='avatar'/>
      </div>
      <div className="news">
        {News('Paytm lays off over 1,000 employees' , '8h ago')}
        {News('IT giants bag new deals' , '11h ago')}
        {News('Adopt this mindset in the age of Al' , '12h ago')}
        {News('Managers key to employee well-bei...' , '15h ago')}
        {News('Nap at work: Yay or nay?' , '18h ago')}
      </div>
    </div>
  )
}

export default rightBar