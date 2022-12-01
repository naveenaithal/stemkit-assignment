import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';

function App() {

  // const [isDrawer, setIsDrawer] = useState(false)
  // const [isSelected,setIsSelected]=useState(false)
  const [selectedWord, setSelectedWord] = useState({word:'',index:0})
  // const [isVariableDrawer, setIsVariableDrawer] = useState(false)
  

 
const variableInitialState={ variableName:'',variableStartRange:0,variableEndRange:10,variableValue:0,wordIndex:0}
  const [variable, setVariable] = useState(variableInitialState)
  const [variablesList, setVariablesList] = useState([])

  const [isRandom, setIsRandom] = useState(false);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState('')
  const [questionArray, setQuestionArray] = useState([])
const [isAns,setIsAns]=useState(false)
const [answer,setAnswer]=useState({variableName:'C',value:0})
const [generatedQuestions,setGeneratedQuestions]=useState([])
const [equation,setEquation]=useState()

  const handleVariableChange = (e) => {
    let { name, value } = e.target

    setVariable({...variable,[name]:value})
}


  const handleClose = () => {
    setShow(false)
    //  setIsVariableDrawer(false)
  };
  const handleShow = () => {
    setShow(true)
    //  setIsVariableDrawer(true)
  };


  const handleWordClick = (word, index) => {

    setSelectedWord({ ...selectedWord, word, index })

    setVariable({...variablesList,wordIndex:index})

    
}

  const handleInputQuestion = (e) => {
    setQuestion(e.target.value)
  
  }
  // console.log(question)

  const handleSubmitQuestion = () => {
    setQuestionArray(question.split(' '))
  }


  const handleVariable = () => {
    handleShow()
   
    
  }
  


     const openRandom = () => {
        handleShow(true)
        setIsRandom(!isRandom)
      }


  const handleInsert = () => {
    // setIsVariableDrawer(false)
    setIsAns(!isAns)
    setVariablesList([...variablesList,{variableName:answer.variableName}])

  }
  const handleAnswerChange = (e) => {
    setAnswer({...answer,variableName:e.target.value})
  }


  const handleVariableSubmit = (e) => {
    e.preventDefault()
    if (isAns) {
       let randomQuestions=[]

      for (let i = 0; i < 5; i++){
        let newStringArray = question.split(" ")

        variablesList.forEach((item) => {
          const randomNumber=Math.round((Math.random() * 30));
          newStringArray[item?.wordIndex] = randomNumber
  
})
    let newString = newStringArray.join(" ");
    // setGeneratedQuestions(newString)
    randomQuestions.push(newString)
      }
setEquation(variable.variableValue)

setGeneratedQuestions(randomQuestions)
   
 getAnswer(0)
//  getAnswer(1)
//  getAnswer(2)
//  getAnswer(3)
//  getAnswer(4)

      return
    }
    setVariablesList([...variablesList,variable])
    setVariable(variableInitialState)
    handleClose()
  }






  const getAnswer = (questionID) => {

 
      
      let variableIndexes = variablesList.map((item,i,arr) => {
        if (arr.length-1=== i) {
         return null

        } else {
          
          return {index:item.wordIndex,varName:item.variableName}
        }})

let randomAnswers=[]


    
      for (let i = 0; i < variableIndexes.length - 1; i++){
         randomAnswers.push( generatedQuestions[questionID]?.split(' ')[variableIndexes[i]?.index])
      
      }     

      let vars = variableIndexes.map(item => item?.varName)
    
let filterdEqn=equation?.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g)  
      
      vars.forEach((item) => {
        var index = equation?.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g).indexOf(item);
     filterdEqn.splice(index, 1);
      })
      
  
      let ansStr = ''
     
randomAnswers.forEach((item,i,arr)=>{
        if(arr.length-1==i){
             ansStr+=item
        }else{
            
        ansStr+=item+filterdEqn[0]
        }
})
      
      
      return eval(ansStr)



}

  



  return (
    <>
   
      <div className='container'>

        <div className='question-container'>
          <div className='question-content'>
 <InputGroup className="mt-3 mb-3" style={{width:'700px'}}>
        <Form.Control
          placeholder="Enter Question"
          aria-label="Enter Question"
                aria-describedby="basic-addon2"
                onChange={handleInputQuestion}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmitQuestion} >
          Add Question
        </Button>
            </InputGroup>
            
            <div className='inserted-question'>

              {questionArray?.map((word,i) => (
                <>
                <p key={i} className={questionArray.indexOf(word)===questionArray.indexOf(selectedWord.word) && i===selectedWord.index  ?'selected sentence' :'sentence'} onClick={()=>handleWordClick(word,i)} >{word}</p>


                  <p className='highlight-variable'>{variablesList.find(variable => variable.wordIndex === i)?.variableName}</p>
              

                </>
              ))}
                
            </div>

            <div className='generate-question mt-3'>
            </div>
            {isAns && <>
              Ans: <input className='small-input' onChange={handleAnswerChange} value={answer.variableName} />
            </>
            }


          </div>
          <div className='question-footer d-flex'>

      <button className='btn btn-outline-secondary' style={{marginRight:'6px'}} onClick={handleVariable}>Add Variable</button>
      <DropdownButton id="dropdown-secondary-button" title="Insert">
              <Dropdown.Item href="#/action-1" onClick={handleInsert} >
                <div className='blank-box-container'>

                <div className='plane-box'></div> &nbsp; Blank
                </div>
              </Dropdown.Item>
    
    </DropdownButton>
          <button className='btn btn-outline-secondary' style={{marginLeft:'5px'}} onClick={()=>openRandom()} >Random</button>
          </div>


          
  </div>
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
        {/* <Offcanvas.Footer> */}
          {/* </Offcanvas.Footer> */}
          
      </Offcanvas>



      </div>


</>
  );
}

export default App;
