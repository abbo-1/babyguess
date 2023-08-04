import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import forgotSomething from '../images/forgotsomething.gif'

function Vote({ handleButtonClick, data, setData }){

  //STATE FOR OPENING CONFIRMATION DIALOG, DISABLING BUTTONS AFTER VOTE, AND CHECK IF PUSHED
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [wasPushed, setWasPushed] = useState(false);

  //OPEN DIALOG
  const handleClickOpen = () => {
    setOpen(true);
  };

  //CHECK IF BUTTON WAS PUSHED
  // function didTheyPushTheButton() {
  //   if (wasPushed === true) {
  //     handleButtonClick()
  //   } else {
  //     console.log(wasPushed)
  //     console.log('hi')
  //     setmodalOpen(true)
  //   }
  // }

  //LOG BOY VOTE
  function logVoteBoy() {
    console.log('Boy Vote')
    setWasPushed(true)
    setData({...data, vote: 'Boy'})
    handleClickOpen()
    setDisabled(true);
    console.log(wasPushed)
    handleButtonClick()
  }

  //LOG GIRL VOTE
  function logVoteGirl() {
    console.log('Girl Vote')
    setWasPushed(true)
    setData({...data, vote: 'Girl'})
    handleClickOpen()
    setDisabled(true);
    console.log(wasPushed)
    handleButtonClick()
  }

    return (
        <div>
          <Row>
	          <Col sm={12} md={6}>
	            <button
                id="boyBtn" 
                className="genderBtn" 
                disabled={disabled} 
                onClick={logVoteBoy}>
                BOY
              </button>
	          </Col>
	          <Col sm={12} md={6}>
	            <button 
                id="girlBtn" 
                className="genderBtn"
                disabled={disabled} 
                onClick={logVoteGirl}>
                GIRL
              </button>
	          </Col>
            </Row>  
          <br/>
	        <Row>
		          {/* <button 
                className="btn"
                onClick={didTheyPushTheButton}>
                NEXT 
              </button> */}
              <div className="numbers">
              2 of 3
              </div>
	       </Row>
        </div> 
        ) 
      }

export default Vote