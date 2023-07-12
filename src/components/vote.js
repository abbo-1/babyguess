import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import forgot from '../images/forgot.gif'

function Vote({ handleButtonClick, data, setData }){

  //STATE FOR OPENING CONFIRMATION DIALOG, DISABLING BUTTONS AFTER VOTE, AND CHECK IF PUSHED
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [wasPushed, setWasPushed] = useState(false);

  //CHANGE STATE IF BUTTON WAS PUSHED
  const buttonPushed = () => {
    setWasPushed(true);
  }

  //MODAL STATE AND OPEN/CLOSE FUNCTIONS
  const [openModal, setmodalOpen] = useState(false);
  const handleModalOpen = () => setmodalOpen(true);
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
    setDisabled(true);
  };

  //CLOSE DIALOG
  const handleClose = () => {
    setOpen(false);
  };

  //DIALOG TIME OUT MAYBE NOT NEEDED
  const [seconds, setSeconds] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 100);
  }, []);

  //CHECK IF BUTTON PUSHED
  const didTheyPushTheButton = (gender) => {
    if (wasPushed === false) {
      handleModalOpen();
    } else {
      if (gender === 'girl') {
        console.log('Girl Vote')
        setData({...data, vote: 'Girl'})
        handleClickOpen()
        setTimeout(() => handleClose(), 4000)
      } else if (gender === 'boy') {
          console.log('Boy Vote')
          buttonPushed()
          setData({...data, vote: 'Boy'})
          handleClickOpen()
          setTimeout(() => handleClose(), 4000)
          console.log(wasPushed)
      }
      handleButtonClick();
    }
  }

  //LOG BOY VOTE
  function logVoteBoy() {
    console.log('Boy Vote')
    buttonPushed()
    setData({...data, vote: 'Boy'})
    handleClickOpen()
    setTimeout(() => handleClose(), 4000)
    console.log(wasPushed)
  }

  //LOG GIRL VOTE
  function logVoteGirl() {
    console.log('Girl Vote')
    setData({...data, vote: 'Girl'})
    handleClickOpen()
    setTimeout(() => handleClose(), 4000)
  }

    return (
        <div>
          <Dialog  
            open={open}
            onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
	          <DialogContent>
		          <DialogContentText id="alert-dialog-description"> 
              Thank you {data.firstName}! 
              <br /> 
              Your vote has been registered. 
            </DialogContentText>
		        <LinearProgress 
              variant="determinate"
              value={seconds} />
	          </DialogContent>
          </Dialog>

          <Row>
	          <Col sm={12} md={6}>
	            <button
                id="boyBtn" 
                className="genderBtn" 
                disabled={disabled} 
                onClick={didTheyPushTheButton('boy')}>
                BOY
              </button>
	          </Col>
	          <Col sm={12} md={6}>
	            <button 
                id="girlBtn" 
                className="genderBtn"
                disabled={disabled} 
                onClick={didTheyPushTheButton('girl')}>
                GIRL
              </button>
	          </Col>
	        <Row>
		          <button 
                id="btn" 
                onClick={handleButtonClick}>
                NEXT 
              </button>
	        </Row>
          </Row>  

          <Modal open={openModal} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"> You didn't vote! </Typography>
            <img src={forgot}></img>
            <br/>
            <button id="btn" onClick={handleModalClose}>CLOSE</button>
          </Box>
        </Modal>
        </div> 
        ) 
      }

export default Vote