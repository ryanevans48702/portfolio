import React from 'react'
import GitHub from '../images/github.png'

function Home() {
  return (
    <div className='home-first'>
      <section className='home'>
        Welcome I'm,
      </section>
      <section className='home-name'>
        Ryan Evans
      </section>
      <section>
        I'm a full-stack developer
      </section>
      <div className='socials-title'>
        You can find me here
      </div>
      <section className='socials-parent'>
        <div className='socials-div clickable'>
          <img src={GitHub} alt="" className='socials-image'/>
        </div>
        <div className='socials-div clickable'>
        <img src={GitHub} alt="" className='socials-image'/>
        </div>
        <div className='socials-div clickable'>
        <img src={GitHub} alt="" className='socials-image'/>
        </div>
      </section>
    </div>
  )
}

export default Home