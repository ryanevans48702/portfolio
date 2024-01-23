import React from 'react'
import ProjectDisplay from '../components/ProjectDisplay'
import portfolioImage from '../images/portfolioImage.png'
import typingGame from '../images/typinggame.png'
function Projects() {
  return (
    <div className='projects'>
      <div className='projects div'>
        <div className='testtt' style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ProjectDisplay setImage={portfolioImage} title={'My Portfolio Page'} github={'https://github.com/ryanevans48702/portfolio'}/>
          <ProjectDisplay setImage={typingGame} title={'React Typing Game'} github={'https://github.com/ryanevans48702/react-typing-game'}/>
          <ProjectDisplay setImage={portfolioImage} title={'My Portfolio Page'} github={'https://github.com/ryanevans48702/portfolio'}/>
          <ProjectDisplay setImage={portfolioImage} title={'My Portfolio Page'} github={'https://github.com/ryanevans48702/portfolio'}/>

        </div>
      </div>
    </div>
  )
}

export default Projects