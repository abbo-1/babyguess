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

  //MODAL STATE AND OPEN/CLOSE FUNCTIONS
  const [openModal, setmodalOpen] = useState(false);
  const handleModalClose = () => setmodalOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10%',
    p: 4,
  };

  //OPEN DIALOG
  const handleClickOpen = () => {
    setOpen(true);
  };

  //CHECK IF BUTTON WAS PUSHED
  function didTheyPushTheButton() {
    if (wasPushed === true) {
      handleButtonClick()
    } else {
      console.log(wasPushed)
      console.log('hi')
      setmodalOpen(true)
    }
  }

  //LOG BOY VOTE
  function logVoteBoy() {
    console.log('Boy Vote')
    setWasPushed(true)
    setData({...data, vote: 'Boy'})
    handleClickOpen()
    setDisabled(true);
    console.log(wasPushed)
  }

  //LOG GIRL VOTE
  function logVoteGirl() {
    console.log('Girl Vote')
    setWasPushed(true)
    setData({...data, vote: 'Girl'})
    handleClickOpen()
    setDisabled(true);
    console.log(wasPushed)
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
	        <Row>
		          <button 
                class="btn"
                onClick={didTheyPushTheButton}>
                NEXT 
              </button>
	        </Row>
          </Row>  

          <Modal open={openModal} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"> You didn't vote! </Typography>
            <img src={forgotSomething} alt='forgot gif'></img>
            <br/>
            <button id="btn" onClick={handleModalClose}>CLOSE</button>
          </Box>
        </Modal>
        </div> 
        ) 
      }

export default Vote