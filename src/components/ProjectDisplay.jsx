import React from 'react'
function ProjectDisplay({setImage, github, demo, title}) {

    const GoToPage = () =>{
      window.location = github
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
            <span className='clickable unselect' onClick={() => GoToPage()}><u>GitHub</u></span>
            <span className='clickable unselect' ><u>Demo</u></span>
        </div>
    </div>
  )
}

export default ProjectDisplay