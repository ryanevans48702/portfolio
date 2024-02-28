import React from 'react'
import GitHub from '../images/github.png'
import Linked from '../images/linked.png'
import LeetCode from '../images/leetcode.png'
function Home() {

  const GoToPage = (e) =>{
    window.location = e
  }

  return (
    <div className='home-first'>
      <div>
      <section className='home'>
        Welcome I'm,
      </section>
      <section className='home-name'>
        Ryan Evans
      </section>
      <section>
        I'm a full-stack developer
      </section>
      </div>
      <div>
      <div className='socials-title'>
        You can find me here
      </div>
      <section className='socials-parent'>
        <div className='socials-div clickable'>
          <img src={GitHub} alt="" className='socials-image' onClick={(e) => GoToPage('https://github.com/ryanevans48702')}/>
        </div>
        <div className='socials-div clickable'>
        <img src={Linked} alt="" className='socials-image'  onClick={(e) => GoToPage('https://www.linkedin.com/in/ryan-evans-108891265/')}/>
        </div>
        <div className='socials-div clickable'>
        <img src={LeetCode} alt="" className='socials-image'  onClick={(e) => GoToPage('https://leetcode.com/ryanevansdev02/')}/>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Home