import React from 'react'
import { Dropdown, DropdownButton, } from 'react-bootstrap'



export const ButtonsComponent = ({handleInsert,handleVariable,openRandom}) => {
  return (
     <div className='question-footer d-flex mt-3 top-layer' >

      <button className='btn btn-outline-secondary top-layer' style={{marginRight:'6px'}} onClick={handleVariable}>Add Variable</button>
      <DropdownButton id="dropdown-secondary-button" className='top-layer' title="Insert">
              <Dropdown.Item onClick={handleInsert} >
                <div className='blank-box-container'>

                <div className='plane-box'></div> &nbsp; Blank
                </div>
              </Dropdown.Item>
    
    </DropdownButton>
          <button className='btn btn-outline-secondary top-layer' style={{marginLeft:'5px'}} onClick={()=>openRandom()} >Random</button>
          </div>
  )
}
