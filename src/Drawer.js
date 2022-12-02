import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Drawer = ({show,handleClose,isRandom,handleVariableSubmit,handleVariableChange,variable,variablesList,generatedQuestions,getAnswer,isAns}) => {




  return (
    <Offcanvas placement={'end'} show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton style={{height:'32px'}} >
          <Offcanvas.Title>Variable</Offcanvas.Title>
          </Offcanvas.Header>
          <hr/>
          <Offcanvas.Body>
            {!isRandom ?
          
              <form onSubmit={handleVariableSubmit}>

            <div className='drawer-container'>
              <div>
              <li className='faded-text mb-2'>Add Variable</li>
            Variable Name <input onChange={handleVariableChange} name='variableName'  value={variable.variableName} className='small-input' />
              </div>
              <div>
            variable Range <input onChange={handleVariableChange} name='variableStartRange' value={variable.variableStartRange} className='small-input' /> to <input onChange={handleVariableChange} value={variable.variableEndRange} name='variableEndRange' className='small-input' />
              </div>


{/* existng variable
*/}
              <div>
              <li className='faded-text'>Existing Variables</li>
              <div className='variables-list'>
                {variablesList?.map((variable,i) => (
                  <p className='variable'  key={i}>
{variable.variableName}
  </p> 
                    
))}
                    </div>
               
              </div>
              

           <li className='faded-text'>Define variables </li> 
            <textarea className='form-control' onChange={handleVariableChange}  value={variable.variableValue}  name='variableValue'  > </textarea>


</div>




              <button className='btn btn-primary save-btn' type='submit'>{isAns? "Generate" :"Save" }</button>
              </form> :generatedQuestions.map((question,i) => {
                return <div key={i}>
                  <p>{`Q${i + 1}. ${question}`}</p>

                  <p>{`Ans. ${getAnswer(i)} `}</p>
                  
                </div>
                
              })
              
             
            }
              
        </Offcanvas.Body>
          
      </Offcanvas>

  )
}

export default Drawer