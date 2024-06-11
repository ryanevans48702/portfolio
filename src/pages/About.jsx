import React from 'react'
import Marquee from 'react-fast-marquee'
import GitHub from '../images/github.png'
import Android from '../images/android.png'
import CS from '../images/cs.png'
import JS from '../images/js.png'
import TS from '../images/ts.png'
import AWS from '../images/aws.png'
import CSS from '../images/css.png'
import SQL from '../images/mysql.svg'
import Unity from '../images/unity.png'
import Docker from '../images/docker.png'
import Python from '../images/python.png'
import Nodejs from '../images/node-js.svg'
import Programmer from '../images/programmer.png'
import '../App.css'
function About() {
  return (
    <div className='about-div'>
      <div>
        
      </div>
      <div className='about-top'>
      <section className='about'>
      Hi I'm Ryan, I'm a Computer Science(Cybersecurity) undergraduate with an interest in software, website, and full-stack development. I have 3 years of practice utilising JavaScript frameworks implementing security by design principles. My programming began with developing games using Unity and C#, which soon developed into website development using ReactJS with various other frameworks and tools. I have spent time developing multiple projects which vary from team projects with team members to personal projects which are available to demo and review the GitHub pages.
      </section>
        <section className='about-image'>
          <img src={Programmer} alt="" />
        </section>
      </div>
      <div>
      <section className='skills-title'>
        Languages/Technology I use
      </section>
      <section>
        <Marquee pauseOnHover='true' autoFill='true'>
          <div className='skills-div'>
            <img src={Nodejs} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={GitHub} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={Android} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={CS} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={JS} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={TS} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={AWS} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={CSS} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={SQL} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={Unity} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={Docker} alt="" className='skills'/>
          </div>
          <div className='skills-div'>
          <img src={Python} alt="" className='skills'/>
          </div>
        </Marquee>
      </section>
      </div>
    
    </div>
  )
}

export default About