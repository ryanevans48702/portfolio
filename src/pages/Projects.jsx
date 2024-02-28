import React from 'react'
import ProjectDisplay from '../components/ProjectDisplay'
import portfolioImage from '../images/portfolioImage.png'
import typingGame from '../images/typinggame.png'
import biometric from '../images/biometric.png'
function Projects() {
  return (
    <div className='projects'>
      <div className='projects div'>
        <div className='testtt' style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ProjectDisplay setImage={portfolioImage} title={'My Portfolio Page'} github={'https://github.com/ryanevans48702/portfolio'} demo={'http://ryanevans.co.uk'}/>
          <ProjectDisplay setImage={typingGame} title={'React Typing Game'} github={'https://github.com/ryanevans48702/react-typing-game'} demo={'https://ryanevans48702.github.io/react-typing-game/'}/>
          <ProjectDisplay setImage={biometric} title={'Biometric Password Manager'} github={'https://github.com/Potatodead777/Biometric-Authentication-App'}/>
          <ProjectDisplay setImage={portfolioImage} title={'My Portfolio Page'} github={'https://github.com/ryanevans48702/portfolio'}/>
          <ProjectDisplay setImage={portfolioImage} title={'My Portfolio Page'} github={'https://github.com/ryanevans48702/portfolio'}/>

        </div>
      </div>
    </div>
  )
}

export default Projects