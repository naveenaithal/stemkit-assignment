import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';

function App() {


  const [selectedWord, setSelectedWord] = useState({word:'',index:0})
 
const variableInitialState={ variableName:'',variableStartRange:0,variableEndRange:10,variableValue:0,wordIndex:0}
  const [variable, setVariable] = useState(variableInitialState)
  const [variablesList, setVariablesList] = useState([])

  const [isRandom, setIsRandom] = useState(false);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState('')
  const [questionArray, setQuestionArray] = useState([])
const [isAns,setIsAns]=useState(false)
const [answer,setAnswer]=useState({variableName:'',value:0})
const [generatedQuestions,setGeneratedQuestions]=useState([])
const [equation,setEquation]=useState('')
const [isAnsBoxSelected,setIsAnsBoxSelected]=useState(false)
const [cordinates,setCordinates]=useState({x:0,y:0,isEnabled:false})


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
    // setVariablesList([...variablesList,{variableName:answer.variableName}])

  }
  const handleAnswerChange = (e) => {
    setAnswer({...answer,variableName:e.target.value})
  }


  const handleVariableSubmit = (e) => {
    e.preventDefault()


    if (isAnsBoxSelected) {
 setVariablesList([...variablesList,{variableName:variable.variableName,variableStartRange:variable.variableStartRange,variableEndRange:variable.variableEndRange}])
      setVariable(variableInitialState)

       let randomQuestions=[]
          function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
     console.log(variablesList)
      for (let i = 0; i < 5; i++){
        let newStringArray = question.split(" ")

        variablesList.forEach((item, i) => {
          // console.log("var List index",i)
          // console.log("item word index",item?.wordIndex)
          //variable a 
          const randomNumber = getRandomArbitrary(parseInt(item.variableStartRange),parseInt(item.variableEndRange));     
          newStringArray[item?.wordIndex] = randomNumber
  
        })
        
        let newString = newStringArray.join(" ");
    // setGeneratedQuestions(newString)
    randomQuestions.push(newString)
      }
setEquation(variable.variableValue)

setGeneratedQuestions(randomQuestions)
      handleClose()

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


    // wll get answers [10,20....] based on len of variables
      for (let i = 0; i < variableIndexes.length - 1; i++){
         randomAnswers.push( generatedQuestions[questionID]?.split(' ')[variableIndexes[i]?.index])
      
      }     

      let vars = variableIndexes.map(item => item?.varName)
    
let filterdEqn=equation?.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g)  
      
    //   vars.forEach((item) => {
    //     var index = equation?.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g).indexOf(item);
    //  filterdEqn.splice(index, 1);
    //   })
    
     vars.forEach((item) => {
        let i=equation.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g).indexOf(item)
 if(i!== -1){
    let ind=filterdEqn.indexOf(item)
    filterdEqn.splice(ind,1)
 }
})
      
  
      let ansStr = ''
randomAnswers.forEach((item,i,arr)=>{
        if(arr.length-1==i){
             ansStr+=item
        }else{
            
        ansStr+=item+filterdEqn[i]
        }
})
      
      return eval(ansStr)



}

  
  const handleMouseClick = (e) => {
    if (!cordinates.isEnabled) {
      
      setCordinates({...cordinates,x:e.clientX,y:e.clientY,isEnabled:true})
    }
}


  useEffect(() => {
  
},[cordinates.x])

  return (
    <>
   
      <div className='container'>

        <div className='question-container' onClick={handleMouseClick}>
          <div className='question-content' style={{position:'relative',left:`${cordinates.x}px`,top:`${cordinates.y}px`,cursor:'pointer',zIndex:'10'}}>
            {cordinates.isEnabled ?
              <InputGroup className="mt-3 mb-3" style={{ width: '400px' }}>
        <Form.Control
         as="textarea"
          placeholder="Enter Question"
          aria-label="Enter Question"
                aria-describedby="basic-addon2"
                onChange={handleInputQuestion}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmitQuestion} >
          Add Question
        </Button>
            </InputGroup> : null}
            <div className='inserted-question'  >

              {questionArray?.map((word,i) => (
                <div key={i}>
                <p  className={questionArray.indexOf(word)===questionArray.indexOf(selectedWord.word) && i===selectedWord.index  ?'selected sentence' :'sentence'} onClick={()=>handleWordClick(word,i)} >{word}</p>


                  <p className='highlight-variable'>{variablesList.find(variable => variable.wordIndex === i)?.variableName}</p>
              

                </div>
              ))}
                
            </div>

            <div className='generate-question mt-3'>
            </div>
            {isAns && <>
              Ans: <p className={isAnsBoxSelected ? `answer-box-selected`:'small-box'} onClick={()=>setIsAnsBoxSelected(!isAnsBoxSelected)} >{answer.variableName}</p>
            </>
            }


          </div>
          <div className='question-footer d-flex mt-3' style={{zIndex:'15'}}>

      <button className='btn btn-outline-secondary' style={{marginRight:'6px'}} onClick={handleVariable}>Add Variable</button>
      <DropdownButton id="dropdown-secondary-button" title="Insert">
              <Dropdown.Item onClick={handleInsert} >
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
