import React from 'react'
import RenameProject from './RenameProject'
import { PencilFill, XCircle } from 'react-bootstrap-icons'

const Project = ({project, edit}) => {
  return (
    <div className='Project'>

        <div className="Project">
          <div className="name">
            
            {project.name}
            
          </div>

          <div className='btns '>
            {
              edit ? 
              <div className='edit-btns'>
              <span><PencilFill/></span>
              <span><XCircle/></span>
            </div>
            : project.numOfTodos === 0 ? 
            ""
            :
            <div className='total-count'>
            {project.numOfTodos}
          </div>
            }
          </div>

        </div>
      
    </div>
  )
}

export default Project
