import React from 'react'
function ProjectDisplay({setImage, github, demo, title, show}) {

    const GoToPage = (e) =>{
      window.location = e
    }

  return (
    <div className='project-display'>
        <div className='project-title'>
            {title}
        </div>
        <div className='image'>
        <img src={setImage} alt="" className='image-div unselect'/>
        </div>
        <div className='links'>
            <span className='clickable unselect' onClick={(e) => GoToPage(github)}><u>GitHub</u></span>
            <span className='clickable unselect' onClick={(e) => GoToPage(demo)}><u>Demo</u></span>
        </div>
    </div>
  )
}

export default ProjectDisplay